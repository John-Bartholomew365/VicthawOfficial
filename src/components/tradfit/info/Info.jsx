"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Info = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Move to the Beat of Your Heritage";

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Typewriter effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden lg:pt-0 pt-24 bg-cover bg-center"
        style={{
          backgroundImage: `url(/option2.jpg)`,
          backgroundAttachment: "fixed", // Optional: for parallax effect
        }}
      >
        {/* Overlay to soften the background */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <div className="w-full mx-auto px-4 sm:px-6 lg:pl-24 flex flex-col lg:flex-row items-center relative z-10">
          {/* Left-aligned content */}
          <div className="lg:w-1/2 text-left" data-aos="fade-right">
            <span
              className="flex w-fit bg-white/90 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg lg:mx-0 mx-auto lg:justify-start justify-center"
              data-aos="fade-in"
              data-aos-delay="100"
            >
              Indigenous Dance Aerobics Experience
            </span>

            {/* Main title */}
            <h1
              className="lg:text-[50px] text-[30px] font-bold text-[#C90A1D] mb-6 tracking-tight lg:text-start text-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              TRADFIT RHYTHMS
            </h1>

            {/* Typewriter text */}
            <p
              className="lg:text-[24px] text-[20px] text-white font-semibold mb-4 h-10 lg:text-start text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {displayText}
              <span className="animate-pulse">|</span>
            </p>

            <p
              className="lg:text-[18px] text-[16px] text-white/90 lg:w-[470px] w-auto leading-tight lg:text-start text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              A cultural revival, celebration of indigenous heritage, and wellness
              movement rolled into one. Experience high-energy aerobics merged
              with rich African/indigenous dance traditions.
            </p>

            {/* CTA buttons */}
            <div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Link
                href="/auth/register"
                className="inline-block bg-[#C90A1D] text-white px-8 py-2 rounded-full lg:text-[16px] text-[18px] text-center font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Join Now
              </Link>
              <Link
                href="/tradfit/about"
                className="inline-block border-2 border-[#C90A1D] text-[#FFFFFF] px-8 py-2 rounded-full text-center lg:text-[16px] text-[18px] font-semibold hover:bg-[#C90A1D]/10 transform hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right-aligned image */}
          <div className="lg:w-[70%] mt-3 lg:mt-0" data-aos="fade-left">
            <Image
              src="/tradfit2.png"
              alt="Tradfit Rhythms"
              width={850}
              height={850}
              className="object-contain mx-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;