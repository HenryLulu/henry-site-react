import React from 'react';
import {Link} from "react-router-dom";

import './Boxcode.less'
import Box from '../box/Box';

/** usage
<Boxcode
    name="css-icon"
    lan="CSS"
    desc="cssssssssss"
    link="https://github.com/HenryLulu"
    img="https://avatars1.githubusercontent.com/u/14797054?s=460&v=4"
></Boxcode>
*/

export default ({name, lan, desc, link, img}) => (
    <Box>
        <a href={link || '/'} target="_blank">
            <div className={`box-code ${img ? 'img' : 'text'}`} style={img ? {
                backgroundImage: `url(${img})`
            } : {}}>
                {name ? (<p className="name">{name}</p>) : ''}
                {lan ? (<p className="lan">@ {lan}</p>) : ''}
                {desc && !img ? (<p className="desc">{desc}</p>) : ''}
                {/* <p className="github"></p> */}
                <i className="anticon icon-github"></i>
            </div>
        </a>
    </Box>
);