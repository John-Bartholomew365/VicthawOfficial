import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="my-[100px]">
      <div className="lg:flex lg:flex-row flex-col items-center gap-[100px] my-[100px] lg:pl-[50px] pl-0">
        <div>
          <h1 className="lg:text-[45px] text-[30px]">Tournament Schedule </h1>
          <p className="lg:w-[400px] w-auto tracking-tight text-[#B0B3B8] mt-3">
            Stay updated with all the action! Below is the complete schedule for
            the Victhaw Official Unity Cup 1.0. Check out the match dates,
            times, and venues to plan your participation or attendance. Let the
            games begin!
          </p>
        </div>
        <div className="lg:mt-0 mt-10">
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
