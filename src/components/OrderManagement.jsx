import React from 'react';
import OrderNotifications from './OrderNotifications';
import OrderTracking from './OrderTracking';

const OrderManagement = () => {
  return (
    <div>
      <OrderTracking orderId="123456" />
      <OrderNotifications />
    </div>
  );
};

export default OrderManagement;
