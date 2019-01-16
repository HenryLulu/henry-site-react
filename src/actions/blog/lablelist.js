import get from '../fetch';

import {createAction} from 'redux-actions';

export const labellist = createAction('LABEL_LIST', (data) => (data));

export const getLabellist = (param = {}) => (dispatch, getState) => {
    dispatch(labellist([]));
    get('/api/github/repos/HenryLulu/blog/labels').then(res => {
        try {
            dispatch(labellist(res.sort((a, b) => {
                return a.id - b.id;
            }).map(label => {
                return label.name;
            })));
        } catch (e) {
            console.error(e);
            dispatch(labellist([]));
        }
    });
};
