import {combineReducers} from 'redux';
import codes from './code/codes';
import bloglist from './blog/bloglist';
import labellist from './blog/labellist';
import article from './blog/article';


export default combineReducers({
    codes,
    bloglist,
    labellist,
    article
});