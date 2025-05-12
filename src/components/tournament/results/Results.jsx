// "use client";
// import { useState } from "react";
// import Stats from "@/components/tournament/results/Stats";
// import Timeline from "@/components/tournament/results/Timeline";

// const results = {
//   "Matchday 1": [
//     {
//       id: 1,
//       home: "Leo FC",
//       away: "NBA FC",
//       time: "10:00",
//       date: "12th April 2025",
//       stage: "Matchday 1",
//       homeLogo: "/loe.jpg",
//       awayLogo: "/nba.png",
//       score: "0-3",
//       winner: "NBA FC",
//       goalscorers: [
//         { player: "Player 1", team: "NBA FC", time: "23'" },
//         { player: "Player 2", team: "NBA FC", time: "45'" },
//         { player: "Player 3", team: "NBA FC", time: "58'" },
//       ],
//       stats: {
//         homePossession: "55%",
//         homeShots: "12",
//         homeShotsOnTarget: "6",
//         homeFouls: "10",
//         homeCorners: "5",
//         homeYellowCards: "2",
//         homeRedCards: "0",
//         awayPossession: "45%",
//         awayShots: "8",
//         awayShotsOnTarget: "4",
//         awayFouls: "12",
//         awayCorners: "4",
//         awayYellowCards: "3",
//         awayRedCards: "0",
//       },
//     },
//     {
//       id: 2,
//       home: "Bankers All Stars",
//       away: "Unilorin Quarters",
//       time: "10:00",
//       date: "19th April 2025",
//       stage: "Matchday 1",
//       homeLogo: "/bankers-fc.png",
//       awayLogo: "/unilorin.jpg",
//       score: "1-0",
//       winner: "Banker All Stars",
//       goalscorers: [
//         { player: "Samuel Olajube", team: "Banker All Stars" },
//         // { player: "Player 2", team: "NBA FC"},
//         // { player: "Player 3", team: "NBA FC"},
//       ],
//       stats: {
//         homeGoals: "1",
//         homePossession: "60%",
//         // homeShots: "12",
//         // homeShotsOnTarget: "6",
//         // homeFouls: "10",
//         // homeCorners: "5",
//         homeYellowCards: "1",
//         homeRedCards: "0",

//         awayGoals: "0",
//         awayPossession: "40%",
//         // awayShots: "8",
//         // awayShotsOnTarget: "4",
//         // awayFouls: "12",
//         // awayCorners: "4",
//         awayYellowCards: "3",
//         awayRedCards: "1",
//       },
//     },
//     // Other matches...
//   ],
//   // Other matchdays...
// };

// export default function ResultsPage() {
//   const [activeTab, setActiveTab] = useState("goals");
//   const [selectedDay, setSelectedDay] = useState("Matchday 1");
//   const [selectedMatch, setSelectedMatch] = useState(null);
//   const matchDays = ["Matchday 1", "Matchday 2", "Matchday 3"];

//   return (
//     <div className="p-6 max-w-3xl mx-auto tracking-tight">
//       <h1 className="text-2xl font-bold mb-4 text-center">Match Results</h1>

//       {/* Matchday Selector */}
//       <div className="mt-8">
//         <h1 className="font-bold text-[24px] text-center">
//           Results by Matchday
//         </h1>
//         <div className="flex flex-wrap justify-center gap-3 my-5">
//           {/* {matchDays.map((day) => (
//             <button
//               key={day}
//               className={`px-4 py-2 rounded-lg border transition ${
//                 selectedDay === day
//                   ? "bg-[#C81E23] text-white"
//                   : "bg-[#FFFFFF] hover:bg-[#FAFAFA]"
//               }`}
//               onClick={() => setSelectedDay(day)}
//             >
//               {day}
//             </button>
//           ))} */}

//           <button className="px-4 py-2 rounded-lg border transition bg-[#C81E23] text-white">
//             Matchday 1
//           </button>
//         </div>
//       </div>

