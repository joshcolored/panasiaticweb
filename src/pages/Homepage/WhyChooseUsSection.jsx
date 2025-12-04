import React from 'react';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      number: "01",
      title: "Exceptional customer experience"
    },
    {
      number: "02",
      title: "Enterprise-grade data security"
    },
    {
      number: "03",
      title: "Artificial intelligence readiness"
    }
  ];

  return (
    <section className="w-full bg-primary-light py-12 sm:py-16 lg:py-[66px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-[50px] justify-center items-center w-full">
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-xl text-center text-text-primary mt-2 sm:mt-3"
            style={{ fontFamily: 'Raleway' }}
          >
            Why Clients Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-[130px] w-full">
            {reasons?.map((reason, index) => (
              <div key={index} className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center gap-4 sm:gap-0 w-full max-w-[340px] mx-auto sm:mx-0">
                <span 
                  className="text-6xl sm:text-7xl lg:text-hero font-normal leading-hero text-left text-text-primary"
                  style={{ fontFamily: 'Raleway' }}
                >
                  {reason?.number}
                </span>
                <p 
                  className="text-xl sm:text-2xl lg:text-3xl font-normal leading-9 text-left text-text-primary w-full sm:w-1/2"
                  style={{ fontFamily: 'Raleway' }}
                >
                  {reason?.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;