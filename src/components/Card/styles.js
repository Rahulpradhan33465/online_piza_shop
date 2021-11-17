import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #f59e0e 30%, #f59e0d 90%)',
    border: 0,

    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',

    padding: '2px',
    borderRadius: '20px',
  },
  cardC: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
  },
  poster: {
    height: '350px',
    width: '100%',
    objectFit: 'cover',
  },
  container: {
    height: '80vh',
    width: '100%',
    padding: '20px 5px',
  },
});
