import React, { useState, useEffect } from 'react';
import { Box, LinearProgress, Typography, Stepper, Step, StepLabel } from '@mui/material';

const OrderTracking = ({ orderId }) => {
  const [orderStatus, setOrderStatus] = useState('Processing');
  const [progress, setProgress] = useState(0); // For progress bar

  useEffect(() => {
    // Simulate real-time updates (you can replace this with actual API calls in production)
    const interval = setInterval(() => {
      if (orderStatus === 'Processing') {
        setOrderStatus('Shipped');
        setProgress(50);
      } else if (orderStatus === 'Shipped') {
        setOrderStatus('Delivered');
        setProgress(100);
        clearInterval(interval); // Stop interval when the order is delivered
      }
    }, 3000); // Simulate update every 3 seconds

    return () => clearInterval(interval); // Cleanup when the component unmounts
  }, [orderStatus]);

  return (
    <Box sx={{ p: 3, maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Order #{orderId} Status</Typography>

      {/* Progress Bar */}
      <LinearProgress variant="determinate" value={progress} sx={{ mb: 2 }} />

      {/* Stepper for Order Status */}
      <Stepper activeStep={progress === 100 ? 2 : progress === 50 ? 1 : 0} alternativeLabel>
        <Step>
          <StepLabel>Processing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Shipped</StepLabel>
        </Step>
        <Step>
          <StepLabel>Delivered</StepLabel>
        </Step>
      </Stepper>

      {/* Status text */}
      <Typography variant="body1" sx={{ mt: 2 }}>
        Current Status: <strong>{orderStatus}</strong>
      </Typography>
    </Box>
  );
};

export default OrderTracking;
