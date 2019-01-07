import React from 'react';
import {Route, Link} from "react-router-dom";
import {connect} from 'react-redux';

import {getCodes} from '../../actions/code/codes';
import {getBloglist} from '../../actions/blog/bloglist';

import Boxcontainer from '../../components/boxcontainer/Boxcontainer';

import './Home.less';
import Boxblog from '../../components/boxblog/Boxblog';
import Boxcode from '../../components/boxcode/Boxcode';
import Loading from '../../components/loading/Loading';

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
        this.list();
    }

    list = () => {
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
                    <h3 className="l4 gold">百度·前端工程师</h3>
                    <div className="btn-wrapper">
                        <Link to="/about">
                            <p className="btn btn-en">MORE ABOUT ME</p>
                        </Link>
                    </div>
                </div>
                {this.props.bloglist.list.length === 0 && this.props.codes.length === 0
                && <div className="loading-wrapper" style={{padding: '1rem 0'}}>
                    <Loading
                        status={this.props.bloglist.status}
                        onRetry={this.list}
                    />
                </div>}
                <div className="box-area">
                    <Boxcontainer>
                        {this.props.bloglist.list.slice(0, 4).map(blog => {
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
                        {this.props.bloglist.list.slice(4).map(blog => {
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
                            <p className="btn btn-en">BLOG</p>
                        </Link>
                        <a href="https://github.com/HenryLulu" target="_blank">
                            <p className="btn emb btn-en">SHOW U MY CODE</p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;