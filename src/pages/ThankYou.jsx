import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 8, textAlign: 'center' }}>
      <CheckCircleIcon sx={{ fontSize: 80, color: 'green' }} />
      <Typography variant="h3" gutterBottom>
        Thank You!
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Your order was successfully completed.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button component={Link} to="/shop" variant="contained" size="large">
          Back to Store
        </Button>
      </Box>
    </Container>
  );
};

export default ThankYou;
