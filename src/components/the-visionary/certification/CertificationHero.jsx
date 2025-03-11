"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CertificationsHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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
          Certificates & Accomplishments
        </h1>
        <p className="text-xl text-[#6B6F76] lg:w-[470px] leading-tight m-auto w-auto mb-16 lg:px-0 px-2">
        Discover Victor’s professional qualifications and achievements, highlighting his expertise in fitness coaching and football mentorship.
        </p>
        {/* <div className="bg-[#C81E23] lg:w-[250px] m-auto w-auto text-white px-8 py-4 rounded-lg hover:bg-red-900 transition duration-300">
          View Certifications below
        </div> */}
      </div>
    </section>
  );
};

export default CertificationsHero;
