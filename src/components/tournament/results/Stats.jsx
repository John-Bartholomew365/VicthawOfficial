"use client";
export default function Stats({ match }) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold mb-2">Match Statistics</h3>

      {/* Teams and Score */}
      <div className="flex justify-between items-start mb-4">
        {/* Home Team */}
        <div className="flex flex-col items-center flex-1">
          <img
            src={match.homeLogo}
            alt={match.home}
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
          <p className="mt-2 text-white lg:text-sm text-[17px] font-semibold">
            {match.home}
          </p>
        </div>

        {/* Score */}
        <p className="text-lg font-bold mx-4">{match.score}</p>

        {/* Away Team */}
        <div className="flex flex-col items-center flex-1">
          <img
            src={match.awayLogo}
            alt={match.away}
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
          <p className="mt-2 text-white lg:text-sm text-[17px] font-semibold">
            {match.away}
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="space-y-4">
        {/* Stat Row */}
        <div className="flex justify-between items-center">
          <div className="text-[#B0B3B8] text-[14px] text-left">
            {match.stats?.homePossession || "60%"}
          </div>
          <div className="text-[#B0B3B8] text-[14px] font-semibold text-center">
            Possession
          </div>
          <div className="text-[#B0B3B8] text-[14px] text-right">
            {match.stats?.awayPossession || "40%"}
          </div>
        </div>

        {/* Stat Row */}
        {/* <div className="flex justify-between items-center">
          <div className="text-[#B0B3B8] text-[14px] text-left">
            {match.stats?.homeShots || "12"}
          </div>
          <div className="text-[#B0B3B8] text-[14px] font-semibold text-center">
            Shots
          </div>
          <div className="text-[#B0B3B8] text-[14px] text-right">
            {match.stats?.awayShots || "8"}
          </div>
        </div> */}

        {/* Stat Row */}
        {/* <div className="flex justify-between items-center">
          <div className="text-[#B0B3B8] text-[14px] text-left">
            {match.stats?.homeShotsOnTarget || "6"}
          </div>
          <div className="text-[#B0B3B8] text-[14px] font-semibold text-center">
            Shots on Target
          </div>
          <div className="text-[#B0B3B8] text-[14px] text-right">
            {match.stats?.awayShotsOnTarget || "4"}
          </div>
        </div> */}

        {/* Stat Row */}
        {/* <div className="flex justify-between items-center">
          <div className="text-[#B0B3B8] text-[14px] text-left">
            {match.stats?.homeFouls || "10"}
          </div>
          <div className="text-[#B0B3B8] text-[14px] font-semibold text-center">
            Fouls
          </div>
          <div className="text-[#B0B3B8] text-[14px] text-right">
            {match.stats?.awayFouls || "12"}
          </div>
        </div> */}

        {/* Stat Row */}
        {/* <div className="flex justify-between items-center">
          <div className="text-[#B0B3B8] text-[14px] text-left">
            {match.stats?.homeCorners || "5"}
          </div>
          <div className="text-[#B0B3B8] text-[14px] font-semibold text-center">
            Corners
          </div>
          <div className="text-[#B0B3B8] text-[14px] text-right">
            {match.stats?.awayCorners || "4"}
          </div>
        </div> */}

        {/* Stat Row */}
        <div className="flex justify-between items-center">
          <div className="text-[#B0B3B8] text-[14px] text-left">
            {match.stats?.homeYellowCards || "0"}
          </div>
          <div className="text-[#B0B3B8] text-[14px] font-semibold text-center">
            Yellow Cards
          </div>
          <div className="text-[#B0B3B8] text-[14px] text-right">
            {match.stats?.awayYellowCards || "0"}
          </div>
        </div>

        {/* Stat Row */}
        <div className="flex justify-between items-center">
          <div className="text-[#B0B3B8] text-[14px] text-left">
            {match.stats?.homeRedCards || "0"}
          </div>
          <div className="text-[#B0B3B8] text-[14px] font-semibold text-center">
            Red Cards
          </div>
          <div className="text-[#B0B3B8] text-[14px] text-right">
            {match.stats?.awayRedCards || "0"}
          </div>
        </div>
      </div>
    </div>
  );
}
