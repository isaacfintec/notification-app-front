import { INotification } from '@core/interfaces';
import { createSlice } from '@reduxjs/toolkit';

import { pullNotifications, pushMessage } from './notification.thunk';

type TState = {
  status: boolean;
  notifications: INotification[];
};

const initialState: TState = {
  status: false,
  notifications: []
};

export const userSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(pullNotifications.fulfilled, (state, { payload }) => {
        state.status = true;
        state.notifications = payload;
      })
      .addCase(pullNotifications.rejected, (state) => {
        state.status = false;
        state.notifications = initialState.notifications;
      })
      .addCase(pushMessage.fulfilled, (state) => {
        state.status = true;
      })
      .addCase(pushMessage.rejected, (state) => {
        state.status = false;
      });
  }
});

export const { reducer, actions } = userSlice;
export default { reducer, actions };
