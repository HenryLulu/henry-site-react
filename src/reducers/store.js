import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from './index';

export default createStore(
    reducers,
    applyMiddleware(thunk)
);
