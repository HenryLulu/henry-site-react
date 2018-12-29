import {handleActions} from 'redux-actions';

const defaultData = [];

export default handleActions({
    'BLOG_LIST': (state, action) => {
        return action.payload || [];
    },
    'APPEND_BLOG_LIST': (state, action) => {
        const appendData = action.payload || [];
        return state.concat(appendData);
    }
}, defaultData);