// pages/results.jsx
import Image from "next/image";
import React from "react";

const ResultsHero = () => {
  return (
    <div className="my-[100px]">
      <div className="lg:flex  lg:flex-row flex-col items-center gap-[140px] my-[100px] lg:pl-[70px] pl-0">
        <div>
          <h1 className="lg:text-[45px] text-[30px]">Match Day Results</h1>
          <p className="lg:w-[400px] w-auto tracking-tight text-[#B0B3B8] mt-3">
            Stay updated with the latest action! Below are the results for the matches played so far in the Victhaw Official Unity Cup 1.0. Check out the match outcomes and highlights so far. More exciting matches are coming soon!
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

export default ResultsHero;