import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import './App.less';

import Layout from './components/layout/Layout';
import Home from './page/home/Home';

import './App.less';

export default class App extends React.Component {
    render() {
        return (
            <Layout>
                <Route path="/" exact component={Home} />
            </Layout>
        );
    }
}