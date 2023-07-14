import { Container, Stack } from '@mui/material';

import CustomGrid from '@core/components/CustomGrid';
import Notification from '@core/components/Notifications';
import useNotifications from '@core/hooks/notifications';

import Form from '../../components/Form';

const FormPage = () => {
  const { notifications, refress } = useNotifications();

  return (
    <Container component={Stack} spacing={2}>
      <Form onSubmit={refress} />
      <CustomGrid>
        {notifications.map((n) => (
          <Notification key={n._id} item={n} />
        ))}
      </CustomGrid>
    </Container>
  );
};

export default FormPage;