//       {/* Results List - Updated Layout */}
//       <div className="space-y-3">
//         {results[selectedDay]?.map((match) => (
//           <div
//             key={match.id}
//             className="p-4 border rounded-lg cursor-pointer hover:bg-[#FAFAFA]"
//             onClick={() => setSelectedMatch(match)}
//           >
//             {/* Match Header */}
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-sm text-gray-500">{match.date}</span>
//               {/* <span className="bg-[#C81E23] text-white text-xs px-2 py-1 rounded">
//                 {match.stage}
//               </span> */}
//             </div>

//             {/* Home Team */}
//             <div className="flex justify-between items-center py-2 border-b">
//               <div className="flex items-center space-x-2">
//                 <img
//                   src={match.homeLogo}
//                   alt={match.home}
//                   className="w-8 h-8 sm:w-10 sm:h-10"
//                 />
//                 <p className="font-semibold">{match.home}</p>
//               </div>
//               <span
//                 className={`font-bold ${
//                   match.winner === match.home ? "text-[#C81E23]" : ""
//                 }`}
//               >
//                 {match.score.split("-")[0]}
//               </span>
//             </div>

//             {/* Away Team */}
//             <div className="flex justify-between items-center py-2">
//               <div className="flex items-center space-x-2">
//                 <img
//                   src={match.awayLogo}
//                   alt={match.away}
//                   className="w-8 h-8 sm:w-10 sm:h-10"
//                 />
//                 <p className="font-semibold">{match.away}</p>
//               </div>
//               <span
//                 className={`font-bold ${
//                   match.winner === match.away ? "text-green-500" : ""
//                 }`}
//               >
//                 {match.score.split("-")[1]}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Match Details Modal */}
//       {selectedMatch && (
//         <div
//           className="fixed inset-0 text-black bg-black bg-opacity-50 flex justify-center items-center p-4"
//           onClick={() => {
//             setSelectedMatch(null);
//             setActiveTab("goals");
//           }}
//         >
//           <div
//             className="bg-[#FFFFFF] text-black p-6 rounded-lg shadow-lg max-w-md w-full relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
//               onClick={() => setSelectedMatch(null)}
//             >
//               ✖
//             </button>

//             {/* Tabs */}
//             <div className="flex justify-around border-b border-gray-700 mb-4">
//               <button
//                 className={`py-2 px-4 ${
//                   activeTab === "goals" ? "border-b-2 border-[#C81E23]" : ""
//                 }`}
//                 onClick={() => setActiveTab("goals")}
//               >
//                 Goals
//               </button>
//               <button
//                 className={`py-2 px-4 ${
//                   activeTab === "timeline" ? "border-b-2 border-[#C81E23]" : ""
//                 }`}
//                 onClick={() => setActiveTab("timeline")}
//               >
//                 Timeline
//               </button>
//             </div>

//             {/* Tab Content */}
//             {activeTab === "goals" && (
//               <div className="flex justify-between items-start mb-4">
//                 {/* Home Team */}
//                 <div className="flex flex-col items-center flex-1">
//                   <img
//                     src={selectedMatch.homeLogo}
//                     alt={selectedMatch.home}
//                     className="w-12 h-12 sm:w-16 sm:h-16"
//                   />
//                   <p className="mt-2 text-black lg:text-sm text-[17px] font-semibold">
//                     {selectedMatch.home}
//                   </p>
//                   <div className="mt-10 space-y-2">
//                     {selectedMatch.goalscorers
//                       .filter((goal) => goal.team === selectedMatch.home)
//                       .map((goal, index) => (
//                         <div key={index} className="text-[#B0B3B8] text-[13px]">
//                           {goal.player} - {goal.time}
//                         </div>
//                       ))}
//                   </div>
//                 </div>

//                 {/* Score */}
//                 <p className="text-lg font-bold mx-4">{selectedMatch.score}</p>

