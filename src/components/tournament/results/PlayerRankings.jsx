"use client";
import { useState } from "react";

const statsData = {
  Goals: [
    { name: "Adeoluwa Adeyemi", team: "Storm United", goals: 12 },
    { name: "Babajide Adediran", team: "Shadow Rovers", goals: 11 },
    { name: "Chinedu Okorie", team: "Iron Titans", goals: 11 },
    { name: "Daniel Ogunbiyi", team: "Crimson Blazers FC", goals: 10 },
    { name: "Emmanuel Ogunlana", team: "Venom Chargers FC", goals: 10 },
    { name: "Femi Adeyemi", team: "Midnight Rangers", goals: 9 },
    { name: "Gbolahan Adeyemi", team: "Icebreakers", goals: 9 },
    { name: "Hakeem Ogunbiyi", team: "Blaze Warriors FC", goals: 9 },
    { name: "Ibrahim Adeyemi", team: "Frost Giants FC", goals: 8 },
    { name: "Jide Ogunlana", team: "Inferno Stars", goals: 8 },
    { name: "Kehinde Adeyemi", team: "Omega Falcons FC", goals: 7 },
    { name: "Lanre Ogunbiyi", team: "Arctic Panthers FC", goals: 7 },
    { name: "Moses Adeyemi", team: "Lunar Predators FC", goals: 7 },
    { name: "Niyi Ogunlana", team: "Titan Crushers FC", goals: 7 },
    { name: "Oluwatobi Adeyemi", team: "Shadow Rovers", goals: 6 },
  ],
  Assists: [
    { name: "Adeoluwa Adeyemi", team: "Storm United", assists: 10 },
    { name: "Babajide Adediran", team: "Shadow Rovers", assists: 9 },
    { name: "Chinedu Okorie", team: "Iron Titans", assists: 9 },
    { name: "Daniel Ogunbiyi", team: "Crimson Blazers FC", assists: 8 },
    { name: "Emmanuel Ogunlana", team: "Icebreakers", assists: 8 },
    { name: "Femi Adeyemi", team: "Blaze Warriors FC", assists: 8 },
    { name: "Gbolahan Adeyemi", team: "Frost Giants FC", assists: 8 },
    { name: "Hakeem Ogunbiyi", team: "Inferno Stars", assists: 8 },
    { name: "Ibrahim Adeyemi", team: "Omega Falcons FC", assists: 7 },
    { name: "Jide Ogunlana", team: "Arctic Panthers FC", assists: 7 },
    { name: "Kehinde Adeyemi", team: "Lunar Predators FC", assists: 7 },
    { name: "Lanre Ogunbiyi", team: "Titan Crushers FC", assists: 7 },
    { name: "Moses Adeyemi", team: "Shadow Rovers", assists: 6 },
    { name: "Niyi Ogunlana", team: "Midnight Rangers", assists: 6 },
    { name: "Oluwatobi Adeyemi", team: "Venom Chargers FC", assists: 5 },
  ],
  "Yellow Cards": [
    { name: "Babajide Adediran", team: "Shadow Rovers", yellowCards: 5 },
    { name: "Daniel Ogunbiyi", team: "Crimson Blazers FC", yellowCards: 4 },
    { name: "Femi Adeyemi", team: "Titan Crushers FC", yellowCards: 4 },
    { name: "Chinedu Okorie", team: "Iron Titans", yellowCards: 4 },
    { name: "Emmanuel Ogunlana", team: "Midnight Rangers", yellowCards: 4 },
    { name: "Adeoluwa Adeyemi", team: "Storm United", yellowCards: 3 },
    { name: "Kehinde Adeyemi", team: "Omega Falcons FC", yellowCards: 3 },
    { name: "Lanre Ogunbiyi", team: "Arctic Panthers FC", yellowCards: 3 },
    { name: "Moses Adeyemi", team: "Lunar Predators FC", yellowCards: 2 },
    { name: "Niyi Ogunlana", team: "Titan Crushers FC", yellowCards: 2 },
    { name: "Oluwatobi Adeyemi", team: "Shadow Rovers", yellowCards: 2 },
    { name: "Jide Ogunlana", team: "Midnight Rangers", yellowCards: 2 },
    { name: "Ibrahim Adeyemi", team: "Midnight Rangers", yellowCards: 2 },
    { name: "Hakeem Ogunbiyi", team: "Venom Chargers FC", yellowCards: 1 },
    { name: "Gbolahan Adeyemi", team: "Lunar Predators FC", yellowCards: 1 },
  ],
  "Red Cards": [
    { name: "Babajide Adediran", team: "Shadow Rovers", redCards: 3 },
    { name: "Daniel Ogunbiyi", team: "Crimson Blazers FC", redCards: 2 },
    { name: "Chinedu Okorie", team: "Iron Titans", redCards: 2 },
    { name: "Adeoluwa Adeyemi", team: "Storm United", redCards: 2 },
    { name: "Femi Adeyemi", team: "Titan Crushers FC", redCards: 1 },
    { name: "Jide Ogunlana", team: "Midnight Rangers", redCards: 1 },
    { name: "Ibrahim Adeyemi", team: "Midnight Rangers", redCards: 1 },
    { name: "Hakeem Ogunbiyi", team: "Venom Chargers FC", redCards: 1 },
    { name: "Gbolahan Adeyemi", team: "Inferno Stars", redCards: 1 },
    { name: "Kehinde Adeyemi", team: "Lunar Predators FC", redCards: 1 },
    { name: "Lanre Ogunbiyi", team: "Arctic Panthers FC", redCards: 1 },
    { name: "Moses Adeyemi", team: "Lunar Predators FC", redCards: 1 },
    { name: "Niyi Ogunlana", team: "Titan Crushers FC", redCards: 1 },
    { name: "Oluwatobi Adeyemi", team: "Shadow Rovers", redCards: 1 },
  ],
};

