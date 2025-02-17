import Link from "next/link";
import React from "react";

const TournamentHighlight = () => {
  return (
    <div className="my-16">
      <div>
        <h1 className="lg:text-5xl text-3xl font-bold leading-tight text-center tracking-tight mb-10">
          Experience the <br className="hidden lg:block" /> Victhaw Difference
        </h1>
      </div>

      <div className="lg:flex lg:flex-row flex-col items-center justify-center lg:ml-[70px] ml-0">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src="/fans.svg"
            alt="Fans"
            className="w-full lg:h-[500px] max-w-[468px] h-auto rounded-md object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 ">
          <h2 className="text-xl lg:text-2xl font-semibold leading-tight tracking-tight mb-6  lg:w-[440px] w-auto">
            The Victhaw Official Unity Cup 1.0 delivers an unparalleled
            experience.
          </h2>
          <ul className="ml-5 space-y-4 mb-7 tracking-tight">
            <li className="flex items-start gap-3 lg:w-[410px] w-auto">
              <span className="text-red-600">●</span>
              <p className="text-white">
                <strong>16-Team Knockout Competition:</strong>
                <span className="text-[#B0B3B8] ">
                  {" "}
                  Thrilling matches in a high-stakes knockout format.
                </span>
              </p>
            </li>
            <li className="flex items-start gap-3 lg:w-[410px] w-auto">
              <span className="text-red-600">●</span>
              <p className="text-white">
                <strong>Ages 18–45:</strong>
                <span className="text-[#B0B3B8]">
                  {" "}
                  A platform for players across generations to showcase their
                  skills.
                </span>
              </p>
            </li>
            <li className="flex items-start gap-3 lg:w-[410px] w-auto">
              <span className="text-red-600">●</span>
              <p className="text-white">
                <strong>Professional Organization:</strong>
                <span className="text-[#B0B3B8]">
                  {" "}
                  Well-structured tournament with qualified referees and
                  officials.
                </span>
              </p>
            </li>
            <li className="flex items-start gap-3 lg:w-[410px] w-auto">
              <span className="text-red-600">●</span>
              <p className="text-white">
                <strong>Attractive Prizes:</strong>
                <span className="text-[#B0B3B8]">
                  {" "}
                  Trophies, medals, cash rewards, and individual awards for MVP,
                  Best Goalkeeper, and Top Scorer.
                </span>
              </p>
            </li>
            <li className="flex items-start gap-3 lg:w-[410px] w-auto">
              <span className="text-red-600">●</span>
              <p className="text-white">
                <strong>Community Focus:</strong>
                <span className="text-[#B0B3B8]">
                  {" "}
                  Celebrate the power of sport and be part of a vibrant
                  community event.
                </span>
              </p>
            </li>
          </ul>
          <Link href={"/register"}>
            <button className="bg-[#C81E23] flex justify-center items-center lg:m-0 m-auto text-center py-[10px] px-[20px] text-white rounded-[6px] hover hover:bg-[#0F0F0F] hover:text-white hover:border-[#C81E23] hover:border">
              Register now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TournamentHighlight;
