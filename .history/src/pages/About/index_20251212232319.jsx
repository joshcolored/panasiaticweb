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
        <title>About PanAsiatic | Bacolod Contact Center</title>
        <meta name="description" content="Founded in 2010, PanAsiatic operates 2 secure sites and 2,500+ staff, delivering people-first, enterprise CX. Book a Discovery Call." />
        <meta property="og:title" content="About PanAsiatic | Bacolod Contact Center" />
        <meta property="og:description" content="Founded in 2010, PanAsiatic operates 2 secure sites and 2,500+ staff, delivering people-first, enterprise CX. Book a Discovery Call." />
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