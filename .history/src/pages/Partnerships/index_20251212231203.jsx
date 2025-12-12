import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import StepSection from './StepSection';
import PartnerBenefits from './PartnerBenefits';
import ComplianceSection from './ComplianceSection';
import Collaborate from './Collaborate';



const Partnerships = () => {
  return (
    <>
      <Helmet>
        
        <meta name="description" content="Partner with PanAsiatic for secure, scalable, and cost-effective CX outsourcing. Register today to collaborate." />
        <meta property="og:title" content="Partnerships | CX Brokers & Consultants" />
        <meta property="og:description" content="Partner with PanAsiatic for secure, scalable, and cost-effective CX outsourcing. Register today to collaborate." />
      </Helmet>

      <main className="w-full bg-secondary-background">
        <Header />
        <HeroSection />
        <StepSection />
        <PartnerBenefits />
        <ComplianceSection />
        <Collaborate />
        <Footer />  
      </main>
    </>
  );
};

export default Partnerships;