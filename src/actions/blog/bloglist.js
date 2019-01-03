import get from '../fetch';

import {createAction} from 'redux-actions';

// 请求id，每次重复请求前+1
let getBloglistId = 0;
let getMoreBloglistId = 0;

const descReg = />\s([^\r\n]+)/;
const imgReg = /\!\[image\]\(([^\)]+)\)/;

const fetchBloglist = (param = {}) => {
    const {
        per_page = 40,
        page = 1,
        labels = ''
    } = param;
    return get('/api/github/repos/HenryLulu/blog/issues', {
        filter: 'created',
        per_page,
        page,
        labels
    }).then(res => {
        return res.map(blog => {
            let tag = blog.created_at.split('T')[0];
            if (blog.labels.length > 0) {
                tag += ' ' + blog.labels.map(label => label.name).join(' / ');
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
        });
    });
}

export const bloglist = createAction('BLOG_LIST', (data) => (data));

export const getBloglist = param => (dispatch, getState) => {
    // 请求前获取当前Id
    const curGetBloglistId = ++getBloglistId;
    dispatch(bloglist({
        status: 'loading',
        list: []
    }));
    fetchBloglist(param).then(res => {
        // 待请求返回，比较本次请求Id和全局请求Id，如果相同则为最新请求
        if (curGetBloglistId === getBloglistId) {
            dispatch(bloglist({
                status: 'succeed',
                list: res || []
            }));
        }
    }).catch(e => {
        dispatch(bloglist({
            status: 'failed',
            list: []
        }));
    });
};

export const appendBloglist = createAction('APPEND_BLOG_LIST', (data) => (data));

export const getMoreBloglist = param => (dispatch, getState) => {
    const curGetMoreBloglistId = ++getMoreBloglistId;
    return fetchBloglist(param).then(res => {
        if (curGetMoreBloglistId === getMoreBloglistId) {
            dispatch(appendBloglist(res));
        }
    });
};
