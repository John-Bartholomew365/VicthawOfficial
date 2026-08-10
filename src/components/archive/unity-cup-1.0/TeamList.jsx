"use client";
import { useState } from "react";
import Link from "next/link";

const teams = [
  {
    id: 1,
    name: "Bankers All Stars FC",
    slug: "bankers-all-stars",
    description: "Consistent performers.",
    location: "Irewolede, Ilorin, Kwara State",
    manager: "Coach Song",
    logo: "/bankers-fc.png",
  },
  {
    id: 2,
    name: "Nigerian Bar Association FC",
    slug: "nba",
    description: "Fan favorites.",
    location: "Olorunsogo, Ilorin, Kwara State",
    manager: "Prof. Ismail Mustapha Adua",
    logo: "/nba.png",
  },
  {
    id: 3,
    name: "Unilorin Quarters FC",
    slug: "unilorin-quarters",
    description: "Hardworking squad.",
    location: "Geri alimi, Ilorin, Kwara State",
    manager: "Coach Walter",
    logo: "/unilorin.jpg",
  },
  {
    id: 4,
    name: "Maracana FC",
    slug: "maracana",
    description: "Fan favorites.",
    location: "Olorunsogo, Ilorin, Kwara State",
    manager: "Damilola Ali",
    logo: "/maracana.png",
  },
  {
    id: 5,
    name: "Sway Fitness FC",
    slug: "sway-fitness",
    description: "A top-tier team.",
    location: "Unity, Ilorin, Kwara State",
    manager: "Adeniji Victor",
    logo: "/sway.png",
  },
  {
    id: 6,
    name: "Leo FC",
    slug: "leo",
    description: "Tactical masterminds.",
    location: "Baseline, Ilorin, Kwara State",
    manager: "Uthman",
    logo: "/loe.jpg",
  },
  {
    id: 7,
    name: "Corporate Ballers FA",
    slug: "corporate-ballers",
    description: "Upcoming champions.",
    location: "Asa dam, Ilorin, Kwara State",
    manager: "Shola Onipe",
    logo: "/corporate-ballers.png",
  },
];

export default function TeamList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="bg-[#FAFAFA] min-h-screen p-6 text-black rounded-md">
        <div className="my-8 text-center">
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">
            Participating Teams
          </h1>
        </div>
        <div className="max-w-4xl mx-auto">
          <input
            type="text"
            placeholder="Search teams..."
            className="w-full p-3 mb-4 rounded-lg bg-[#FFFFFF] text-black placeholder-gray-400 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {filteredTeams.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-12">
              {filteredTeams.map((team) => (
                <Link
                  href={`/archive/unity-cup-1.0/team/${team.slug}`}
                  key={team.id}
                  className="flex flex-col md:flex-row items-center gap-4 p-4 border border-gray-300 rounded-lg relative hover:bg-gray-50 transition-colors"
                >
                  {/* Team Logo */}
                  <img
                    src={team.logo}
                    alt={team.name}
                    className="w-24 h-24 object-cover"
                  />

                  {/* Team Info */}
                  <div className="text-center space-y-1 md:text-left flex-1">
                    <h2 className="text-xl font-bold">{team.name}</h2>
                    <p className="text-gray-400">Manager: {team.manager}</p>
                  </div>
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
          Relive the UNITY CUP 1.0 Action
        </h1>
        <p className="text-gray-400 lg:w-[450px] w-auto mx-auto mt-3">
          Missed the matches? Catch up on highlights, stats, and unforgettable
          moments from the tournament. <br />
          <span className="font-medium text-[#0F0F0F]">
            Unity Cup 2.0 is here - check out the latest tournament!
          </span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-7">
          <Link
            href="/archive/unity-cup-1.0/results"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 tracking-tight text-white px-8 py-3 rounded-md text-lg font-bold hover:bg-red-700 transition duration-300"
          >
            See highlights
          </Link>
          <Link
            href="/tournament/schedule"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#C90A1D] tracking-tight text-[#C90A1D] px-8 py-3 rounded-md text-lg font-bold hover:bg-[#C90A1D] hover:text-white transition duration-300"
          >
            Unity Cup 2.0
          </Link>
        </div>
      </div>
    </div>
  );
}
