import React from "react";

// The `results` object for logo extraction
const results = {
  "Matchday 1": [
    {
      home: "Leo FC",
      away: "NBA FC",
      homeLogo: "/loe.jpg",
      awayLogo: "/nba.png",
      score: "0-3",
      goalscorers: [],
    },
    {
      home: "Bankers All Stars",
      away: "Unilorin Quarters",
      homeLogo: "/bankers-fc.png",
      awayLogo: "/unilorin.jpg",
      score: "1-0",
      goalscorers: [{ player: "Samuel Olajube", team: "Bankers All Stars" }],
    },
    {
      home: "Sway FC",
      away: "Maracana FC",
      homeLogo: "/sway.png",
      awayLogo: "/maracana.png",
      score: "0-1",
      goalscorers: [{ player: "Sheriff", team: "Maracana FC" }],
    },
  ],
  "Matchday 2": [
    {
      home: "Leo FC",
      away: "Corporate Ballers FA",
      homeLogo: "/loe.jpg",
      awayLogo: "/corporate-ballers.png",
      score: "1-1",
      goalscorers: [
        { player: "Boluwatife", team: "Leo FC" },
        { player: "Araromi", team: "Corporate Ballers FA" },
      ],
    },
    {
      home: "NBA FC",
      away: "Maracana FC",
      homeLogo: "/nba.png",
      awayLogo: "/maracana.png",
      score: "0-0",
      goalscorers: [
        { player: "Player D", team: "Leo FC" },
        { player: "Player E", team: "Leo FC" },
      ],
    },
    {
      home: "Bankers All Stars",
      away: "Sway FC",
      homeLogo: "/bankers-fc.png",
      awayLogo: "/sway.png",
      score: "1-0",
      goalscorers: [{ player: "Finisi Bamidele", team: "Bankers All Stars" }],
    },
  ],
  "Matchday 3": [
    {
      home: "Unilorin Quarters",
      away: "Leo FC",
      homeLogo: "/unilorin.jpg",
      awayLogo: "/loe.jpg",
      score: "0-0",
      goalscorers: [
        { player: "Player D", team: "Getho" },
        { player: "Player E", team: "Getho" },
      ],
    },
    {
      home: "Maracana FC",
      away: "Bankers All Stars",
      homeLogo: "/maracana.png",
      awayLogo: "/bankers-fc.png",
      score: "0-0",
      goalscorers: [
        { player: "Player D", team: "Leo FC" },
        { player: "Player E", team: "Leo FC" },
      ],
    },
    {
      home: "Corporate Ballers",
      away: "NBA FC",
      homeLogo: "/corporate-ballers.png",
      awayLogo: "/nba.png",
      score: "0-0",
      goalscorers: [{ player: "Finisi Bamidele", team: "Bankers All Stars" }],
    },
  ],
  "Matchday 4": [
    {
      home: "Sway FC",
      away: "Unilorin Quarters",
      homeLogo: "/sway.png",
      awayLogo: "/unilorin.jpg",
      score: "0-1",
      goalscorers: [
        { player: "Toheeb", team: "Unilorin Quarters" },
        { player: "Player E", team: "Getho" },
      ],
    },
    {
      home: "Leo FC",
      away: "Maracana FC",
      homeLogo: "/loe.jpg",
      awayLogo: "/maracana.png",
      score: "3-0",
      goalscorers: [
        { player: "Lukman", team: "Leo FC" },
        { player: "Lukman", team: "Leo FC" },
        { player: "Mujeeb", team: "Leo FC" },
      ],
    },
    {
      home: "Bankers All Stars",
      away: "Corporate Ballers",
      homeLogo: "/bankers-fc.png",
      awayLogo: "/corporate-ballers.png",
      score: "0-0",
      goalscorers: [{ player: "Finisi Bamidele", team: "Getho" }],
    },
  ],
  "Matchday 5": [
    {
      home: "NBA FC",
      away: "Bankers All Stars",
      homeLogo: "/nba.png",
      awayLogo: "/bankers-fc.png",
      score: "0-0",
      goalscorers: [
        { player: "Toheeb", team: "Getho" },
        { player: "Player E", team: "Getho" },
      ],
    },
    {
      home: "Unilorin Quarters",
      away: "Maracana FC",
      homeLogo: "/unilorin.jpg",
      awayLogo: "/maracana.png",
      score: "0-0",
      goalscorers: [
        { player: "Lukman", team: "Leo FC" },
        { player: "Lukman", team: "Leo FC" },
        { player: "Mujeeb", team: "Leo FC" },
      ],
    },
    {
      home: "Sway FC",
      away: "Corporate Ballers",
      homeLogo: "/sway.png",
      awayLogo: "/corporate-ballers.png",
      score: "0-3",
      goalscorers: [],
    },
  ],
  "Matchday 6": [
    {
      home: "Leo FC",
      away: "Sway FC",
      homeLogo: "/loe.jpg",
      awayLogo: "/sway.png",
      score: "1-0",
      goalscorers: [
        { player: "Mujeeb", team: "Leo FC" },
        { player: "Player E", team: "Getho" },
      ],
    },
    {
      home: "Maracana FC",
      away: "Corporate Ballers",
      homeLogo: "/maracana.png",
      awayLogo: "/corporate-ballers.png",
      score: "4-0",
      goalscorers: [
        { player: "Atoyebi Sheriff", team: "Maracana FC" },
        { player: "Atoyebi Sheriff", team: "Maracana FC" },
        { player: "Atoyebi Sheriff", team: "Maracana FC" },
        { player: "Babaita", team: "Maracana FC" },
      ],
    },
    {
      home: "NBA FC",
      away: "Unilorin Quarters",
      homeLogo: "/nba.png",
      awayLogo: "/unilorin.jpg",
      score: "1-1",
      goalscorers: [
        { player: "Abdulateef", team: "NBA FC" },
        { player: "Ladi", team: "Unilorin Quarters" },
      ],
    },
  ],
};

