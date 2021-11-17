import React from 'react';
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useStyles } from './styles';
import { useContext } from 'react';
import { Store } from '../../utils/Store';
import { useNavigate } from 'react-router-dom';
const MyCard = ({ product }) => {
  const classes = useStyles();
  const { dispatch } = useContext(Store);
  const navigate = useNavigate();
  const addToCart = () => {
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity: 1 } });
    navigate('/cart');
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={product.poster}
      />
      <CardContent className={classes.cardC}>
        <Typography variant="subtitle1" component="div">
          {product.name}
        </Typography>
        <Typography variant="h6" className={classes.price}>
          ₹{product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          className={classes.root}
          onClick={addToCart}
        >
          Add <ShoppingCart />{' '}
        </Button>
        <Button size="small">{product.category}</Button>
      </CardActions>
    </Card>
  );
};

export default MyCard;
