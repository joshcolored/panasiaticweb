import React from "react";

const InfrastructureSection = () => {
  const features = [
    { text: "Deploy automation on our cloud or yours" },
    { text: "Partners with leading tech providers for next-gen support" },
  ];

  return (
    <section className="w-full bg-white border-b border-gray-200 py-10 sm:py-12 lg:pb-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        {/* Title */}
        <h2
          className="text-center lg:text-left text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          CX with an AI-ready Infrastructure
        </h2>

        {/* Main Layout */}
        <div
          className="
            flex flex-col lg:flex-row
            justify-between
            items-center lg:items-start
            gap-10 lg:gap-20 
            pt-10
            w-full
          "
        >
          {/* LEFT SIDE - FIXED WIDTH (icon + text) */}
          <div className="flex flex-row items-center text-center gap-3 flex-shrink-0 lg:items-center lg:text-left">
            <img
              src="/images/img_noun_ai_8057248.svg"
              alt="AI Icon"
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain"
            />

            <p
              className="text-lg sm:text-xl font-semibold text-gray-900"
              style={{ fontFamily: "Raleway" }}
            >
              AI services
            </p>

            <p
              className="text-base sm:text-lg text-gray-600"
              style={{ fontFamily: "Raleway" }}
            >
              (Optional Add-ons)
            </p>
          </div>

          {/* RIGHT SIDE - TAKES FULL REMAINING SPACE */}
          <div className="flex flex-col gap-6 w-full flex-1 lg:max-w-[700px]">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <span
                  className="text-lg sm:text-xl font-semibold text-gray-900"
                  style={{ fontFamily: "Raleway" }}
                >
                  {index + 1}.
                </span>

                <p
                  className="text-lg sm:text-xl text-gray-900 leading-relaxed"
                  style={{ fontFamily: "Raleway" }}
                >
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
