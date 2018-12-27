import {handleActions} from 'redux-actions';

const defaultData = [];

export default handleActions({
    'CODES': (state, action) => ({
        ...state,
        ...action.payload
    })
}, defaultData);