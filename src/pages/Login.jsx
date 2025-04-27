// src/components/Login.js
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Container
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; // ✅ React Router navigation

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // ✅ Initialize navigator

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      // ✅ Navigate to shop using React Router
      navigate('/shop');
    } else {
      setError('Please provide both email and password');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
        <Typography variant="h5">Login</Typography>

        <form onSubmit={handleLogin} style={{ width: '100%', marginTop: '1rem' }}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />

          {error && (
            <Typography color="error" variant="body2" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}

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
