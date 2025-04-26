// File: src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route , useLocation} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import ThankYou from './pages/ThankYou';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OrderManagement from './components/OrderManagement';
import Login from './pages/Login';


function App() {
  const location = useLocation();
  const [showOrderManagement, setShowOrderManagement] = useState(false);
  useEffect(() => {
    if (location.pathname === '/thankyou') {
      setShowOrderManagement(true);
    } else {
      setShowOrderManagement(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/login' element={<Login/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
      {showOrderManagement && <OrderManagement />}
      <Footer />
    </>
  );
}

export default App;