//                 {/* Away Team */}
//                 <div className="flex flex-col items-center flex-1">
//                   <img
//                     src={selectedMatch.awayLogo}
//                     alt={selectedMatch.away}
//                     className="w-12 h-12 sm:w-16 sm:h-16"
//                   />
//                   <p className="mt-2 text-black lg:text-sm text-[17px] font-semibold">
//                     {selectedMatch.away}
//                   </p>
//                   {/* <div className="mt-10 space-y-1">
//                     {selectedMatch.goalscorers
//                       .filter((goal) => goal.team === selectedMatch.away)
//                       .map((goal, index) => (
//                         <div key={index} className="text-[#B0B3B8] text-[13px]">
//                           {goal.player} - {goal.time}
//                         </div>
//                       ))}
//                   </div> */}
//                 </div>
//               </div>
//             )}

//             {activeTab === "timeline" && <Timeline match={selectedMatch} />}

//             {/* Penalties Section */}
//             {selectedMatch.penalties && activeTab === "goals" && (
//               <div className="mt-4">
//                 <h3 className="text-lg font-bold mb-2">Penalties</h3>
//                 <ul className="space-y-2">
//                   {selectedMatch.penalties.map((penalty, index) => (
//                     <li key={index} className="text-[#B0B3B8] text-[14px]">
//                       {penalty.player} ({penalty.team}) - {penalty.result}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Stats from "@/components/tournament/results/Stats";
import Timeline from "@/components/tournament/results/Timeline";

