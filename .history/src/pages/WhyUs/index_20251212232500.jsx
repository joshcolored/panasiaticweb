import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import Security from './Security';
import ComplianceSection from './ComplianceSection';
import InfrastructureSection from './InfrastructureSection';
import FAQ from './Faq';
import CTA from './CTA';


const WhyUs = () => {
  return (
    <>
      <Helmet>
        <title>Why Choose PanAsiatic | Proven Outsourcing Partner</title>
        <meta name="description" content="Trusted by Fortune 500 brands since 2010, PanAsiatic combines quality, security, scalability, and cost efficiency." />
        <meta property="og:title" content="Why Choose PanAsiatic | Proven Outsourcing Partner" />
        <meta property="og:description" content="Trusted by Fortune 500 brands since 2010, PanAsiatic combines quality, security, scalability, and cost efficiency." />
      </Helmet>

      <main className="w-full bg-secondary-background">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <Security />
        <ComplianceSection />
        <InfrastructureSection />
        <FAQ />
        <CTA />
        <Footer />  
      </main>
    </>
  );
};

export default WhyUs;