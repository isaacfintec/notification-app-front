import NotificationsApi from '@core/api/notifications';
import { showLoading } from '@redux/common';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const pushMessage = createAsyncThunk(
  '@Notifications/push',
  async (message: { category: string; message: string }, { dispatch }) => {
    try {
      dispatch(showLoading(true));
      const response = await NotificationsApi.pushMessage(message);
      return response;
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      /**
       * debug error
       */
      throw error;
    } finally {
      dispatch(showLoading(false));
    }
  }
);

export const pullNotifications = createAsyncThunk(
  '@Notifications/pull',
  async (pops, { dispatch }) => {
    try {
      dispatch(showLoading(true));
      const response = await NotificationsApi.pullNotifications();
      return response;
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      /**
       * debug error
       */
      throw error;
    } finally {
      dispatch(showLoading(false));
    }
  }
);

export default { pushMessage, pullNotifications };
