// "use client";
// import { useState } from "react";
// import { FaTrophy, FaFutbol, FaClock, FaMapMarkerAlt } from "react-icons/fa";

// // Full results data for all matchdays
// const results = {
//   "Matchday 1": [
//     {
//       id: 1,
//       home: "Storm United",
//       away: "Shadow Rovers",
//       time: "10:00",
//       date: "12th April 2025",
//       stage: "Round of 16",
//       homeLogo: "/one.png",
//       awayLogo: "/sixteen.png",
//       score: "2-1",
//       winner: "Storm United",
//       goalscorers: [
//         { player: "John Doe", team: "Storm United", time: "23'" },
//         { player: "Jane Smith", team: "Shadow Rovers", time: "45'" },
//         { player: "Mike Johnson", team: "Storm United", time: "78'" },
//       ],
//     },
//     {
//       id: 2,
//       home: "Iron Titans FC",
//       away: "Crimson Blazers FC",
//       time: "12:00",
//       date: "12th April 2025",
//       stage: "Round of 16",
//       homeLogo: "/three.png",
//       awayLogo: "/four.png",
//       score: "1-3",
//       winner: "Crimson Blazers FC",
//       goalscorers: [
//         { player: "Alex Brown", team: "Crimson Blazers FC", time: "15'" },
//         { player: "Chris Green", team: "Iron Titans FC", time: "30'" },
//         { player: "Alex Brown", team: "Crimson Blazers FC", time: "60'" },
//         { player: "Sam White", team: "Crimson Blazers FC", time: "75'" },
//       ],
//     },
//     {
//       id: 3,
//       home: "Venom Chargers FC",
//       away: "Midnight Rangers",
//       time: "14:00",
//       date: "12th April 2025",
//       stage: "Round of 16",
//       homeLogo: "/thirteen.png",
//       awayLogo: "/twelve.png",
//       score: "0-0 (4-3 PK)",
//       winner: "Venom Chargers FC",
//       goalscorers: [], // No goals in regular time
//       penalties: [
//         { player: "Player A", team: "Venom Chargers FC", result: "Scored" },
//         { player: "Player B", team: "Midnight Rangers", result: "Missed" },
//         { player: "Player C", team: "Venom Chargers FC", result: "Scored" },
//         { player: "Player D", team: "Midnight Rangers", result: "Scored" },
//         { player: "Player E", team: "Venom Chargers FC", result: "Scored" },
//         { player: "Player F", team: "Midnight Rangers", result: "Scored" },
//         { player: "Player G", team: "Venom Chargers FC", result: "Scored" },
//       ],
//     },
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
//         { player: "Alex Brown", team: "Thunder Strikers FC", time: "15'" },
//         { player: "Chris Green", team: "Blaze Warriors FC", time: "30'" },
//         { player: "Alex Brown", team: "Thunder Strikers FC", time: "60'" },
//         { player: "Sam White", team: "Blaze Warriors FC", time: "75'" },
//         { player: "Jordan Black", team: "Thunder Strikers FC", time: "89'" },
//       ],
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
//         { player: "Player X", team: "Frost Giants FC", time: "20'" },
//         { player: "Player Y", team: "Inferno Stars", time: "45'" },
//         { player: "Player Z", team: "Inferno Stars", time: "80'" },
//       ],
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
//         { player: "Player A", team: "Omega Falcons FC", time: "10'" },
//         { player: "Player B", team: "Arctic Panthers FC", time: "25'" },
//         { player: "Player C", team: "Omega Falcons FC", time: "50'" },
//         { player: "Player D", team: "Arctic Panthers FC", time: "70'" },
//       ],
//       penalties: [
//         { player: "Player A", team: "Omega Falcons FC", result: "Scored" },
//         { player: "Player B", team: "Arctic Panthers FC", result: "Scored" },
//         { player: "Player C", team: "Omega Falcons FC", result: "Scored" },
//         { player: "Player D", team: "Arctic Panthers FC", result: "Scored" },
//         { player: "Player E", team: "Omega Falcons FC", result: "Scored" },
//         { player: "Player F", team: "Arctic Panthers FC", result: "Missed" },
//       ],
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
//         { player: "Player X", team: "Lunar Predators FC", time: "65'" },
//       ],
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
//         { player: "Player A", team: "Shadow Rovers", time: "10'" },
//         { player: "Player B", team: "Thunder Strikers FC", time: "25'" },
//         { player: "Player C", team: "Shadow Rovers", time: "50'" },
//         { player: "Player D", team: "Thunder Strikers FC", time: "70'" },
//         { player: "Player E", team: "Thunder Strikers FC", time: "85'" },
//       ],
//     },
//   ],
// };

