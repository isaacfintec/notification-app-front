import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Stack } from '@mui/material';

import CustomGrid from '@core/components/CustomGrid';
import Notification from '@core/components/Notifications';
import { AppDispatch, RootState } from '@redux';
import { pullNotifications } from '@redux/notifications';

import Form from '../../components/Form';

const FormPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { notifications } = useSelector(
    (state: RootState) => state.notification
  );

  const handleOnSubmit = async () => {
    await dispatch(pullNotifications());
  };

  useEffect(() => {
    dispatch(pullNotifications());
  }, []);

  return (
    // @ts-ignore
    <Container component={Stack} spacing={2}>
      <Form onSubmit={handleOnSubmit} />
      <CustomGrid>
        {notifications.map((n) => (
          <Notification key={n._id} item={n} />
        ))}
      </CustomGrid>
    </Container>
  );
};

export default FormPage;
