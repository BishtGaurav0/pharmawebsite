// src/components/Login.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [error, setError] = useState(''); // State for error message

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Here we don't validate email and password. Just redirect.
    if (email && password) {
      // Simulate successful login by redirecting to the cart page
      window.location.href = '/shop';
    } else {
      setError('Please provide both email and password'); // Show error if email or password is empty
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
        <Typography variant="h5">Login</Typography>
        
        <form onSubmit={handleLogin} style={{ width: '100%', marginTop: '1rem' }}>
          {/* Email input */}
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />

          {/* Password input */}
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />

          {/* Show error message if email or password is missing */}
          {error && (
            <Typography color="error" variant="body2" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}

          {/* Login button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
