import get from '../fetch';
import githubConfig from '../../config/github';

import {createAction} from 'redux-actions';

export const codes = createAction('CODES', (data) => (data));

export const getCodes = () => (dispatch, getState) => {
    get('/api/github/users/HenryLulu/repos', {
        access_token: githubConfig.access_token
    }).then(res => {
        try {
            dispatch(codes(res.sort((a, b) => {
                return b.updated_at > a.updated_at ? 1 : -1
            }).map(code => {
                if (code.language === 'CSS') {
                    dispatch(getRepoImg(code.name));
                }
                return {
                    name: code.name,
                    lan: code.language,
                    desc: code.description,
                    link: code.html_url,
                    star: code.stargazers_count,
                    fork: code.forks_count
                };
            })));
        } catch (e) {
            dispatch(codes([]));
        }
    });
};

export const repoImg = createAction('REPO_IMG', (data) => (data));

export const getRepoImg = name => (dispatch, getState) => {
    get(`/api/github/repos/HenryLulu/${name}/contents`, {
        access_token: githubConfig.access_token
    }).then(res => {
        try {
            res = res.filter(file => file.name === 'show.jpg');
            if (res.length > 0) {
                dispatch(repoImg({
                    name,
                    img: res[0].download_url
                }));
            }
        } catch (e) {}
    })
}