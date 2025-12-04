import React from "react";
import Button from "../../components/ui/Button";
import { ArrowRightIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useNavigate } from 'react-router-dom';

const Community = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };
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
          <div className="flex flex-col gap-4 sm:gap-6 justify-start items-start w-full lg:w-[46%]">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight lg:leading-[75px] text-left text-text-primary w-full"
              style={{ fontFamily: "Raleway" }}
            >
              A community-driven approach
            </h1>

            <p
              className="text-lg sm:text-lg md:text-xl lg:text-lg font-normal leading-relaxed lg:leading-[30px] text-left text-text-primary w-full"
              style={{ fontFamily: "Microsoft Sans Serif" }}
            >
              Through our Connected Workforce initiative, we work hand-in-hand
              with local schools and government agencies to support education,
              offer job security, and continuously raise English proficiency
              standards. Our CSR efforts help our team connect with a greater
              purpose, and help us build long-term talent pipelines in Bacolod. 
            </p>
          </div>

          {/* Right Content - Image Stack */}
          <div className="relative w-full lg:w-[38%] flex justify-center">
            <div className="relative w-[260px] sm:w-[300px] lg:w-[402px] h-auto">
              {/* Main Profile Image */}
              <img
                src="/images/img_ellipse_5.png"
                alt="Customer Support Representative"
                className="w-full h-auto rounded-full z-20 relative"
              />

              {/* Button at bottom-left */}
              <div className="absolute bottom-4 left-4 flex flex-col sm:flex-row items-center gap-2 lg:bottom-4 lg:left-[-170px] group">
                {/* Small icon container with hover effect */}
                <div
                  className="bg-[#E38C7D] border border-[#E38C7D] rounded-lg p-2 sm:p-3 shadow-md flex items-center justify-center
                  transform transition-transform duration-300 group-hover:scale-110"
                >
                  <ArrowRightIcon className="w-5 sm:w-6 h-5 sm:h-6 text-[#ffffff] transform transition-transform duration-300 group-hover:translate-x-2" />
                </div>

                {/* Main CTA Button with hover effect */}
                <Button
                  onClick={handleClick}
                  text=""
                  text_font_size="16"
                  text_font_family="Raleway"
                  text_font_weight="500"
                  text_line_height="19px"
                  text_text_align="center"
                  text_color="#ffffff"
                  fill_background_color="#E38C7D"
                  border_border="1px solid #E38C7D"
                  border_border_radius="22px"
                  effect_box_shadow="0px 1px 2px #0a0c120c"
                  className="px-[18px] py-2 sm:px-6 sm:py-3 bg-[#E38C7D] flex items-center gap-2 justify-center w-full sm:w-auto z-50
               transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                >
                  <PhoneIcon className="w-6 h-6" fill="#ffffff" />
                  <span>Book Discovery Call</span>
                </Button>
              </div>

              {/* Blue Circle - FIXED TO IMAGE */}
              <div
                className="
        absolute 
        bottom-[-10px] sm:bottom-[-15px] lg:bottom-[-10px] 
        right-[-10px] sm:right-[-15px] lg:right-[-40px]
        w-[80px] sm:w-[110px] lg:w-[200px] 
        h-[80px] sm:h-[110px] lg:h-[200px] 
        bg-primary-background rounded-full
      "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
