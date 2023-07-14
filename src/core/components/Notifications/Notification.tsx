import { FC } from 'react';

import { Grid, Typography } from '@mui/material';

import { INotification } from '@core/interfaces';
import { formatDate, getColorByCategory } from '@core/utils';

import { Detail, NotificationWrapper } from './Notification.styled';

interface Props {
  item: INotification;
}

const Notification: FC<Props> = (props) => {
  return (
    <NotificationWrapper
      style={{
        backgroundColor: getColorByCategory(props.item.category)
      }}
    >
      <Grid container spacing={3}>
        <Grid item>
          <Detail>
            <Typography variant="body2">User Name:</Typography>
            <Typography variant="body1">{props.item.username}</Typography>
          </Detail>
        </Grid>
        <Grid item>
          <Detail>
            <Typography variant="body2">Category:</Typography>
            <Typography variant="body1">{props.item.category}</Typography>
          </Detail>
        </Grid>
        <Grid item>
          <Detail>
            <Typography variant="body2">Channel/Transporter</Typography>
            <Typography variant="body1">{props.item.type}</Typography>
          </Detail>
        </Grid>
        <Grid item>
          <Detail>
            <Typography variant="body2">Sent:</Typography>
            <Typography variant="body1">
              {formatDate(props.item.time)}
            </Typography>
          </Detail>
        </Grid>
        <Grid item>
          <Detail>
            <Typography variant="body2">Message:</Typography>
            <Typography variant="body1">{props.item.message}</Typography>
          </Detail>
        </Grid>
      </Grid>
    </NotificationWrapper>
  );
};

export default Notification;
