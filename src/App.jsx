import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { Container, Typography, Box } from '@mui/material';

const App = () => {
  // Define a list of product objects in state to allow removal
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true }
  ]);

  const handleRemove = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" color="primary">
          Product Dashboard
        </Typography>
        <ProductList products={products} onRemove={handleRemove} />
      </Box>
    </Container>
  );
};

export default App;
