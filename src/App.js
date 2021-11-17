import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Product from './pages/Product';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
