import { styled } from '@mui/material/styles';

const CustomGridContainer = styled('section')(({ theme }) => ({
  position: 'relative',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: theme.spacing(1),
  border: '1px solid lightGray',
  padding: '3em'
}));

export default CustomGridContainer;
