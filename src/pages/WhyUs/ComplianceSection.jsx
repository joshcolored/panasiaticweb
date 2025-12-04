import React from "react";

const complianceItems = [
  {
    number: "01",
    title: "Fast, seamless onboarding",
    description: "Get up and running quickly with minimal ramp time.",
    color: "bg-blue-400",
  },
  {
    number: "02",
    title: "Flexible scalability",
    description: "Easily scale teams up or down as your business evolves.",
    color: "bg-red-300",
  },
  {
    number: "03",
    title: "Custom SOPs, KPIs & Dashboard",
    description: "Tailored processes, metrics, and reporting for you.",
    color: "bg-blue-400",
  },
  {
    number: "04",
    title: "Full-service or Hybrid Options",
    description: "Choose between end-to-end BPO or hybrid support.",
    color: "bg-red-300",
  },
];

const ComplianceSection = () => {
  return (
    <section className="w-full bg-secondary-background py-12 sm:py-14 lg:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        {/* Added left padding for mobile/tablet only */}
        <div className="flex flex-col gap-8 sm:gap-10 w-full pl-4 sm:pl-6 lg:pl-0">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-text-primary mt-3 sm:mt-4"
            style={{ fontFamily: "Raleway" }}
          >
            Fast, Flexible and Modular BPO
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 w-full">
            {complianceItems.map((item, idx) => (
              <div key={idx} className="flex flex-col items-start text-start">
                {/* Number Circle */}
                <div
                  className={`
                    w-16 h-16 sm:w-20 sm:h-20 lg:w-20 lg:h-20
                    flex items-center justify-center
                    rounded-full text-white text-2xl sm:text-3xl lg:text-4xl mb-4
                    ${item.color}
                  `}
                >
                  {item.number}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl lg:text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base font-semibold text-gray-900">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <hr className="mt-20 mx-8 sm:mx-20 lg:mx-40 border-t border-gray-500" />
      </div>
    </section>
  );
};

export default ComplianceSection;
