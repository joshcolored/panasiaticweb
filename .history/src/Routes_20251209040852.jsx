import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
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
        <Route path="/test" element={<Homepage />} />
        <Route path="/test/portal" element={<PortalAccess />} />
        <Route path="/test/services" element={<Services />} />
        <Route path="/test/why-us" element={<WhyUs />} />
        <Route path="/test/industries" element={<Industries />} />
        <Route path="/test/partnerships" element={<Partnerships />} />
        <Route path="/test/about" element={<About />} />
        <Route path="/test/blog" element={<Blog />} />
        <Route path="/test/contact" element={<Contact />} />
      </Routes>
    </Router>
  
  );
};

export default AppRoutes;