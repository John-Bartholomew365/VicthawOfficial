"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PrizesHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div>
      <div className="my-[80px] lg:block hidden" data-aos="fade-up">
        <div className="lg:flex lg:flex-row flex-col-reverse items-center justify-center gap-[100px] lg:pr-[50px] pr-0">
          <div data-aos="fade-right">
            <h1 className="lg:text-[50px] text-[30px] lg:text-start text-center leading-tight tracking-tight">
              Prizes and Awards
            </h1>
            <p className="text-[#6B6F76] lg:text-start text-center tracking-tight lg:w-[410px] w-auto mt-4">
              This tournament is all about celebrating excellence! Outstanding
              teams and exceptional players will be recognized with prestigious
              awards and exciting prizes for their skill, dedication, and
              performance on the field.
            </p>
          </div>
          <div className="my-[50px] lg:flex lg:flex-row flex-col justify-center">
            <div data-aos="fade-left">
              <Image
                src="/advanced-cup.jpeg"
                alt="Unity Cup 2.0 Trophy, Golden Ball and Golden Glove"
                height={230}
                width={420}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-[80px] lg:hidden block" data-aos="fade-up">
        <div className="lg:flex lg:flex-row flex-col-reverse items-center justify-center gap-[100px] lg:pr-[50px] pr-0">
          <div className="my-[50px] lg:flex lg:flex-row flex-col justify-center">
            <div data-aos="fade-right">
              <Image
                src="/advanced-cup.jpeg"
                alt="Unity Cup 2.0 Trophy, Golden Ball and Golden Glove"
                height={230}
                width={420}
                className="rounded-md"
              />
            </div>
          </div>
          <div data-aos="fade-left">
            <h1 className="lg:text-[50px] text-[30px] lg:text-start text-center leading-tight tracking-tight">
              Prizes and Awards
            </h1>
            <p className="text-[#6B6F76] lg:text-start text-center tracking-tight lg:w-[410px] w-auto mt-4">
              This tournament is all about celebrating excellence! Outstanding
              teams and exceptional players will be recognized with prestigious
              awards and exciting prizes for their skill, dedication, and
              performance on the field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizesHero;
