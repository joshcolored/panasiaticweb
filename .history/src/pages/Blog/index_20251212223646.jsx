import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';


const Blog = () => {
  return (
    <>
      <Helmet>
        <title>PanAsiatic Solutions | Human-Driven AI-Ready Customer Support Outsourcing Philippines</title>
        <meta name="description" content="Your source for outsourcing strategy, CX optimization, security standards, and industry trends. Learn from PanAsiatic’s 15+ years of expertise." />
        <meta property="og:title" content="PanAsiatic Solutions | Blog & Insights" />
        <meta property="og:description" content="Your source for outsourcing strategy, CX optimization, security standards, and industry trends. Learn from PanAsiatic’s 15+ years of expertise." />
      </Helmet>

      <main className="w-full bg-secondary-background">
        <Header />
        <HeroSection />
        <Footer />  
      </main>
    </>
  );
};

export default Blog;