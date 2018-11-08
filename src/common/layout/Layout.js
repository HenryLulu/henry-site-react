import React from 'react';
import './Layout.less'
import Topbar from '../topbar/Topbar';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="layout">
                <Topbar />
                {this.props.children}
            </div>
        )
    }
};