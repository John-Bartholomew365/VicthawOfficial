"use client";
import { useState } from "react";
import Link from "next/link";
import { FaCheckCircle, FaTrophy, FaTimes } from "react-icons/fa";
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
  const [selectedMatch, setSelectedMatch] = useState(null);

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
                <div className="flex justify-center py-2">
                  <Link
                    href="/tournament/schedule"
                    className="bg-[#C81E23] text-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-red-700 transition duration-300"
                  >
                    View Schedule
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {round.matches.map((match, index) => {
                    const home = resolveTeam(match.home);
                    const away = resolveTeam(match.away);
                    const hasScorers =
                      match.goalscorers && match.goalscorers.length > 0;
                    return (
                      <div
                        key={`${round.round}-${index}`}
                        onClick={() =>
                          hasScorers &&
                          setSelectedMatch({
                            ...match,
                            round: round.round,
                          })
                        }
                        className={`lg:p-4 p-3 border rounded-lg flex items-center justify-between ${
                          hasScorers
                            ? "cursor-pointer hover:bg-gray-50 transition"
                            : ""
                        }`}
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
                            {hasScorers && (
                              <p className="text-[#C81E23] text-[12px] mt-1 font-medium">
                                Tap for scorers
                              </p>
                            )}
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

      {selectedMatch && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setSelectedMatch(null)}
        >
          <div
            className="bg-white rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">
                {resolveTeam(selectedMatch.home)?.shortName} {selectedMatch.homeScore}{" "}
                - {selectedMatch.awayScore}{" "}
                {resolveTeam(selectedMatch.away)?.shortName}
              </h3>
              <button
                onClick={() => setSelectedMatch(null)}
                className="text-gray-400 hover:text-gray-700 text-xl"
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              {selectedMatch.round} · {selectedMatch.date} · {selectedMatch.time}
            </p>

            <h4 className="font-semibold mb-3 text-gray-800">Goal Scorers</h4>
            <ul className="space-y-2">
              {selectedMatch.goalscorers.map((gs, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between border-b border-gray-100 pb-2"
                >
                  <div>
                    <p className="font-medium">{gs.player}</p>
                    <p className="text-xs text-gray-500">{gs.team}</p>
                  </div>
                  <span className="text-sm font-semibold bg-gray-100 px-2 py-1 rounded">
                    {gs.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="mt-10 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
        <FaCheckCircle className="text-green-500 text-2xl shrink-0" />
        <div>
          <h3 className="font-bold text-green-800">Results are live</h3>
          <p className="text-green-600 text-sm">
            Group stage complete! Semi-final and knockout results will
            be added here as each match is played. Venue: {edition.venue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
