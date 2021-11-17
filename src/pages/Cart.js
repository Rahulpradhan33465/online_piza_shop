import React, { useContext } from 'react';
import { Store } from '../utils/Store';

import { Navbar, Footer } from '../components';
import { useStyles } from '../styles/styles';
import {
  Button,
  Card,
  Grid,
  List,
  ListItem,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Container,
  CssBaseline,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Delete } from '@mui/icons-material';
const Cart = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);

  const {
    cart: { cartItems },
  } = state;

  const updateCart = (product, quantity) => {
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  };

  const removeCartItem = (product) => {
    dispatch({ type: 'REMOVE_CART_ITEM', payload: product });
  };
  return (
    <>
      <Navbar />
      <Container className={classes.cart_container}>
        <CssBaseline />
        <Typography variant="h4" style={{ margin: '20px 5px' }}>
          Shipping Cart List
        </Typography>

        {cartItems.length === 0 ? (
          <>
            <Typography variant="h6">Your cart is Empty Now</Typography>
            <Link to="/product">
              <Button className={classes.btn_home}>Add items</Button>
            </Link>
          </>
        ) : (
          <>
            <Grid container spacing={1}>
              <Grid item md={9} xs={12}>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cartItems.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <Link to={`/product/${item.id}`}>
                              <img
                                src={item.poster}
                                alt={item.name}
                                style={{ height: '50px', width: '50px' }}
                              />
                            </Link>
                          </TableCell>
                          <TableCell>
                            <Link to={`/product/${item.id}`}>
                              <Typography
                                variant="subtitle1"
                                className={classes.name}
                              >
                                {item.name}
                              </Typography>
                            </Link>
                          </TableCell>
                          <TableCell align="right">
                            <Select
                              value={item.quantity}
                              onChange={(e) => updateCart(item, e.target.value)}
                            >
                              {[...Array(item.stackCount).keys()].map((x) => (
                                <MenuItem key={x + 1} value={x + 1}>
                                  {x + 1}
                                </MenuItem>
                              ))}
                            </Select>
                          </TableCell>
                          <TableCell align="right">
                            <Typography>₹{item.price}</Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Button
                              className={classes.delete}
                              variant="contained"
                              onClick={() => removeCartItem(item)}
                            >
                              <Delete />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item md={3} xs={12}>
                <Card>
                  <List>
                    <ListItem>
                      <Typography variant="h5">
                        Sub Total (
                        {cartItems.reduce((a, c) => a + c.quantity, 0)}items)₹
                        {cartItems.reduce(
                          (a, c) => a + c.quantity * c.price,
                          0
                        )}
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Button
                        variant="contained"
                        fullWidth
                        className={classes.orderBtn}
                      >
                        Place Order
                      </Button>
                    </ListItem>
                  </List>
                </Card>
              </Grid>
            </Grid>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
