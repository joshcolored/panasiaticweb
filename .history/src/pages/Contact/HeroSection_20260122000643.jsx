import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const HeroSection = () => {
 


  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column - Text + Form */}
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact PanAsiatic
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We'd love to hear from you. Whether you're exploring outsourcing
              options or looking to partner with us, just fill out the form
              below and our team will be in touch.
            </p>
          </div>

          <form className="space-y-8">
            {/* Name Row */}
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First name"
                className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#49ade8] focus:border-transparent transition"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#49ade8] focus:border-transparent transition"
              />
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#49ade8] focus:border-transparent transition"
              />

              <PhoneInput
                country={"us"}
                value={phone}
                onChange={setPhone}
                inputStyle={{
                  width: "100%",
                  height: "56px", // same as other inputs
                  borderRadius: "0.75rem", // rounded-xl
                  paddingLeft: "60px", // space for flag
                  border: "1px solid #E5E7EB", // gray-200
                  fontSize: "1rem",
                  color: "#111827", // text-gray-900
                }}
                buttonStyle={{
                  border: "1px solid #E5E7EB",
                  borderRadius: "0.75rem 0 0 0.75rem",
                  height: "56px",
                  marginLeft: "0",
                }}
                dropdownStyle={{
                  borderRadius: "0.75rem",
                  fontSize: "1rem",
                }}
                containerStyle={{ width: "100%" }}
                specialLabel={""}
              />
            </div>

            {/* Message */}
            <textarea
              rows={5}
              placeholder="How can we help you?"
              className="w-full px-5 py-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#49ade8] focus:border-transparent transition"
            />

            {/* Submit Button */}
            <button
              
              type="submit"
              className="w-full bg-[#49ade8] hover:bg-[#3a8ad1] text-white font-medium py-5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              
            </button>
          </form>
        </div>

        {/* Right Column - Image */}
        <div className="hidden lg:block">
          <img
            src="/images/contactImg.png"
            alt="PanAsiatic contact center team with headsets"
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
