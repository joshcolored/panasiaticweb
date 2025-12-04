import React from 'react';

const PercentageSection = () => {
  const facts = [
    {
      icon: "/images/50.png",
      title: "of our workforce has been with us for over 2 years ",
      width: "136px",
      height: "120px"
    },
    {
      icon: "/images/560.png",
      title: "team members have been promoted internally",
      width: "150px",
      height: "120px"
    },
    {
      icon: "/images/61.png",
      title: "of our managers roe through the ranks",
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
             People First, Always
            </h2>

            <p
              className="text-lg sm:text-lg md:text-xl lg:text-lg lg:mb-4 font-normal leading-relaxed lg:leading-[30px] text-left text-text-primary w-full"
              style={{ fontFamily: "Raleway" }}
            >
              We invest in our people through training, career paths, wellness programs, and vibrant community initiatives -from sports and music to yoga, meditation, and spiritual spaces. We believe the best service comes from happy, empowered teams: 
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6 sm:gap-12 lg:gap-[134px] pt-2 w-full">
              {facts?.map((fact, index) => (
                <div key={index} className="flex flex-col gap-4 sm:gap-5 lg:gap-6 justify-center items-center">
                  <div className="flex justify-center items-center">
                    <img 
                      src={fact?.icon} 
                      alt={`Fact ${index + 1}`} 
                      className={`w-[${fact?.width}] h-[${fact?.height}] object-contain`}
                    />
                  </div>
                  <p 
                    className="text-lg sm:text-xl lg:text-xl font-normal leading-[30px] text-center text-text-primary whitespace-pre-line"
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

export default PercentageSection;