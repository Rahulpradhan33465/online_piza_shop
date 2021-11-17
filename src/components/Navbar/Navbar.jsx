import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { ShoppingCart, FormatAlignCenter } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { Store } from '../../utils/Store';
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  const toggle = () => {
    setShowNavbar((prev) => !prev);
  };

  const { state } = useContext(Store);

  const {
    cart: { cartItems },
  } = state;

  const classes = useStyles();
  return (
    <div className={classes.navContainer}>
      <div className={classes.logoContainer}>
        <div className={classes.flex}>
          <img
            src="https://my-pizza-house.herokuapp.com/images/logo.png"
            alt="logo"
            className={classes.logo}
          />
          <div className={classes.bar}>
            <FormatAlignCenter onClick={toggle} />
          </div>
        </div>
      </div>
      <div
        className={`${classes.link_c} ${
          showNavbar ? classes.d_block : classes.d_none
        }`}
      >
        <ul className={classes.navLinks}>
          <li className={classes.link}>
            <Link to="/" className={classes.color}>
              Home
            </Link>
          </li>
          <li className={classes.link}>
            <Link to="/product" className={classes.color}>
              Product
            </Link>
          </li>
          <li className={classes.link}>
            <Link to="/cart" className={classes.color}>
              <Badge badgeContent={cartItems.length} color="secondary">
                <ShoppingCart className={classes.cart} />
              </Badge>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
