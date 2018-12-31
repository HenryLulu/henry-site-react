import {handleActions} from 'redux-actions';

const defaultData = {
    status: 'loading',
    list: []
};

export default handleActions({
    'BLOG_LIST': (state, action) => {
        return action.payload || {
            status: 'failed',
            list: []
        };
    },
    'APPEND_BLOG_LIST': (state, action) => {
        const appendData = action.payload || [];
        return {
            ...state,
            list: state.list.concat(appendData)
        };
    }
}, defaultData);