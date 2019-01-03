import React from 'react';
import {connect} from 'react-redux';

import {getBloglist, getMoreBloglist} from '../../actions/blog/bloglist';
import {getLabellist} from '../../actions/blog/lablelist';

import Boxcontainer from '../../components/boxcontainer/Boxcontainer';
import Boxblog from '../../components/boxblog/Boxblog';
import Loading from '../../components/loading/Loading';

import './Blog.less';

@connect(store => ({
    labellist: store.labellist,
    bloglist: store.bloglist
}))
class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            per_page: 40,
            page: 1,
            label: ''
        };
    }
    
    componentDidMount() {
        const dispatch = this.props.dispatch;
        dispatch(getLabellist());
        this.list();
    }

    list = () => {
        const dispatch = this.props.dispatch;
        dispatch(getBloglist({
            per_page: this.state.per_page,
            page: this.state.page,
            labels: this.state.label
        }));
    }

    handleFilter = label => {
        if (this.state.loading) {
            return;
        }
        this.setState({
            page: 1,
            label
        }, () => {
            this.list();
        });
    }

    handleMore = () => {
        const dispatch = this.props.dispatch;
        this.setState({
            page: this.state.page + 1
        }, () => {
            dispatch(getMoreBloglist({
                per_page: this.state.per_page,
                page: this.state.page,
                labels: this.state.label
            })).catch(e => {
                this.setState({
                    page: this.state.page - 1
                });
            });
        });
    }

    render() {
        return (
            <div className="blog">
                <div className="filter-wrapper">
                    <p className="filter-title">文章分类:</p>
                    <ul className="filter-list">
                        <li
                            className={`filter-item ${this.state.label === '' ? 'current': ''}`}
                            onClick={this.handleFilter.bind(this, '')}
                        >全部</li>
                        {this.props.labellist.map(label => (
                            <li
                                key={label}
                                className={`filter-item ${this.state.label === label ? 'current': ''}`}
                                onClick={this.handleFilter.bind(this, label)}
                            >{label}</li>
                        ))}
                    </ul>
                </div>
                {this.props.bloglist.status !== 'succeed'
                && <div className="loading-wrapper" style={{padding: '1rem 0'}}>
                    <Loading
                        status={this.props.bloglist.status}
                        onRetry={this.list}
                    />
                </div>}
                {this.props.bloglist.status === 'succeed' && <Boxcontainer>
                    {this.props.bloglist.list.slice(0, 4).map(blog => (
                        <Boxblog
                            key={blog.id}
                            tag={blog.tag}
                            title={blog.title}
                            desc={blog.desc}
                            link={blog.link}
                            img={blog.img}
                        ></Boxblog>
                    ))}
                </Boxcontainer>}
                {this.props.bloglist.status === 'succeed'
                && this.props.bloglist.list.length >= this.state.per_page * this.state.page
                && (
                    <div className="btn-wrapper" style={{marginBottom: '.3rem'}}>
                        <a href="javascript:;">
                            <p className="btn btn-en" onClick={this.handleMore}>LOAD MORE</p>
                        </a>
                    </div>
                )}
            </div>
        );
    }
};

export default Blog;