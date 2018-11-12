import React from 'react';
import './Layout.less'
import Topbar from '../topbar/Topbar';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navActive: false
        };
    }

    handleNavShow = () => {
        this.setState({
            navActive: true
        });
        document.body.className = 'clip';
    }

    handleNavClose = () => {
        this.setState({
            navActive: false
        });
        document.body.className = '';
    }

    render() {
        return (
            <div className="layout">
                <Topbar onNavOpen={this.handleNavShow} />
                <Nav active={this.state.navActive} onClose={this.handleNavClose} />
                {this.props.children}
                <Footer />
            </div>
        )
    }
};