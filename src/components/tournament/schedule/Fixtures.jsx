"use client";
import { useState } from "react";
import {
  FaClock,
  FaCloudSunRain,
  FaMapMarkerAlt,
  FaParking,
} from "react-icons/fa";

const matchDays = ["Matchday 1", "Matchday 2", "Matchday 3"];
const fixtures = {
  "Matchday 1": [
    {
      id: 1,
      home: "Storm FC",
      away: "Shadow Rovers",
      time: "10:00",
      date: "12th April 2025",
      stage: "Round of 16",
      homeLogo: "/one.png",
      awayLogo: "/sixteen.png",
    },
    {
      id: 2,
      home: "Iron Titans FC",
      away: "Crimson Blazers FC",
      time: "12:00",
      date: "12th April 2025",
      stage: "Round of 16",
      homeLogo: "/three.png",
      awayLogo: "/four.png",
    },
    {
      id: 3,
      home: "Venom Chargers FC",
      away: "Midnight Rangers",
      time: "14:00",
      date: "12th April 2025",
      stage: "Round of 16",
      homeLogo: "/thirteen.png",
      awayLogo: "/twelve.png",
    },
  ],
  "Matchday 2": [
    {
      id: 4,
      home: "Thunder Strikers FC",
      away: "Blaze Warriors FC",
      time: "11:00",
      date: "13th April 2025",
      stage: "Round of 16",
      homeLogo: "/five.png",
      awayLogo: "/six.png",
    },
    {
      id: 5,
      home: "Frost Giants FC",
      away: "Inferno Stars",
      time: "13:00",
      date: "13th April 2025",
      stage: "Round of 16",
      homeLogo: "/seven.png",
      awayLogo: "/fifteen.png",
    },
    {
      id: 6,
      home: "Omega Falcons FC",
      away: "Arctic Panthers FC",
      time: "15:00",
      date: "13th April 2025",
      stage: "Round of 16",
      homeLogo: "/thirteen.png",
      awayLogo: "/fourteen.png",
    },
  ],
  "Matchday 3": [
    {
      id: 7,
      home: "Lunar Predators FC",
      away: "Titan Crushers FC",
      time: "11:30",
      date: "14th April 2025",
      stage: "Round of 16",
      homeLogo: "/nine.png",
      awayLogo: "/ten.png",
    },
    {
      id: 8,
      home: "Shadow Rovers",
      away: "Thunder Strikers FC",
      time: "13:30",
      date: "29th April 2025",
      stage: "Round of 16",
      homeLogo: "/thirteen.png",
      awayLogo: "/twelve.png",
    },
  ],
};

