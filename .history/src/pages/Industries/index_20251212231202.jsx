import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import FastFactsSection from './FastFactsSection';
import FAQ from './Faq';
import CXSolutions from './CXSolutions';



const Industries = () => {
  return (
    <>
      <Helmet>
        
        <meta name="description" content="Telecom, e-commerce, travel, and health tech—enterprise-grade customer support with flexible, secure teams. Discover the industries we serve." />
        <meta property="og:title" content="Industries We Serve | Secure CX Outsourcing" />
        <meta property="og:description" content="Telecom, e-commerce, travel, and health tech—enterprise-grade customer support with flexible, secure teams. Discover the industries we serve." />
      </Helmet>

      <main className="w-full bg-secondary-background">
        <Header />
        <HeroSection />
        <FastFactsSection />
        <FAQ />
        <CXSolutions />
        <Footer />
      </main>
    </>
  );
};

export default Industries;