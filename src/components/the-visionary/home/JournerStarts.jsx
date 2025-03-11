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
    <section className="py-16 lg:mx-[40px] mx-[10px] rounded-[10px] lg:px-[30px] bg-[#FAFAFA]">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="lg:text-4xl text-[27px] leading-tight tracking-tight font-bold mb-4 text-black">
            Start Your Transformation Today
          </h2>
          <p className="text-[16px] leading-tight tracking-tight text-[#6B6F76] m-auto lg:w-[480px] w-auto">
            Whether you want to improve your fitness, sharpen your football
            skills, or adopt a healthier, more active lifestyle, Victor is here
            to support you every step of the way. Take the first step today and
            unlock your full potential.
          </p>
        </div>

        {/* Key Points */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 tracking-tight lg:px-[50px] px-[5px] mb-12"
          data-aos="fade-up"
        >
          {/* Personalized Programs */}
          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-black">
              Personalized Trainings
            </h3>
            <p className="text-[#A8A8A8] w-auto">
              Victor designs personalized fitness and coaching programs tailored
              to your goals, ensuring you achieve real and lasting results.
            </p>
          </div>

          {/* Proven Results */}
          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-black">
              Proven Success
            </h3>
            <p className="text-[#A8A8A8]">
              With years of experience and a deep passion for helping others,
              Victor has guided countless individuals toward their fitness and
              athletic goals.
            </p>
          </div>

          {/* Community Support */}
          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-black">
              Supportive Community
            </h3>
            <p className="text-[#A8A8A8]">
              Join a network of motivated individuals who share your commitment
              to growth, health, and excellence.
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
