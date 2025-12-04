import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Collaborate = () => {
  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight text-center lg:text-left">
              Ready to Collaborate?
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed text-center lg:text-left">
              Register your interest and we'll send you everything you need to
              get started— including our partner deck, onboarding process, and
              commercial model.
            </p>

            <div className="mt-10 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[500px]">
                {/* Blue background block (MOBILE + TABLET FIXED, DESKTOP UNTOUCHED) */}
                {/* Blue background block */}
                <div
                  className="
    absolute 
    top-[-20px] 
    lg:left-[38px] 
    lg:w-[100%] 
    lg:h-[330px]
    bg-primary-background

    hidden      /* Hide on mobile */
    md:hidden   /* Hide on tablet */
    lg:block    /* Show ONLY on desktop */
  "
                ></div>

                {/* Foreground image (responsive) */}
                <img
                  src="/images/img_rectangle_6847.png"
                  alt="Customer Support"
                  className="
                    relative
                    w-[90%]
                    h-[200px]

                    sm:w-[350px]
                    sm:h-[250px]

                    md:w-[400px]
                    md:h-[280px]

                    lg:w-[500px]
                    lg:h-[330px]

                    object-cover
                    ml-4
                    shadow-md
                  "
                />

                {/* Responsive arrow button (center on mobile/tablet, right on desktop) */}
                <button
                  className="
                    absolute
                    bottom-[-20px]
                    left-1/2
                    -translate-x-1/2

                    bg-[#E38C7D]
                    hover:bg-[#b97265]
                    text-white
                    w-[110px]
                    h-[40px]
                    rounded-lg
                    shadow-lg
                    flex 
                    items-center 
                    justify-center
                    transition-all
                    duration-300
                    hover:scale-110

                    /* DESKTOP — DO NOT TOUCH */
                    lg:left-auto
                    lg:right-[20px]
                    lg:translate-x-0
                  "
                >
                  <ArrowRightIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-5 py-4 border border-gray-200 rounded-md focus:ring-2 focus:ring-teal-500"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-5 py-4 border border-gray-200 rounded-md focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <input
                type="email"
                placeholder="you@company.com"
                className="w-full px-5 py-4 border border-gray-200 rounded-md focus:ring-2 focus:ring-teal-500"
              />

              <div className="relative">
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full pl-16 pr-5 py-4 border border-gray-200 rounded-md focus:ring-2 focus:ring-teal-500"
                />
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                  US
                </div>
              </div>

              <textarea
                rows={5}
                placeholder="Message"
                className="w-full px-5 py-4 border border-gray-200 rounded-md resize-none focus:ring-2 focus:ring-teal-500"
              />

              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-3 h-4 w-4 text-teal-500" />
                You agree to our friendly privacy policy.
              </label>

              <button
                type="submit"
                className="w-full bg-[#E38C7D] text-white font-medium py-4 rounded-md shadow-md transition-all hover:shadow-lg"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
