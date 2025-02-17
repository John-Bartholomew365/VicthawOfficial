import Link from "next/link";
import React from "react";

const ChooseUs = () => {
  return (
    <div className="my-[50px]">
      <div>
        <h1 className="lg:text-[40px] tracking-tight text-[30px] text-center leading-tight font-bold text-[#C81E23]">
          Why you should <br /> choose us
        </h1>
        <p className="text-[#B0B3B8] tracking-tight lg:w-[370px] text-[14px] w-auto m-auto text-center mt-3">
          At Victhaw Official, we deliver quality services in fitness, sports,
          and creative solutions, tailored to meet your unique needs.
        </p>
      </div>

      <div className="lg:flex lg:flex-row flex-col gap-[20px] justify-center lg:px-[70px] px-[10px] my-[70px]">
        <div className="bg-[#000000] p-3 lg:w-fit w-auto rounded-md shadow-2xl">
          <h1 className="lg:text-[25px] lg:w-[300px] tracking-tight mb-3 w-auto leading-tight text-[22px] font-bold text-[#C81E23]">
            Fitness – Elevate Your Strength
          </h1>
          <p className="lg:w-[300px] tracking-tight text-[14px] w-auto text-[#B0B3B8]">
            A healthy body fuels a strong mind. Whether you're a beginner or a
            seasoned athlete, our fitness programs are designed to push your
            limits, improve endurance, and build resilience. Through training,
            wellness tips, and motivation, we help you stay active and live a
            healthier life.
          </p>
        </div>
        <div className="bg-[#000000] p-3 lg:w-fit w-full rounded-md lg:my-0 my-5">
          <h1 className="lg:text-[25px] tracking-tight lg:w-[300px] mb-3 w-auto leading-tight text-[22px] font-bold text-[#C81E23]">
            Sports - Ignite Your Passion
          </h1>
          <p className="lg:w-[300px] tracking-tight text-[14px] w-auto text-[#B0B3B8]">
            Sports unite people, build discipline, and create champions. We
            support atheletes at all levels, from grassroots to professions,
            providing platforms for competition, skill development, and team
            work. Whether it's football, basketball, or any sport you love, we
            are here to fuel your passion.
          </p>
        </div>
        <div className="bg-[#000000] p-3 lg:w-fit w-auto rounded-md">
          <h1 className="lg:text-[25px] tracking-tight lg:w-[300px] mb-3 w-auto leading-tight text-[22px] font-bold text-[#C81E23]">
            Art – Express Your Creativity
          </h1>
          <p className="lg:w-[300px] tracking-tight text-[14px] w-auto text-[#B0B3B8]">
            Art is the heartbeat of culture and innovation. Through visual arts,
            music, dance, and creative storytelling, we provide a platform for
            artists to showcase their talents, inspire audiences, and bring
            ideas to life. We celebrate creativity as a powerful tool for
            self-expression and social impact.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          href="https://www.instagram.com/victhawofficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#C81E23] py-[10px] px-[20px] text-white rounded-[6px] hover:bg-[#0F0F0F] hover:text-white hover:border-[#C81E23] hover:border">
            Contact us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChooseUs;
