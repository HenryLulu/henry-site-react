import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route, Link} from "react-router-dom";
import store from './reducers/store';

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
                        <Route path="/" exact component={Home} />
                        <Route path="/blog" exact component={Blog} />
                        <Route path="/article/:id" component={Article} />
                        <Route path="/about" exact component={About} />
                    </Layout>
                </Provider>
            </Router>
        );
    }
}