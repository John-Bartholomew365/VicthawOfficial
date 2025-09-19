import Image from "next/image";
import React from "react";

const Vision = () => {
  return (
    <div className="lg:flex lg:flex-row flex-col items-center gap-[100px] lg:my-[100px] my-[50px] lg:pl-[50px] pl-0">
      <div data-aos="fade-right">
        <h1 className="lg:text-[45px] lg:w-[471px] w-auto tracking-tight font-bold text-[30px] leading-tight lg:text-left text-center">
          Our Vision
        </h1>
        <p className="text-[#6B6F76] tracking-tight lg:w-[420px] w-auto mt-4 lg:text-left text-center">
          To ignite cultural pride and healthy living by uniting Yoruba, Igbo,
          Hausa, Fulani, and other tribes through indigenous dance aerobics that
          celebrate tradition, unity, and vitality
        </p>
      </div>

      <div className="lg:mt-0 mt-10" data-aos="fade-left">
        <Image
          src="/all-tribe.jpeg"
          alt="logo"
          height={340}
          width={470}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default Vision;
