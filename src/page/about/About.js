import React from 'react';
import {Route, Link} from "react-router-dom";
import {connect} from 'react-redux';

import Cloud from './components/Cloud';

import './About.less';

const workData = [
    {
        key: 4,
        logo: 'baidu',
        name: '百度教育',
        time: '2017.4-至今',
        title: '前端工程师',
        desc: 'ToB产品、SaaS、智慧课堂、频道专题'
    }, {
        key: 3,
        logo: 'dd',
        name: '云丁智能(D轮)',
        time: '2015.12-2016.10',
        title: '实习前端工程师',
        desc: '公寓管理Saas、设备管理Saas、官网、社区'
    }, {
        key: 2,
        logo: 'tieba',
        name: '百度贴吧',
        time: '2015.10',
        title: '实习产品经理',
        desc: '直播贴'
    }, {
        key: 1,
        logo: 'tj',
        name: '太极计算机',
        time: '2015.6-2015.9',
        title: '实习项目经理',
        desc: '北京政务审批系统'
    }
];

@connect(store => ({
    device: store.device
}))
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headpage: 1
        };
    }

    nextPage = () => {
        this.setState({
            headpage: this.state.headpage === 3 ? 1 : this.state.headpage + 1
        });
    }

    render() {
        return (
            <div className="about">
                <div className="head">
                    {this.state.headpage === 1 && (
                        <div className="page">
                            <h1 className="title">
                                我曾经很瘦<br/>
                                现在胖了
                            </h1>
                            <h1 className="title link" onClick={this.nextPage}>展开说说</h1>
                        </div>
                    )}
                    {this.state.headpage === 2 && (
                        <div className="page">
                            <h1 className="title">我曾经很瘦</h1>
                            {/* <p className="text">
                                hi，我是王宏宇，北京科技大学计算机系本科+硕士，有不错的研究和开发能力。<br/>
                                18年1月正式毕业，但出于热(pin)爱(qiong)，学业空闲的时候一直在实习，毕业后留在了百度。<br/>
                                前端是我所爱，有扎实的前端基础。接触较广，当前技术栈：ES6 CSS3 React webpack FIS jQuery nodejs。<br/>
                                曾是个能当正式员工用的实习生，现在是个靠谱高效的正式员工，时常专注到废寝忘食。
                            </p> */}
                            <p className="text">7年前的夏天，那个穿细腿裤的男孩，P的一手好图，总戳CSSer的屏幕。他上蹿下跳，在活动带节奏，给项目出点子。</p>
                            <h1 className="title link" onClick={this.nextPage}>后来呢</h1>
                        </div>
                    )}
                    {this.state.headpage === 3 && (
                        <div className="page">
                            <h1 className="title">现在胖了</h1>
                            {/* <p className="text">
                                产出过生产环境的大数据收集分析平台，会写点python(现在也偶尔写)。<br/>
                                做过百度贴吧和某国企的PM实习生，能站在产品角度想问题，能和PM好好说话。<br/>
                                本科做过几年业余设计，包揽学院和校园网站的大部分设计工作，有基本的审美能力，有耐心还原设计稿。<br/>
                                性格开朗，现在也负责组里的吃喝玩乐。
                            </p> */}
                            <p className="text">后来啊，饿且馋，他爱上了写代码，啃了很多书，成了烟酒僧，当上一个稳“重”的程序员。</p>
                            <p className="text">现在这个胖子，脚印更深地追求着产品开发的“艺术”。</p>
                            <p className="btn" onClick={this.nextPage}>了解了</p>
                        </div>
                    )}
                </div>
                <div className="time-line">
                    {this.props.device === 'pc' && <div className="left">
                        {workData.filter((item, i) => i % 2 === 0).map(item => <WorkBox
                            {...item} direction="left"
                        />)}
                    </div>}
                    <p className="center-line"></p>
                    <div className="right">
                        {workData.filter((item, i) => this.props.device === 'wap' || i % 2 === 1).map(item => <WorkBox
                            {...item} direction="right" key={item.key}
                        />)}
                    </div>
                </div>
                <Cloud />
                <div className="block-2-col edu">
                    <div className="col left"></div>
                    <div className="col right">
                        <p className="text-topic">原产地</p>
                        <p className="text-title">北京科技大学(本硕)</p>
                        <p className="text-topic">硕士</p>
                        <p className="text-title-small">软件工程</p>
                        <p className="text-text">CNTV网络直播CDN日志收集分析平台</p>
                        <p className="text-text">Stanford儿童疾病大数据预测及可视化项目</p>
                        <p className="text-text">NIST《智能电网信息安全指南》翻译组</p>
                        <p className="text-topic" style={{marginTop: '.4rem'}}>本科</p>
                        <p className="text-title-small">信息安全</p>
                        <p className="text-text">iBeiKe设计师</p>
                        <p className="text-text">索思科技协会技术支持</p>
                    </div>
                </div>
            </div>
        );
    }
};

const WorkBox = props => <div className={`time-line-box ${props.direction}`}>
    <p className="line"></p>
    <p className={`logo ${props.logo}`}></p>
    <div className="content-wrapper">
        <p className="name">{props.name}</p>
        <p className="time">{props.time} / {props.title}</p>
        <p className="desc">{props.desc}</p>
    </div>
</div>

export default About;