"use client";
import { FaCheckCircle, FaTrophy } from "react-icons/fa";
import {
  results as resultsData,
  getTeam,
  edition,
} from "@/data/unity-cup-2";

const resolveTeam = (ref) => {
  if (!ref) return null;
  const team = getTeam(ref);
  if (team) return team;
  return { slug: null, name: ref, shortName: ref, logo: null };
};

const TeamLogo = ({ team, size = "w-10 h-10 sm:w-12 sm:h-12" }) => {
  if (!team || !team.logo) {
    return (
      <div
        className={`${size} rounded-full bg-gray-200 flex items-center justify-center text-gray-500 shrink-0`}
      >
        <FaTrophy className="text-sm text-gray-400" />
      </div>
    );
  }
  return (
    <img
      src={team.logo}
      alt={team.name}
      className={`${size} rounded-full object-contain bg-white shrink-0`}
    />
  );
};

const Results = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto tracking-tight mt-8">
      <h1 className="font-bold text-[24px] text-center">Match Results</h1>

      <div className="mt-6 space-y-10">
        {resultsData.map((round) => {
          const anyPlayed = round.matches.some((m) => m.homeScore !== null);
          return (
            <div key={round.round}>
              <h2 className="text-xl font-bold mb-4 text-center flex items-center justify-center gap-2">
                {round.stage === "Final" && (
                  <FaTrophy className="text-yellow-500" />
                )}
                {round.round}
              </h2>

              {!anyPlayed ? (
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-gray-500 text-sm">
                    No matches played yet. Check the{" "}
                    <a
                      className="text-[#C81E23] underline px-[2px]"
                      href="/tournament/schedule"
                    >
                      schedule
                    </a>{" "}
                    for upcoming fixtures.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {round.matches.map((match, index) => {
                    const home = resolveTeam(match.home);
                    const away = resolveTeam(match.away);
                    return (
                      <div
                        key={`${round.round}-${index}`}
                        className="lg:p-4 p-3 border rounded-lg flex items-center justify-between"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-3">
                            <TeamLogo team={home} />
                            <p className="lg:text-[16px] text-[14px] font-semibold">
                              {home.shortName}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <TeamLogo team={away} />
                            <p className="lg:text-[16px] text-[14px] font-semibold">
                              {away.shortName}
                            </p>
                          </div>
                        </div>

                        {match.homeScore !== null ? (
                          <div className="text-center">
                            <p className="font-bold text-[20px]">
                              {match.homeScore} - {match.awayScore}
                            </p>
                            <p className="text-gray-500 text-[12px]">
                              {match.date}
                            </p>
                          </div>
                        ) : (
                          <div className="text-center">
                            <p className="font-bold text-[18px] text-gray-400">
                              VS
                            </p>
                            <p className="text-gray-500 text-[12px]">
                              {match.date}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
        <FaCheckCircle className="text-green-500 text-2xl shrink-0" />
        <div>
          <h3 className="font-bold text-green-800">Results are live</h3>
          <p className="text-green-600 text-sm">
            Matchday 1 scores are in! New results, goalscorers and stats will
            be added here as soon as each match is played. Venue: {edition.venue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
