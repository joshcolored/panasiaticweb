import React, { useState } from "react";
import Button from "../../components/ui/Button";

const faqs = [
  {
    question: "Why do global brands choose PanAsiatic?",
    answer:
      "Because we combine service quality, enterprise security, scalability, and cost-effectiveness.",
  },
  {
    question: "How quickly can you onboard new clients?",
    answer: "Your answer here...",
  },
  {
    question: "What makes your pricing model competitive?",
    answer: "Your answer here...",
  }
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
                className="bg-[#fff] border border-gray-200 rounded-lg shadow-sm"
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
