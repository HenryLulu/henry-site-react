import {createAction} from 'redux-actions';

export const device = createAction('DEVICE', () => window.innerWidth > 750 ? 'pc' : 'wap');
