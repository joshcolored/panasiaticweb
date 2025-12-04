import React from "react";
import Button from "../../components/ui/Button";
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };
  return (
    <section
      className="w-full relative bg-cover bg-center py-12 md:py-20 px-4 sm:px-6 lg:px-20 flex items-center justify-center"
      style={{
        backgroundColor: "#49ade8",
        minHeight: "528px",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center text-center gap-6 md:gap-8 lg:gap-12 px-2 sm:px-4">
        {/* Heading */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug sm:leading-tight md:leading-tight lg:leading-[75px] text-white"
          style={{ fontFamily: "Raleway" }}
        >
          Enterprise-Grade CX Outsourcing for all Industries
        </h1>

        {/* Paragraph */}
        <p
          className="text-base sm:text-lg md:text-xl lg:text-lg font-normal leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[30px] text-white max-w-3xl"
          style={{ fontFamily: "Raleway" }}
        >
        PanAsiatic brings over a decade of enterprise-level experience, combining deep operational know-how with the flexibility to tailor our solutions to any customer-facing business - regardless of sector, complexity, or scale. 
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          {/* Small icon container */}
          <div className="bg-white border border-[#49ade8] rounded-lg p-2 sm:p-3 shadow-md flex items-center justify-center">
            <ArrowRightIcon className="w-5 sm:w-6 h-5 sm:h-6 text-[#49ade8]" />
          </div>

          {/* Main CTA Button */}
          <Button
            onClick={handleClick}
            text=""
            text_font_size="16"
            text_font_family="Raleway"
            text_font_weight="500"
            text_line_height="19px"
            text_text_align="center"
            text_color="#49ade8"
            fill_background_color="#ffffff"
            border_border="1 solid #49ade8"
            border_border_radius="22px"
            effect_box_shadow="0px 1px 2px #0a0c120c"
            className="px-[18px] py-2 sm:px-6 sm:py-3 flex items-center gap-2 justify-center w-full sm:w-auto"
          >
            <PhoneIcon className="w-6 h-6" fill="#49ade8" />
            <span>Book Discovery Call</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
