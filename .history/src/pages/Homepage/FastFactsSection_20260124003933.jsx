import React from "react";

const FastFactsSection = () => {
  const facts = [
    {
      icon: "/images/img_group_9.svg",
      title: "Client Obsessed, \n4500 agents",
      width: "136px",
      height: "120px",
    },
    {
      icon: "/images/img_group_7.svg",
      title: "2 State-of-the-Art Facilities",
      width: "150px",
      height: "120px",
    },
    {
      icon: "/images/img_group_5.svg",
      title: "Partner to a Fortune 500 company since 2010",
      width: "156px",
      height: "120px",
    },
    {
      icon: "/images/img_group_10.svg",
      title: "ISO 27001, PCI-DSS 4.0, SOC 2 certified",
      width: "148px",
      height: "120px",
    },
      {
      icon: "/images/CORSeal.png",
      title: "ISO 27001, PCI-DSS 4.0, SOC 2 certified",
      width: "1px",
      height: "1px",
    },
  ];

  return (
    <section className="w-full bg-secondary-background py-10 sm:py-12 lg:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col justify-start items-center w-full">
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-11 justify-start items-center w-full">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-xl text-center text-text-primary mt-2 sm:mt-4"
              style={{ fontFamily: "Raleway" }}
            >
              Fast Facts
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-[134px] w-full">
              {facts?.map((fact, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 sm:gap-5 lg:gap-6 justify-start items-center"
                >
                  <div className="flex justify-center items-center">
                    <img
                      src={fact?.icon}
                      alt={`Fact ${index + 1}`}
                      className={`w-[${fact?.width}] h-[${fact?.height}] object-contain`}
                    />
                  </div>
                  <p
                    className="text-lg sm:text-xl lg:text-xl font-normal leading-[30px] text-center text-text-primary whitespace-pre-line"
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
      <div>
        <hr className="mt-20 mx-8 sm:mx-20 lg:mx-40 border-t border-gray-300" />
      </div>
    </section>
  );
};

export default FastFactsSection;