// const matchDays = ["Matchday 1", "Matchday 2", "Matchday 3"];

// export default function ResultsPage() {
//   const [selectedDay, setSelectedDay] = useState("Matchday 1");
//   const [selectedMatch, setSelectedMatch] = useState(null);

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
//                   : "bg-[#000000] hover:bg-[#000000]"
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
//             className="p-4 border rounded-lg cursor-pointer hover:bg-[#000000] lg:flex lg:flex-row flex-col items-center justify-between text-center"
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

//       {/* Detailed Results Modal */}

//       {selectedMatch && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
//           onClick={() => setSelectedMatch(null)}
//         >
//           <div
//             className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg max-w-md w-full relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
//               onClick={() => setSelectedMatch(null)}
//             >
//               ✖
//             </button>
//             <div className="flex justify-between items-center mb-4">
//               <div className="flex flex-col items-center">
//                 <img
//                   src={selectedMatch.homeLogo}
//                   alt={selectedMatch.home}
//                   className="w-12 h-12 sm:w-16 sm:h-16"
//                 />
//                 <p className="mt-2 text-white lg:text-sm text-[17px] font-semibold">
//                   {selectedMatch.home}
//                 </p>
//               </div>
//               <p className="text-lg font-bold">{selectedMatch.score}</p>
//               <div className="flex flex-col items-center">
//                 <img
//                   src={selectedMatch.awayLogo}
//                   alt={selectedMatch.away}
//                   className="w-12 h-12 sm:w-16 sm:h-16"
//                 />
//                 <p className="mt-2 text-white lg:text-sm text-[17px] font-semibold">
//                   {selectedMatch.away}
//                 </p>
//               </div>
//             </div>
//             <div className="mt-4">
//               <h3 className="text-lg font-bold mb-2">Goalscorers</h3>
//               <ul className="space-y-2">
//                 {selectedMatch.goalscorers.map((goal, index) => (
//                   <li
//                     key={index}
//                     className="text-[#B0B3B8] flex items-center space-x-2"
//                   >
//                     <span>{goal.player}</span>
//                     <span>{goal.time}</span>
//                     <img
//                       src={
//                         goal.team === selectedMatch.home
//                           ? selectedMatch.homeLogo
//                           : selectedMatch.awayLogo
//                       }
//                       alt={goal.team}
//                       className="w-4 h-4"
//                     />
//                   </li>
//                 ))}
//                 {selectedMatch.penalties && (
//                   <>
//                     <h3 className="text-lg font-bold mt-4 mb-2">Penalties</h3>
//                     <ul className="space-y-2">
//                       {selectedMatch.penalties.map((penalty, index) => (
//                         <li key={index} className="text-[#B0B3B8]">
//                           {penalty.player} ({penalty.team}) - {penalty.result}
//                         </li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { FaTrophy, FaFutbol, FaClock, FaMapMarkerAlt } from "react-icons/fa";

