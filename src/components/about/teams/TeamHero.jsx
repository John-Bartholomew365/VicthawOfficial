import React from "react";

const TeamHero = () => {
  return (
    <div className="mt-[100px] mb-[60px]">
      <div>
        <h1 className="text-center text-[#C90A1D] font-bold tracking-tight lg:text-[45px] text-[30px]">
          Meet the teams
        </h1>
        <p className="text-[#6B6F76] mt-3 text-center lg:w-[500px] w-auto m-auto">
          Show your support and cheer for your favorite team as they battle for
          victory! Follow their journey throughout the tournament and join us at
          the matches to witness the action live.
        </p>
      </div>

      {/* <div>
        <h1 className="text-center mt-7 text-[#C90A1D]">
          Stay tuned in. More details coming soon!
        </h1>
      </div> */}
    </div>
  );
};

export default TeamHero;
