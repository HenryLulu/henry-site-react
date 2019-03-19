import {handleActions} from 'redux-actions';

export default handleActions({
    'DEVICE': (state, action) => {
        return action.payload || 'pc';
    }
}, 'pc');