import { Categories } from '../interfaces';

export const getColorByCategory = (category: Categories) => {
  const colorPiker = {
    Sports: '#82a9bd',
    Finance: '#CFD8DC',
    Movies: '#BDBDBD',
    default: '#FFFFFF'
  };
  const color = colorPiker[category] || colorPiker.default;
  return color;
};

export const formatDate = (date: string): string => {
  const objectDate = new Date(date);
  const day = objectDate.getDate();
  const month = objectDate.getMonth();
  const year = objectDate.getFullYear();
  return `${month}/${day}/${year}`;
};

export function noEmptyData(data: object) {
  return Object.values(data).every((v) => v);
}
