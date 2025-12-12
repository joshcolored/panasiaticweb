import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import PortalAccess from './pages/PortalAccess';
import Services from './pages/Services';
import WhyUs from './pages/WhyUs';
import Industries from './pages/Industries';
import About from './pages/About';
import Partnerships from './pages/Partnerships';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portal" element={<PortalAccess />} />
        <Route path="/services" element={<Services />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
