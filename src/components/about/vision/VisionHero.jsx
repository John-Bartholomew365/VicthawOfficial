"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VisionHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="lg:flex lg:flex-row flex-col items-center gap-[100px] my-[100px] lg:pl-[50px] pl-0">
      <div data-aos="fade-right">
        <h1 className="lg:text-[45px] tracking-tight text-[30px] leading-tight lg:w-[470px] w-auto">
          Where Fitness Passion Meets Purpose
        </h1>
        <p className="text-[#B0B3B8] tracking-tight lg:w-[420px] w-auto mt-4">
          Victhaw is a profesional coach, mentor, and fitness expert dedicated
          to developing athletes and inspiring individuals. With years of
          experience in sports and community building, he continues to shape the
          next generation of talent through discipline and innovation.
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
  );
};

export default VisionHero;
