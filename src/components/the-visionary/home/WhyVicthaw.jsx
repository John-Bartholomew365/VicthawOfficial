"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyVicthaw = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-16 lg:px-[50px] px-0">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-[85px]" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">
            The Vision Behind the Victhaw <br /> Official Unity Cup
          </h2>
          <p className="text-lg text-[#B0B3B8] leading-tight lg:w-[570px] w-auto mx-auto">
            Football has always been more than just a game to me. It's a
            passion, a way of life, and a powerful tool for bringing people
            together.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Image */}
          <div
            className="relative h-96 rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-up"
          >
            <Image
              src="/victor-football.jpg"
              alt="Victor on the Football Field"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <p className="text-white text-2xl font-semibold text-center max-w-xs">
                "Sports have the power to change lives, unite communities, and
                inspire greatness."
              </p>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="space-y-6" data-aos="fade-up">
            <p className="text-[#B0B3B8] leading-tight backdrop:text-lg">
              Growing up, I saw how sports could transform lives and
              communities, and I knew I wanted to create a platform where people
              could connect, compete, and celebrate their love for the game.
            </p>
            <p className="text-[#B0B3B8] leading-tight backdrop:text-lg">
              The Victhaw Official Unity Cup is my way of giving back to the
              community that has shaped me. It's a celebration of talent,
              teamwork, and the power of sports to inspire greatness. Through
              this tournament, I hope to provide a stage for aspiring athletes
              to showcase their skills, promote a healthy and active lifestyle,
              and foster a sense of unity and inclusion.
            </p>
            <p className="text-[#B0B3B8] leading-tight backdrop:text-lg">
              This is more than just a tournament—it's a movement. A movement to
              build stronger bodies, sharper minds, and more resilient
              communities. A movement to inspire future generations and leave a
              lasting legacy of strength, passion, and excellence.
            </p>
            <div className="flex flex-col lg:flex-row lg:justify-start lg:space-x-4 space-y-4 lg:space-y-0 mt-8">
              <a
                href="/register" // Replace with your registration link
                className="font-semibold bg-[#C81E23] text-white py-2 px-8 text-sm rounded-lg hover:bg-black hover:text-white hover:border-[#C81E23] hover:border w-[70%] lg:w-auto lg:mx-0 mx-auto text-center"
              >
                Join the Movement
              </a>
              <a
                href="/about/sponsors" // Replace with your sponsorship link
                className="font-navbar font-semibold border border-[#C81E23] text-white rounded-lg py-2 px-8 text-sm hover:bg-[#C81E23] hover:text-white w-[70%] lg:w-auto lg:mx-0 mx-auto text-center"
              >
                Become a Sponsor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVicthaw;
