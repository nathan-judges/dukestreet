import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
    </RouterRoutes>
  );
};

export default Routes; 