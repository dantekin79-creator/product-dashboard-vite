import React from 'react';
import ProductCard from './ProductCard';
import { Box, Typography } from '@mui/material';

const ProductList = ({ products, onRemove }) => {
  // Conditional rendering: Display a message when no products are in stock
  const inStockProducts = products.filter(product => product.inStock);
  
  return (
    <>
      {inStockProducts.length === 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">No products are currently in stock.</Typography>
        </Box>
      )}
      
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {/* Iteration to dynamically render a list of ProductCard components */}
        {products.map(product => (
          <ProductCard key={product.id} product={product} onRemove={onRemove} />
        ))}
      </Box>
    </>
  );
};

export default ProductList;
