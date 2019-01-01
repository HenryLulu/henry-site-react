import React from 'react';
import {Route, Link} from "react-router-dom";

import './About.less';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            m1page: 1
        };
    }

    render() {
        return (
            <div className="about">
                <div className="wrapper m1">
                    {this.state.m1page === 1 && (
                        <div className="p1">
                            <h1 className="title">尝试+兴趣=前端</h1>
                            <h1 className="title"></h1>
                        </div>
                    )}
                </div>
            </div>
        );
    }
};