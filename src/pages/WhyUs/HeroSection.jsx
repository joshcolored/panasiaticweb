import React from "react";

// or your icon library — adjust import if different
import Button from "../../components/ui/Button";
import { useNavigate } from 'react-router-dom';
// make sure this path is correct

const HeroSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };
  return (
    <div className=" bg-gray-50 flex flex-col font-sans">
      <section
        className="w-full relative py-12 md:py-20 px-4 sm:px-6 lg:px-20 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url(/images/bg-hero.png)",
        }}
      >
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="relative w-full flex justify-center md:justify-start">
            <div className="relative rounded-xl overflow-hidden shadow-2xl max-w-lg w-full">
              <img
                src="/images/rect-6854.png"
                alt="Customer support agent typing on laptop"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900"
              style={{ fontFamily: '"Raleway", sans-serif' }}
            >
              Proven BPO performance <br className="hidden lg:block" />
              & Cost Efficiency
            </h2>

            <p
              className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl"
              style={{ fontFamily: '"Raleway", sans-serif' }}
            >
              Our customer support BPO is trusted by some of the world's most
              demanding enterprises because we combine what matters most:
              service quality, security, and the ability to scale — all at a
              price point that makes sense.
            </p>

            {/* CTA */}
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
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
