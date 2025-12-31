"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong, FaDumbbell, FaFire, FaTrophy } from "react-icons/fa6";
import { GiWeightLiftingUp } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Victor = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isAppearing, setIsAppearing] = useState(true);
  const [activeStat, setActiveStat] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      disable: window.innerWidth < 768,
    });

    AOS.refresh();
  }, []);

  const nameParts = ["Victor", "Gbolabo"];
  const lastName = "ADENIJI";
  const fullName = [...nameParts, lastName].join("");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isAppearing) {
      if (currentLetterIndex < fullName.length) {
        const timeout = setTimeout(() => {
          setCurrentLetterIndex((prev) => prev + 1);
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsAppearing(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentLetterIndex >= 0) {
        const timeout = setTimeout(() => {
          setCurrentLetterIndex((prev) => prev - 1);
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsAppearing(true);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentLetterIndex, isAppearing, fullName.length]);

  const stats = [
    { icon: <GiWeightLiftingUp />, value: "7+", label: "Years Experience", color: "#FF0000" },
    { icon: <FaFire />, value: "500+", label: "Clients", color: "#FF6B00" },
    { icon: <FaTrophy />, value: "95%", label: "Success Rate", color: "#00C851" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-0 sm:px-0 lg:px-0 overflow-hidden lg:pt-0 pt-20">
      <div className="w-full max-w mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 xl:gap-20">
          {/* Enhanced Image Section - Much larger on mobile */}
          <div
            className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 mb-6 lg:mb-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative w-[90vw] h-[90vw] max-w-[500px] max-h-[500px] sm:w-[80vw] sm:h-[80vw] md:w-[70vw] md:h-[70vw] lg:w-[500px] lg:h-[500px]">
              {/* Outer Glow Effect - Only background kept */}
              <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 rounded-full bg-gradient-to-r from-red-500/30 via-red-400/30 to-red-500/30 blur-lg lg:blur-xl"></div>
              
              {/* Main Image Container - Massive on mobile */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-6 sm:border-8 lg:border-12 border-white shadow-2xl lg:shadow-3xl">
                <Image
                  src="/victhaw-official.jpg"
                  alt="Victor Gbolabo Adeniji - Certified Fitness Coach"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 500px"
                  className="object-cover rounded-full transform hover:scale-110 transition-transform duration-700"
                  priority
                  quality={90}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-full"></div>
                
                {/* Badge on Image */}
                <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-full shadow-2xl whitespace-nowrap min-w-[160px] text-center">
                  <div className="flex items-center justify-center gap-2">
                    {/* <FaTrophy className="text-yellow-300 text-lg sm:text-xl lg:text-2xl" /> */}
                    <span className="font-bold text-sm sm:text-base lg:text-lg">Certified Coach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Content Section - Optimized for large image layout */}
          <div 
            className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1 mt-4 lg:mt-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Badge/Title */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-red-600 tracking-wide">
                CERTIFIED FITNESS COACH
              </span>
            </div>

            {/* Animated Name - Adjusted for better mobile layout */}
            <h1 className="text-lg sm:text-xl font-light text-gray-600 mb-2 tracking-wide">
              Hi, I&apos;m
            </h1>
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter">
                <div className="mb-1">
                  {nameParts.map((part, partIndex) => (
                    <span key={partIndex} className="inline-block">
                      {Array.from(part).map((letter, index) => (
                        <span
                          key={index}
                          className={`inline-block transition-all duration-300 ${
                            isAppearing
                              ? index + (partIndex > 0 ? nameParts[0].length : 0) < currentLetterIndex
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                              : index + (partIndex > 0 ? nameParts[0].length : 0) >= currentLetterIndex
                              ? "opacity-0 -translate-y-4"
                              : "opacity-100 translate-y-0"
                          }`}
                          style={{
                            color: isAppearing && index + (partIndex > 0 ? nameParts[0].length : 0) < currentLetterIndex
                              ? "#FF0000"
                              : "#1a1a1a"
                          }}
                        >
                          {letter}
                        </span>
                      ))}
                      {partIndex < nameParts.length - 1 && <span className="mx-1"></span>}
                    </span>
                  ))}
                </div>
                <div className="relative">
                  {Array.from(lastName).map((letter, index) => (
                    <span
                      key={index}
                      className={`inline-block transition-all duration-300 ${
                        isAppearing
                          ? index + nameParts.join("").length < currentLetterIndex
                            ? "opacity-100 translate-y-0 text-red-600"
                            : "opacity-0 translate-y-4 text-gray-800"
                          : index + nameParts.join("").length >= currentLetterIndex
                          ? "opacity-0 -translate-y-4"
                          : "opacity-100 translate-y-0 text-red-600"
                      }`}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </h1>
            </div>

            {/* Description - Shorter on mobile */}
            <p
              className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 tracking-tight"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Certified fitness coach with{" "}
              <span className="font-bold text-red-600">7+ years</span> of experience 
              in strength training, weight loss, and sports performance coaching.
            </p>

            {/* Stats - Responsive grid */}
            <div 
              className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 lg:mb-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-500 ${
                    activeStat === index
                      ? "bg-white shadow-lg transform scale-105"
                      : "bg-gray-50"
                  }`}
                  onMouseEnter={() => setActiveStat(index)}
                  onClick={() => setActiveStat(index)}
                >
                  <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-1 sm:gap-2 mb-1">
                    <div
                      className="text-xl sm:text-2xl lg:text-3xl"
                      style={{ color: stat.color }}
                    >
                      {/* {stat.icon} */}
                    </div>
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold" style={{ color: stat.color }}>
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-600 text-center">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Full width on mobile */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Link href="/visionary/contact" className="w-full sm:w-auto">
                <button className="group relative w-full px-6 py-4 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold overflow-hidden transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-xl active:scale-95 text-base sm:text-lg">
                  <div className="flex items-center justify-center gap-3">
                    <span>Contact Me</span>
                    <FaArrowRightLong className="transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </button>
              </Link>
              
              <Link href="/visionary/services" className="w-full sm:w-auto">
                <button className="group w-full px-6 py-4 sm:px-8 sm:py-4 rounded-full border-2 border-red-600 text-red-600 font-semibold transition-all duration-300 hover:bg-red-50 hover:shadow-xl active:scale-95 text-base sm:text-lg">
                  <div className="flex items-center justify-center gap-3">
                    <span>View Services</span>
                    <FaDumbbell className="transform group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Victor;