// Full results data for all matchdays
const results = {
    "Matchday 1": [
      {
        id: 1,
        home: "Storm United",
        away: "Shadow Rovers",
        time: "10:00",
        date: "12th April 2025",
        stage: "Round of 16",
        homeLogo: "/one.png",
        awayLogo: "/sixteen.png",
        score: "2-1",
        winner: "Storm United",
        goalscorers: [
          { player: "Chinedu Okafor", team: "Storm United", time: "23'" },
          { player: "Emeka Uche", team: "Shadow Rovers", time: "45'" },
          { player: "Tunde Adewale", team: "Storm United", time: "58'" }, // Adjusted from 78'
        ],
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
        score: "1-3",
        winner: "Crimson Blazers FC",
        goalscorers: [
          { player: "Kunle Adebayo", team: "Crimson Blazers FC", time: "15'" },
          { player: "Obinna Eze", team: "Iron Titans FC", time: "30'" },
          { player: "Kunle Adebayo", team: "Crimson Blazers FC", time: "50'" }, // Adjusted from 60'
          { player: "Ibrahim Musa", team: "Crimson Blazers FC", time: "57'" }, // Adjusted from 75'
        ],
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
        score: "0-0 (4-3 PK)",
        winner: "Venom Chargers FC",
        goalscorers: [], // No goals in regular time
        penalties: [
          { player: "Segun Olabisi", team: "Venom Chargers FC", result: "Scored" },
          { player: "Bolaji Aluko", team: "Midnight Rangers", result: "Missed" },
          { player: "Uchenna Nwosu", team: "Venom Chargers FC", result: "Scored" },
          { player: "Babatunde Femi", team: "Midnight Rangers", result: "Scored" },
          { player: "Kelechi Nnamdi", team: "Venom Chargers FC", result: "Scored" },
          { player: "Olawale Ojo", team: "Midnight Rangers", result: "Scored" },
          { player: "Adeyemi Hassan", team: "Venom Chargers FC", result: "Scored" },
        ],
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
        score: "3-2",
        winner: "Thunder Strikers FC",
        goalscorers: [
          { player: "Tope Balogun", team: "Thunder Strikers FC", time: "15'" },
          { player: "Seyi Olatunji", team: "Blaze Warriors FC", time: "30'" },
          { player: "Tope Balogun", team: "Thunder Strikers FC", time: "50'" },
          { player: "David Adesanya", team: "Blaze Warriors FC", time: "57'" }, // Adjusted from 75'
          { player: "Femi Lawal", team: "Thunder Strikers FC", time: "59'" }, // Adjusted from 89'
        ],
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
        score: "1-2",
        winner: "Inferno Stars",
        goalscorers: [
          { player: "Oluwaseun Adeyemi", team: "Frost Giants FC", time: "20'" },
          { player: "Chibuzo Onuoha", team: "Inferno Stars", time: "45'" },
          { player: "Bashiru Danjuma", team: "Inferno Stars", time: "55'" }, // Adjusted from 80'
        ],
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
        score: "2-2 (5-4 PK)",
        winner: "Omega Falcons FC",
        goalscorers: [
          { player: "Ebuka Chukwuma", team: "Omega Falcons FC", time: "10'" },
          { player: "Ayo Ogunlade", team: "Arctic Panthers FC", time: "25'" },
          { player: "Ebuka Chukwuma", team: "Omega Falcons FC", time: "50'" },
          { player: "Tobi Obasanya", team: "Arctic Panthers FC", time: "55'" }, // Adjusted from 70'
        ],
        penalties: [
          { player: "Emmanuel Okon", team: "Omega Falcons FC", result: "Scored" },
          { player: "Peter Agbaje", team: "Arctic Panthers FC", result: "Scored" },
          { player: "Chisom Obi", team: "Omega Falcons FC", result: "Scored" },
          { player: "Jide Omololu", team: "Arctic Panthers FC", result: "Scored" },
          { player: "Emmanuel Okon", team: "Omega Falcons FC", result: "Scored" },
          { player: "Peter Agbaje", team: "Arctic Panthers FC", result: "Missed" },
        ],
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
        score: "1-0",
        winner: "Lunar Predators FC",
        goalscorers: [
          { player: "Chidi Eze", team: "Lunar Predators FC", time: "50'" }, // Adjusted from 65'
        ],
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
        score: "2-3",
        winner: "Thunder Strikers FC",
        goalscorers: [
          { player: "Olawale Dada", team: "Shadow Rovers", time: "10'" },
          { player: "Samuel Adekunle", team: "Thunder Strikers FC", time: "25'" },
          { player: "Olawale Dada", team: "Shadow Rovers", time: "50'" },
          { player: "Samuel Adekunle", team: "Thunder Strikers FC", time: "55'" }, // Adjusted from 70'
          { player: "Abiola Okonkwo", team: "Thunder Strikers FC", time: "58'" }, // Adjusted from 85'
        ],
      },
    ],
  };
  

