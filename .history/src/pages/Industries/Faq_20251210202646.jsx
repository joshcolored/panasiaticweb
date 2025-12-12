import React, { useState } from "react";
import Button from "../../components/ui/Button";

const faqs = [
  {
    question: "What experience do you have in telecom?",
    answer:
      "Over 15 years supporting one of the world’s largest global telcos across all 10 of their portfolio brands. We have been providing services that include Device provisioning, troubleshooting, billing, retention, upsell programs, and retailer support.",
  },
  {
    question: "Why do telecom companies trust PanAsiatic?",
    answer: "Because of proven reliability, industry-leading CSAT scores, and long-term partnerships.",
  },
  {
    question: "How do you support online retailers?",
    answer: "Handling order tracking, returns, product/payment inquiries, and flash sale support. Our model also flexes with sales cycles and promotional bursts, so we can easily and efficiently handle sales peaks.",
  },
  {
    question: "What channels do you use for e-commerce support?",
    answer: "Chat, email, SMS, and voice to ensure rapid resolution.",
  },
  {
    question: "What travel-related services do you provide?",
    answer: "Reservations, rebookings, refunds, cancellations, loyalty programs, and crisis response.",
  },
  {
    question: "Do you support time-sensitive customer inquiries?",
    answer: "Yes, our teams deliver fast, empathetic responses for high-volume cases.",
  },
  {
    question: "Do you provide healthcare customer support?",
    answer: "Yes. We handle patient onboarding, appointment scheduling, telehealth navigation, and medication reminders.",
  },
  {
    question: "Are you HIPAA-certified?",
    answer: "Not HIPAA-covered, but aligned with best practices and able to support HIPAA-adjacent protocols.",
  },

];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#E5E5E559] py-12 sm:py-14 lg:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col gap-8 sm:gap-10 justify-start items-start w-full">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-xl text-left text-text-primary mt-3 sm:mt-4"
            style={{ fontFamily: "Raleway" }}
          >
            FAQs
          </h2>

          {/* FAQ List */}
          <div className="space-y-4 w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 bg-[#ffffff] rounded-lg shadow-sm"
              >
                <button
                  className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  <span className="ml-2 text-black text-2xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="p-4 border-t text-md border-gray-200 text-gray-900">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
