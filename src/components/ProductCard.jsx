import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, price, oldPrice, image }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 1 }}>
      <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {oldPrice && <del style={{ marginRight: 8 }}>${oldPrice.toFixed(2)}</del>}
            <strong>${price.toFixed(2)}</strong>
          </Typography>
        </CardContent>
      </Link>
      <CardActions>
        <Button component={Link} to={`/product/${id}`} size="small" variant="contained">
          View
        </Button>
        <Button size="small" variant="outlined">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
