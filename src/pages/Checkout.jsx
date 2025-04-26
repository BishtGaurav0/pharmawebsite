import React from 'react';
import { Box, Container, Typography, Grid, TextField, FormControlLabel, Checkbox, Button, Paper } from '@mui/material';

const Checkout = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Billing Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="First Name" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Last Name" required />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Company Name" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Address" required />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Apartment, suite, unit etc. (optional)" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="State / Country" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Postal / ZIP" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email Address" required type="email" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Phone" required />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel control={<Checkbox />} label="Create an account?" />
                <FormControlLabel control={<Checkbox />} label="Ship to a different address?" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Your Order</Typography>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Typography>Bioderma</Typography>
              <Typography>$49.00</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography>Ibuprofen</Typography>
              <Typography>$49.00</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Typography>Subtotal</Typography>
              <Typography>$98.00</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography>Total</Typography>
              <Typography fontWeight="bold">$98.00</Typography>
            </Box>
            <Button fullWidth variant="contained" sx={{ mt: 3 }} href="/thankyou">Place Order</Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;