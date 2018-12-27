import get from '../fetch';

import {createAction} from 'redux-actions';

export const checkrecord = createAction('CODES', (data) => (data));

export const getCodes = params => (dispatch, getState) => {
    get('/github/users/HenryLulu/repos?access_token=b52bad1447fd85c1d8e682fec774075b5aab2509').then(res => {
        debugger
    });
};