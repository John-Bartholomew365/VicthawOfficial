"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FinalCerti = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <section className="py-16 rounded-md lg:mx-[40px] mx-[10px] mb-24 bg-[#000000]">
      <div className="container mx-auto px-4 text-center" data-aos="fade-up">
        <h2 className="lg-text-[40px] text-[30px] leading-tight tracking-tight font-bold mb-4 text-white">
          Ready to Train, Transform, and Thrive?
        </h2>
        <p className="text-[16px] tracking-tight text-[#B0B3B8] m-auto lg:w-[480px] leading-tight w-auto mb-8">
          Take the first step toward a stronger, healthier, and more confident
          you. Connect with Victor today and start your journey to peak
          performance and lasting results.
        </p>
        <a
          href="/visionary/contact" // Replace with your contact link
          className="bg-[#C81E23] text-white px-8 py-4 rounded-lg hover:bg-red-900 transition duration-300"
        >
          Contact me
        </a>
      </div>
    </section>
  );
};

export default FinalCerti;
