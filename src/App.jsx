import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { Container, Typography, Box } from '@mui/material';

/**
 * Main App Component
 * Manages the state of products and renders the Product Dashboard.
 */
const App = () => {
  // Define the initial list of product objects in state.
  // This allows us to dynamically remove items from the UI.
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true }
  ]);

  /**
   * Handler to remove a product from the list by its ID.
   * @param {number} id - The unique identifier of the product to remove.
   */
  const handleRemove = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        {/* Header section with the dashboard title */}
        <Typography variant="h3" component="h1" gutterBottom align="center" color="primary">
          Product Dashboard
        </Typography>
        
        {/* Render the ProductList component and pass products and removal handler */}
        <ProductList products={products} onRemove={handleRemove} />
      </Box>
    </Container>
  );
};

export default App;
