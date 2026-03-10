import React from 'react';
import ProductCard from './ProductCard';
import { Box, Typography } from '@mui/material';

/**
 * ProductList Component
 * Displays a collection of product cards or a message if no products are available.
 */
const ProductList = ({ products, onRemove }) => {
  // Filter products to check if there are any in-stock items.
  // This demonstrates conditional rendering based on product status.
  const inStockProducts = products.filter(product => product.inStock);
  
  return (
    <>
      {/* 
        Conditional rendering: 
        If no products are in stock, display a descriptive message using Material UI.
      */}
      {inStockProducts.length === 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" align="center">No products are currently in stock.</Typography>
        </Box>
      )}
      
      {/* 
        Layout container for the product cards. 
        Uses flexbox for responsive layout.
      */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
        {/* 
          Iteration: 
          Dynamically render a ProductCard for each product in the array.
          Each child in a list should have a unique 'key' prop.
        */}
        {products.map(product => (
          <ProductCard key={product.id} product={product} onRemove={onRemove} />
        ))}
      </Box>
    </>
  );
};

export default ProductList;
