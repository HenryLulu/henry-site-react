import React from 'react';
import './Box.less'

export default (props) => (
    <div className="box">
        <div className="box-holder">
            <div className="box-inner">
                {props.children}
            </div>
        </div>
    </div>
);