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

import './App.less';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Provider store={store}>
                    <Layout>
                        <ScrollToTopRoute path="/" exact component={Home} />
                        <ScrollToTopRoute path="/blog" exact component={Blog} />
                        <ScrollToTopRoute path="/article/:id" component={Article} />
                        <ScrollToTopRoute path="/about" exact component={About} />
                    </Layout>
                </Provider>
            </Router>
        );
    }
}