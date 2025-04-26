import React, { useContext } from 'react';
import {
  Container, Typography, Box, Button, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  // Fix: Ensure price and quantity are parsed as numbers and set default quantity to 1
  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0; // Ensure price is a valid number
    const quantity = item.quantity > 0 ? item.quantity : 1; // Default to 1 if quantity is invalid
    return acc + (price * quantity);
  }, 0);

  if (cartItems.length === 0) {
    return (
      <Container sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h5" color="error">Your cart is empty</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={() => navigate('/')}>
          Go Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
              <TableCell align="center">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => {
              const price = parseFloat(item.price) || 0;
              const quantity = item.quantity > 0 ? item.quantity : 1; // Ensure quantity is at least 1
              const total = price * quantity;

              return (
                <TableRow key={item.id}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <img src={item.image} alt={item.name} style={{ width: 50, marginRight: 16 }} />
                      {item.name}
                    </Box>
                  </TableCell>
                  <TableCell>${price.toFixed(2)}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Button size="small" onClick={() => updateQuantity(item.id, -1)}>-</Button>
                      <Typography sx={{ mx: 2 }}>{quantity}</Typography>
                      <Button size="small" onClick={() => updateQuantity(item.id, 1)}>+</Button>
                    </Box>
                  </TableCell>
                  <TableCell>${total.toFixed(2)}</TableCell>
                  <TableCell align="center">
                    <IconButton color="error" onClick={() => removeFromCart(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Paper sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6">Subtotal: ${subtotal.toFixed(2)}</Typography>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => navigate('/checkout')}
        >
          Proceed to Checkout
        </Button>
      </Paper>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button variant="outlined" onClick={() => navigate('/')}>
          Continue Shopping
        </Button>
      </Box>
    </Container>
  );
};

export default Cart;
