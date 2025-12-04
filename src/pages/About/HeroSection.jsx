import React from "react";
import Button from "../../components/ui/Button";

const HeroSection = () => {
  return (
    <section
      className="w-full relative bg-cover bg-center py-12 md:py-20 px-4 sm:px-6 lg:px-20"
      style={{
        backgroundImage: "url(/images/bg-hero.png)",
        minHeight: "528px",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex flex-col gap-4 sm:gap-6 justify-start items-start w-full lg:w-[50%]">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight lg:leading-[75px] text-left text-text-primary w-full"
              style={{ fontFamily: "Raleway" }}
            >
              High-Performing contact Center in the Philippines
            </h1>

            <p
              className="text-lg sm:text-lg md:text-xl lg:text-lg font-normal leading-relaxed lg:leading-[30px] text-left text-text-primary w-full"
              style={{ fontFamily: "Raleway" }}
            >
              Founded in 2010, PanAsiatic Solutions is a high-performing contact
              center based in Bacolod, Philippines, delivering secure, scalable,
              and cost-effective BPO services to enterprise clients - including
              a long-standing partnership with a Fortune 500 company across all
              its consumer brands. <br/><br/>We were built by a group of entrepreneurs who
              saw a gap in the market: the need for world-class service at
              competitive rates. Since then, we’ve grown into one of the
              region’s most trusted CX providers - combining operational
              excellence with a deep commitment to both our people and our
              clients. 
            </p>
          </div>

          {/* Right Content - Image Stack */}
          <div className="relative w-full lg:w-[40%] flex justify-center">
            <div className="relative w-[500px] sm:w-[800px] lg:w-[500px] h-auto">
              {/* Main Profile Image */}
              <img
                src="/images/Hero1.png"
                alt="Customer Support Representative"
                className="w-full h-auto z-20 relative rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
