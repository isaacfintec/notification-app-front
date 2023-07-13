/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

import TextField from '@mui/material/TextField';

import Select from '../Select';

const COMPONENTS = {
  text: TextField,
  select: Select
};

type Primitive = string | number | boolean | null;

type InputFormProps = {
  control: Control<any, any>;
  name: string;
  type?: keyof typeof COMPONENTS;
  label?: string;
  value?: Primitive;
  onChange?: (value: string) => void;
  [s: string]: any;
};

const InputForm: FC<InputFormProps> = (props) => {
  const Component = COMPONENTS[props.type || 'text'] || TextField;
  return (
    <Controller
      name={props.name}
      control={props.control}
      defaultValue=""
      render={({
        field: { onChange, value, onBlur, ref },
        fieldState: { error }
      }) => {
        return (
          // @ts-ignore
          <Component
            {...props}
            fullWidth
            label={props.label}
            variant="outlined"
            value={props.value || value}
            onChange={(e: any) => {
              if (props.onChange) props.onChange(e.target.value);
              onChange(e.target.value);
            }}
            onBlur={(e: any) => {
              onChange(e.target.value);
              onBlur();
            }}
            ref={ref}
            error={!!error}
            helperText={error ? error.message : null}
          />
        );
      }}
    />
  );
};

export default InputForm;
