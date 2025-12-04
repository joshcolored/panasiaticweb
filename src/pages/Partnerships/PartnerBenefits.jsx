import React from "react";
import { useNavigate } from 'react-router-dom';

const PartnerBenefits = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };
  return (
    <section className="w-full bg-secondary-background py-10 sm:py-12 lg:py-16">
      <div className="bg-[#49ADE814] py-16 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-12 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              What You Gain
            </h2>
            <button onClick={handleClick} className="bg-[#49ADE8] hover:bg-[#3B8DBE] text-white font-medium px-6 py-3 rounded-full transition-colors duration-200 shadow-sm mx-auto sm:mx-0">
              Register as a Partner
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left Column */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/advisor.png"
                alt="Broker Icon"
                className="h-20 w-20 object-contain mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                For brokers and advisors
              </h3>

              <ul className="space-y-5 text-gray-900 font-semibold text-base leading-relaxed text-left w-full max-w-sm mx-auto">
                <li className="flex">
                  <span className="text-[#49ADE8] mr-3">•</span>
                  A high-quality, low-risk partner to introduce to your clients
                </li>
                <li className="flex">
                  <span className="text-[#49ADE8] mr-3">•</span>
                  Full sales support: branded materials, talk tracks, and a dedicated contact
                </li>
                <li className="flex">
                  <span className="text-[#49ADE8] mr-3">•</span>
                  A commercial incentive model that rewards every successful intro
                </li>
                <li className="flex">
                  <span className="text-[#49ADE8] mr-3">•</span>
                  Connecting clients to trusted, compliant, and cost-effective operations
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/internet.png"
                alt="Tech Partner Icon"
                className="h-20 w-20 object-contain mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                For VAS partners & tech providers
              </h3>

              <ul className="space-y-5 text-gray-900 font-semibold text-base leading-relaxed text-left w-full max-w-sm mx-auto">
                <li className="flex">
                  <span className="text-[#49ADE8] mr-3">•</span>
                  A secure, scalable operations layer to enhance your offering
                </li>
                <li className="flex">
                  <span className="text-[#49ADE8] mr-3">•</span>
                  Easy integration and service bundling opportunities
                </li>
                <li className="flex">
                  <span className="text-[#49ADE8] mr-3">•</span>
                  White-label or co-branded delivery where needed
                </li>
                <li className="flex">
                  <span className="text-[#49ADE8] mr-3">•</span>
                  A reliable BPO partner that strengthens your downstream value proposition
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBenefits;
