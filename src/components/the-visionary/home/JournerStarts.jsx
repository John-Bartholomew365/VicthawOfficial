"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const JourneyStarts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <section className="py-16 lg:mx-[40px] mx-[10px] rounded-[10px] lg:px-[30px] bg-[#000000]">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="lg:text-4xl text-[30px] leading-tight tracking-tight font-bold mb-4 text-white">
            Your Journey Starts Here
          </h2>
          <p className="text-[16px] leading-tight tracking-tight text-[#B0B3B8] m-auto lg:w-[470px] w-auto">
            Whether you're looking to transform your fitness, elevate your
            football skills, or simply live a healthier, more active life, Victor
            is here to guide you every step of the way. Take the first step today
            and unlock your full potential.
          </p>
        </div>

        {/* Key Points */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 tracking-tight lg:px-[50px] px-[5px] mb-12"
          data-aos="fade-up"
        >
          {/* Personalized Programs */}
          <div className="bg-[#1C1C1E] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Personalized Programs
            </h3>
            <p className="text-[#B0B3B8]">
              Victor’s fitness and coaching programs are tailored to your unique
              goals, ensuring you get the results you want.
            </p>
          </div>

          {/* Proven Results */}
          <div className="bg-[#1C1C1E] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Proven Results
            </h3>
            <p className="text-[#B0B3B8]">
              With years of experience and a passion for helping others, Victor
              has helped countless individuals achieve their goals and transform
              their lives.
            </p>
          </div>

          {/* Community Support */}
          <div className="bg-[#1C1C1E] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Community Support
            </h3>
            <p className="text-[#B0B3B8]">
              Join a community of like-minded individuals who are committed to
              growth, health, and excellence.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up">
          <a
            href="/visionary/contact" // Replace with your contact link
            className="bg-[#C81E23] text-white px-8 py-4 rounded-lg hover:bg-red-900 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default JourneyStarts;