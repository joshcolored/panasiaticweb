import React from "react";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const handleClick = () => {
    navigate("/contact");
    // Optional: smooth scroll to top when navigating
    window.scrollTo(0, 0);
  };
  const navigate = useNavigate();

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
              Exceptional Customer Support Outsourcing: Human driven, AI-ready
            </h1>

            <p
              className="text-lg sm:text-lg md:text-xl lg:text-lg font-normal leading-relaxed lg:leading-[30px] text-left text-text-primary w-full"
              style={{ fontFamily: "Raleway" }}
            >
              We are a high-performing contact center based in the Philippines.
              We deliver outstanding omnichannel support, exceptional value, and
              a future-ready infrastructure.
            </p>

            <div className="flex flex-row gap-2 items-center mt-4">
              <Button
                onClick={handleClick}
                text=""
                text_font_size="16"
                text_font_family="Raleway"
                text_font_weight="500"
                text_line_height="19px"
                text_text_align="left"
                text_color="#ffffff"
                fill_background_color="#49ade8"
                border_border="1 solid #49ade8"
                border_border_radius="22px"
                effect_box_shadow="0px 1px 2px #0a0c120c"
                className="px-[18px] py-2 flex items-center gap-2"
              >
                <img
                  src="/images/img_phone.png"
                  alt="Phone"
                  className="w-6 h-6"
                />
                <span>Book Discovery Call</span>
              </Button>
            </div>
          </div>

          {/* Right Content - Image Stack */}
          <div className="relative w-full lg:w-[38%] flex justify-center">
            <div className="relative w-[260px] sm:w-[300px] lg:w-[402px] h-auto">
              {/* Background Vector */}
              <img
                src="/images/img_vector.svg"
                alt=""
                className="absolute top-0 left-0 w-[70px] sm:w-[90px] lg:w-[106px] h-auto z-[999]"
              />

              {/* Main Profile Image */}
              <img
                src="/images/img_ellipse_5.png"
                alt="Customer Support Representative"
                className="w-full h-auto rounded-full z-20 relative"
              />

              {/* Blue Circle - FIXED TO IMAGE */}
              <div
                className="
      absolute 
      bottom-[-10px] sm:bottom-[-15px] lg:bottom-[-20px] 
      right-[-10px] sm:right-[-15px] lg:right-[-20px]
      w-[80px] sm:w-[110px] lg:w-[134px] 
      h-[80px] sm:h-[110px] lg:h-[134px] 
      bg-primary-background rounded-full z-30"
              ></div>

              {/* Orange Circle */}
              <div
                className="
      absolute 
      top-[10px] sm:top-[15px] lg:top-[20px] 
      left-[10px] 
      w-[60px] sm:w-[90px] lg:w-[116px] 
      h-[60px] sm:h-[90px] lg:h-[116px] 
      bg-accent-coral-light rounded-full z-30"
              ></div>

              {/* Arrow Button */}
              <div
                className="
      absolute 
      bottom-[70px] sm:bottom-[90px] lg:bottom-[134px] 
      left-[-40px]
      bg-accent-coral rounded-xl 
      w-[110px] p-2 
      shadow-[0px_1px_2px_#0a0c120c] z-40
      flex items-center justify-center
    "
              >
                <img
                  src="/images/img_arrow_right.svg"
                  alt="Arrow"
                  className="w-8 sm:w-9 lg:w-9 h-8 sm:h-9 lg:h-9 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
