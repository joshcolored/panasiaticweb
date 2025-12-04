import React from "react";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
    const handleClick = () => {
    navigate("/contact");
    // Optional: smooth scroll to top when navigating
    window.scrollTo(0, 0);
  };
  const navigate = useNavigate();
  return (
    <section
      className="w-full relative bg-cover bg-center py-12 sm:py-16 lg:py-[62px] px-4 sm:px-6 lg:px-20"
      style={{
        backgroundImage: "url(/images/img_rectangle_6852.png)",
        minHeight: "480px",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto relative">
        {/* GRID LAYOUT — IMAGE LEFT, TEXT RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-20">
          {/* LEFT IMAGE BLOCK */}
          <div className="relative w-full flex justify-center lg:justify-start">
            {/* Blue Background Block */}
            <div className="absolute top-0 left-0 w-[75%] sm:w-[300px] lg:w-[330px] h-[230px] sm:h-[260px] lg:h-[300px] bg-primary-background rounded-md"></div>

            {/* Foreground Image */}
            <img
              src="/images/img_rectangle_6847.png"
              alt="Customer Support"
              className="relative w-[85%] sm:w-[320px] lg:w-[360px] h-[230px] sm:h-[260px] lg:h-[300px] object-cover mt-6 ml-4 shadow-md rounded-sm"
            />

            {/* Red CTA Bubble */}
            <div
              className="
              absolute
              bottom-[-40px] sm:bottom-[-45px] lg:bottom-[-55px]
              left-1/2 transform -translate-x-1/2
              bg-accent-coral px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5
              rounded-xl shadow-lg w-[90%] sm:w-[360px]
              text-center z-30
            "
            >
              <p
                className="text-base sm:text-lg lg:text-xl font-semibold text-text-primary"
                style={{ fontFamily: "Raleway" }}
              >
                Discover how our proven approach can elevate your customer
                experience
              </p>
            </div>
          </div>

          {/* RIGHT TEXT BLOCK */}
          <div className="flex flex-col justify-center mt-20 lg:mt-0">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary leading-tight"
              style={{ fontFamily: "Raleway" }}
            >
              Ready to Transform Your Customer Support?
            </h2>

            {/* BUTTONS ROW */}
            <div className="flex flex-row items-center gap-4 sm:gap-5 mt-10 lg:mt-12">
              {/* Circle Arrow Button */}
              <div className="bg-primary-background border border-primary-background rounded-lg p-2 sm:p-3 shadow-md">
                <img
                  src="/images/img_arrow_right_white_a700.svg"
                  alt="Arrow"
                  className="w-5 sm:w-6 h-5 sm:h-6"
                />
              </div>

              {/* Phone + CTA Button */}
              <div className="flex flex-row items-center gap-2">
                <Button
                  onClick={handleClick}
                  text={
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/img_phone.png"
                        alt="Phone"
                        className="w-5 sm:w-6 h-5 sm:h-6"
                      />
                      <span>Book Discovery Call</span>
                    </div>
                  }
                  text_font_size="18"
                  text_font_family="Raleway"
                  text_font_weight="500"
                  text_line_height="24px"
                  text_text_align="center"
                  text_color="#ffffff"
                  fill_background_color="#49ade8"
                  border_border="1 solid #49ade8"
                  border_border_radius="22px"
                  effect_box_shadow="0px 1px 2px #0a0c120c"
                  className="px-5 py-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
