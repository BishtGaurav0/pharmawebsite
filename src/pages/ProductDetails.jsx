import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Button, TextField, Box, Paper } from '@mui/material';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext'; // new

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductById, loading, error } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);


  // Fetch product data based on ID from the context
  useEffect(() => {
    const fetchedProduct = getProductById(id);
    if (fetchedProduct) {
      setProduct(fetchedProduct);
    }
  }, [id, getProductById]); // Re-run if the id or getProductById changes

  if (loading) {
    return <Typography align="center">Loading...</Typography>;
  }

  if (error || !product) {
    return <Typography align="center" color="error">Product not found</Typography>;
  }

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
navigate('/cart');
  };

  // Ensure the price is a valid number and use .toFixed() safely
  const price = parseFloat(product.price) || 0; // If the price is not a number, default to 0

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={4} sx={{ flexDirection: { xs: 'column', md: 'row' }, display: 'flex', flexWrap: 'nowrap', alignItems: 'center', mb: 3 }}>
        <Grid item xs={12} md={5}>
          <Paper elevation={2}>
            <Box sx={{ p: 3, textAlign: 'center' }}>
              <img src={product.image} alt={product.name} style={{ maxWidth: '100%' }} />
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={7}>
          <Typography variant="h4" gutterBottom>{product.name}</Typography>
          <Typography variant="body1" gutterBottom>{product.description}</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
            {product.original && <del>${parseFloat(product.original).toFixed(2)}</del>}{' '}
            <strong style={{ color: '#1976d2' }}>{product.price}</strong>
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center', mb: 3 }}>
            <Button variant="outlined" onClick={() => handleQuantityChange(-1)}>-</Button>
            <TextField
              size="small"
              type="number"
              value={quantity}
              inputProps={{ min: 0, style: { textAlign: 'center' } }}
              sx={{ width: 60, mx: 2 }}
              disabled
            />
            <Button variant="outlined" onClick={() => handleQuantityChange(1)}>+</Button>
          </Box>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleAddToCart}
            disabled={quantity === 0}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
