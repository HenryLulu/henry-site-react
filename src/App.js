import React from 'react';
import {Route, Link} from "react-router-dom";
// import './App.less';

import Layout from './components/layout/Layout';
import Home from './page/home/Home';
import Blog from './page/blog/Blog';
import Article from './page/article/Aritcle';

import './App.less';

export default class App extends React.Component {
    render() {
        return (
            <Layout>
                <Route path="/" exact component={Home} />
                <Route path="/blog" component={Blog} />
                <Route path="/article/:id" component={Article} />
            </Layout>
        );
    }
}