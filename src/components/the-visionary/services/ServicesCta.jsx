"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesCta = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <section className="py-16 bg-[#000000] rounded-md lg:mx-[50px] mx-[7px]">
      <div className="container mx-auto px-4 text-center" data-aos="fade-up">
        <h2 className="lg:text-[40px] text-[30px] tracking-tight font-bold mb-4 text-white">
          Ready to Get Started?
        </h2>
        <p className="text-lg tracking-tight text-[#B0B3B8] m-auto lg:w-[470px] w-auto mb-8">
          Contact Victor today to learn more about his services and start your
          journey toward strength, passion, and excellence.
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

export default ServicesCta;