// Create a mapping of team names to their logos
const teamLogos = {};
Object.values(results).forEach((matchday) => {
  matchday.forEach((match) => {
    teamLogos[match.home] = match.homeLogo;
    teamLogos[match.away] = match.awayLogo;
  });
});

const GoalScorersRanking = () => {
  // Hardcoded data from the provided manual table
  const topScorers = [
    { player: "Atoyebi Sheriff", team: "Maracana FC", goals: 4 },
    { player: "Ladi", team: "Unilorin Quarters", goals: 2 },
    { player: "Lukman", team: "Leo FC", goals: 2 },
    { player: "Mujeeb", team: "Leo FC", goals: 2 },
    { player: "Abdulateef", team: "NBA FC", goals: 1 },
    { player: "Araromi", team: "Corporate Ballers FA", goals: 1 },
    { player: "Babaita", team: "Maracana FC", goals: 1 },
    { player: "Boluwatife", team: "Leo FC", goals: 1 },
    { player: "Finisi Bamidele", team: "Bankers All Stars", goals: 1 },
    { player: "Samuel Olajube", team: "Bankers All Stars", goals: 1 },
    { player: "Toheeb", team: "Unilorin Quarters", goals: 1 },
    { player: "Ganee Alabi", team: "Bankers All Stars", goals: 1 },
    { player: "K.B", team: "Bankers All Stars", goals: 1 },
  ];

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto tracking-tight mt-8 sm:mt-16">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-7 text-center">
        Top Goal Scorers
      </h1>
      {topScorers.length === 0 ? (
        <p className="text-center text-gray-500 text-sm sm:text-base">
          No goals scored yet.
        </p>
      ) : (
        <>
          {/* Table for larger screens (sm and above) */}
          <div className="hidden sm:block overflow-x-auto">
            <table
              className="min-w-full border-collapse border border-gray-300"
              aria-label="Top Goal Scorers Table"
            >
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left text-sm sm:text-base">
                    Rank
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left text-sm sm:text-base">
                    Player
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left text-sm sm:text-base">
                    Team
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2 text-left text-sm sm:text-base">
                    Goals
                  </th>
                </tr>
              </thead>
              <tbody>
                {topScorers.map((scorer, index) => (
                  <tr
                    key={scorer.player}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="border border-gray-300 px-2 sm:px-4 py-2 text-sm sm:text-base">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-2 sm:px-4 py-2 text-sm sm:text-base">
                      {scorer.player}
                    </td>
                    <td className="border border-gray-300 px-2 sm:px-4 py-2 text-sm sm:text-base">
                      <div className="flex items-center space-x-2">
                        {teamLogos[scorer.team] ? (
                          <img
                            src={teamLogos[scorer.team]}
                            alt={`${scorer.team} logo`}
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                          />
                        ) : (
                          <span className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 flex items-center justify-center text-gray-500 text-xs rounded-full">
                            No Logo
                          </span>
                        )}
                        <span>{scorer.team}</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-2 sm:px-4 py-2 text-sm sm:text-base">
                      {scorer.goals}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card layout for mobile screens (below sm) */}
          <div className="block sm:hidden space-y-4">
            {topScorers.map((scorer, index) => (
              <div
                key={scorer.player}
                className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
                aria-label={`Goal Scorer ${scorer.player}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-600">
                    Rank: {index + 1}
                  </span>
                  <span className="text-sm font-semibold">
                    Goals: {scorer.goals}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {teamLogos[scorer.team] ? (
                    <img
                      src={teamLogos[scorer.team]}
                      alt={`${scorer.team} logo`}
                      className="w-6 h-6 rounded-full"
                    />
                  ) : (
                    <span className="w-6 h-6 bg-gray-200 flex items-center justify-center text-gray-500 text-xs rounded-full">
                      No Logo
                    </span>
                  )}
                  <div>
                    <p className="text-sm font-medium">{scorer.player}</p>
                    <p className="text-xs text-gray-500">{scorer.team}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="flex justify-center mt-7">
        <a
          href="/tournament/prizes"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 tracking-tight text-white px-8 py-3 rounded-md text-[16px] hover:bg-red-700 transition duration-300"
        >
          See full prizes
        </a>
      </div>
    </div>
  );
};

export default GoalScorersRanking;
