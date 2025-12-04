import React from 'react';
import { Helmet } from 'react-helmet';
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
        <title>PanAsiatic Solutions | Human-Driven AI-Ready Customer Support Outsourcing Philippines</title>
        <meta name="description" content="PanAsiatic Solutions delivers exceptional customer support outsourcing from the Philippines with 4500+ agents. Human-driven, AI-ready services including voice support, omnichannel CX, and enterprise-grade security since 2010." />
        <meta property="og:title" content="PanAsiatic Solutions | Human-Driven AI-Ready Customer Support Outsourcing Philippines" />
        <meta property="og:description" content="PanAsiatic Solutions delivers exceptional customer support outsourcing from the Philippines with 4500+ agents. Human-driven, AI-ready services including voice support, omnichannel CX, and enterprise-grade security since 2010." />
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