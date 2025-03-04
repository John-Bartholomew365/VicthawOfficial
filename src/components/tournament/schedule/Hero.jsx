"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <div className="my-[100px]" data-aos="fade-up">
      <div className="lg:flex lg:flex-row flex-col items-center gap-[100px] my-[100px] lg:pl-[50px] pl-0">
        <div data-aos="fade-right">
          <h1 className="lg:text-[45px] text-[30px] tracking-tight">
            Tournament Schedule
          </h1>
          <p className="lg:w-[400px] w-auto tracking-tight text-[#B0B3B8] mt-3">
            Get ready for all the excitement! Here’s the full schedule for the
            Victhaw Official Unity Cup 1.0. Stay informed about match dates,
            kick-off times, and venues so you can plan to participate or cheer
            for your favourite team(s). Let the competition begin!
          </p>
        </div>
        <div className="lg:mt-0 mt-10" data-aos="fade-left">
          <Image
            src="/victhaw-logo.svg"
            alt="logo"
            height={230}
            width={420}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
