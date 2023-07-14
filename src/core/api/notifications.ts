import client from './client';

export const pushNotification = async (message: {
  category: string;
  message: string;
}) => {
  const { body } = await client.post('/notifications').send(message);
  return body;
};

export const pullNotifications = async () => {
  const { body } = await client.get('/notifications');
  return body;
};

export default { pushNotification, pullNotifications };
