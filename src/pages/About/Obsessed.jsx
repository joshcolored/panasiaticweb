import React from "react";

const Obsessed = () => {
  return (
    <section className="w-full bg-primary-light py-12 sm:py-16 lg:py-[66px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-[50px] justify-center items-center w-full">
          
          {/* Heading */}
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center text-text-primary mt-2 sm:mt-3"
            style={{ fontFamily: "Raleway" }}
          >
            Obsessed with Customer Experience
          </h2>

          {/* Content */}
          <div className="w-full flex justify-center">
            <div className="text-center">
              <p
                className="text-base sm:text-lg lg:text-xl font-normal text-text-primary leading-relaxed"
                style={{ fontFamily: "Raleway" }}
              >
                We don’t just talk about customer experience — we live it. Our
                long-term relationship with Verizon, spanning over a decade and
                multiple brands, is a testament to our dedication to performance,
                reliability, and insight-driven service. We’re also future-ready:
                our AI tools and partnerships with top-tier providers allow clients
                to enhance their programs with automation, insight extraction, and
                authentication — offered as optional add-ons that integrate
                seamlessly into any engagement.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Obsessed;
