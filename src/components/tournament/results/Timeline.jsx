"use client";

export default function Timeline({ match }) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold mb-2">Match Timeline</h3>
      <div className="space-y-2">
        {/* <div className="text-[#B0B3B8] text-[14px]">
          {match.home} and {match.away} have faced each other 5 times in the last 2 years.
        </div> */}
        <div className="text-[#B0B3B8] text-[14px]">
          Last meeting: NBA won 3-0 on 13th April 2025.
        </div>
        <div className="text-[#B0B3B8] text-[14px]">
          NBA have won their opening match by a 3 goal-margin.
        </div>
        {/* <div className="text-[#B0B3B8] text-[14px]">
          {match.away === "NBA" ? match.home : match.away} has won 1 of the last 5 matches.
        </div> */}
        {/* <div className="text-[#B0B3B8] text-[14px]">
          1 match ended in a draw.
        </div> */}
      </div>
    </div>
  );
}
