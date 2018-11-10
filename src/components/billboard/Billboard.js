import React from 'react';
import './Billboard.less';

/** usage
<BillBoard
    title=""
    subtitle=""
    theme=" /dark/light"
>
    ...
    <p></p>
    <div className="btn-wrapper">
        <Link to="/about">
            <p className="btn btn-black">MORE ABOUT ME</p>
        </Link>
    </div>
</BillBoard>
*/

export default (props) => (
    <div className={`billboard ${props.theme}`}>
        {props.subtitle ? (<h3 className="bb-subtitle">{props.subtitle}</h3>) : ''}
        {props.title ? (<h2 className="bb-title">{props.title}</h2>) : ''}
        {props.children}
    </div>
);