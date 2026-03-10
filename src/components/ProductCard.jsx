import React from 'react';
import styles from '../styles/ProductCard.module.css';
import { Button, Typography, Card, CardActions } from '@mui/material';

const ProductCard = ({ product, onRemove }) => {
  return (
    <Card 
      className={`${styles.productCard} ${!product.inStock ? 'outOfStockClass' : ''}`}
      sx={{ 
        bgcolor: product.inStock ? 'background.paper' : '#f8d7da',
        m: 1,
        p: 2,
        minWidth: 200
      }}
    >
      <div className={!product.inStock ? 'outOfStockClass' : ''}>
        <Typography variant="h5" component="h3">
          {product.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Price: {product.price}
        </Typography>

        <Typography variant="body2" color={product.inStock ? "success.main" : "error.main"}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </Typography>
      </div>
      <CardActions>
        <Button size="small" color="error" onClick={() => onRemove(product.id)}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
