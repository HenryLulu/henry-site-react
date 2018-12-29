import {handleActions} from 'redux-actions';

const defaultData = [];

export default handleActions({
    'LABEL_LIST': (state, action) => {
        return action.payload || [];
    }
}, defaultData);