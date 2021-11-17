import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { data } from '../../utils/data';
import { Card } from '..';
const Products = () => {
  return (
    <Container style={{ padding: '30px 15px' }}>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {data.map((product) => (
          <Grid item xs={12} sm={4} key={product.id}>
            <Card product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
