import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const useStyles = makeStyles({
  container: {
    height: 'auto',
    width: '100%',
  },
  image: {
    height: '600px',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      height: '350px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '200px',
    },
  },
  text: {
    height: '100%',
  },
  orderNow: {
    color: 'white',
    backgroundColor: '#f59e0d',
    transition: 'all 0.3s ease-in',
    borderRadius: '20px',
    padding: '6px 15px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '22px',
    '&:hover': {
      color: 'white',
      backgroundColor: 'black',
    },
    marginTop: '9px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
  header: {
    fontSize: '3.75rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.75rem',
    },
  },
});
