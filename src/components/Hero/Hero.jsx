import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useStyles } from './styles';
const Hero = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.container}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={6} sm={6} justifyContent="center" alignItems="center">
            <div className={classes.text}>
              <Typography variant="subtitle1">are you hungry ?</Typography>
              <h2 className={classes.header}>Don't Wait</h2>
              <button className={classes.orderNow} variant="contained">
                Order now
              </button>
            </div>
          </Grid>
          <Grid item xs={6} sm={6}>
            <div className={classes.image_c}>
              <img
                src="https://my-pizza-house.herokuapp.com/images/pizza.png"
                alt="piza"
                className={classes.image}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
