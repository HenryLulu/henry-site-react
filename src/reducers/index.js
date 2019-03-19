import {combineReducers} from 'redux';
import codes from './code/codes';
import bloglist from './blog/bloglist';
import labellist from './blog/labellist';
import article from './blog/article';
import device from './app/device';


export default combineReducers({
    device,
    codes,
    bloglist,
    labellist,
    article
});