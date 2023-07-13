import * as yup from 'yup';
import 'yup-phone';

export const REQUIRED = 'Campo requerido';
const MAX_150 = 'Máximo 150 caracteres';

export const createSchema = yup.object().shape({
  message: yup.string().max(150, MAX_150).required(REQUIRED)
});
