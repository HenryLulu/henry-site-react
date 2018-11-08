import React from 'react';
import {Link} from "react-router-dom";

import './Topbar.less';

export default class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', e => {
            let top = document.documentElement.scrollTop;
            if (top > 1 && top < 500) {
                if (!this.state.active) {
                    this.setState({
                        active: true
                    });
                }
            } else if (this.state.active) {
                this.setState({
                    active: false
                });
            }
        });
    }

    componentBeforeUnmount() {
        window.removeEventListener('scroll');
    }

    render() {
        return (
            <div className={`top-bar ${this.state.active ? 'active' : ''}`}>
                <Link to={'/'} className="logo">HENRYLULU</Link>
                <a className="menu-btn">
                    <span></span>
                </a>
            </div>
        );
    }
}