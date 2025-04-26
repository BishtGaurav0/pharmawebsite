import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const BottomBanner = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'rgba(81,234,234,0.9)', color: 'black' }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundImage: 'url(/images/bg_1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                p: { xs: 3, sm: 4 },
                minHeight: { xs: 200, sm: 250, md: 300 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: { xs: 'center', md: 'flex-start' },
                textAlign: { xs: 'center', md: 'left' },
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" gutterBottom>Pharma Products</Typography>
              <Typography>Our products are designed to be effective and provide lasting results.</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundImage: 'url(/images/bg_2.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                p: { xs: 3, sm: 4 },
                minHeight: { xs: 200, sm: 250, md: 300 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: { xs: 'center', md: 'flex-end' },
                textAlign: { xs: 'center', md: 'right' },
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" gutterBottom>Rated by Experts</Typography>
              <Typography>Experts trust our products for their proven effectiveness and safety.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BottomBanner;
