import Link from "next/link";
import React from "react";

const ChooseUs = () => {
  return (
    <div className="my-[50px]">
      <div>
        <h1 className="lg:text-[40px] tracking-tight text-[30px] text-center leading-tight font-bold text-[#C81E23]">
          Why Choose Us?
        </h1>
        <p className="text-[#6B6F76] tracking-tight lg:w-[370px] text-[14px] w-auto m-auto text-center mt-3">
          At Victhaw Official, we are dedicated to providing top-quality
          services in fitness, sports, and creative solutions all tailored to
          help you achieve your goals
        </p>
      </div>

      <div className="lg:flex lg:flex-row flex-col gap-[20px] justify-center lg:px-[70px] px-[10px] my-[70px]">
        <div className="bg-[#FAFAFA] p-3 lg:w-fit w-auto rounded-md ">
          <h1 className="lg:text-[25px] lg:w-[300px] tracking-tight mb-3 w-auto leading-tight text-[22px] font-bold text-[#C81E23]">
            Build Strength, Boost Performance
          </h1>
          <p className="lg:w-[300px] tracking-tight text-[14px] w-auto text-[#6B6F76]">
            A strong body fuels a powerful mind. Whether you are just starting
            your fitness journey or pushing your limits as an athlete, our
            programs focus on strength, endurance, and resilience. Through
            expert training, wellness insights, and motivation, we help you stay
            active and live a healthier life.
          </p>
        </div>
        <div className="bg-[#FAFAFA] p-3 lg:w-fit w-full rounded-md lg:my-0 my-5">
          <h1 className="lg:text-[25px] tracking-tight lg:w-[300px] mb-3 w-auto leading-tight text-[22px] font-bold text-[#C81E23]">
            Fuel Your Passion, Reach New Heights
          </h1>
          <p className="lg:w-[300px] tracking-tight text-[14px] w-auto text-[#6B6F76]">
            Sports go beyond the game, they build discipline, teamwork, and
            champions. We support athletes at every level, from grassroots to
            professional, by providing platforms for skill development,
            competition, and growth.
          </p>
        </div>
        <div className="bg-[#FAFAFA] p-3 lg:w-fit w-auto rounded-md">
          <h1 className="lg:text-[25px] tracking-tight lg:w-[300px] mb-3 w-auto leading-tight text-[22px] font-bold text-[#C81E23]">
            Showcase Your Artistic Expression
          </h1>
          <p className="lg:w-[300px] tracking-tight text-[14px] w-auto text-[#6B6F76]">
            Creativity shapes the world. Whether it’s visual arts, music, dance,
            or storytelling, we provide a platform for artists to showcase their
            talent, inspire audiences, and bring ideas to life. We believe in
            the power of creativity to influence culture and drive social
            impact.
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
