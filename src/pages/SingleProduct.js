import React from 'react';
import { useParams } from 'react-router';
import { data } from '../utils/data';
import { Navbar, Footer } from '../components';
import {
  Container,
  Typography,
  Button,
  Grid,
  List,
  ListItem,
  Card,
  CssBaseline,
} from '@mui/material';
import { useStyles } from '../components/Card/styles';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import { Link } from 'react-router-dom';
const SingleProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { dispatch } = useContext(Store);

  const product = data[id - 1];

  const addToCartHnadler = () => {
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity: 1 } });
    navigate('/cart');
  };

  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Container className={classes.container}>
        <CssBaseline />
        <Link to="/">
          <Button variant="outlined" style={{ marginBottom: '20px' }}>
            Back
          </Button>
        </Link>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <img
              src={product.poster}
              className={classes.poster}
              alt={product.name}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <List>
              <ListItem>
                <Typography variant="h5">{product.name}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Category: {product.category}</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <List>
                <ListItem>
                  <Grid container spacing={1}>
                    <Grid item md={6}>
                      <Typography>Price</Typography>
                    </Grid>
                    <Grid item md={6}>
                      <Typography>₹{product.price}</Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container spacing={1}>
                    <Grid item md={6}>
                      <Typography>Stack</Typography>
                    </Grid>
                    <Grid item md={6}>
                      <Typography>
                        {product.stackCount < 0 ? '0' : product.stackCount}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    onClick={addToCartHnadler}
                    className={classes.root}
                  >
                    Add to Cart
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default SingleProduct;
