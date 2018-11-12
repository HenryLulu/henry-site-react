import React from 'react';
import {Link} from "react-router-dom";
import $ from 'jquery';

import './Topbar.less';

export default class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showType: 0 // 0-init, 1-active, 2-hidden
        }
    }

    componentDidMount() {
        $(window).on('scroll', () => {
            let top = $(document).scrollTop();
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
        $(window).off('scroll');
    }

    render() {
        return (
            <div className={`top-bar
                ${this.state.showType === 1 ? ' active' : ''}
                ${this.state.showType === 2 ? ' hidden' : ''}
            `}>
                <Link to={'/'} className="logo">HENRYLULU</Link>
                <a className="menu-btn" onClick={this.props.onNavOpen}>
                    <span></span>
                </a>
            </div>
        );
    }
}