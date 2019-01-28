import React from 'react';
import './Footer.less';

export default () => (
    <div className="footer">
        <p className="top" onClick={() => {window.scrollTo(0, 0)}}>
            <i className="anticon icon-up-square-o"></i>
        </p>
        <div class="logo"></div>
        <p className="more">CONNECT WITH ME</p>
        <p className="email">Email: why318why@gmail.com</p>
        <div className="icons">
            <a href="https://github.com/HenryLulu" target="_blank">
                <i className="anticon icon-github"></i>
            </a>
        </div>
    </div>
);