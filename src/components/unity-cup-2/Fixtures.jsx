"use client";
import { useState } from "react";
import { FaTrophy, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import {
  fixtures as fixturesData,
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

const Fixtures = () => {
  const [visibleRounds, setVisibleRounds] = useState(2);
  const [selectedMatch, setSelectedMatch] = useState(null);

  const visibleFixtures = fixturesData.slice(0, visibleRounds);
  const hasMore = visibleRounds < fixturesData.length;

  const loadMore = () => {
    setVisibleRounds((prev) => Math.min(prev + 2, fixturesData.length));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto tracking-tight relative">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-7">Match Schedule</h1>
        <div className="space-y-5 mb-6">
          <div className="flex flex-col items-center">
            <span className="font-bold lg:text-[20px] text-[16px]">
              Tournament Dates:
            </span>
            <span className="text-[#6B6F76]">{edition.dates}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold lg:text-[20px] text-[16px]">
              Number of Teams:
            </span>
            <span className="text-[#6B6F76]">
              {edition.numberOfTeams} teams competing
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold lg:text-[20px] text-[16px]">
              Match Format:
            </span>
            <span className="text-[#6B6F76]">{edition.format}</span>
          </div>
        </div>
        <h2 className="text-[#C81E23] mt-4">
          The top 2 teams from each group will qualify for the semi-finals!
        </h2>
      </div>

      <div className="mt-16">
        <h1 className="font-bold text-[24px] text-center">Match Fixtures</h1>
      </div>

      {/* All Rounds (progressively revealed via Load More) */}
      <div className="mt-8 space-y-10">
        {visibleFixtures.map((round) => (
          <div key={round.round}>
            <h2 className="text-xl font-bold text-center flex items-center justify-center gap-2 mb-4">
              {round.stage === "Final" && <FaTrophy className="text-yellow-500" />}
              {round.round}
            </h2>
            <div className="space-y-5">
              {round.matches.map((match, index) => {
                const home = resolveTeam(match.home);
                const away = resolveTeam(match.away);
                return (
                  <div
                    key={`${round.round}-${index}`}
                    className="lg:p-4 p-3 border rounded-lg cursor-pointer hover:bg-[#FAFAFA] transition flex items-center justify-between"
                    onClick={() => setSelectedMatch({ match, home, away })}
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
                    <div className="text-right">
                      <p className="font-semibold lg:text-[14px] text-[12px]">
                        {match.date}
                      </p>
                      <p className="text-gray-500 lg:text-[14px] text-[12px]">
                        {match.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={loadMore}
            className="bg-[#C81E23] text-white px-8 py-3 rounded-lg font-semibold transition hover:bg-white hover:text-[#C81E23] hover:border-2 hover:border-[#C81E23]"
          >
            Load More Matches
          </button>
        </div>
      )}

      {/* Match Details Modal */}
      {selectedMatch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {selectedMatch.match.stage === "Final"
                  ? "The Grand Finale"
                  : selectedMatch.match.stage}
              </h2>
              <button
                onClick={() => setSelectedMatch(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="text-center">
              <div className="flex justify-between items-center mb-4">
                <div className="flex-1 text-center">
                  <div className="flex justify-center">
                    <TeamLogo team={selectedMatch.home} size="w-16 h-16" />
                  </div>
                  <p className="font-bold mt-2">
                    {selectedMatch.home.shortName}
                  </p>
                </div>
                <div className="mx-4">
                  <p className="text-2xl font-bold">VS</p>
                </div>
                <div className="flex-1 text-center">
                  <div className="flex justify-center">
                    <TeamLogo team={selectedMatch.away} size="w-16 h-16" />
                  </div>
                  <p className="font-bold mt-2">
                    {selectedMatch.away.shortName}
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-3 text-left">
                <p className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#C81E23]" />
                  <span className="font-bold">Date:</span>{" "}
                  {selectedMatch.match.date}
                </p>
                <p className="flex items-center gap-2">
                  <FaTrophy className="text-[#C81E23] text-sm" />
                  <span className="font-bold">Time:</span>{" "}
                  {selectedMatch.match.time}
                </p>
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#C81E23]" />
                  <span className="font-bold">Venue:</span> {edition.venue}
                </p>
                {selectedMatch.match.stage === "Final" && (
                  <p className="text-[#C81E23] font-medium">
                    This is the tournament final match!
                  </p>
                )}
              </div>

              <button
                onClick={() => setSelectedMatch(null)}
                className="mt-6 bg-[#C81E23] text-white px-4 py-2 rounded-lg w-full hover:bg-[#A5191E] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fixtures;