const results = {
  "Matchday 1": [
    {
      id: 1,
      home: "Leo FC",
      away: "NBA FC",
      time: "10:00",
      date: "12th April 2025",
      stage: "Matchday 1",
      homeLogo: "/loe.jpg",
      awayLogo: "/nba.png",
      score: "0-3",
      winner: "NBA FC",
      walkover: true,
      goalscorers: [],
      stats: null,
    },
    {
      id: 2,
      home: "Bankers All Stars",
      away: "Unilorin Quarters",
      time: "04:30pm",
      date: "19th April 2025",
      stage: "Matchday 1",
      homeLogo: "/bankers-fc.png",
      awayLogo: "/unilorin.jpg",
      score: "1-0",
      winner: "Bankers All Stars",
      goalscorers: [
        {
          player: "Samuel Olajube",
          team: "Bankers All Stars" /*, time: "45'" */,
        },
      ],
      stats: {
        homeGoals: "1",
        homePossession: "60%",
        // homeShots: "12",
        // homeShotsOnTarget: "6",
        // homeFouls: "10",
        // homeCorners: "5",
        homeYellowCards: "1",
        homeRedCards: "0",

        awayGoals: "0",
        awayPossession: "40%",
        // awayShots: "8",
        // awayShotsOnTarget: "4",
        // awayFouls: "12",
        // awayCorners: "4",
        awayYellowCards: "3",
        awayRedCards: "0",
      },
    },
    {
      id: 3,
      home: "Sway FC",
      away: "Maracana FC",
      time: "04:30",
      date: "20th April 2025",
      stage: "Matchday 1",
      homeLogo: "/sway.png",
      awayLogo: "/maracana.png",
      score: "0-1",
      winner: "Maracana FC",
      goalscorers: [
        { player: "Sheriff", team: "Maracana FC" /*, time: "15'" */ },
      ],
      stats: {
        homeGoals: "2",
        homePossession: "70%",
        homeShots: "14",
        homeShotsOnTarget: "7",
        homeFouls: "8",
        homeCorners: "6",
        homeYellowCards: "0",
        homeRedCards: "0",
        awayGoals: "1",
        awayPossession: "30%",
        awayShots: "10",
        awayShotsOnTarget: "5",
        awayFouls: "11",
        awayCorners: "5",
        awayYellowCards: "0",
        awayRedCards: "0",
      },
    },
  ],
  "Matchday 2": [
    {
      id: 1,
      home: "Leo FC",
      away: "Corporate Ballers FA",
      time: "04:30",
      date: "26th April 2025",
      stage: "Matchday 2",
      homeLogo: "/loe.jpg",
      awayLogo: "/corporate-ballers.png",
      score: "1-1",
      winner: "Draw",
      goalscorers: [
        { player: "Boluwatife", team: "Leo FC" /*, time: "45'" */ },
        { player: "Araromi", team: "Corporate Ballers FA" /*, time: "15'" */ },
      ],
      stats: {
        homeGoals: "1",
        homePossession: "50%",
        homeShots: "10",
        homeShotsOnTarget: "5",
        homeFouls: "9",
        homeCorners: "4",
        homeYellowCards: "0",
        homeRedCards: "0",
        awayGoals: "1",
        awayPossession: "50%",
        awayShots: "10",
        awayShotsOnTarget: "5",
        awayFouls: "10",
        awayCorners: "4",
        awayYellowCards: "0",
        awayRedCards: "0",
      },
    },
    {
      id: 2,
      home: "NBA FC",
      away: "Maracana FC",
      time: "03:00",
      date: "27th April 2025",
      stage: "Matchday 2",
      homeLogo: "/nba.png",
      awayLogo: "/maracana.png",
      score: "0-0",
      winner: "draw",
      goalscorers: [
        { player: "Player D", team: "Leo FC" /*, time: "22'" */ },
        { player: "Player E", team: "Leo FC" /*, time: "65'" */ },
      ],
      stats: {
        homeGoals: "2",
        homePossession: "50%",
        homeShots: "13",
        homeShotsOnTarget: "7",
        homeFouls: "7",
        homeCorners: "5",
        homeYellowCards: "0",
        homeRedCards: "0",
        awayGoals: "0",
        awayPossession: "50%",
        awayShots: "6",
        awayShotsOnTarget: "3",
        awayFouls: "12",
        awayCorners: "3",
        awayYellowCards: "0",
        awayRedCards: "0",
      },
    },
    {
      id: 3,
      home: "Bankers All Stars",
      away: "Sway FC",
      time: "05:20",
      date: "27th April 2025",
      stage: "Matchday 2",
      homeLogo: "/bankers-fc.png",
      awayLogo: "/sway.png",
      score: "1-0",
      winner: "Bankers All Stars",
      goalscorers: [
        { player: "Finisi Bamidele", team: "Bankers All Stars" /*, time: "10'" */ },
        // { player: "Player G", team: "Sway FC" /*, time: "33'" */ },
        // { player: "Player H", team: "Bankers All Stars" /*, time: "55'" */ },
        // { player: "Player I", team: "Sway FC" /*, time: "68'" */ },
        // { player: "Player J", team: "Bankers All Stars" /*, time: "82'" */ },
      ],
      stats: {
        homeGoals: "3",
        homePossession: "50%",
        homeShots: "16",
        homeShotsOnTarget: "8",
        homeFouls: "11",
        homeCorners: "6",
        homeYellowCards: "0",
        homeRedCards: "0",
        awayGoals: "2",
        awayPossession: "50%",
        awayShots: "14",
        awayShotsOnTarget: "7",
        awayFouls: "10",
        awayCorners: "5",
        awayYellowCards: "0",
        awayRedCards: "0",
      },
    },
  ],
  "Matchday 3": [
    {
      id: 1,
      home: "Unilorin Quarters",
      away: "Leo FC",
      time: "02:45pm",
      date: "4th May 2025",
      stage: "Matchday 3",
      homeLogo: "/unilorin.jpg",
      awayLogo: "/loe.jpg",
      score: "0-0",
      winner: "Draw",
      goalscorers: [
        { player: "Player D", team: "Getho" /*, time: "22'" */ },
        { player: "Player E", team: "Getho" /*, time: "65'" */ },
      ],
      stats: {
        homeGoals: "0",
        homePossession: "50%",
        homeShots: "10",
        homeShotsOnTarget: "5",
        homeFouls: "9",
        homeCorners: "4",
        homeYellowCards: "0",
        homeRedCards: "0",
        awayGoals: "0",
        awayPossession: "50%",
        awayShots: "10",
        awayShotsOnTarget: "5",
        awayFouls: "10",
        awayCorners: "4",
        awayYellowCards: "0",
        awayRedCards: "0",
      },
    },
    {
      id: 2,
      home: "Maracana FC",
      away: "Bankers All Stars",
      time: "03:45pm",
      date: "4th May 2025",
      stage: "Matchday 3",
      homeLogo: "/maracana.png",
      awayLogo: "/bankers-fc.png",
      score: "0-0",
      winner: "Draw",
      goalscorers: [
        { player: "Player D", team: "Leo FC" /*, time: "22'" */ },
        { player: "Player E", team: "Leo FC" /*, time: "65'" */ },
      ],
      stats: {
        homeGoals: "0",
        homePossession: "50%",
        homeShots: "13",
        homeShotsOnTarget: "7",
        homeFouls: "7",
        homeCorners: "5",
        homeYellowCards: "0",
        homeRedCards: "0",
        awayGoals: "0",
        awayPossession: "50%",
        awayShots: "6",
        awayShotsOnTarget: "3",
        awayFouls: "12",
        awayCorners: "3",
        awayYellowCards: "0",
        awayRedCards: "0",
      },
    },
    {
      id: 3,
      home: "Corporate Ballers",
      away: "NBA FC",
      time: "05:20",
      date: "4th May 2025",
      stage: "Matchday 3",
      homeLogo: "/corporate-ballers.png",
      awayLogo: "/nba.png",
      score: "0-0",
      winner: "Draw",
      goalscorers: [
        { player: "Finisi Bamidele", team: "Bankers All Stars" /*, time: "10'" */ },
        // { player: "Player G", team: "Sway FC" /*, time: "33'" */ },
        // { player: "Player H", team: "Bankers All Stars" /*, time: "55'" */ },
        // { player: "Player I", team: "Sway FC" /*, time: "68'" */ },
        // { player: "Player J", team: "Bankers All Stars" /*, time: "82'" */ },
      ],
      stats: {
        homeGoals: "0",
        homePossession: "50%",
        homeShots: "16",
        homeShotsOnTarget: "8",
        homeFouls: "11",
        homeCorners: "6",
        homeYellowCards: "0",
        homeRedCards: "0",
        awayGoals: "0",
        awayPossession: "50%",
        awayShots: "14",
        awayShotsOnTarget: "7",
        awayFouls: "10",
        awayCorners: "5",
        awayYellowCards: "0",
        awayRedCards: "0",
      },
    },
  ],
  "Matchday 4": [
    {
      id: 1,
      home: "Sway FC",
      away: "Unilorin Quarters",
      time: "03:45pm",
      date: "11th May 2025",
      stage: "Matchday 3",
      homeLogo: "/sway.png",
      awayLogo: "/unilorin.jpg",
      score: "0-1",
      winner: "Unilorin Quarters",
      goalscorers: [
        { player: "Toheeb", team: "Unilorin Quarters" /*, time: "22'" */ },
        { player: "Player E", team: "Getho" /*, time: "65'" */ },
      ],
      stats: {
        homeGoals: "0",
        homePossession: "50%",
        homeShots: "10",
        homeShotsOnTarget: "5",
        homeFouls: "9",
        homeCorners: "4",
        homeYellowCards: "0",
        homeRedCards: "0",
        awayGoals: "0",
        awayPossession: "50%",
        awayShots: "10",
        awayShotsOnTarget: "5",
        awayFouls: "10",
        awayCorners: "4",
        awayYellowCards: "0",
        awayRedCards: "0",
      },
    },
    {
      id: 2,
      home: "Leo FC",
      away: "Maracana FC",
      time: "03:45pm",
      date: "11th May 2025",
      stage: "Matchday 3",
      homeLogo: "/loe.jpg",
      awayLogo: "/maracana.png",
      score: "3-0",
      winner: "Leo FC",
      goalscorers: [
        { player: "Lukman", team: "Leo FC" /*, time: "22'" */ },
        { player: "Lukman", team: "Leo FC" /*, time: "65'" */ },
        { player: "Mujeeb", team: "Leo FC" /*, time: "65'" */ },
      ],
      stats: {
        homeGoals: "0",
        homePossession: "50%",
        homeShots: "13",
        homeShotsOnTarget: "7",
        homeFouls: "7",
        homeCorners: "5",
        homeYellowCards: "0",
        homeRedCards: "0",
        awayGoals: "0",
        awayPossession: "50%",
        awayShots: "6",
        awayShotsOnTarget: "3",
        awayFouls: "12",
        awayCorners: "3",
        awayYellowCards: "0",
        awayRedCards: "0",
      },
    },
    {
      id: 3,
      home: "Bankers All Stars",
      away: "Corporate Ballers",
      time: "05:20",
      date: "11th May 2025",
      stage: "Matchday 3",
      homeLogo: "/bankers-fc.png",
      awayLogo: "/corporate-ballers.png",
      score: "0-0",
      winner: "Draw",
      goalscorers: [
        { player: "Finisi Bamidele", team: "Getho" /*, time: "10'" */ },
        // { player: "Player G", team: "Sway FC" /*, time: "33'" */ },
        // { player: "Player H", team: "Bankers All Stars" /*, time: "55'" */ },
        // { player: "Player I", team: "Sway FC" /*, time: "68'" */ },
        // { player: "Player J", team: "Bankers All Stars" /*, time: "82'" */ },
      ],
      stats: {
        homeGoals: "0",
        homePossession: "50%",
        homeShots: "16",
        homeShotsOnTarget: "8",
        homeFouls: "11",
        homeCorners: "6",
        homeYellowCards: "0",
        homeRedCards: "0",
        awayGoals: "0",
        awayPossession: "50%",
        awayShots: "14",
        awayShotsOnTarget: "7",
        awayFouls: "10",
        awayCorners: "5",
        awayYellowCards: "0",
        awayRedCards: "0",
      },
    },
  ],
};

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState("goals");
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [visibleMatchdays, setVisibleMatchdays] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const matchDays = Object.keys(results);

  const loadMoreMatchdays = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleMatchdays((prev) => Math.min(prev + 1, matchDays.length));
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto tracking-tight">
      <h1 className="text-2xl font-bold mb-4 text-center">Match Results</h1>

      {/* Results List */}
      <div className="space-y-8">
        {matchDays.slice(0, visibleMatchdays).map((matchday) => (
          <div key={matchday} className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-center">{matchday}</h2>
            <div className="space-y-3">
              {results[matchday]?.map((match) => (
                <div
                  key={`${matchday}-${match.id}`}
                  className="p-4 border rounded-lg cursor-pointer hover:bg-[#FAFAFA]"
                  onClick={() => {
                    setSelectedMatch(match);
                    setActiveTab("goals");
                  }}
                >
                  {/* Match Header */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">{match.date}</span>
                    {match.walkover && (
                      <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded">
                        Walkover
                      </span>
                    )}
                  </div>

                  {/* Home Team */}
                  <div className="flex justify-between items-center py-2 border-b">
                    <div className="flex items-center space-x-2">
                      <img
                        src={match.homeLogo}
                        alt={match.home}
                        className="w-8 h-8 sm:w-10 sm:h-10"
                      />
                      <p className="font-semibold">{match.home}</p>
                    </div>
                    <span
                      className={`font-bold ${
                        match.winner === match.home
                          ? "text-green-500"
                          : match.winner === "Draw"
                          ? "text-gray-500"
                          : ""
                      }`}
                    >
                      {match.score.split("-")[0]}
                    </span>
                  </div>

                  {/* Away Team */}
                  <div className="flex justify-between items-center py-2">
                    <div className="flex items-center space-x-2">
                      <img
                        src={match.awayLogo}
                        alt={match.away}
                        className="w-8 h-8 sm:w-10 sm:h-10"
                      />
                      <p className="font-semibold">{match.away}</p>
                    </div>
                    <span
                      className={`font-bold ${
                        match.winner === match.away
                          ? "text-green-500"
                          : match.winner === "Draw"
                          ? "text-gray-500"
                          : ""
                      }`}
                    >
                      {match.score.split("-")[1]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleMatchdays < matchDays.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMoreMatchdays}
            disabled={isLoading}
            className={`px-4 py-2 ${
              isLoading
                ? "bg-[#C81E23] opacity-70 cursor-not-allowed"
                : "bg-[#C81E23] hover:bg-[#A5191E]"
            } text-white rounded-lg transition`}
          >
            {isLoading ? "Loading..." : "Load Next Matchday"}
          </button>
        </div>
      )}

      {/* Match Details Modal */}
      {selectedMatch && (
        <div
          className="fixed inset-0 text-black bg-black bg-opacity-50 flex justify-center items-center p-4"
          onClick={() => {
            setSelectedMatch(null);
            setActiveTab("goals");
          }}
        >
          <div
            className="bg-[#FFFFFF] text-black p-6 rounded-lg shadow-lg max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setSelectedMatch(null)}
            >
              ✖
            </button>

            {/* Tabs */}
            <div className="flex justify-around border-b border-gray-700 mb-4">
              <button
                className={`py-2 px-4 ${
                  activeTab === "goals" ? "border-b-2 border-[#C81E23]" : ""
                }`}
                onClick={() => setActiveTab("goals")}
              >
                Goals
              </button>
              {selectedMatch.stats && (
                <button
                  className={`py-2 px-4 ${
                    activeTab === "stats" ? "border-b-2 border-[#C81E23]" : ""
                  }`}
                  onClick={() => setActiveTab("stats")}
                >
                  Stats
                </button>
              )}
              {/* <button
                className={`py-2 px-4 ${
                  activeTab === "timeline" ? "border-b-2 border-[#C81E23]" : ""
                }`}
                onClick={() => setActiveTab("timeline")}
              >
                Timeline
              </button> */}
            </div>

            {/* Tab Content */}
            {activeTab === "goals" && (
              <div className="flex justify-between items-start mb-4">
                {/* Home Team */}
                <div className="flex flex-col items-center flex-1">
                  <img
                    src={selectedMatch.homeLogo}
                    alt={selectedMatch.home}
                    className="w-12 h-12 sm:w-16 sm:h-16"
                  />
                  <p className="mt-2 text-black lg:text-sm text-[17px] font-semibold">
                    {selectedMatch.home}
                  </p>
                  <div className="mt-4 space-y-2">
                    {selectedMatch.walkover ? (
                      <div className="text-gray-500 text-sm">Walkover</div>
                    ) : (
                      selectedMatch.goalscorers
                        .filter((goal) => goal.team === selectedMatch.home)
                        .map((goal, index) => (
                          <div
                            key={index}
                            className="text-[#B0B3B8] text-[13px]"
                          >
                            <span className="mr-1">⚽</span>
                            {goal.player}
                            {/* {goal.time && ` - ${goal.time}`} */}
                          </div>
                        ))
                    )}
                  </div>
                </div>

                {/* Score */}
                <div className="flex flex-col items-center mx-4">
                  <p className="text-lg font-bold">{selectedMatch.score}</p>
                  {selectedMatch.walkover && (
                    <p className="text-xs text-gray-500 mt-1">Walkover</p>
                  )}
                </div>

                {/* Away Team */}
                <div className="flex flex-col items-center flex-1">
                  <img
                    src={selectedMatch.awayLogo}
                    alt={selectedMatch.away}
                    className="w-12 h-12 sm:w-16 sm:h-16"
                  />
                  <p className="mt-2 text-black lg:text-sm text-[17px] font-semibold">
                    {selectedMatch.away}
                  </p>
                  <div className="mt-4 space-y-2">
                    {selectedMatch.walkover ? (
                      <div className="text-gray-500 text-sm">Walkover</div>
                    ) : (
                      selectedMatch.goalscorers
                        .filter((goal) => goal.team === selectedMatch.away)
                        .map((goal, index) => (
                          <div
                            key={index}
                            className="text-[#B0B3B8] text-[13px]"
                          >
                            <span className="mr-1">⚽</span>
                            {goal.player}
                            {/* {goal.time && ` - ${goal.time}`} */}
                          </div>
                        ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "stats" && selectedMatch.stats && (
              <Stats match={selectedMatch} />
            )}

            {activeTab === "timeline" && <Timeline match={selectedMatch} />}
          </div>
        </div>
      )}
    </div>
  );
}
