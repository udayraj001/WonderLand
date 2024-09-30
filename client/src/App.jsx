import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Service from './pages/Service';
import Customer from './pages/Customer';
import Journey from './pages/Journey';
import Login from './in-out/Login';
import Company from './pages/Company';
import Register from './in-out/Register';
import Footer from './sidebar/Footer';
import ContactUs from './pages/ContactUs';
import ContactSection from './sidebar/ContactSection';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>         
       
            <Routes>
              <Route path="/company" element={<Company/>} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/services" element={<Service />} />
              <Route path="/contact_us" element={<ContactUs />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/" element={<Register/>} />

            </Routes>
        <Footer/>
      
      </Router>
    </QueryClientProvider>
  );
};

export default App;
