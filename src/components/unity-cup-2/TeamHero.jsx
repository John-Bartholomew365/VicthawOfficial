import React from "react";
import { edition } from "@/data/unity-cup-2";

const TeamHero = () => {
  return (
    <div className="mt-[100px] mb-[60px]">
      <div>
        <h1 className="text-center text-[#C90A1D] font-bold tracking-tight lg:text-[45px] text-[30px] lg:w-[470px] w-auto leading-tight mx-auto">
          Meet the Teams of {edition.shortTitle}
        </h1>
        <p className="text-[#6B6F76] mt-3 text-center lg:w-[470px] w-auto m-auto">
          Show your support and cheer for your favorite team as they battle for
          victory! Follow their journey throughout the tournament and join us at
          the matches to witness the action live.
        </p>
      </div>
    </div>
  );
};

export default TeamHero;
