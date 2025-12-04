import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import Obsessed from './Obsessed';
import PercentageSection from './PercentageSection';
import Community from './Community';


const About = () => {
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
        <FeaturesSection />
        <Obsessed />
        <PercentageSection />
        <Community />
        <Footer />  
      </main>
    </>
  );
};

export default About;