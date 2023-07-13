import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { Button, Grid, Typography } from '@mui/material';

import CustomGridContainer from '@core/components/CustomGrid';
import InputForm from '@core/components/InputForm';
import { noEmptyData } from '@core/utils';
import { createSchema } from '@entities/notifications/schema/notifications';
import { yupResolver } from '@hookform/resolvers/yup';
import { AppDispatch } from '@redux';
import { pushMessage } from '@redux/notifications';

const CATEGORIES = [
  { label: 'Sports', value: 'Sports' },
  { label: 'Finance', value: 'Finance' },
  { label: 'Movies', value: 'Movies' }
];

const defaultValues = {
  category: CATEGORIES[0].label,
  message: ''
};

const Form = (props: { onSubmit?: () => void }) => {
  // @ts-ignore
  const dispatch = useDispatch<AppDispatch>();

  const { control, reset, watch, handleSubmit } = useForm({
    resolver: yupResolver(createSchema),
    mode: 'onBlur',
    defaultValues
  });

  const category = watch('category');
  const message = watch('message');

  const onSave = useCallback((data: typeof defaultValues) => {
    dispatch(pushMessage(data)).then((payload: { [k: string]: unknown }) => {
      if (payload.error) return;
      reset();
      if (props.onSubmit) props.onSubmit();
    });
  }, []);

  return (
    // @ts-ignore
    <CustomGridContainer>
      <CustomGridContainer
        style={{
          width: '20em',
          alignItems: 'center'
        }}
      >
        <Typography variant="h6">Happening now</Typography>

        <Grid container justifyContent="center" style={{ padding: '1em' }}>
          <Grid item xs zeroMinWidth>
            <InputForm
              type="select"
              control={control}
              name="category"
              label="Category"
              items={CATEGORIES}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" style={{ padding: '1em' }}>
          <Grid item xs={12} zeroMinWidth>
            <InputForm control={control} name="message" label="Message" />
          </Grid>
        </Grid>

        <Grid container justifyContent="center" style={{ padding: '1em' }}>
          <Grid item xs zeroMinWidth>
            <Button
              variant="contained"
              disabled={!noEmptyData({ category, message })}
              onClick={handleSubmit(onSave)}
            >
              Send notification
            </Button>
          </Grid>
        </Grid>
      </CustomGridContainer>
    </CustomGridContainer>
  );
};

export default Form;
