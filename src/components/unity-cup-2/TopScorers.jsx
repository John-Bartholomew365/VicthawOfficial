"use client";
import { topScorers } from "@/data/unity-cup-2";

const TopScorers = () => {
  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto tracking-tight mt-8 sm:mt-16">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-7 text-center">
        Top Goal Scorers
      </h1>
      {topScorers.length === 0 ? (
        <p className="text-center text-gray-500 text-sm sm:text-base">
          No goals scored yet. Check back after the first matchday.
        </p>
      ) : (
        <>
          <div className="hidden sm:block overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
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
                        {scorer.logo ? (
                          <img
                            src={scorer.logo}
                            alt={`${scorer.team} logo`}
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-contain bg-white"
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

          <div className="block sm:hidden space-y-4">
            {topScorers.map((scorer, index) => (
              <div
                key={scorer.player}
                className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
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
                  {scorer.logo ? (
                    <img
                      src={scorer.logo}
                      alt={`${scorer.team} logo`}
                      className="w-6 h-6 rounded-full object-contain bg-white"
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
          className="bg-red-600 tracking-tight text-white px-8 py-3 rounded-md text-[16px] hover:bg-red-700 transition duration-300"
        >
          See full prizes
        </a>
      </div>
    </div>
  );
};

export default TopScorers;
