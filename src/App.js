import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import './App.less';

import Layout from './common/layout/Layout';
import Home from './page/home/Home';

export default class App extends React.Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </Layout>
        );
    }
}