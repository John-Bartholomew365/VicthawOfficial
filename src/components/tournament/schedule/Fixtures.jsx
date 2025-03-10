"use client";
import { useState } from "react";
import {
  FaClock,
  FaCloudSunRain,
  FaMapMarkerAlt,
  FaParking,
} from "react-icons/fa";

// const matchDays = ["Matchday 1", "Matchday 2", "Matchday 3"];
// const fixtures = {
//   "Matchday 1": [
//     {
//       id: 1,
//       home: "Storm United",
//       away: "Shadow Rovers",
//       time: "10:00",
//       date: "12th April 2025",
//       stage: "Round of 16 - First Leg",
//       homeLogo: "/one.png",
//       awayLogo: "/sixteen.png",
//       firstLegScore: "2 - 1", // Example score for the first leg
//     },
//     {
//       id: 2,
//       home: "Iron Titans FC",
//       away: "Crimson Blazers FC",
//       time: "12:00",
//       date: "12th April 2025",
//       stage: "Round of 16 - First Leg",
//       homeLogo: "/three.png",
//       awayLogo: "/four.png",
//       firstLegScore: "1 - 1", // Example score for the first leg
//     },
//     {
//       id: 3,
//       home: "Venom Chargers FC",
//       away: "Midnight Rangers",
//       time: "14:00",
//       date: "12th April 2025",
//       stage: "Round of 16 - First Leg",
//       homeLogo: "/thirteen.png",
//       awayLogo: "/twelve.png",
//       firstLegScore: "3 - 0", // Example score for the first leg
//     },
//   ],
//   "Matchday 2": [
//     {
//       id: 4,
//       home: "Blaze Warriors FC", // Swapped for second leg
//       away: "Thunder Strikers FC", // Swapped for second leg
//       time: "11:00",
//       date: "13th April 2025",
//       stage: "Round of 16 - Second Leg",
//       homeLogo: "/six.png", // Swapped logos
//       awayLogo: "/five.png", // Swapped logos
//       firstLegScore: "2 - 1", // Example score for the first leg
//     },
//     {
//       id: 5,
//       home: "Inferno Stars", // Swapped for second leg
//       away: "Frost Giants FC", // Swapped for second leg
//       time: "13:00",
//       date: "13th April 2025",
//       stage: "Round of 16 - Second Leg",
//       homeLogo: "/fifteen.png", // Swapped logos
//       awayLogo: "/seven.png", // Swapped logos
//       firstLegScore: "1 - 1", // Example score for the first leg
//     },
//     {
//       id: 6,
//       home: "Arctic Panthers FC", // Swapped for second leg
//       away: "Omega Falcons FC", // Swapped for second leg
//       time: "15:00",
//       date: "13th April 2025",
//       stage: "Round of 16 - Second Leg",
//       homeLogo: "/fourteen.png", // Swapped logos
//       awayLogo: "/thirteen.png", // Swapped logos
//       firstLegScore: "3 - 0", // Example score for the first leg
//     },
//   ],
//   "Matchday 3": [
//     {
//       id: 7,
//       home: "Lunar Predators FC",
//       away: "Titan Crushers FC",
//       time: "11:30",
//       date: "14th April 2025",
//       stage: "Round of 16 - First Leg",
//       homeLogo: "/nine.png",
//       awayLogo: "/ten.png",
//       firstLegScore: "1 - 1", // Example score for the first leg
//     },
//     {
//       id: 8,
//       home: "Thunder Strikers FC", // Swapped for second leg
//       away: "Shadow Rovers", // Swapped for second leg
//       time: "13:30",
//       date: "29th April 2025",
//       stage: "Round of 16 - Second Leg",
//       homeLogo: "/twelve.png", // Swapped logos
//       awayLogo: "/thirteen.png", // Swapped logos
//       firstLegScore: "1 - 1", // Example score for the first leg
//     },
//   ],
// };

export default function MatchSchedule() {
  // const [selectedDay, setSelectedDay] = useState("Matchday 1");
  // const [selectedMatch, setSelectedMatch] = useState(null);
  // const [activeTab, setActiveTab] = useState("firstLeg"); // State for modal tabs

  return (
    <div className="p-6 max-w-3xl mx-auto tracking-tight">
      <h1 className="text-2xl font-bold mb-4 text-center">Match Schedule</h1>
      <div className="lg:flex lg:flex-row flex-col gap-2 items-center justify-center">
        <h1 className="font-bold">Tournament Dates:</h1>
        <p className="text-[#B0B3B8]">12th April – 4th May 2025</p>
      </div>
      <div className="lg:flex lg:flex-row flex-col gap-2 lg:my-3 my-5 items-center justify-center">
        <h1 className="font-bold">Match Format:</h1>
        <p className="text-[#B0B3B8]">Knockout style (two-legged)</p>
      </div>
      <div className="lg:flex lg:flex-row flex-col gap-2 items-center justify-center">
        <h1 className="font-bold">Number of Teams:</h1>
        <p className="text-[#B0B3B8]">16 teams competing.</p>
      </div>

      <div>
        <h1 className="text-center mt-7 text-[#C81E23]">Stay tuned in. More details coming soon!</h1>
      </div>

      {/* Matchday Selector */}
      {/* <div className="mt-16">
        <h1 className="font-bold text-[24px] text-center">Match Fixtures</h1>
      </div> */}
      {/* <div className="flex flex-wrap justify-center gap-3 my-5">
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
      </div> */}

      {/* Fixtures List */}
      {/* <div className="space-y-3">
        {fixtures[selectedDay].map((match) => (
          <div
            key={match.id}
            className="p-4 border rounded-lg cursor-pointer hover:bg-[#000000] lg:flex lg:flex-row flex-col items-center justify-between text-center"
            onClick={() => {
              setSelectedMatch(match);
              setActiveTab("firstLeg"); // Reset to first leg tab when opening modal
            }}
          >
            <div className="flex items-center space-x-2 lg:w-2/5 w-auto lg:justify-start justify-center">
              <img
                src={match.homeLogo}
                alt={match.home}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <p className="text-lg font-semibold truncate">{match.home}</p>
            </div>
            <p className="text-lg font-semibold lg:my-0 my-1 lg:m-0 m-auto w-1/5">
              VS
            </p>
            <div className="flex items-center space-x-2 lg:w-2/5 w-auto lg:justify-end justify-center">
              <img
                src={match.awayLogo}
                alt={match.away}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:hidden block"
              />
              <p className="text-lg font-semibold truncate">{match.away}</p>
              <img
                src={match.awayLogo}
                alt={match.away}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:block hidden"
              />
            </div>
          </div>
        ))}
      </div> */}

      {/* Match Details Modal */}

      {/* Important Notes Section */}
      <div className="lg:p-6 p-1 max-w-3xl mx-auto mt-16">
        <h1 className="text-[25px] text-[#C81E23] lg:text-[35px] font-bold mb-8 text-center">
          Important Notes
        </h1>
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

          {/* Venue Address */}
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
              Parking will be available at the tournament venue.
            </p>
          </div>

          {/* Weather Updates */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 items-center">
              <FaCloudSunRain className="text-[#C81E23] text-2xl" />
              <h1 className="text-[18px] font-bold">Weather Updates:</h1>
            </div>
            <p className="text-[#B0B3B8] mt-[-10px] ml-[40px]">
              In case of adverse weather, matches may be rescheduled. <br />{" "}
              Check the website or social media for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
