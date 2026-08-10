"use client";
import { useState } from "react";
import Link from "next/link";
import { teams, groups, edition } from "@/data/unity-cup-2";

const teamBySlug = teams.reduce((acc, t) => {
  acc[t.slug] = t;
  return acc;
}, {});

export default function TeamList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [groupFilter, setGroupFilter] = useState("All");

  const filteredTeams = teams.filter((team) => {
    const matchesSearch = team.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesGroup =
      groupFilter === "All" || team.group === groupFilter;
    return matchesSearch && matchesGroup;
  });

  const sortedByGroup = filteredTeams.sort((a, b) =>
    a.group.localeCompare(b.group)
  );

  return (
    <div>
      <div className="bg-[#FAFAFA] p-6 text-black rounded-md">
        <div className="my-8 text-center">
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">
            Participating Teams
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            {edition.numberOfTeams} teams, 2 groups, 1 champion.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <input
            type="text"
            placeholder="Search teams..."
            className="w-full p-3 mb-4 rounded-lg bg-[#FFFFFF] text-black placeholder-gray-400 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Group Filter */}
          <div className="flex justify-center gap-2 mb-6">
            {["All", "A", "B"].map((g) => (
              <button
                key={g}
                onClick={() => setGroupFilter(g)}
                className={`px-5 py-2 rounded-full text-[14px] font-semibold transition ${
                  groupFilter === g
                    ? "bg-[#C81E23] text-white"
                    : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {g === "All" ? "All Groups" : `Group ${g}`}
              </button>
            ))}
          </div>

          {sortedByGroup.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-12">
              {sortedByGroup.map((team) => (
                <Link
                  href={`/tournament/team/${team.slug}`}
                  key={team.slug}
                  className="flex flex-col md:flex-row items-center gap-4 p-4 border border-gray-300 rounded-lg relative hover:bg-gray-50 transition-colors"
                >
                  <img
                    src={team.logo}
                    alt={team.name}
                    className="w-24 h-24 object-contain bg-white rounded-full"
                  />
                  <div className="text-center space-y-1 md:text-left flex-1">
                    <h2 className="text-xl font-bold">{team.name}</h2>
                    <p className="text-gray-400">Manager: {team.manager}</p>
                  </div>
                  <span className="bg-[#C81E23]/10 text-[#C81E23] text-[13px] font-bold px-4 py-1 rounded-full">
                    Group {team.group}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-[#B0B3B8] mt-5">
              No results for &quot;{searchQuery}&quot;
            </p>
          )}
        </div>
      </div>

      <div className="my-16 text-center">
        <h1 className="text-2xl lg:text-3xl font-bold text-[#C90A1D]">
          The Road to the Cup Begins Here
        </h1>
        <p className="text-gray-400 lg:w-[450px] w-auto mx-auto mt-3">
          Group stage. Knockout drama. One champion. Follow every team&apos;s
          journey through Unity Cup 2.0.
        </p>
        <div className="flex justify-center mt-7">
          <Link
            href="/tournament/schedule"
            className="bg-red-600 tracking-tight text-white px-8 py-3 rounded-md text-lg font-bold hover:bg-red-700 transition duration-300"
          >
            View tournament schedule
          </Link>
        </div>
      </div>
    </div>
  );
}
