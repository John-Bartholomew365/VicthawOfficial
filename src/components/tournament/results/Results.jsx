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
//       stage: "Round of 16",
//       homeLogo: "/loe.jpg",
//       awayLogo: "/nba.png",
//       score: "0-3",
//       winner: "Storm United",
//       goalscorers: [
//         { player: "Chinedu Okafor", team: "Storm United", time: "23'" },
//         { player: "Emeka Uche", team: "Shadow Rovers", time: "45'" },
//         { player: "Tunde Adewale", team: "Storm United", time: "58'" },
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
//         awayRedCards: "1",
//       },
//     },
//     // {
//     //   id: 2,
//     //   home: "Iron Titans FC",
//     //   away: "Crimson Blazers FC",
//     //   time: "12:00",
//     //   date: "12th April 2025",
//     //   stage: "Round of 16",
//     //   homeLogo: "/three.png",
//     //   awayLogo: "/four.png",
//     //   score: "1-3",
//     //   winner: "Crimson Blazers FC",
//     //   goalscorers: [
//     //     { player: "Kunle Adebayo", team: "Crimson Blazers FC", time: "15'" },
//     //     { player: "Obinna Eze", team: "Iron Titans FC", time: "30'" },
//     //     { player: "Kunle Adebayo", team: "Crimson Blazers FC", time: "50'" },
//     //     { player: "Ibrahim Musa", team: "Crimson Blazers FC", time: "57'" },
//     //   ],
//     //   stats: {
//     //     homePossession: "48%",
//     //     homeShots: "9",
//     //     homeShotsOnTarget: "3",
//     //     homeFouls: "14",
//     //     homeCorners: "3",
//     //     homeYellowCards: "1",
//     //     homeRedCards: "0",
//     //     awayPossession: "52%",
//     //     awayShots: "14",
//     //     awayShotsOnTarget: "7",
//     //     awayFouls: "9",
//     //     awayCorners: "6",
//     //     awayYellowCards: "2",
//     //     awayRedCards: "0",
//     //   },
//     // },
//     // {
//     //   id: 3,
//     //   home: "Venom Chargers FC",
//     //   away: "Midnight Rangers",
//     //   time: "14:00",
//     //   date: "12th April 2025",
//     //   stage: "Round of 16",
//     //   homeLogo: "/thirteen.png",
//     //   awayLogo: "/twelve.png",
//     //   score: "0-0 (4-3 PK)",
//     //   winner: "Venom Chargers FC",
//     //   goalscorers: [], // No goals in regular time
//     //   penalties: [
//     //     {
//     //       player: "Segun Olabisi",
//     //       team: "Venom Chargers FC",
//     //       result: "Scored",
//     //     },
//     //     { player: "Bolaji Aluko", team: "Midnight Rangers", result: "Missed" },
//     //     {
//     //       player: "Uchenna Nwosu",
//     //       team: "Venom Chargers FC",
//     //       result: "Scored",
//     //     },
//     //     {
//     //       player: "Babatunde Femi",
//     //       team: "Midnight Rangers",
//     //       result: "Scored",
//     //     },
//     //     {
//     //       player: "Kelechi Nnamdi",
//     //       team: "Venom Chargers FC",
//     //       result: "Scored",
//     //     },
//     //     { player: "Olawale Ojo", team: "Midnight Rangers", result: "Scored" },
//     //     {
//     //       player: "Adeyemi Hassan",
//     //       team: "Venom Chargers FC",
//     //       result: "Scored",
//     //     },
//     //   ],
//     //   stats: {
//     //     homePossession: "60%",
//     //     homeShots: "10",
//     //     homeShotsOnTarget: "4",
//     //     homeFouls: "8",
//     //     homeCorners: "5",
//     //     homeYellowCards: "1",
//     //     homeRedCards: "0",
//     //     awayPossession: "40%",
//     //     awayShots: "6",
//     //     awayShotsOnTarget: "2",
//     //     awayFouls: "12",
//     //     awayCorners: "3",
//     //     awayYellowCards: "2",
//     //     awayRedCards: "0",
//     //   },
//     // },
//   ],
//   "Matchday 2": [
//     {
//       id: 4,
//       home: "Thunder Strikers FC",
//       away: "Blaze Warriors FC",
//       time: "11:00",
//       date: "13th April 2025",
//       stage: "Round of 16",
//       homeLogo: "/five.png",
//       awayLogo: "/six.png",
//       score: "3-2",
//       winner: "Thunder Strikers FC",
//       goalscorers: [
//         { player: "Tope Balogun", team: "Thunder Strikers FC", time: "15'" },
//         { player: "Seyi Olatunji", team: "Blaze Warriors FC", time: "30'" },
//         { player: "Tope Balogun", team: "Thunder Strikers FC", time: "50'" },
//         { player: "David Adesanya", team: "Blaze Warriors FC", time: "57'" },
//         { player: "Femi Lawal", team: "Thunder Strikers FC", time: "59'" },
//       ],
//       stats: {
//         homePossession: "58%",
//         homeShots: "15",
//         homeShotsOnTarget: "8",
//         homeFouls: "11",
//         homeCorners: "7",
//         homeYellowCards: "2",
//         homeRedCards: "0",
//         awayPossession: "42%",
//         awayShots: "10",
//         awayShotsOnTarget: "5",
//         awayFouls: "13",
//         awayCorners: "4",
//         awayYellowCards: "3",
//         awayRedCards: "1",
//       },
//     },
//     {
//       id: 5,
//       home: "Frost Giants FC",
//       away: "Inferno Stars",
//       time: "13:00",
//       date: "13th April 2025",
//       stage: "Round of 16",
//       homeLogo: "/seven.png",
//       awayLogo: "/fifteen.png",
//       score: "1-2",
//       winner: "Inferno Stars",
//       goalscorers: [
//         { player: "Oluwaseun Adeyemi", team: "Frost Giants FC", time: "20'" },
//         { player: "Chibuzo Onuoha", team: "Inferno Stars", time: "45'" },
//         { player: "Bashiru Danjuma", team: "Inferno Stars", time: "55'" },
//       ],
//       stats: {
//         homePossession: "50%",
//         homeShots: "8",
//         homeShotsOnTarget: "3",
//         homeFouls: "9",
//         homeCorners: "2",
//         homeYellowCards: "1",
//         homeRedCards: "0",
//         awayPossession: "50%",
//         awayShots: "12",
//         awayShotsOnTarget: "6",
//         awayFouls: "10",
//         awayCorners: "5",
//         awayYellowCards: "2",
//         awayRedCards: "0",
//       },
//     },
//     {
//       id: 6,
//       home: "Omega Falcons FC",
//       away: "Arctic Panthers FC",
//       time: "15:00",
//       date: "13th April 2025",
//       stage: "Round of 16",
//       homeLogo: "/thirteen.png",
//       awayLogo: "/fourteen.png",
//       score: "2-2 (5-4 PK)",
//       winner: "Omega Falcons FC",
//       goalscorers: [
//         { player: "Ebuka Chukwuma", team: "Omega Falcons FC", time: "10'" },
//         { player: "Ayo Ogunlade", team: "Arctic Panthers FC", time: "25'" },
//         { player: "Ebuka Chukwuma", team: "Omega Falcons FC", time: "50'" },
//         { player: "Tobi Obasanya", team: "Arctic Panthers FC", time: "55'" },
//       ],
//       stats: {
//         homePossession: "53%",
//         homeShots: "11",
//         homeShotsOnTarget: "5",
//         homeFouls: "7",
//         homeCorners: "4",
//         homeYellowCards: "1",
//         homeRedCards: "0",
//         awayPossession: "47%",
//         awayShots: "9",
//         awayShotsOnTarget: "4",
//         awayFouls: "8",
//         awayCorners: "3",
//         awayYellowCards: "2",
//         awayRedCards: "0",
//       },
//     },
//   ],
//   "Matchday 3": [
//     {
//       id: 7,
//       home: "Lunar Predators FC",
//       away: "Titan Crushers FC",
//       time: "11:30",
//       date: "14th April 2025",
//       stage: "Round of 16",
//       homeLogo: "/nine.png",
//       awayLogo: "/ten.png",
//       score: "1-0",
//       winner: "Lunar Predators FC",
//       goalscorers: [
//         { player: "Chidi Eze", team: "Lunar Predators FC", time: "50'" },
//       ],
//       stats: {
//         homePossession: "57%",
//         homeShots: "13",
//         homeShotsOnTarget: "7",
//         homeFouls: "6",
//         homeCorners: "5",
//         homeYellowCards: "0",
//         homeRedCards: "0",
//         awayPossession: "43%",
//         awayShots: "7",
//         awayShotsOnTarget: "3",
//         awayFouls: "9",
//         awayCorners: "2",
//         awayYellowCards: "1",
//         awayRedCards: "0",
//       },
//     },
//     {
//       id: 8,
//       home: "Shadow Rovers",
//       away: "Thunder Strikers FC",
//       time: "13:30",
//       date: "29th April 2025",
//       stage: "Round of 16",
//       homeLogo: "/thirteen.png",
//       awayLogo: "/twelve.png",
//       score: "2-3",
//       winner: "Thunder Strikers FC",
//       goalscorers: [
//         { player: "Olawale Dada", team: "Shadow Rovers", time: "10'" },
//         { player: "Samuel Adekunle", team: "Thunder Strikers FC", time: "25'" },
//         { player: "Olawale Dada", team: "Shadow Rovers", time: "50'" },
//         { player: "Samuel Adekunle", team: "Thunder Strikers FC", time: "55'" },
//         { player: "Abiola Okonkwo", team: "Thunder Strikers FC", time: "58'" },
//       ],
//       stats: {
//         homePossession: "49%",
//         homeShots: "10",
//         homeShotsOnTarget: "4",
//         homeFouls: "11",
//         homeCorners: "3",
//         homeYellowCards: "2",
//         homeRedCards: "0",
//         awayPossession: "51%",
//         awayShots: "14",
//         awayShotsOnTarget: "8",
//         awayFouls: "8",
//         awayCorners: "6",
//         awayYellowCards: "1",
//         awayRedCards: "0",
//       },
//     },
//   ],
// };

