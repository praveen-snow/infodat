import { combineReducers } from 'redux';
//

import app                 from './app';
import navigator           from './navigator';
import notifier            from './notifier';
import userInfo            from './userDetails';

export default combineReducers({
    app,
    navigator,
    notifier,
    userInfo
});
