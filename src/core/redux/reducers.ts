import { combineReducers } from '@reduxjs/toolkit';

import notification from './notifications/notification.slice';

const rootReducer = combineReducers({
  notification: notification.reducer
});

export default rootReducer;
