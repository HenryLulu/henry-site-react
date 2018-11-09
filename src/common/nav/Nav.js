import React from 'react';
import {Link} from 'react-router-dom';

import './Nav.less';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        // 过渡效果依赖opacity和pointer-events: none，用hardHidden切换硬隐藏
        this.state = {
            hardHidden: true
        }
    }

    componentDidUpdate() {
        if (this.props.active && this.state.hardHidden) {
            this.setState({
                hardHidden: false
            });
        } else if (!this.props.active && !this.state.hardHidden) {
            setTimeout(() => {
                this.setState({
                    hardHidden: true
                });
            }, 500);
        }
    }

    render() {
        return (
            <div className={`nav ${this.props.active ? ' active' : ''}`}
                // display:none会重绘，所以“出现”的transition不会触发
                style={{height: this.state.hardHidden ? '0' : '100%'}}
            >
                <div className="top-bar">
                    <Link to={'/'} className="logo">HENRYLULU</Link>
                    <a className="menu-btn" onClick={this.props.onClose}>
                        <span></span>
                    </a>
                </div>
                <ul className="link-list">
                    <li>
                        <Link to={'/'}>CODE</Link>
                    </li>
                    <li>
                        <Link to={'/'}>BLOG</Link>
                    </li>
                    <li>
                        <Link to={'/'}>RESUME</Link>
                    </li>
                    <li>
                        <Link to={'/'}>CONNECT</Link>
                    </li>
                </ul>
            </div>
        );
    }
}