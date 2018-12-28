import React from 'react';
import {Link} from "react-router-dom";

import './Boxblog.less'
import Box from '../box/Box';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light'
        };
    }

    componentDidMount() {
        let theme;
        switch (Math.floor(Math.random() * 3)) {
            case 0:
                theme = 'dark';
                break;
            case 1:
                theme = 'light';
                break;
            default:
                theme = 'gold'
        }
        this.setState({theme});
    }

    render() {
        const {tag, title, desc, link, img} = this.props;
        const {theme} = this.state;
        return (
            <Box>
                <Link to={link || '/'}>
                    <div className={`box-blog ${theme}`}>
                        {tag ? (<p className="tag">{tag}</p>) : ''}
                        {title ? (<p className="title">{title}</p>) : ''}
                        {desc ? (<p className="desc">{desc}</p>) : ''}
                        <p className="go"></p>
                        {img ? (
                            <div className="hover" style={{
                                backgroundImage: `url(${img})`
                            }}></div>
                        ) : ''}
                    </div>
                </Link>
            </Box>
        );
    }
}
