"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceHero = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-[#000000]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/vicky.jpg"
          alt="Certifications"
          className="w-full h-full object-cover opacity-20"
          style={{
            objectPosition: isLargeScreen ? "center 15%" : "center center",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative text-center" data-aos="fade-up">
        <h1 className="lg:text-[45px] text-[40px] leading-tight font-bold text-white mb-5">
          Services
        </h1>
        <p className="text-xl text-[#B0B3B8] lg:w-[470px] leading-tight m-auto w-auto mb-16 lg:px-0 px-2">
          Discover the range of services Victor offers to help you achieve your
          fitness, football, and community goals.
        </p>
        <div className="bg-[#C81E23] lg:w-[250px] m-auto w-[60%] text-white px-8 py-4 rounded-lg hover:bg-red-900 transition duration-300">
          View Services below
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
