import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import CoreServicesSection from './CoreServicesSection';
import ComplianceSection from './ComplianceSection';
import FeaturesSection from './FeaturesSection';
import Faq from './Faq';
import CTA from './CTA';


const Services = () => {
  return (
    <>
      <Helmet>
        <title>Outsourcing Services | Voice, Omnichannel, AI</title>
        <meta name="description" content="Explore voice, omnichannel, AI-ready, and compliant outsourcing solutions built to scale securely. Discover our Services." />
        <meta property="og:title" content="Outsourcing Services | Voice, Omnichannel, AI" />
        <meta property="og:description" content="Explore voice, omnichannel, AI-ready, and compliant outsourcing solutions built to scale securely. Discover our Services." />
      </Helmet>

      <main className="w-full bg-secondary-background">
        <Header />
        <HeroSection />
         <CoreServicesSection />
         <ComplianceSection />
         <FeaturesSection />
         <Faq />
         <CTA />
        <Footer />
      </main>
    </>
  );
};

export default Services;