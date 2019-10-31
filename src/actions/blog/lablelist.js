// import get from '../fetch';
import get from '../fetchJSON';

import {createAction} from 'redux-actions';

export const labellist = createAction('LABEL_LIST', (data) => (data));

export const getLabellist = (param = {}) => (dispatch, getState) => {
    dispatch(labellist([]));
    // get('/api/github/repos/HenryLulu/blog/labels')
    get('/blog/articles')
    .then(res => {
        try {
            // dispatch(labellist(res.sort((a, b) => {
            //     return a.id - b.id;
            // }).map(label => {
            //     return label.name;
            // })));
            dispatch(labellist(res.reduce((sum, blog) => {
                blog.labels.forEach(l => {
                    if (sum.indexOf(l) < 0) {
                        sum.push(l);
                    }
                });
                return sum;
            }, [])));
        } catch (e) {
            console.error(e);
            dispatch(labellist([]));
        }
    });
};
