import React from "react";
import {
  FaTrophy,
  FaCalendarCheck,
  FaUserCheck,
  FaChartBar,
} from "react-icons/fa";

const ResultsSection = () => {
  return (
    <div className="lg:p-6 p-1 max-w-3xl mx-auto mt-16">
      <h1 className="text-[25px] text-[#C81E23] lg:text-[35px] font-bold mb-8 text-center">
        Important Notes
      </h1>

      <div className="space-y-6">
        {/* Match Day Results */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-4 items-center">
            <FaCalendarCheck className="text-[#C81E23] text-2xl" />
            <h1 className="text-[18px] font-bold">Match Day Results:</h1>
          </div>
          <p className="text-[#B0B3B8] mt-[-10px] ml-[40px] lg:w-[350px] w-auto">
            Results for the first three match days are now available. Check out
            the detailed outcomes and highlights below.
          </p>
        </div>

        {/* Top Performers */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-4 items-center">
            <FaUserCheck className="text-[#C81E23] text-2xl" />
            <h1 className="text-[18px] font-bold">Top Performers:</h1>
          </div>
          <p className="text-[#B0B3B8] mt-[-10px] ml-[40px]">
            Discover the top-performing teams and players from the first three
            match days. Congratulations to all the winners!
          </p>
        </div>

        {/* Upcoming Matches */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-4 items-center">
            <FaChartBar className="text-[#C81E23] text-2xl" />
            <h1 className="text-[18px] font-bold">Upcoming Matches:</h1>
          </div>
          <p className="text-[#B0B3B8] mt-[-10px] ml-[40px]">
            Stay tuned for the schedule of the next match days. Follow us on
            social media or check back here for updates.
          </p>
        </div>

        {/* Awards and Recognition */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-4 items-center">
            <FaTrophy className="text-[#C81E23] text-2xl" />
            <h1 className="text-[18px] font-bold">Awards and Recognition:</h1>
          </div>
          <p className="text-[#B0B3B8] mt-[-10px] ml-[40px]">
            Special recognition will be given to outstanding performances and
            contributions. Stay tuned for more details on awards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;
