import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import FastFactsSection from './FastFactsSection';
import CoreServicesSection from './CoreServicesSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';

const Homepage = () => {
  return (
    <>
      <Helmet>
        
        <meta name="description" content="PanAsiatic Solutions delivers exceptional customer support outsourcing from the Philippines with 4500+ agents. Human-driven, AI-ready services including voice support, omnichannel CX, and enterprise-grade security since 2010." />
        <meta property="og:title" content="PanAsiatic Solutions | Human-Driven AI-Ready Customer Support Outsourcing Philippines" />
        <meta property="og:description" content="PanAsiatic Solutions delivers exceptional customer support outsourcing from the Philippines with 4500+ agents. Human-driven, AI-ready services including voice support, omnichannel CX, and enterprise-grade security since 2010." />
      </Helmet>

      <main className="w-full bg-secondary-background">
        <Header />
        <HeroSection />
        <FastFactsSection />
        <CoreServicesSection />
        <WhyChooseUsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Homepage;