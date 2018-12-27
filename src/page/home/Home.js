import React from 'react';
import {Route, Link} from "react-router-dom";
import {connect} from 'react-redux';

import {getCodes} from '../../actions/code/codes';

import BillBoard from '../../components/billboard/Billboard';
import Boxcontainer from '../../components/boxcontainer/Boxcontainer';

import './Home.less';
import Box from '../../components/box/Box';
import Boxblog from '../../components/boxblog/Boxblog';
import Boxcode from '../../components/boxcode/Boxcode';

@connect(store => ({
    codes: store.codes
}))
class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const dispatch = this.props.dispatch;
        dispatch(getCodes());
    }

    render() {
        return (
            <div className="home">
                <div className="head">
                    <h1 className="l1">王宏宇</h1>
                    <h1 className="l2">NOT ONLY A CODER</h1>
                    <p className="l3">不止于代码，热衷于前端，专注于效率，执着于体验</p>
                    <h3 className="l4 gold">百度前端工程师{JSON.stringify(this.props.codes)}</h3>
                    <div className="btn-wrapper">
                        <Link to="/about">
                            <p className="btn">MORE ABOUT ME</p>
                        </Link>
                    </div>
                </div>
                <div className="box-area">
                    <Boxcontainer>
                        <Boxblog
                            tag="CSS3 2018-11-12"
                            title="不止于代码，热衷于前端，专注于效率，执着于体验"
                            desc="不止于代码，热衷于前端，专注于效率，执着于体验"
                            link="/about"
                            img="https://avatars1.githubusercontent.com/u/14797054?s=460&v=4"
                        ></Boxblog>
                        <Boxblog
                            tag="CSS3 2018-11-12"
                            title="不止于代码，热衷于前端，专注于效率，执着于体验"
                            desc="不止于代码，热衷于前端，专注于效率，执着于体验"
                            link="/about"
                            img="https://avatars1.githubusercontent.com/u/14797054?s=460&v=4"
                        ></Boxblog>
                        <Boxblog
                            tag="CSS3 2018-11-12"
                            title="不止于代码，热衷于前端，专注于效率，执着于体验"
                            desc="不止于代码，热衷于前端，专注于效率，执着于体验"
                            link="/about"
                            img="https://avatars1.githubusercontent.com/u/14797054?s=460&v=4"
                        ></Boxblog>
                        <Boxblog
                            tag="CSS3 2018-11-12"
                            title="不止于代码，热衷于前端，专注于效率，执着于体验"
                            desc="不止于代码，热衷于前端，专注于效率，执着于体验"
                            link="/about"
                            img="https://avatars1.githubusercontent.com/u/14797054?s=460&v=4"
                        ></Boxblog>
                        <Boxcode
                            name="css-icon"
                            lan="CSS"
                            desc="cssssssssss"
                            link="https://github.com/HenryLulu"
                            img="https://avatars1.githubusercontent.com/u/14797054?s=460&v=4"
                        ></Boxcode>
                        <Boxcode
                            name="css-icon"
                            lan="CSS"
                            desc="cssssssssss"
                            link="https://github.com/HenryLulu"
                        ></Boxcode>
                        <Boxcode
                            name="css-icon"
                            lan="CSS"
                            desc="cssssssssss"
                            link="https://github.com/HenryLulu"
                            img="https://avatars1.githubusecontent.com/u/14797054?s=460&v=4"
                        ></Boxcode>
                        <Boxcode
                            name="css-icon"
                            lan="CSS"
                            desc="cssssssssss"
                            link="https://github.com/HenryLulu"
                        ></Boxcode>
                        <Boxblog
                            tag="CSS3 2018-11-12"
                            title="不止于代码，热衷于前端，专注于效率，执着于体验"
                            desc="不止于代码，热衷于前端，专注于效率，执着于体验"
                            link="/about"
                            img="https://avatars1.githubusercontent.com/u/14797054?s=460&v=4"
                        ></Boxblog>
                        <Boxblog
                            tag="CSS3 2018-11-12"
                            title="不止于代码，热衷于前端，专注于效率，执着于体验"
                            desc="不止于代码，热衷于前端，专注于效率，执着于体验"
                            link="/about"
                            img="https://avatars1.githubusercontent.com/u/14797054?s=460&v=4"
                        ></Boxblog>
                        <Boxblog
                            tag="CSS3 2018-11-12"
                            title="不止于代码，热衷于前端，专注于效率，执着于体验"
                            desc="不止于代码，热衷于前端，专注于效率，执着于体验"
                            link="/about"
                            img="https://avatars1.githubusercontent.com/u/14797054?s=460&v=4"
                        ></Boxblog>
                        <Boxblog
                            tag="CSS3 2018-11-12"
                            title="不止于代码，热衷于前端，专注于效率，执着于体验"
                            desc="不止于代码，热衷于前端，专注于效率，执着于体验"
                            link="/about"
                            img="https://avatars1.githubusercontent.com/u/14797054?s=460&v=4"
                        ></Boxblog>
                    </Boxcontainer>
                    <div className="btn-wrapper">
                        <Link to="/code">
                            <p className="btn">SHOW U MY CODE</p>
                        </Link>
                        <Link to="/blog">
                            <p className="btn emb">BLOG</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;