export default function StatsPage() {
  const [activeTab, setActiveTab] = useState("Goals");
  const [visibleCount, setVisibleCount] = useState(5);
  const data = statsData[activeTab] || [];

  return (
    <div className="p-6 bg-[#000000] text-white w-full max-w-2xl mx-auto my-[70px]">
      <h1 className="text-2xl font-bold mb-4">Player Rankings</h1>
      <div className="flex space-x-4 border-b border-gray-700 pb-2">
        {Object.keys(statsData).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 ${
              activeTab === tab ? "border-b-2 border-[#C81E23]" : "text-gray-400"
            }`}
            onClick={() => {
              setActiveTab(tab);
              setVisibleCount(5);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {data.slice(0, visibleCount).map((player, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-gray-800 py-2"
          >
            <span>
              {index + 1}. {player.name} ({player.team})
            </span>
            <span>
              {activeTab === "Goals"
                ? player.goals
                : activeTab === "Assists"
                ? player.assists
                : activeTab === "Yellow Cards"
                ? player.yellowCards
                : player.redCards}
            </span>
          </div>
        ))}
      </div>

      {visibleCount < data.length && (
        <button
          className="mt-4 bg-[#C81E23] text-white flex justify-center items-center m-auto px-4 lg:w-[70%] w-full py-2 rounded"
          onClick={() => setVisibleCount(visibleCount + 5)}
        >
          Load More
        </button>
      )}
    </div>
  );
}



// "use client";
// import { useState } from "react";
// import { FaFutbol, FaShoePrints, FaRegHandPaper, FaHandPaper } from "react-icons/fa";

// const statsData = {
//   Goals: [
//     { name: "Adeoluwa Adeyemi", team: "Storm United", goals: 12 },
//     { name: "Babajide Adediran", team: "Shadow Rovers", goals: 11 },
//     { name: "Chinedu Okorie", team: "Iron Titans", goals: 11 },
//     { name: "Daniel Ogunbiyi", team: "Crimson Blazers FC", goals: 10 },
//     { name: "Emmanuel Ogunlana", team: "Venom Chargers FC", goals: 10 },
//     { name: "Femi Adeyemi", team: "Midnight Rangers", goals: 9 },
//     { name: "Gbolahan Adeyemi", team: "Icebreakers", goals: 9 },
//     { name: "Hakeem Ogunbiyi", team: "Blaze Warriors FC", goals: 9 },
//     { name: "Ibrahim Adeyemi", team: "Frost Giants FC", goals: 8 },
//     { name: "Jide Ogunlana", team: "Inferno Stars", goals: 8 },
//     { name: "Kehinde Adeyemi", team: "Omega Falcons FC", goals: 7 },
//     { name: "Lanre Ogunbiyi", team: "Arctic Panthers FC", goals: 7 },
//     { name: "Moses Adeyemi", team: "Lunar Predators FC", goals: 7 },
//     { name: "Niyi Ogunlana", team: "Titan Crushers FC", goals: 7 },
//     { name: "Oluwatobi Adeyemi", team: "Shadow Rovers", goals: 6 },
//   ],
//   Assists: [
//     { name: "Adeoluwa Adeyemi", team: "Storm United", assists: 10 },
//     { name: "Babajide Adediran", team: "Shadow Rovers", assists: 9 },
//     { name: "Chinedu Okorie", team: "Iron Titans", assists: 9 },
//     { name: "Daniel Ogunbiyi", team: "Crimson Blazers FC", assists: 8 },
//     { name: "Emmanuel Ogunlana", team: "Icebreakers", assists: 8 },
//     { name: "Femi Adeyemi", team: "Blaze Warriors FC", assists: 8 },
//     { name: "Gbolahan Adeyemi", team: "Frost Giants FC", assists: 8 },
//     { name: "Hakeem Ogunbiyi", team: "Inferno Stars", assists: 8 },
//     { name: "Ibrahim Adeyemi", team: "Omega Falcons FC", assists: 7 },
//     { name: "Jide Ogunlana", team: "Arctic Panthers FC", assists: 7 },
//     { name: "Kehinde Adeyemi", team: "Lunar Predators FC", assists: 7 },
//     { name: "Lanre Ogunbiyi", team: "Titan Crushers FC", assists: 7 },
//     { name: "Moses Adeyemi", team: "Shadow Rovers", assists: 6 },
//     { name: "Niyi Ogunlana", team: "Midnight Rangers", assists: 6 },
//     { name: "Oluwatobi Adeyemi", team: "Venom Chargers FC", assists: 5 },
//   ],
//   "Yellow Cards": [
//     { name: "Babajide Adediran", team: "Shadow Rovers", yellowCards: 5 },
//     { name: "Daniel Ogunbiyi", team: "Crimson Blazers FC", yellowCards: 4 },
//     { name: "Femi Adeyemi", team: "Titan Crushers FC", yellowCards: 4 },
//     { name: "Chinedu Okorie", team: "Iron Titans", yellowCards: 4 },
//     { name: "Emmanuel Ogunlana", team: "Midnight Rangers", yellowCards: 4 },
//     { name: "Adeoluwa Adeyemi", team: "Storm United", yellowCards: 3 },
//     { name: "Kehinde Adeyemi", team: "Omega Falcons FC", yellowCards: 3 },
//     { name: "Lanre Ogunbiyi", team: "Arctic Panthers FC", yellowCards: 3 },
//     { name: "Moses Adeyemi", team: "Lunar Predators FC", yellowCards: 2 },
//     { name: "Niyi Ogunlana", team: "Titan Crushers FC", yellowCards: 2 },
//     { name: "Oluwatobi Adeyemi", team: "Shadow Rovers", yellowCards: 2 },
//     { name: "Jide Ogunlana", team: "Midnight Rangers", yellowCards: 2 },
//     { name: "Ibrahim Adeyemi", team: "Midnight Rangers", yellowCards: 2 },
//     { name: "Hakeem Ogunbiyi", team: "Venom Chargers FC", yellowCards: 1 },
//     { name: "Gbolahan Adeyemi", team: "Lunar Predators FC", yellowCards: 1 },
//   ],
//   "Red Cards": [
//     { name: "Babajide Adediran", team: "Shadow Rovers", redCards: 3 },
//     { name: "Daniel Ogunbiyi", team: "Crimson Blazers FC", redCards: 2 },
//     { name: "Chinedu Okorie", team: "Iron Titans", redCards: 2 },
//     { name: "Adeoluwa Adeyemi", team: "Storm United", redCards: 2 },
//     { name: "Femi Adeyemi", team: "Titan Crushers FC", redCards: 1 },
//     { name: "Jide Ogunlana", team: "Midnight Rangers", redCards: 1 },
//     { name: "Ibrahim Adeyemi", team: "Midnight Rangers", redCards: 1 },
//     { name: "Hakeem Ogunbiyi", team: "Venom Chargers FC", redCards: 1 },
//     { name: "Gbolahan Adeyemi", team: "Inferno Stars", redCards: 1 },
//     { name: "Kehinde Adeyemi", team: "Lunar Predators FC", redCards: 1 },
//     { name: "Lanre Ogunbiyi", team: "Arctic Panthers FC", redCards: 1 },
//     { name: "Moses Adeyemi", team: "Lunar Predators FC", redCards: 1 },
//     { name: "Niyi Ogunlana", team: "Titan Crushers FC", redCards: 1 },
//     { name: "Oluwatobi Adeyemi", team: "Shadow Rovers", redCards: 1 },
//   ],
// };

// export default function StatsPage() {
//   const [activeTab, setActiveTab] = useState("Goals");
//   const [visibleCount, setVisibleCount] = useState(5);
//   const data = statsData[activeTab] || [];

//   return (
//     <div className="p-6 bg-[#000000] text-white w-full max-w-2xl mx-auto my-[70px]">
//       <h1 className="text-2xl font-bold mb-4">Player Rankings</h1>
//       <div className="flex space-x-4 border-b border-gray-700 pb-2">
//         {Object.keys(statsData).map((tab) => (
//           <button
//             key={tab}
//             className={`px-4 py-2 ${
//               activeTab === tab ? "border-b-2 border-[#C81E23]" : "text-gray-400"
//             }`}
//             onClick={() => {
//               setActiveTab(tab);
//               setVisibleCount(5);
//             }}
//           >
//             {tab === "Goals" ? (
//               <span className="flex items-center">
//                 Goals <FaFutbol className="text-2xl ml-2" />
//               </span>
//             ) : tab === "Assists" ? (
//               <span className="flex items-center">
//                 Assists <FaShoePrints className="text-2xl ml-2" />
//               </span>
//             ) : tab === "Yellow Cards" ? (
//               <span className="flex items-center">
//                 Yellow Cards <FaRegHandPaper className="text-2xl ml-2" />
//               </span>
//             ) : (
//               <span className="flex items-center">
//                 Red Cards <FaHandPaper className="text-2xl ml-2" />
//               </span>
//             )}
//           </button>
//         ))}
//       </div>

//       <div className="mt-4">
//         {data.slice(0, visibleCount).map((player, index) => (
//           <div
//             key={index}
//             className="flex justify-between items-center border-b border-gray-800 py-2"
//           >
//             <span>
//               {index + 1}. {player.name} ({player.team})
//             </span>
//             <span>
//               {activeTab === "Goals" ? (
//                 <span className="flex items-center">
//                   {player.goals}
//                 </span>
//               ) : activeTab === "Assists" ? (
//                 <span className="flex items-center">
//                   {player.assists}
//                 </span>
//               ) : activeTab === "Yellow Cards" ? (
//                 <span className="flex items-center">
//                   {player.yellowCards}
//                 </span>
//               ) : (
//                 <span className="flex items-center">
//                   {player.redCards}
//                 </span>
//               )}
//             </span>
//           </div>
//         ))}
//       </div>

//       {visibleCount < data.length && (
//         <button
//           className="mt-4 bg-[#C81E23] text-white flex justify-center items-center m-auto px-4 lg:w-[70%] w-full py-2 rounded"
//           onClick={() => setVisibleCount(visibleCount + 5)}
//         >
//           Load More
//         </button>
//       )}
//     </div>
//   );
// }