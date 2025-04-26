import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <>
      <Box 
        sx={{
          height: {
            xs: '70vh',
            sm: '80vh',
            md: '90vh',
            lg: '100vh',
          },
          backgroundImage: 'url(/images/hero_1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <Box textAlign="center" sx={{ maxWidth: 600, mx: 'auto', p: 4, }}>
          <Typography variant="h3">Contact</Typography>
        </Box>
      </Box>

      <Container sx={{ py: 8 }}>
        <Typography variant="h4"  gutterBottom>Get In Touch</Typography>
        
          <Grid item xs={12} md={6} sx={{
 maxWidth: "auto"  ,
  
  p: 2,
  border: '1px solid #ccc',
  boxShadow: 3,
  borderRadius: 2
}} >
          <Box component="form">

   
  <TextField label="First Name"  type="name" fullWidth required  sx={{ mb: 2 }} />

  <TextField label="Last Name"  type="name" fullWidth required   sx={{ mb: 2 }}/>
  <TextField
    label="Email"
    type="email"
    fullWidth
    required
    sx={{ mb: 2 }}
  />
  <TextField
    label="Subject"
    fullWidth
    sx={{ mb: 2 }}
  />
  <TextField
    label="Message"
    fullWidth
    multiline
    rows={5}
    sx={{ mb: 3 }}
  />
  <Button
    variant="contained"
    fullWidth
    size="large"
    sx={{
      backgroundColor: '#00C0D6',
      '&:hover': {
        backgroundColor: '#00A8BA',
      },
    }}
  >
    Send Message
  </Button>
</Box>


          </Grid>

        
        
        
      </Container>
    </>
  );
};

export default Contact;
