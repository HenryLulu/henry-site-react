import React from 'react';
import {connect} from 'react-redux';
import {Route, Link} from "react-router-dom";

import Markdown from 'react-markdown';

import Loading from '../../components/loading/Loading';

import {getArticle} from '../../actions/blog/article';

import './Article.less';

@connect(store => ({
    article: store.article
}))
class Article extends React.Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.getData();
    }

    getData = () => {
        const dispatch = this.props.dispatch;
        dispatch(getArticle(this.props.match.params.id));
    }

    render() {
        return (
            <div className="article">
                {this.props.article.status !== 'succeed' && <div className="loading-wrapper">
                    <Loading
                        status={this.props.article.status}
                        onRetry={this.getData}
                    />
                </div>}
                {this.props.article.status === 'succeed' && <div className="main">
                    <p className="tag">{this.props.article.tag}</p>
                    <p className="title">{this.props.article.title}</p>
                    <div className="reader">
                        <Markdown source={this.props.article.body} />
                    </div>
                    <div className="btn-wrapper">
                        <Link to="/blog">
                            <p className="btn">BLOG</p>
                        </Link>
                    </div>
                </div>}
            </div>
        );
    }
};

export default Article;