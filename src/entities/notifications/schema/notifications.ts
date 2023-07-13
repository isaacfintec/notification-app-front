import * as yup from 'yup';

export const REQUIRED = 'Field required.';
const MAX_50 = 'There is a maximum of 50 characters.';

export const createSchema = yup.object().shape({
  message: yup.string().max(50, MAX_50).required(REQUIRED),
  category: yup.string().max(50, MAX_50).required(REQUIRED)
});
