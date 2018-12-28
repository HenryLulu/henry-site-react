import {handleActions} from 'redux-actions';

const defaultData = [];

export default handleActions({
    'CODES': (state, action) => {
        return action.payload || [];
    },
    'REPO_IMG': (state, action) => state.map(repo => {
        if (repo.name === action.payload.name) {
            return {
                ...repo,
                img: action.payload.img
            };
        } else {
            return repo;
        }
    })
}, defaultData);