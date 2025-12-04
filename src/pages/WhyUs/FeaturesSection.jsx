import React from 'react';

const FeaturesSection = () => {
  const facts = [
    {
      icon: "/images/money.png",
      title: "Serving all 10 brands of a Fortune 500 client ",
      width: "136px",
      height: "120px"
    },
    {
      icon: "/images/world.png",
      title: "Trusted partner to Verizon, supporting all 10 portfolio brands since 2010",
      width: "150px",
      height: "120px"
    },
    {
      icon: "/images/star.png",
      title: "Recognized for industry-leading CSAT performance and outstanding agent tenure",
      width: "156px",
      height: "120px"
    }
  ];

  return (
    <section className="w-full bg-secondary-background border-b border-border-secondary py-10 sm:py-12 lg:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col justify-start items-start w-full">
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-11 justify-start items-start w-full">
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-xl text-start text-text-primary mt-2 sm:mt-4"
              style={{ fontFamily: 'Raleway' }}
            >
              A call center with a Proven Performance
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-[134px] pt-2 w-full">
              {facts?.map((fact, index) => (
                <div key={index} className="flex flex-col gap-4 sm:gap-5 lg:gap-6 justify-start items-start">
                  <div className="flex justify-start items-start">
                    <img 
                      src={fact?.icon} 
                      alt={`Fact ${index + 1}`} 
                      className={`w-[${fact?.width}] h-[${fact?.height}] object-contain`}
                    />
                  </div>
                  <p 
                    className="text-lg sm:text-xl lg:text-xl font-normal leading-[30px] text-start text-text-primary whitespace-pre-line"
                    style={{ fontFamily: 'Raleway' }}
                  >
                    {fact?.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;