export type Categories = 'Sports' | 'Finance' | 'Movies';
export type Channels = 'SMS' | 'EMail' | 'Push';

export type INotification = {
  type: Channels;
  category: Categories;
  message: string;
  username: string;
  time: string;
  id?: string | number;
  _id?: string;
};