// export default function ResultsPage() {
//   const [activeTab, setActiveTab] = useState("goals");
//   const [selectedDay, setSelectedDay] = useState("Matchday 1");
//   const [selectedMatch, setSelectedMatch] = useState(null);
//   const matchDays = ["Matchday 1", "", ""];

//   return (
//     <div className="p-6 max-w-3xl mx-auto tracking-tight">
//       <h1 className="text-2xl font-bold mb-4 text-center">Match Results</h1>

//       {/* Matchday Selector */}
//       <div className="mt-8">
//         <h1 className="font-bold text-[24px] text-center">
//           Results by Matchday
//         </h1>
//         <div className="flex flex-wrap justify-center gap-3 my-5">
//           {matchDays.map((day) => (
//             <button
//               key={day}
//               className={`px-4 py-2 rounded-lg border transition ${
//                 selectedDay === day
//                   ? "bg-[#C81E23] text-white"
//                   : "bg-[#FFFFFF] hover:bg-[#FAFAFA] hidden"
//               }`}
//               onClick={() => setSelectedDay(day)}
//             >
//               {day}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Results List */}
//       <div className="space-y-3">
//         {results[selectedDay].map((match) => (
//           <div
//             key={match.id}
//             className="p-4 border rounded-lg cursor-pointer hover:bg-[#FAFAFA] lg:flex lg:flex-row flex-col items-center justify-between text-center"
//             onClick={() => setSelectedMatch(match)}
//           >
//             <div className="flex items-center space-x-2 lg:w-2/5 w-auto lg:justify-start justify-center">
//               <img
//                 src={match.homeLogo}
//                 alt={match.home}
//                 className="w-10 h-10 sm:w-12 sm:h-12"
//               />
//               <p className="text-lg font-semibold truncate">{match.home}</p>
//             </div>
//             <p className="text-lg font-semibold lg:my-0 my-1 lg:m-0 m-auto w-1/5">
//               {match.score}
//             </p>
//             <div className="flex items-center space-x-2 lg:w-2/5 w-auto lg:justify-end justify-center">
//               <img
//                 src={match.awayLogo}
//                 alt={match.away}
//                 className="w-10 h-10 sm:w-12 sm:h-12 lg:hidden block"
//               />
//               <p className="text-lg font-semibold truncate">{match.away}</p>
//               <img
//                 src={match.awayLogo}
//                 alt={match.away}
//                 className="w-10 h-10 sm:w-12 sm:h-12 lg:block hidden"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

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
//               {/* <button
//                 className={`py-2 px-4 ${
//                   activeTab === "stats" ? "border-b-2 border-[#C81E23]" : ""
//                 }`}
//                 onClick={() => setActiveTab("stats")}
//               >
//                 Stats
//               </button> */}
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
//                   <div className="mt-10 space-y-1">
//                     {selectedMatch.goalscorers
//                       .filter((goal) => goal.team === selectedMatch.away)
//                       .map((goal, index) => (
//                         <div key={index} className="text-[#B0B3B8] text-[13px]">
//                           {goal.player} - {goal.time}
//                         </div>
//                       ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "stats" && <Stats match={selectedMatch} />}
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
      goalscorers: [
        { player: "Player 1", team: "NBA FC", time: "23'" },
        { player: "Player 2", team: "NBA FC", time: "45'" },
        { player: "Player 3", team: "NBA FC", time: "58'" },
      ],
      stats: {
        homePossession: "55%",
        homeShots: "12",
        homeShotsOnTarget: "6",
        homeFouls: "10",
        homeCorners: "5",
        homeYellowCards: "2",
        homeRedCards: "0",
        awayPossession: "45%",
        awayShots: "8",
        awayShotsOnTarget: "4",
        awayFouls: "12",
        awayCorners: "4",
        awayYellowCards: "3",
        awayRedCards: "1",
      },
    },
    // Other matches...
  ],
  // Other matchdays...
};

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState("goals");
  const [selectedDay, setSelectedDay] = useState("Matchday 1");
  const [selectedMatch, setSelectedMatch] = useState(null);
  const matchDays = ["Matchday 1", "Matchday 2", "Matchday 3"];

  return (
    <div className="p-6 max-w-3xl mx-auto tracking-tight">
      <h1 className="text-2xl font-bold mb-4 text-center">Match Results</h1>

      {/* Matchday Selector */}
      <div className="mt-8">
        <h1 className="font-bold text-[24px] text-center">
          Results by Matchday
        </h1>
        <div className="flex flex-wrap justify-center gap-3 my-5">
          {/* {matchDays.map((day) => (
            <button
              key={day}
              className={`px-4 py-2 rounded-lg border transition ${
                selectedDay === day
                  ? "bg-[#C81E23] text-white"
                  : "bg-[#FFFFFF] hover:bg-[#FAFAFA]"
              }`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))} */}

          <button className="px-4 py-2 rounded-lg border transition bg-[#C81E23] text-white">
            Matchday 1
          </button>
        </div>
      </div>

      {/* Results List - Updated Layout */}
      <div className="space-y-3">
        {results[selectedDay]?.map((match) => (
          <div
            key={match.id}
            className="p-4 border rounded-lg cursor-pointer hover:bg-[#FAFAFA]"
            onClick={() => setSelectedMatch(match)}
          >
            {/* Match Header */}
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">{match.date}</span>
              {/* <span className="bg-[#C81E23] text-white text-xs px-2 py-1 rounded">
                {match.stage}
              </span> */}
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
                  match.winner === match.home ? "text-[#C81E23]" : ""
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
                  match.winner === match.away ? "text-green-500" : ""
                }`}
              >
                {match.score.split("-")[1]}
              </span>
            </div>
          </div>
        ))}
      </div>

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
              <button
                className={`py-2 px-4 ${
                  activeTab === "timeline" ? "border-b-2 border-[#C81E23]" : ""
                }`}
                onClick={() => setActiveTab("timeline")}
              >
                Timeline
              </button>
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
                  <div className="mt-10 space-y-2">
                    {selectedMatch.goalscorers
                      .filter((goal) => goal.team === selectedMatch.home)
                      .map((goal, index) => (
                        <div key={index} className="text-[#B0B3B8] text-[13px]">
                          {goal.player} - {goal.time}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Score */}
                <p className="text-lg font-bold mx-4">{selectedMatch.score}</p>

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
                  {/* <div className="mt-10 space-y-1">
                    {selectedMatch.goalscorers
                      .filter((goal) => goal.team === selectedMatch.away)
                      .map((goal, index) => (
                        <div key={index} className="text-[#B0B3B8] text-[13px]">
                          {goal.player} - {goal.time}
                        </div>
                      ))}
                  </div> */}
                </div>
              </div>
            )}

            {activeTab === "timeline" && <Timeline match={selectedMatch} />}

            {/* Penalties Section */}
            {selectedMatch.penalties && activeTab === "goals" && (
              <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">Penalties</h3>
                <ul className="space-y-2">
                  {selectedMatch.penalties.map((penalty, index) => (
                    <li key={index} className="text-[#B0B3B8] text-[14px]">
                      {penalty.player} ({penalty.team}) - {penalty.result}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
