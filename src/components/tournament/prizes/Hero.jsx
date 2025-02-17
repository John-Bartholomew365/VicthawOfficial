import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="my-[70px]">
      <div className="lg:flex lg:flex-row flex-col items-center justify-center gap-[100px] lg:pr-[50px] pr-0">
        <div>
          <h1 className="lg:text-[50px] text-[30px] leading-tight tracking-tight">
            Prizes and Awards
          </h1>
          <p className="text-[#B0B3B8] tracking-tight lg:w-[380px] w-auto mt-4">
            The Victhaw Official Unity Cup 1.0 celebrates excellence with
            exciting prizes and awards for outstanding teams and players.
          </p>
        </div>
        <div className="my-[50px] lg:flex lg:flex-row flex-col justify-center">
          <div>
            <Image
              src="/prizes.svg"
              alt="logo"
              height={430}
              width={430}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
