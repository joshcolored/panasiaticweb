import React from "react";

const complianceItems = [
  {
    number: "01",
    title: "ISO 27001",
    description: "Certified information security standards",
    color: "bg-blue-400",
  },
  {
    number: "02",
    title: "PCI-DSS 4.0",
    description: "Certified Payment Security Data Controls",
    color: "bg-red-300",
  },
  {
    number: "03",
    title: "SOC2",
    description: "Certified Operational Trust and Compliance",
    color: "bg-blue-400",
  },
  {
    number: "04",
    title: "24/7 Monitoring",
    description: "Badge secure workspace, redundant power & data infrastructure",
    color: "bg-red-300",
  },
];

const ComplianceSection = () => {
  return (
    <section className="w-full bg-[#49ADE814] py-12 sm:py-14 lg:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        {/* Added left padding for mobile/tablet only */}
        <div className="flex flex-col gap-8 sm:gap-10 w-full pl-4 sm:pl-6 lg:pl-0">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-text-primary mt-3 sm:mt-4"
            style={{ fontFamily: "Raleway" }}
          >
            Secure & Compliant Outsourcing
          </h2>

          <p className="text-base sm:text-lg text-gray-900 font-normal leading-relaxed sm:leading-relaxed mb-6">
            Our 100% facility-based operations are fully certified to protect client and customer data.
          </p>

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
    </section>
  );
};

export default ComplianceSection;
