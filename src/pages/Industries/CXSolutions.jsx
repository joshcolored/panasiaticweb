import React from "react";
import Button from "../../components/ui/Button";
import { useNavigate } from 'react-router-dom';

const CXSolutions = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };
  return (
    <section
      className="w-full relative bg-[#49ADE814] py-12 md:py-20 px-4 sm:px-6 lg:px-20"
    >
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="relative w-full lg:w-[38%] flex justify-center">
            <div className="relative w-[260px] sm:w-[300px] lg:w-[402px] h-auto">
              {/* Background Vector */}

              {/* Main Profile Image */}
              <img
                src="/images/img_ellipse_5.png"
                alt="Customer Support Representative"
                className="w-full h-auto rounded-full z-20 relative"
              />

              {/* Orange Circle */}
              <div
                className="
      absolute 
      top-[10px] sm:top-[15px] lg:top-[-3px] 
      left-[-40px] 
      w-[60px] sm:w-[90px] lg:w-[170px] 
      h-[60px] sm:h-[90px] lg:h-[170px] 
      bg-[#E38C7D] rounded-full"
              ></div>

              {/* CTA Section */}
              <div
                className="mt-[-6rem] w-full flex justify-center lg:justify-end"
                style={{ zIndex: 9999, position: "absolute" }}
              >
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
                      className="px-6 py-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Stack */}

          <div className="flex flex-col gap-4 sm:gap-6 justify-start items-start w-full lg:w-[46%]">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight lg:leading-[75px] text-left text-text-primary w-full"
              style={{ fontFamily: "Raleway" }}
            >
              A CX Solution that is Modular for Any Sector
            </h1>

            <p
              className="text-lg sm:text-lg md:text-xl lg:text-lg font-normal leading-relaxed lg:leading-[30px] text-left text-text-primary w-full"
              style={{ fontFamily: "Raleway" }}
            >
              While our deepest experience is in telecom, our operational model
              is built to flex. With secure infrastructure, AI-ready systems,
              and a highly trainable workforce, we’re able to quickly adapt to
              the needs of any customer-centric business.  <br/><br/> Whether you’re in
              health tech, e-commerce, travel, or beyond we’ll work with you to
              design a CX solution that fits. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CXSolutions;
