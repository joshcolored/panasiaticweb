import React from 'react';
import { Shield, Award, Eye, RefreshCw } from 'lucide-react';

const Security = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Facility-based model",
      description: "No remote operations - complete control and security",
      color: "text-[#49ade8]"
    },
    {
      icon: Award,
      title: "Security certifications",
      description: "ISO 27001, PCI-DSS 4.0, SOC 2 certified, BCMS 22301:2019",
      color: "text-[#49ade8]"
    },
    {
      icon: Eye,
      title: "24/7 monitoring",
      description: "Continuous physical and digital oversight",
      color: "text-[#49ade8]"
    },
    {
      icon: RefreshCw,
      title: "Built-in Redundancy",
      description: "Resilient infrastructure across data, power and network",
      color: "text-[#49ade8]"
    }
  ];

  return (
    <section className="w-full bg-[#49ADE814] pt-12 lg:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Column - Features */}
          <div className="flex-1 w-full">
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-gray-900 mb-8"
              style={{ fontFamily: 'Raleway' }}
            >
              A certified contact center that puts Security first
            </h2>
            
            <div className="flex flex-col gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className={`${feature.color} mt-1 flex-shrink-0`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 
                        className="text-lg font-semibold text-[#49ade8]"
                        style={{ fontFamily: 'Raleway' }}
                      >
                        {feature.title}
                      </h3>
                      <p 
                        className="text-base text-gray-700 leading-relaxed"
                        style={{ fontFamily: 'Raleway' }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Security Image */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 relative">
                {/* Simulated security network visualization */}
                
                <img 
                  src="/images/rect-9090.png" 
                  alt="Security Visualization" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Security;