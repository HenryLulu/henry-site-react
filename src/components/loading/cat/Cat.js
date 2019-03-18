import React from 'react';

import './Cat.less';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            endframe: false
        };
    }

    // componentDidMount() {
    //     setInterval(() => {
    //         // this.setState({endframe: !this.state.endframe});
    //     }, 800);
    // }
    render() {
        return <div className={`cat-loading ${this.state.endframe ? 'end-frame' : ''}`}>
            <p className="cat-body"></p>
            <p className="cat-left-ear"></p>
            <p className="cat-right-ear"></p>
            <p className="cat-eye cat-eye-left">
                <p className="ring-1"></p>
                <p className="ring-2"></p>
                <p className="point"></p>
            </p>
            <p className="cat-eye cat-eye-right">
                <p className="ring-1"></p>
                <p className="ring-2"></p>
                <p className="point"></p>
            </p>
            <p className="cat-foot cat-foot-1"></p>
            <p className="cat-foot cat-foot-2"></p>
            <p className="cat-foot cat-foot-3"></p>
            <p className="cat-foot cat-foot-4"></p>
            <p className="cat-tail"></p>
            <p className="cat-shadow-body"></p>
            <p className="cat-shadow-tail"></p>
        </div>
    }
}