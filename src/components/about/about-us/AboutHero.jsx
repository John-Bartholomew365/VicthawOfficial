"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { unityCup1Tagline } from "@/data/unity-cup-2";

const AboutHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="lg:flex lg:flex-row flex-col items-center gap-[100px] my-[100px] lg:pl-[50px] pl-0">
      <div data-aos="fade-right">
        <h1 className="lg:text-[45px] lg:w-[471px] w-auto tracking-tight font-bold text-[30px] leading-tight">
          About the Victhaw Unity Cup 1.0
        </h1>
        <p className="text-[#C81E23] font-semibold italic tracking-tight lg:w-[420px] w-auto mt-4">
          &ldquo;{unityCup1Tagline}&rdquo;
        </p>
        <p className="text-[#6B6F76] tracking-tight lg:w-[420px] w-auto mt-3">
          Get all the essential details about the tournament that started it
          all — its purpose, structure, and what made it an unmissable event.
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

export default AboutHero;
