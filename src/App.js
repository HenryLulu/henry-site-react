import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route, Link} from "react-router-dom";
import store from './reducers/store';
import ScrollToTopRoute from "react-scroll-to-top-route";

import Layout from './components/layout/Layout';
import Home from './page/home/Home';
import Blog from './page/blog/Blog';
import About from './page/about/About';
import Article from './page/article/Aritcle';
import Gallery from './page/gallery/Gallery';
import Factory from './page/factory/factory';

import {device} from './actions/app/device';

import './App.less';

/* global _hmt */

export default class App extends React.Component {

    componentDidMount() {
        const {dispatch} = store;
        dispatch(device());
        window.onresize = () => {
            dispatch(device());
        }
        window._hmt = [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?d3ac0b8e94061a8eea281bfd104926e9";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
        })();
    }

    componentWillUnmount() {
        window.onresize = null;
    }

    render() {
        return (
            <Router>
                <Provider store={store}>
                    <Layout>
                        <ScrollToTopRoute path="/" exact component={Home} />
                        <ScrollToTopRoute path="/blog" exact component={Blog} />
                        <ScrollToTopRoute path="/article/:id" component={Article} />
                        <ScrollToTopRoute path="/about" exact component={About} />
                        <ScrollToTopRoute path="/gallery" exact component={Gallery} />
                        <ScrollToTopRoute path="/factory" exact component={Factory} />
                    </Layout>
                </Provider>
            </Router>
        );
    }
}