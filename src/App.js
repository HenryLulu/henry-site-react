import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import './App.less';

import Home from './page/Home';
import Layout from './common/layout/Layout';

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