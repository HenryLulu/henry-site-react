import {handleActions} from 'redux-actions';

const defaultData = {};

export default handleActions({
    'ARTICLE': (state, action) => {
        return action.payload || {};
    }
}, defaultData);