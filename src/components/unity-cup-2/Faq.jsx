"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { faqs } from "@/data/unity-cup-2";

const Questions = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white py-[100px]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-[35px] font-bold tracking-tight text-black">
            Frequently Asked Questions
          </h1>
          <p className="text-[#6B6F76] mt-3">
            Everything you need to know about Unity Cup 2.0
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openQuestion === index;
            return (
              <div
                key={faq.question}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FAFAFA] transition-colors"
                >
                  <span className="font-semibold text-[16px] text-black">
                    {index + 1}. {faq.question}
                  </span>
                  <span className="text-[#C81E23] shrink-0 ml-4">
                    {isOpen ? (
                      <FiChevronUp className="text-[20px]" />
                    ) : (
                      <FiChevronDown className="text-[20px]" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-[#6B6F76] leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#6B6F76]">
            Still have questions? Reach out to us at{" "}
            <a
              href="mailto:victhawofficial@gmail.com"
              className="text-[#C81E23] underline"
            >
              victhawofficial@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