const matchDays = ["Matchday 1", "Matchday 2", "Matchday 3"];

export default function ResultsPage() {
  const [selectedDay, setSelectedDay] = useState("Matchday 1");
  const [selectedMatch, setSelectedMatch] = useState(null);

  return (
    <div className="p-6 max-w-3xl mx-auto tracking-tight">
      <h1 className="text-2xl font-bold mb-4 text-center">Match Results</h1>

      {/* Matchday Selector */}
      <div className="mt-8">
        <h1 className="font-bold text-[24px] text-center">
          Results by Matchday
        </h1>
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
      </div>

      {/* Results List */}
      <div className="space-y-3">
        {results[selectedDay].map((match) => (
          <div
            key={match.id}
            className="p-4 border rounded-lg cursor-pointer hover:bg-[#000000] lg:flex lg:flex-row flex-col items-center justify-between text-center"
            onClick={() => setSelectedMatch(match)}
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
              {match.score}
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
      </div>

      {/* Detailed Results Modal */}
      {/* {selectedMatch && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
          onClick={() => setSelectedMatch(null)}
        >
          <div
            className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
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
                <div className="mt-2">
                  {selectedMatch.goalscorers
                    .filter((goal) => goal.team === selectedMatch.home)
                    .map((goal, index) => (
                      <div key={index} className="text-[#B0B3B8]">
                        {goal.player} - {goal.time}
                      </div>
                    ))}
                </div>
              </div>
              <p className="text-lg font-bold">{selectedMatch.score}</p>
              <div className="flex flex-col items-center">
                <img
                  src={selectedMatch.awayLogo}
                  alt={selectedMatch.away}
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
                <p className="mt-2 text-white lg:text-sm text-[17px] font-semibold">
                  {selectedMatch.away}
                </p>
                <div className="mt-2">
                  {selectedMatch.goalscorers
                    .filter((goal) => goal.team === selectedMatch.away)
                    .map((goal, index) => (
                      <div key={index} className="text-[#B0B3B8]">
                        {goal.player} - {goal.time}
                      </div>
                    ))}
                </div>
              </div>
            </div>
            {selectedMatch.penalties && (
              <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">Penalties</h3>
                <ul className="space-y-2">
                  {selectedMatch.penalties.map((penalty, index) => (
                    <li key={index} className="text-[#B0B3B8]">
                      {penalty.player} ({penalty.team}) - {penalty.result}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )} */}

      {selectedMatch && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
          onClick={() => setSelectedMatch(null)}
        >
          <div
            className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setSelectedMatch(null)}
            >
              ✖
            </button>
            <div className="flex justify-between items-start mb-4">
              {/* Home Team */}
              <div className="flex flex-col items-center flex-1">
                <img
                  src={selectedMatch.homeLogo}
                  alt={selectedMatch.home}
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
                <p className="mt-2 text-white lg:text-sm text-[17px] font-semibold">
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
                <p className="mt-2 text-white lg:text-sm text-[17px] font-semibold">
                  {selectedMatch.away}
                </p>
                <div className="mt-10 space-y-1">
                  {selectedMatch.goalscorers
                    .filter((goal) => goal.team === selectedMatch.away)
                    .map((goal, index) => (
                      <div key={index} className="text-[#B0B3B8] text-[13px]">
                        {goal.player} - {goal.time}
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Penalties Section */}
            {selectedMatch.penalties && (
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
