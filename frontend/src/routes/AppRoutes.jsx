import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import AdminLogin from '../pages/admin/AdminLogin.jsx';
import UserLogin from '../pages/user/UserLogin.jsx';
import AdminRoutes from './AdminRoutes.jsx';
import UserRoutes from './UserRoutes.jsx';
import CompanyHistory from '../pages/aboutUs/CompanyHistory.jsx';
import ContactForm from '../pages/contactUs/ContactForm.jsx';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/user/*" element={<UserRoutes />} />
        <Route path="/about-us" element={<CompanyHistory />} />
        <Route path="/contact-us" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;