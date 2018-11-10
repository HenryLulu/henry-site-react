import React from 'react';
import './Boxcontainer.less'

export default (props) => (
    <div className="box-container">
        {props.children}
    </div>
);