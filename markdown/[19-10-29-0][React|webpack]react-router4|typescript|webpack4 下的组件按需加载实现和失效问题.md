> 在 react-router4/typescript/webpack4 技术栈下，从头实现组件按需加载

## react-router
在 webpack [文档](https://webpack.docschina.org/api/module-methods#import-)中这么说的：
> import('path/to/module') -> Promise
动态地加载模块。调用 import() 之处，被作为分离的模块起点，意思是，被请求的模块和它引用的所有子模块，会分离到一个单独的 chunk 中。

所以在react-router中，我们常用`react-loadable`实现基于import的路由按需加载配置，like this：
``` javascript
import Loadable from 'react-loadable';
...
<Route path="/" exact component={Loadable({
    component={() => import('@/page/home')}
})} />} />
```
但其实 loadable 的原理很简单，ts下实现一个：
``` javascript

interface AsyncComponentModuleType {
  default: typeof React.Component
}

export default (getter: Function) => {
  return class extends Component<any, {
    component: null | typeof React.Component
  }> {
    constructor(props: any) {
      super(props);
      this.state = {
        component: null
      };
    }
    componentDidMount() {
      getter().then((res: AsyncComponentModuleType) => {
        this.setState({
          component: res.default
        });
      });
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};
```
#### 关于Component的类型
如果异步回来的component类型指定不对，会报错：
``` bash
JSX element type C does not have any construct or call signatures
```
也就是 C 的类型不能放在<>中，我们常见的放在<>中的是`JSX.IntrinsicElements`，参见react的index.d.ts。但这是个JSX标签的集合，用在这里虽然能绕过类型检查，但不合理。
因此我们参考：[What does the error “JSX element type '…' does not have any construct or call signatures” mean?](https://stackoverflow.com/questions/31815633/what-does-the-error-jsx-element-type-does-not-have-any-construct-or-call)
用`typeof React.Component`。

## webpack4 配置
#### loader
如果代码里还有js（不全是ts），在webpack4中要对babelloader进行如下配置，支持js的import打包
```
presets: ['@babel/preset-react'],
plugins: ['@babel/plugin-syntax-dynamic-import']
```
#### splitChunks
在webpack4中splitChunks默认是开启的，不用手动改，当然要深入了解下 splitChunks，可以看这篇：[《一步一步的了解webpack4的splitChunk插件》](https://juejin.im/post/5af1677c6fb9a07ab508dabb)  。
当然如果已经动了`splitChunks`，需要注意下这个配置
* chunks：默认是 `async`，配成 `async` 或者 `all`

#### 打包文件名
`output.chunkFilename`的配置会影响打包产出：
```
output: {
    chunkFilename: '[name].chunk.js',
}
```
另外`webpack`还支持通过注释指定输出文件名：
``` javascript
<Route path="/" exact component={getAsyncComponent(() => import(/* webpackChunkName: 'home' */'@/pages/Home/home'))} />} />
```
最终打包出的东西长这样：
```
Asset       Size  Chunks                    Chunk Names
home.chunk.js  622 bytes   4  [emitted]         p-home
home.chunk.css  24.7 KiB   5  [emitted]         p-home
```


## typescript 配置
> 到这里，前面说的都是废话，因为一搜就能搜到一大把，写这个主要是记录关于ts的配置

其实在配置完上面部分后，我的按需加载是不能用的，实际上虽然任何功能都没受影响，但并没有给我拆包。这块开始没想到是 ts 的问题，查了好多地方。 
直到我找到这篇博客：[《Code-Splitting a TypeScript Application with import\(\) and webpack》](https://mariusschulz.com/blog/code-splitting-a-typescript-application-with-import-and-webpack)
``` json
"module": "esnext",
"moduleResolution": "node",
```
意思是我们不能给`import`弄死，要按包含`import`模块化方案的语法打包，这样就能声明语法并留着`import`，给`webpack`做分片打包入口用。