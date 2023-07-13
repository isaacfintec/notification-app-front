import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { Container, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

import InputForm from '@core/components/InputForm';
import { createSchema } from '@entities/notifications/schema/notifications';
import { yupResolver } from '@hookform/resolvers/yup';

// import { AppDispatch, RootState } from '@redux';

const CATEGORIES = [
  { label: 'Sports', value: 'Sports' },
  { label: 'Finance', value: 'Finance' },
  { label: 'Movies', value: 'Movies' }
];

const defaultValues = {
  category: '',
  message: ''
};

const FormPage = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch<AppDispatch>();
  const [category, setCategory] = useState(defaultValues.category);
  const [message, setMessage] = useState(defaultValues.message);

  const { control } = useForm({
    resolver: yupResolver(createSchema),
    mode: 'onBlur',
    defaultValues
  });

  const handleOnChanges = useCallback(
    (type: string) => (data: string) => {
      console.log({ data, type });
    },
    []
  );

  return (
    <Container component={Stack} spacing={2}>
      <Typography variant="subtitle1">Happening now</Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <InputForm
              control={control}
              value={category}
              name="category"
              label="Category"
              onChange={handleOnChanges('category')}
              items={CATEGORIES}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputForm
              control={control}
              value={message}
              name="message"
              label="Message"
              onChange={handleOnChanges('message')}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FormPage;