export default function MatchSchedule() {
  const [selectedDay, setSelectedDay] = useState("Matchday 1");
  const [selectedMatch, setSelectedMatch] = useState(null);

  return (
    <div className="p-6 max-w-3xl mx-auto tracking-tight">
      <h1 className="text-2xl font-bold mb-4 text-center">Match Schedule</h1>
      <div className="flex gap-2 items-center justify-center">
        <h1 className="font-bold">Tournament Dates:</h1>
        <p className="text-[#B0B3B8]">12th April – 4th May 2025</p>
      </div>
      <div className="flex gap-2 my-3 items-center justify-center">
        <h1 className="font-bold">Match Format:</h1>
        <p className="text-[#B0B3B8]">Knockout style (single elimination)</p>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <h1 className="font-bold">Number of Teams:</h1>
        <p className="text-[#B0B3B8]">16 teams competing.</p>
      </div>

      {/* Matchday Selector */}
      <div className="mt-16">
        <h1 className="font-bold text-[24px] text-center">Match Fixtures</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-3 my-5">
        {matchDays.map((day) => (
          <button
            key={day}
            className={`px-4 py-2 rounded-lg border transition ${
              selectedDay === day
                ? "bg-[#C81E23] text-white"
                : "bg-[#000000] hover:bg-[#000000]"
            }`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Fixtures List */}
      <div className="space-y-3">
        {fixtures[selectedDay].map((match) => (
          <div
            key={match.id}
            className="p-4 border rounded-lg cursor-pointer hover:bg-[#000000] flex flex-wrap items-center justify-between text-center"
            onClick={() => setSelectedMatch(match)}
          >
            <div className="flex items-center space-x-2 w-2/5 justify-end">
              <img
                src={match.homeLogo}
                alt={match.home}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <p className="text-lg font-semibold truncate">{match.home}</p>
            </div>
            <p className="text-lg font-semibold w-1/5">VS</p>
            <div className="flex items-center space-x-2 w-2/5 justify-start">
              <p className="text-lg font-semibold truncate">{match.away}</p>
              <img
                src={match.awayLogo}
                alt={match.away}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Match Details Modal */}
      {selectedMatch && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
          onClick={() => setSelectedMatch(null)}
        >
          <div
            className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setSelectedMatch(null)}
            >
              ✖
            </button>
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-col items-center">
                <img
                  src={selectedMatch.homeLogo}
                  alt={selectedMatch.home}
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
                <p className="mt-2 text-white lg:text-sm text-[17px] font-semibold">
                  {selectedMatch.home}
                </p>
              </div>
              <p className="text-lg font-bold">VS</p>
              <div className="flex flex-col items-center">
                <img
                  src={selectedMatch.awayLogo}
                  alt={selectedMatch.away}
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
                <p className="mt-2 text-white lg:text-sm text-[17px] font-semibold">
                  {selectedMatch.away}
                </p>
              </div>
            </div>
            <p className="text-[#B0B3B8] mt-12">
              Date:{" "}
              <span className="font-bold text-white">{selectedMatch.date}</span>
            </p>
            <p className="text-[#B0B3B8] my-3">
              Kickoff Time:{" "}
              <span className="font-bold text-white">{selectedMatch.time}</span>
            </p>
            <p className="text-[#B0B3B8]">
              Stage:{" "}
              <span className="font-bold text-white">
                {selectedMatch.stage}
              </span>
            </p>
          </div>
        </div>
      )}

      <div className="lg:p-6 p-1 max-w-3xl mx-auto mt-16">
        <h1 className="text-[25px] text-[#C81E23] lg:text-[35px] font-bold mb-8 text-center">Important Notes</h1>

        <div className="space-y-6">
          {/* Match Duration */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 items-center">
              <FaClock className="text-[#C81E23] text-2xl" />
              <h1 className="text-[18px] font-bold">Match Duration:</h1>
            </div>
            <p className="text-[#B0B3B8] mt-[-10px] ml-[40px] lg:w-[350px] w-auto">
              Each match consists of two 30-minute halves with a 10-minute
              halftime break. 
            </p>
          </div>

          {/* Venue Addressess */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 items-center">
              <FaMapMarkerAlt className="text-[#C81E23] text-2xl" />
              <h1 className="text-[18px] font-bold">Venue Address:</h1>
            </div>
            <p className="text-[#B0B3B8] mt-[-10px] ml-[40px]">
              Basin Stadium, Ilorin, Kwara State
            </p>
          </div>

          {/* Parking */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 items-center">
              <FaParking className="text-[#C81E23] text-2xl" />
              <h1 className="text-[18px] font-bold">Parking:</h1>
            </div>
            <p className="text-[#B0B3B8] mt-[-10px] ml-[40px]">
              Parking will be available at all venues.
            </p>
          </div>

          {/* Weather Updates */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 items-center">
              <FaCloudSunRain className="text-[#C81E23] text-2xl" />
              <h1 className="text-[18px] font-bold">Weather Updates:</h1>
            </div>
            <p className="text-[#B0B3B8] mt-[-10px] ml-[40px]">
              In case of adverse weather, matches may be rescheduled. <br /> Check the
              website or social media for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
