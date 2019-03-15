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
                onClick={this.props.onClose}
            >
                <div className="top-bar">
                    <Link to={'/'} className="logo">HEY HENRY</Link>
                    <a className="menu-btn">
                        <span></span>
                    </a>
                </div>
                <ul className="link-list">
                    <li>
                        <Link to={'/'}>HOME</Link>
                    </li>
                    <li>
                        <Link to={'/blog'}>BLOG</Link>
                    </li>
                    <li>
                        <a href="https://github.com/HenryLulu" target="_blank">CODE</a>
                    </li>
                    <li>
                        <Link to={'/gallery'}>DESIGN</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>ABOUT</Link>
                    </li>
                    {/* <li>
                        <Link to={'/connect'}>CONNECT</Link>
                    </li> */}
                </ul>
            </div>
        );
    }
}