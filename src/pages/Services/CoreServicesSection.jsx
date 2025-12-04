import React, { useState } from "react";

const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-auto my-8"
          style={{ maxHeight: "90vh" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-start p-10 pb-6 border-b border-gray-100">
            <div className="flex flex-col gap-3">
              <h3
                className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "Raleway" }}
              >
                {service.modalTitle}
              </h3>
              {service.modalSubtitle && (
                <h4
                  className="text-lg font-medium text-[#49ade8]"
                  style={{ fontFamily: "Raleway" }}
                >
                  {service.modalSubtitle}
                </h4>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-700 transition ml-8"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-10 pt-8 text-gray-700">
            <p className="text-md lg:text-lg text-gray-900 font-semibold leading-relaxed mb-8">
              {service.modalDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-5">
                {service.bullets
                  .slice(0, Math.ceil(service.bullets.length / 2))
                  .map((bullet, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-[#49ade8] text-2xl mt-1">•</span>
                      <span className="text-base lg:text-md text-gray-900 font-semibold leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
              </ul>
              <ul className="space-y-5">
                {service.bullets
                  .slice(Math.ceil(service.bullets.length / 2))
                  .map((bullet, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-[#49ade8] text-2xl mt-1">•</span>
                      <span className="text-base lg:text-md text-gray-900 font-semibold leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
            {service.subDescription && (
              <div className="mt-6">
                <p className="text-md lg:text-lg text-gray-900 font-semibold leading-relaxed">
                  {service.subDescription}
                </p>
              </div>
            )}
          </div>

          {/* Decorative Icon - Bottom Right */}
          <div className="absolute bottom-8 right-8 pointer-events-none">
            <div className="opacity-[0.8]">{service.decorativeIcon}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const CoreServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: "/images/img_vector_blue_400.svg",
      title: "Voice \nsupport",
      description: "Professional inbound and outbound customer engagement",
      iconWidth: 44,
      iconHeight: 34,
      modalTitle: "Voice Support Outsourcing",
      modalSubtitle: "Inbound & Outbound Customer Engagement",
      modalDescription:
        " Our skilled, English-proficient agents are trained to manage complex customer interactions with empathy and accuracy. ",
      bullets: [
        "Customer Service & Technical Support",
        "Sales & Retention",
        "Billing & Backoffice",
        "Surveys & NPS Outreach",
      ],
      decorativeIcon: (
        <img
          src="/images/megaphone.png"
          alt="Voice Support"
          className="w-[11rem] h-[11rem] object-contain"
        />
      ),
    },
    {
      icon: "/images/img_noun_omnichannel_1186986.svg",
      title: "Omnichannel \nCX",
      description: "24/7 customer support across all channels",
      iconWidth: 54,
      iconHeight: 54,
      modalTitle: "Omnichannel Customer Experience",
      modalSubtitle: "24/7 Customer Support Across All Channels",
      modalDescription:
        "We meet your customers where they are -24/7, across channels: ",
      bullets: [
        "Voice, Chat, SMS, social media, web chatbot and back-office",
        "Seamless channel switching and unified customer view ",
        "Fast resolution, consistent experience ",
      ],
      decorativeIcon: (
        <img
          src="/images/message.png"
          alt="Omnichannel"
          className="w-[11rem] h-[11rem] object-contain"
        />
      ),
    },
    {
      icon: "/images/img_noun_ai_8057248.svg",
      title: "AI Integration Readiness",
      description: "Sentiment, Authentication & Workflow Automation",
      iconWidth: 54,
      iconHeight: 54,
      modalTitle: "AI Integration Readiness",
      modalSubtitle: "",
      modalDescription:
        "We integrate cutting-edge automation and insight tools to optimize performance and drive smarter outcomes.  ",
      bullets: [
        "Sentiment Analysis & Insight Extraction ",
        "Automated Customer Authentication ",
        "Workflow Automation  "
      ],
      subDescription: "Deployable on our private cloud or on your infrastructure ",
      decorativeIcon: (
        <img
          src="/images/heart.png"
          alt="AI Ready"
          className="w-[11rem] h-[11rem] object-contain"
        />
      ),
    },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <>
      <section className="w-full bg-secondary-background py-12 sm:py-14 lg:py-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col gap-8 sm:gap-10 w-full">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-text-primary mt-3 sm:mt-4"
              style={{ fontFamily: "Raleway" }}
            >
              Core Services Snapshot
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 w-full">
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => openModal(service)}
                  className="group relative flex flex-col sm:flex-row justify-between items-start bg-accent-overlay rounded-md p-4 sm:p-5 lg:p-[22px] min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] transition-all duration-300 cursor-pointer hover:bg-[#49ADE8BF] hover:scale-105"
                >
                  <div className="flex flex-col justify-start items-start flex-1 z-10">
                    <h3
                      className="text-xl sm:text-2xl lg:text-2xl font-semibold leading-snug text-text-primary whitespace-pre-line transition-colors duration-300 group-hover:text-white"
                      style={{ fontFamily: "Raleway" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-base sm:text-lg lg:text-xl font-normal leading-6 sm:leading-7 lg:leading-8 text-text-primary mt-2 sm:mt-3 transition-colors duration-300 group-hover:text-white"
                      style={{ fontFamily: "Raleway" }}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="relative self-end sm:self-auto mt-4 sm:mt-0 flex-shrink-0">
                    <img
                      src={service.icon}
                      alt={service.title}
                      style={{
                        width: `${service.iconWidth}px`,
                        height: `${service.iconHeight}px`,
                      }}
                      className="object-contain transition-all duration-300 group-hover:opacity-0"
                    />
                    <img
                      src="/images/arrow-narrow-down-left.png"
                      alt="Arrow"
                      style={{
                        width: `${service.iconWidth}px`,
                        height: `${service.iconHeight}px`,
                      }}
                      className="object-contain absolute top-0 left-0 opacity-0 transition-all duration-300 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        service={selectedService}
      />
    </>
  );
};

export default CoreServicesSection;
