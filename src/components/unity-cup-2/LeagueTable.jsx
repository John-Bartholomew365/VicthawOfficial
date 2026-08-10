"use client";
import { leagueTable } from "@/data/unity-cup-2";

const processGroup = (teams) =>
  teams
    .map((team) => ({
      ...team,
      matchesPlayed: team.wins + team.losses + team.draws,
    }))
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.gd !== a.gd) return b.gd - a.gd;
      return a.name.localeCompare(b.name);
    });

const GroupTable = ({ groupName, teams }) => {
  const rows = processGroup(teams);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold my-6">
          Group {groupName} Standings
        </h2>
        <span className="text-[12px] text-gray-500 hidden sm:block">
          Top 2 qualify for the semi-finals
        </span>
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
            {rows.map((team, index) => (
              <tr
                key={team.slug}
                className={index < 2 ? "bg-green-50/60" : ""}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      {team.logo ? (
                        <img
                          className="h-10 w-10 rounded-full object-contain bg-white"
                          src={team.logo}
                          alt={team.name}
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-gray-200" />
                      )}
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

const LeagueTable = () => {
  return (
    <div>
      <div>
        <h1 className="text-[24px] font-bold my-7">League Standings</h1>
      </div>
      <div className="space-y-10">
        <GroupTable groupName="A" teams={leagueTable.A} />
        <GroupTable groupName="B" teams={leagueTable.B} />
      </div>
    </div>
  );
};

export default LeagueTable;
