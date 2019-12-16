import get from '../fetch';

import {createAction} from 'redux-actions';

export const article = createAction('ARTICLE', (data) => (data));

export const getArticle = id => (dispatch, getState) => {
    dispatch(article({
        status: 'loading'
    }));

    get(
        `/api/github/repos/HenryLulu/blog/issues/${id}`
    ).then(articles => {
        try {
            const blog = articles.filter(a => a.id === id)[0];
            let tag = blog.created_at.split('T')[0];
            if (blog.labels.length > 0) {
                tag += ' ' + blog.labels.join(' / ');
            }
            dispatch(article({
                ...blog,
                tag,
                status: 'succeed'
                // status: 'failed'
            }));
        } catch (e) {
            console.error(e);
            dispatch(article({
                status: 'failed'
            }));
        }
    });
};
