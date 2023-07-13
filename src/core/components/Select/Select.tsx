import { FC, useState } from 'react';

import { Box, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type SelectProps = {
  items: { value: string; label: string }[];
  onChange?: (v: string) => void;
};

const SelectComponent: FC<SelectProps> = (props) => {
  const [category, setCategory] = useState('');

  const handleOnChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    setCategory(value);
    if (props.onChange) props.onChange(value);
  };

  return (
    <Box sx={{ minWidth: 120 }} data-testid="Select">
      <InputLabel>Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={category}
        label="Age"
        onChange={handleOnChange}
      >
        {props.items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            item.label
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};
export default SelectComponent;
