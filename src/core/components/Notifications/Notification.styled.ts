import { styled } from '@mui/material/styles';

export const Detail = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '& > :first-of-type': {
    color: '#FFFFFF !important',
    marginBottom: '5px'
  },
  '& > :last-of-type': {
    color: '#212121 !important'
  }
}));

export const NotificationWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'transparent',
  borderRadius: theme.spacing(1),
  padding: '1em',
  width: '100%',
  marginBottom: '1em',
  '& > :first-of-type': {
    justifyContent: 'space-between',
    '& > :first-of-type': {
      flex: 1
    },
    '& > :last-of-type': {
      flex: 2
    }
  }
}));
