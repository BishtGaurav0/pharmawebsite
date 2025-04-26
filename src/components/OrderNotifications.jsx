import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderNotifications = () => {
  const [orderStatus, setOrderStatus] = useState('Processing');

  useEffect(() => {
    // Simulate order status changes and show toast notifications
    const interval = setInterval(() => {
      if (orderStatus === 'Processing') {
        setOrderStatus('Shipped');
        toast.info('Your order has been shipped!');
      } else if (orderStatus === 'Shipped') {
        setOrderStatus('Delivered');
        toast.success('Your order has been delivered!');
        clearInterval(interval); // Stop interval when the order is delivered
      }
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, [orderStatus]);

  return (
    <div>
      <ToastContainer />
      <h3>Current Order Status: {orderStatus}</h3>
    </div>
  );
};

export default OrderNotifications;
