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
  navContainer: {
    width: '100%',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4px 10px',
    backgroundColor: '#f2f2f2cc',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  logo: {
    height: '80px',
    width: '80px',
    objectFit: 'cover',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease-in',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  link: {
    margin: '0px 9px',
    fontSize: '1.625rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '6px',
    },
  },
  cart: {
    fontSize: '25px',
  },
  color: {
    color: 'black',
    transition: '0.3s ease-in',

    borderRadius: '5px',
    padding: '3px 6px',
    '&:hover': {
      color: 'white',
      borderRadius: '10px',
      backgroundColor: '#f59e0d',
    },
  },
  d_none: {
    display: 'none',
  },
  d_block: {
    display: 'block',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 5px',
    width: '100%',
  },
  bar: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  link_c: {},
});
