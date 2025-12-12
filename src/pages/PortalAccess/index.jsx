import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const PortalAccess = () => {
  return (
    <>
      <Helmet>
        <title>Portal Access | PanAsiatic Solutions - Client & Employee Resources</title>
        <meta name="description" content="Access PanAsiatic Solutions portal. Clients can explore services, insights, and success stories. Employees can access resources, tools and updates for customer support operations." />
        <meta property="og:title" content="Portal Access | PanAsiatic Solutions - Client & Employee Resources" />
        <meta property="og:description" content="Access PanAsiatic Solutions portal. Clients can explore services, insights, and success stories. Employees can access resources, tools and updates for customer support operations." />
      </Helmet>

      <main 
        className="w-full min-h-screen bg-[url('/images/img_.png')] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/img_.png')" }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-start gap-[36px] sm:gap-[54px] lg:gap-[72px] pt-[34px] sm:pt-[51px] lg:pt-[68px] pb-8 sm:pb-12 lg:pb-16">
            
            {/* Logo Section */}
            <div className="w-full flex justify-center mt-[34px] sm:mt-[51px] lg:mt-[68px]">
              <img 
                src="/images/image_logo.png" 
                alt="PanAsiatic Solutions Logo" 
                className="w-[118px] h-[37px] sm:w-[177px] sm:h-[55px] lg:w-[236px] lg:h-[74px]" 
              />
            </div>

            {/* Portal Cards Section */}
            <div className="w-full px-4 sm:px-16 lg:px-32">
              <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-[208px] justify-center items-stretch max-w-[1024px] mx-auto">
                
                {/* Clients Card */}
                <Link to = "/home">
                  
                <div className="w-full lg:w-[408px] bg-secondary-light border-[3px] border-solid border-primary-background rounded-sm p-6 sm:p-8 lg:p-12 shadow-[0px_4px_4px_#00000026] flex flex-col">
                  
                  {/* Client Icon */}
                  <div className="mb-6 sm:mb-8 lg:mb-[82px]">
                    <img 
                      src="/images/img_star_01.svg" 
                      alt="Client Services" 
                      className="w-[36px] h-[36px] sm:w-[54px] sm:h-[54px] lg:w-[72px] lg:h-[72px]" 
                    />
                  </div>

                  {/* Client Content */}
                  
                  
                  <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
                    <h2 className="text-[20px] sm:text-[26px] lg:text-3xl font-normal leading-[24px] sm:leading-[31px] lg:leading-[38px] text-left text-primary font-['Raleway']">
                      Clients
                    </h2>
                    <p className="text-[14px] sm:text-[18px] lg:text-[22px] font-normal leading-[20px] sm:leading-[26px] lg:leading-[32px] text-left text-accent-gray font-['Microsoft_Sans_Serif']">
                      Explore our services, insights, and success stories.
                    </p>
                  </div>
                </div>
            </Link>
                {/* Employees Card */}
                <a href="https://www.panasiaticcallcenters.com/portal/" target="_blank" 
                       rel="noopener noreferrer" className="block">

                  <div className="w-full lg:w-[408px] bg-secondary-light border-[3px] border-solid border-primary-background rounded-sm p-6 sm:p-8 lg:p-12 shadow-[0px_4px_4px_#00000026] flex flex-col">
                    
                    {/* Employee Icon */}
                    <div className="mb-6 sm:mb-8 lg:mb-[82px]">
                      <img 
                        src="/images/img_search.svg" 
                        alt="Employee Resources" 
                        className="w-[36px] h-[36px] sm:w-[54px] sm:h-[54px] lg:w-[72px] lg:h-[72px]" 
                      />
                    </div>

                    {/* Employee Content */}
                    <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
                      <h2 className="text-[20px] sm:text-[26px] lg:text-3xl font-normal leading-[24px] sm:leading-[31px] lg:leading-[38px] text-left text-primary font-['Raleway']">
                        Employees
                      </h2>
                      <p className="text-[14px] sm:text-[18px] lg:text-[22px] font-normal leading-[20px] sm:leading-[26px] lg:leading-[32px] text-left text-accent-gray font-['Microsoft_Sans_Serif']">
                        Access your ressources, tools and updates
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default PortalAccess;