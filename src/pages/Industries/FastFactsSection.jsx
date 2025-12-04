import React, { useState } from "react";

const FactModal = ({ isOpen, onClose, fact }) => {
  if (!isOpen || !fact) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-60 z-40"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-auto my-8 flex flex-col max-h-[92vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-6 sm:p-10 pb-6 border-b border-gray-100 flex-shrink-0">
            <div className="pr-12">
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "Raleway" }}
              >
                {fact.modalTitle}
              </h3>
              {fact.modalSubtitle && (
                <h4
                  className="text-lg sm:text-xl font-medium text-[#49ade8] mt-2"
                  style={{ fontFamily: "Raleway" }}
                >
                  {fact.modalSubtitle}
                </h4>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 transition"
            >
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8"
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

          {/* Scrollable Body */}
          <div className="p-6 sm:p-10 pt-6 sm:pt-8 text-gray-700 overflow-y-auto flex-1">
            <p
              style={{ whiteSpace: "pre-line" }}
              className="text-base font-semibold sm:text-lg lg:text-xl leading-relaxed mb-8"
            >
              {fact.modalDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {fact.bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-[#49ade8] text-xl sm:text-2xl mt-1">
                    •
                  </span>
                  <span className="text-sm font-semibold sm:text-base lg:text-lg leading-relaxed">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Icon — fixed relative to modal */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 pointer-events-none">
            <div className="opacity-[0.9]">{fact.decorativeIcon}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const FastFactsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFact, setSelectedFact] = useState(null);

  const facts = [
    {
      icon: "/images/sat.png",
      title: "Telecom Customer Support Outsourcing",
      desc: "Billing, Technical & Retention programs",
      modalTitle: "Telecom Customer Support Outsourcing",
      modalSubtitle: "Billing, Technical & Retention programs",
      modalDescription:
        "Our flagship vertical. We’ve supported one of the world’s largest telcos across all 10 of its portfolio brands since 2010 -managing complex billing, technical support, customer retention, and upsell programs with precision. ",
      bullets: [
        "Inbound and outbound support ",
        "Device provisioning & troubleshooting ",
        "Customer retention & upsell programs  ",
        "Retailer support ",
      ],
      decorativeIcon: (
        <img
          src="/images/satel.png"
          alt="Telecom"
          className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
        />
      ),
    },
    {
      icon: "/images/comp.png",
      title: "E-commerce Customer Support Outsourcing",
      desc: "Order, Payments & Multichannel CX",
      modalTitle: "E-commerce Customer Support Outsourcing",
      modalSubtitle: "Order, Payments, & Multichannel CX",
      modalDescription:
        "A growing focus area. We support fast-moving online retailers and digital platforms looking for scalable, 24/7 customer service solutions - built to flex with sales cycles and promotional bursts. ",
      bullets: [
        "Order tracking & returns ",
        "Product & payment inquiries ",
        "Promotional campaigns & flash sale support ",
        "Multichannel CX across chat, email, SMS and social media",
      ],
      decorativeIcon: (
        <img
          src="/images/desk.png"
          alt="E-commerce"
          className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
        />
      ),
    },
    {
      icon: "/images/building.png",
      title: "Travel & Hospitality CX Outsourcing",
      desc: "Reservations, Loyalty & Crisis Response",
      modalTitle: "Travel & Hospitality CX Outsourcing",
      modalSubtitle: "Reservations, Loyalty & Crisis Response",
      modalDescription:
        "We’re actively expanding our presence in the travel and bookings sector, helping companies deliver fast, accurate, and empathetic support across a high-volume, time-sensitive customer base. ",
      bullets: [
        "Reservation and booking support ",
        "Rebooking, refunds, and cancellations ",
        "Loyalty program inquiries ",
        "Crisis response & service recovery ",
      ],
      decorativeIcon: (
        <img
          src="/images/buildi.png"
          alt="Travel"
          className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
        />
      ),
    },
    {
      icon: "/images/laptop.png",
      title: "Health Tech Customer Support Outsourcing",
      desc: "Secure, Compliant & Scalable",
      modalTitle: "Health Tech Customer Support Outsourcing",
      modalSubtitle: "Secure, Compliant & Scalable",
      modalDescription:
        "We’re actively exploring opportunities in the health tech space, supporting early-stage pilots with select partners in digital health and care delivery.  \n\nOur secure, facility-based infrastructure and trained agents provide a strong foundation for handling sensitive health-related interactions -with the operational flexibility to align with your compliance and data handling standards. ",
      bullets: [
        "Patient onboarding & appointment scheduling ",
        "Basic insurance verification & claims follow-up ",
        "Platform navigation for telehealth services ",
        "Medication reminders & pharmacy queries ",
      ],
      decorativeIcon: (
        <img
          src="/images/lap.png"
          alt="Health Tech"
          className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
        />
      ),
    },
  ];

  const openModal = (fact) => {
    setSelectedFact(fact);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
    setTimeout(() => setSelectedFact(null), 300);
  };

  return (
    <>
      <section className="w-full bg-secondary-background border-b border-border-secondary py-10 sm:py-12 lg:py-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            {facts.map((fact, index) => (
              <div
                key={index}
                onClick={() => openModal(fact)}
                className="relative bg-[#EEEEEE80] rounded-lg p-6 sm:p-8 group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6">
                  <img
                    src={fact.icon}
                    alt={fact.title}
                    className="w-32 h-28 sm:w-36 sm:h-32 lg:w-40 lg:h-36 object-contain mx-auto sm:mx-0"
                  />
                </div>

                {/* Text */}
                <h3
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary mb-3 leading-tight"
                  style={{ fontFamily: "Raleway" }}
                >
                  {fact.title}
                </h3>
                <p
                  className="text-sm sm:text-base lg:text-lg text-text-primary leading-relaxed"
                  style={{ fontFamily: "Raleway" }}
                >
                  {fact.desc}
                </p>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#49ADE8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                  <img
                    src="/images/img_arrow_right_white_a700.svg"
                    alt="Learn more"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FactModal
        isOpen={isModalOpen}
        onClose={closeModal}
        fact={selectedFact}
      />
    </>
  );
};

export default FastFactsSection;
