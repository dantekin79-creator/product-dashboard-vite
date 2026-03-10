import React from 'react';
import styles from '../styles/ProductCard.module.css';
import { Button, Typography, Card, CardActions } from '@mui/material';

/**
 * ProductCard Component
 * Renders individual product details in a card format.
 * Includes conditional styling and a remove button.
 */
const ProductCard = ({ product, onRemove }) => {
  return (
    <Card 
      /*
        Use CSS Modules for custom scoped styling.
        Conditionally apply 'outOfStockClass' based on stock availability.
      */
      className={`${styles.productCard} ${!product.inStock ? 'outOfStockClass' : ''}`}
      sx={{ 
        bgcolor: product.inStock ? 'background.paper' : '#f8d7da',
        m: 1,
        p: 2,
        minWidth: 200,
        boxShadow: 3
      }}
    >
      {/* 
        Container for the main product content. 
        Applies out-of-stock styles if necessary.
      */}
      <div className={!product.inStock ? 'outOfStockClass' : ''}>
        {/* Product Title */}
        <Typography variant="h5" component="h3" gutterBottom>
          {product.name}
        </Typography>

        {/* Product Price */}
        <Typography variant="body1" color="text.secondary">
          Price: {product.price}
        </Typography>

        {/* Stock Availability status indicator */}
        <Typography variant="body2" color={product.inStock ? "success.main" : "error.main"} sx={{ fontWeight: 'bold', mt: 1 }}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </Typography>
      </div>

      {/* Action buttons area */}
      <CardActions sx={{ mt: 1 }}>
        <Button 
          variant="contained" 
          size="small" 
          color="error" 
          onClick={() => onRemove(product.id)}
          aria-label={`Remove ${product.name}`}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
