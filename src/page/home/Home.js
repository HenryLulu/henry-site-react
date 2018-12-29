import React from 'react';
import {Route, Link} from "react-router-dom";
import {connect} from 'react-redux';

import {getCodes} from '../../actions/code/codes';
import {getBloglist} from '../../actions/blog/bloglist';

import BillBoard from '../../components/billboard/Billboard';
import Boxcontainer from '../../components/boxcontainer/Boxcontainer';

import './Home.less';
import Boxblog from '../../components/boxblog/Boxblog';
import Boxcode from '../../components/boxcode/Boxcode';

const SHOW = ['css-icons', 'css-draw', 'video-to-text-ocr-demo', 'henry-site-react'];

@connect(store => ({
    codes: store.codes,
    bloglist: store.bloglist
}))
class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const dispatch = this.props.dispatch;
        dispatch(getCodes());
        dispatch(getBloglist({
            per_page: 8,
            page: 1
        }));
    }

    render() {
        return (
            <div className="home">
                <div className="head">
                    <h1 className="l1">王宏宇</h1>
                    <h1 className="l2">NOT ONLY A CODER</h1>
                    <p className="l3">不止于代码，热衷于前端，专注于效率，执着于体验</p>
                    <h3 className="l4 gold">百度前端工程师</h3>
                    <div className="btn-wrapper">
                        <Link to="/about">
                            <p className="btn">MORE ABOUT ME</p>
                        </Link>
                    </div>
                </div>
                <div className="box-area">
                    <Boxcontainer>
                        {this.props.bloglist.slice(0, 4).map(blog => {
                            return (
                                <Boxblog
                                    key={blog.id}
                                    tag={blog.tag}
                                    title={blog.title}
                                    desc={blog.desc}
                                    link={blog.link}
                                    img={blog.img}
                                ></Boxblog>
                            );
                        })}
                        {this.props.codes.filter(code => {
                            return SHOW.indexOf(code.name) > -1;
                        }).map(code => {
                            return (
                                <Boxcode
                                    key={code.name}
                                    name={code.name}
                                    lan={code.lan}
                                    desc={code.desc}
                                    link={code.link}
                                    img={code.img}
                                ></Boxcode>
                            );
                        })}
                        {this.props.bloglist.slice(4).map(blog => {
                            return (
                                <Boxblog
                                    key={blog.id}
                                    tag={blog.tag}
                                    title={blog.title}
                                    desc={blog.desc}
                                    link={blog.link}
                                    img={blog.img}
                                ></Boxblog>
                            );
                        })}
                    </Boxcontainer>
                    <div className="btn-wrapper">
                        <Link to="/blog">
                            <p className="btn">BLOG</p>
                        </Link>
                        <a href="https://github.com/HenryLulu" target="_blank">
                            <p className="btn emb">SHOW U MY CODE</p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;