import React from "react";

const LeagueTable = () => {
  // Sample team data - replace with your actual data
  const teams = [
    {
      id: 1,
      name: "NBA FC",
      logo: "/nba.png",
      points: 4,
      gf: 3, // Goals For
      ga: 0, // Goals Against
      wins: 1,
      losses: 0,
      draws: 1,
    },
    {
      id: 2,
      name: "Sway Fitness FC",
      logo: "/sway.png",
      points: 0,
      gf: 0,
      ga: 2,
      wins: 0,
      losses: 2,
      draws: 0,
    },
    {
      id: 3,
      name: "Leo FC",
      logo: "/loe.jpg",
      points: 1,
      gf: 1,
      ga: 4,
      wins: 0,
      losses: 1,
      draws: 1,
    },
    {
      id: 4,
      name: "Bankers All Stars FC",
      logo: "/bankers-fc.png",
      points: 6,
      gf: 2,
      ga: 0,
      wins: 2,
      losses: 0,
      draws: 0,
    },
    {
      id: 5,
      name: "Maracana FC",
      logo: "/maracana.png",
      points: 4,
      gf: 1,
      ga: 0,
      wins: 1,
      losses: 0,
      draws: 1,
    },
    {
      id: 6,
      name: "Unilorin Quarters FC",
      logo: "/unilorin.jpg",
      points: 0,
      gf: 0,
      ga: 1,
      wins: 0,
      losses: 1,
      draws: 0,
    },
    {
      id: 7,
      name: "Corporate Ballers FA",
      logo: "/corporate-ballers.png",
      points: 1,
      gf: 1,
      ga: 1,
      wins: 0,
      losses: 0,
      draws: 1,
    },
  ];

  // Calculate Goal Difference (GD) and matches played, then sort teams
  const processedTeams = teams
    .map((team) => ({
      ...team,
      gd: team.gf - team.ga,
      matchesPlayed: team.wins + team.losses + team.draws,
    }))
    .sort((a, b) => {
      // First sort by points (descending)
      if (b.points !== a.points) {
        return b.points - a.points;
      }
      // If points are equal, sort by GD (descending)
      if (b.gd !== a.gd) {
        return b.gd - a.gd;
      }
      // If points and GD are equal, sort alphabetically by team name
      return a.name.localeCompare(b.name);
    });

  return (
    <div>
      <div>
        <h1 className="text-[24px] font-bold my-7">League Standings</h1>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Team
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                PD
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                PTS
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                W
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                L
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                D
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                GF
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                GA
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                GD
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {processedTeams.map((team, index) => (
              <tr key={team.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={team.logo}
                        alt={team.name}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {team.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {team.matchesPlayed}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">
                  {team.points}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {team.wins}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {team.losses}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {team.draws}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {team.gf}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {team.ga}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                    team.gd > 0
                      ? "text-green-600"
                      : team.gd < 0
                      ? "text-red-600"
                      : "text-gray-900"
                  }`}
                >
                  {team.gd > 0 ? `+${team.gd}` : team.gd}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeagueTable;
