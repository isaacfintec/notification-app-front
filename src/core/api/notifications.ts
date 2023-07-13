import { INotification } from '@core/interfaces';

import client from './axios';

export const pushMessage = async (message: {
  category: string;
  message: string;
}) => {
  const { data } = await client.post('/notifications', message);
  return data;
};

export const pullNotifications = async () => {
  const { data } = await client.get<INotification[]>('/notifications');
  return data;
};

export default { pushMessage, pullNotifications };
