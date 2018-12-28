import {handleActions} from 'redux-actions';

const defaultData = [];

export default handleActions({
    'BLOG_LIST': (state, action) => {
        return action.payload || [];
    }
}, defaultData);