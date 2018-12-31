import get from '../fetch';
import githubConfig from '../../config/github';

import {createAction} from 'redux-actions';

export const article = createAction('ARTICLE', (data) => (data));

export const getArticle = id => (dispatch, getState) => {
    dispatch(article({
        status: 'loading'
    }));
    get(`/api/github/repos/HenryLulu/blog/issues/${id}`, {
        access_token: githubConfig.access_token
    }).then(blog => {
        try {
            let tag = blog.created_at.split('T')[0];
            if (blog.labels.length > 0) {
                tag += ' ' + blog.labels.map(label => label.name).join(' / ');
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
