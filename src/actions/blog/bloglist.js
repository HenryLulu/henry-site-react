import get from '../fetch';

import {createAction} from 'redux-actions';

const descReg = />\s([^\r\n]+)/;
const imgReg = /\!\[image\]\(([^\)]+)\)/;

export const bloglist = createAction('BLOG_LIST', (data) => (data));

export const getBloglist = () => (dispatch, getState) => {
    get('/api/github/repos/HenryLulu/blog/issues?access_token=b52bad1447fd85c1d8e682fec774075b5aab2509').then(res => {
        try {
            dispatch(bloglist(res.map(blog => {
                let tag = blog.created_at.split('T')[0];
                if (blog.labels.length > 0) {
                    tag += ' ' + blog.labels.map(label => label.name).join('/');
                }
                const body = blog.body || '';
                const descMa = body.match(descReg);
                const imgMa = body.match(imgReg); 
                return {
                    id: blog.number,
                    tag,
                    title: blog.title,
                    desc: descMa && descMa[1] || '',
                    link: `/article/${blog.number}`,
                    img: imgMa && imgMa[1] || ''
                };
            })));
        } catch (e) {
            console.error(e);
            dispatch(bloglist([]));
        }
    });
};
