import { forwardRef } from 'react';

import { Box, InputLabel, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';

type SelectProps = {
  items: { value: string; label: string }[];
  value: string;
  onChange?: (v: unknown) => void;
};

const SelectComponent = forwardRef<HTMLDivElement, SelectProps>(
  (props, ref) => {
    return (
      <Box sx={{ minWidth: 120 }} data-testid="select">
        <InputLabel style={{ margin: '0.5em' }}>Category</InputLabel>
        <Select
          value={props.value}
          label="Category"
          onChange={props.onChange}
          ref={ref}
        >
          {props.items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
    );
  }
);
export default SelectComponent;
