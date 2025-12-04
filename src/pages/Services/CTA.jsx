import React from "react";
// or your icon library — adjust import if different
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  }
  return (
    <div className=" bg-gray-50 flex flex-col font-sans">
      <section
        className="w-full relative py-12 md:py-20 px-4 sm:px-6 lg:px-20 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url(/images/bg-hero.png)",
        }}
      >
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col gap-8 sm:gap-10 w-full"></div>
        <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-xl text-left text-text-primary mt-3 sm:mt-4"
            style={{ fontFamily: "Raleway" }}
          >
            Transform your customer support today!
          </h2>

          {/* CTA Section */}
          <div className="mt-12 w-full flex justify-center lg:justify-end">
            <div className="flex flex-row items-center gap-4 sm:gap-5">
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
                  border_border="1px solid #49ade8"
                  border_border_radius="22px"
                  effect_box_shadow="0px 1px 2px #0a0c120c"
                  className="px-5 py-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
