import {combineReducers} from 'redux';
import codes from './code/codes';
import bloglist from './blog/bloglist';

export default combineReducers({
    codes,
    bloglist
});