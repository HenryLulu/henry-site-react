import React from 'react';
import {Link} from "react-router-dom";

import './Topbar.less';

export default class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showType: 0 // 0-init, 1-active, 2-hidden
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', e => {
            let top = document.documentElement.scrollTop;
            if (top <= 1 && this.state.showType !== 0) {
                this.setState({
                    showType: 0
                });
            } else if (top > 1 && top < 500 && this.state.showType !== 1) {
                this.setState({
                    showType: 1
                });
            } else if (top >= 500 && this.state.showType !== 2) {
                this.setState({
                    showType: 2
                });
            }
        });
    }

    componentBeforeUnmount() {
        window.removeEventListener('scroll');
    }

    render() {
        return (
            <div className={`top-bar
                ${this.state.showType === 1 ? ' active' : ''}
                ${this.state.showType === 2 ? ' hidden' : ''}
            `}>
                <Link to={'/'} className="logo">HENRYLULU</Link>
                <a className="menu-btn">
                    <span></span>
                </a>
            </div>
        );
    }
}