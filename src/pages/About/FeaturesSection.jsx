import React from "react";

const FeaturesSection = () => {
  const facts = [
    {
      icon: "/images/panbuilding.png",
      title: "24/7 monitored physical and digital security (PCI DSS 4.0, ISO/ISMS certified) ",
      width: "136px",
      height: "120px",
    },
    {
      icon: "/images/prod.png",
      title:
        "Redundant power and data systems ensuring business continuity ",
      width: "150px",
      height: "120px",
    },
    {
      icon: "/images/trainingrooms.png",
      title:
        "18 training rooms, auditoriums, and on-site clinics, sleeping quarters, and wellness spaces ",
      width: "156px",
      height: "120px",
    },
  ];

  return (
    <section className="w-full bg-secondary-background border-b border-border-secondary py-10 sm:py-12 lg:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col justify-start items-start w-full">
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-11 justify-start items-start w-full">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-xl text-start text-text-primary mt-2 sm:mt-4"
              style={{ fontFamily: "Raleway" }}
            >
              Enterprise-Grade Facilities
            </h2>

            <p className="text-base sm:text-lg text-gray-900 font-normal leading-relaxed sm:leading-relaxed mb-6">
              We operate from two state-of-the-art sites remodeled in 2024, with a combined 2,180-seat capacity and scalable infrastructure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-[134px] pt-2 w-full">
              {facts?.map((fact, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 sm:gap-5 lg:gap-6 justify-start items-start"
                >
                  <div className="flex justify-start items-start">
                    <img
                      src={fact?.icon}
                      alt={`Fact ${index + 1}`}
                      className={`w-[${fact?.width}] h-[${fact?.height}] object-contain rounded-md`}
                    />
                  </div>
                  <p
                    className="text-lg sm:text-xl lg:text-xl font-normal leading-[30px] text-start text-text-primary whitespace-pre-line"
                    style={{ fontFamily: "Raleway" }}
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
