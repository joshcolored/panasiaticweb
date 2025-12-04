import React from 'react';

const StepSection = () => {
  const facts = [
    {
      icon: "/images/1.png",
      title: "Trusted by global brands",
      description: "15+ years delivering enterprise-grade CX, including for one of the world’s largest telcos.",
      width: "156px",
      height: "120px"
    },
    {
      icon: "/images/2.png",
      title: "Facility based & compliant",
      description: "ISO 27001, PCI-DSS 4.0, and SOC 2 certified, with built-in data, power, and network redundancy.",
      width: "156px",
      height: "120px"
    },
    {
      icon: "/images/3.png",
      title: "AI-Readiness",
      description: "Deploy automation, insight extraction, and customer authentication tools with ease.",
      width: "156px",
      height: "120px"
    },
    {
      icon: "/images/4.png",
      title: "Flexible & fast development",
      description: "Seamless onboarding designed to minimize ramp time, reduce friction and get operations live quickly.",
      width: "156px",
      height: "120px"
    },
    {
      icon: "/images/5.png",
      title: "Proven Cost Advantage",  
      description: "Among the most competitively priced call centers in the region without compromising quality.",
      width: "156px",
      height: "120px"
    }
  ];

  return (
    <section className="w-full bg-secondary-background py-10 sm:py-12 lg:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col items-center justify-center w-full">

          {/* DESKTOP OLYMPIC STYLE */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-[80px] w-full justify-items-center mb-8">
            {/* Top row */}
            {facts.slice(0, 3).map((fact, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 justify-center items-center"
              >
                <img
                  src={fact.icon}
                  alt={`Fact ${index + 1}`}
                  style={{ width: fact.width, height: fact.height, objectFit: "contain" }}
                />
                <p
                  className="text-xl font-semibold leading-[30px] text-center text-text-primary"
                  style={{ fontFamily: "Raleway" }}
                >
                  {fact.title}
                </p>
                <p
                  className="text-base font-semibold leading-[24px] text-center text-text-primary max-w-sm"
                  style={{ fontFamily: "Raleway" }}
                >
                  {fact.description}
                </p>
              </div>
            ))}

            {/* Bottom row - offset like Olympic rings */}
            <div className="lg:col-span-3 flex justify-center gap-[134px] mt-[-40px]">
              {facts.slice(3).map((fact, index) => (
                <div
                  key={index + 3}
                  className="flex flex-col gap-4 justify-center items-center"
                >
                  <img
                    src={fact.icon}
                    alt={`Fact ${index + 4}`}
                    style={{ width: fact.width, height: fact.height, objectFit: "contain" }}
                  />
                  <p
                    className="text-xl font-semibold leading-[30px] text-center text-text-primary"
                    style={{ fontFamily: "Raleway" }}
                  >
                    {fact.title}
                  </p>
                  <p
                    className="text-base font-semibold leading-[24px] text-center text-text-primary"
                    style={{ fontFamily: "Raleway" }}
                  >
                    {fact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* TABLET & MOBILE RESPONSIVE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-8 sm:gap-12 w-full justify-items-center">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 justify-center items-center"
              >
                <img
                  src={fact.icon}
                  alt={`Fact ${index + 1}`}
                  style={{ width: fact.width, height: fact.height, objectFit: "contain" }}
                />
                <p
                  className="text-lg sm:text-xl font-semibold leading-[30px] text-center text-text-primary"
                  style={{ fontFamily: "Raleway" }}
                >
                  {fact.title}
                </p>
                <p
                  className="text-base font-semibold leading-[24px] text-center text-text-primary"
                  style={{ fontFamily: "Raleway" }}
                >
                  {fact.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default StepSection;
