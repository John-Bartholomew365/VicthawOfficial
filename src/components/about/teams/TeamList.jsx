// "use client";
// import { useState } from "react";

// const teams = [
//   {
//     id: 1,
//     name: "Storm United",
//     rating: 5,
//     description: "A top-tier team.",
//     location: "Unity, Ilorin, Kwara State",
//     captain: "Mohammed Aliu",
//     logo: "/one.png",
//   },
//   {
//     id: 2,
//     name: "Shadow Rovers",
//     rating: 4,
//     description: "Strong competitors.",
//     location: "Mandate, Ilorin, Kwara State",
//     captain: "James Adeniji",
//     logo: "/two.png",
//   },
//   {
//     id: 3,
//     name: "Iron Titans",
//     rating: 4.5,
//     description: "Rising stars.",
//     location: "Adewole, Ilorin, Kwara State",
//     captain: "Michael Chuks",
//     logo: "/three.png",
//   },
//   {
//     id: 4,
//     name: "Crimson Blazers FC",
//     rating: 3.5,
//     description: "Consistent performers.",
//     location: "Irewolede, Ilorin, Kwara State",
//     captain: "Boluwaji Adams",
//     logo: "/four.png",
//   },
//   {
//     id: 5,
//     name: "Venom Chargers FC",
//     rating: 4.8,
//     description: "Fan favorites.",
//     location: "Olorunsogo, Ilorin, Kwara State",
//     captain: "Sodiq Kamoru",
//     logo: "/thirteen.png",
//   },
//   {
//     id: 6,
//     name: "Midnight Rangers",
//     rating: 3.9,
//     description: "Hardworking squad.",
//     location: "Geri alimi, Ilorin, Kwara State",
//     captain: "Isaiah Johnson",
//     logo: "/twelve.png",
//   },
//   {
//     id: 7,
//     name: "Icebreakers",
//     rating: 4.2,
//     description: "Upcoming champions.",
//     location: "Asa dam, Ilorin, Kwara State",
//     captain: "David Ayanda",
//     logo: "/five.png",
//   },
//   {
//     id: 8,
//     name: "Blaze Warriors FC",
//     rating: 3.7,
//     description: "Defensive experts.",
//     location: "GRA, Ilorin, Kwara State",
//     captain: "Emmanuel Nwachukwu",
//     logo: "/six.png",
//   },
//   {
//     id: 9,
//     name: "Frost Giants FC",
//     rating: 4.5,
//     description: "Offensive powerhouse.",
//     location: "Tanke, Ilorin, Kwara State",
//     captain: "Samuel Alex",
//     logo: "/seven.png",
//   },
//   {
//     id: 10,
//     name: "Inferno Stars",
//     rating: 3.8,
//     description: "Team of strategy.",
//     location: "Airport, Ilorin, Kwara State",
//     captain: "Lukman Adeyemo",
//     logo: "/fifteen.png",
//   },
//   {
//     id: 11,
//     name: "Omega Falcons FC",
//     rating: 4.3,
//     description: "Tacticians at heart.",
//     location: "Challenge, Ilorin, Kwara State",
//     captain: "Michael Balogun",
//     logo: "/thirteen.png",
//   },
//   {
//     id: 12,
//     name: "Arctic Panthers FC",
//     rating: 3.6,
//     description: "Always improving.",
//     location: "Cottage, Ilorin, Kwara State",
//     captain: "Divine Sule",
//     logo: "/fourteen.png",
//   },
//   {
//     id: 13,
//     name: "Lunar Predators FC",
//     rating: 4.1,
//     description: "Unpredictable gameplay.",
//     location: "Kiddiz, Ilorin, Kwara State",
//     captain: "Efe Ayomide",
//     logo: "/nine.png",
//   },
//   {
//     id: 14,
//     name: "Titan Crushers FC",
//     rating: 3.4,
//     description: "Fighting spirit.",
//     location: "Aiyetoro, Ilorin, Kwara State",
//     captain: "Sheu Ahmad",
//     logo: "/ten.png",
//   },
//   {
//     id: 15,
//     name: "Shadow Rovers",
//     rating: 3.9,
//     description: "Comeback kings.",
//     location: "Pipeline, Ilorin, Kwara State",
//     captain: "Ethan Thomas",
//     logo: "/fifteen.png",
//   },
//   {
//     id: 16,
//     name: "Thunder Strikers FC",
//     rating: 4.7,
//     description: "Tactical masterminds.",
//     location: "Baseline, Ilorin, Kwara State",
//     captain: "Taofeeq Ajape",
//     logo: "/sixteen.png",
//   },
// ];

// export default function TeamList() {
//   const [visibleTeams, setVisibleTeams] = useState(6);
//   const [searchQuery, setSearchQuery] = useState("");

//   const sortedTeams = [...teams].sort((a, b) => b.rating - a.rating);
//   const filteredTeams = sortedTeams.filter((team) =>
//     team.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <div className="bg-black min-h-screen p-6 text-white rounded-md">
//         <div className="my-8 text-center">
//           <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">
//             Participating Teams
//           </h1>
//         </div>
//         <div className="max-w-4xl mx-auto">
//           <input
//             type="text"
//             placeholder="Search teams..."
//             className="w-full p-3 mb-4 rounded-lg bg-[#0F0F0F] text-white placeholder-gray-400"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           {filteredTeams.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-12">
//               {filteredTeams.slice(0, visibleTeams).map((team) => (
//                 <div
//                   key={team.id}
//                   className="flex flex-col md:flex-row items-center gap-4 p-4 border border-gray-700 rounded-lg"
//                 >
//                   <img
//                     src={team.logo}
//                     alt={team.name}
//                     className="w-24 h-24 object-cover"
//                   />
//                   <div className="text-center md:text-left">
//                     <h2 className="text-xl font-bold">{team.name}</h2>
//                     <p className="text-gray-400">{team.description}</p>
//                     <p className="text-gray-400">Location: {team.location}</p>
//                     <p className="text-gray-400">Captain: {team.captain}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-[#B0B3B8] mt-5">
//               No results for "{searchQuery}"
//             </p>
//           )}
//           {visibleTeams < filteredTeams.length && (
//             <button
//               onClick={() => setVisibleTeams((prev) => prev + 5)}
//               className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
//             >
//               Load more
//             </button>
//           )}
//         </div>
//       </div>
//       <div className="my-16 text-center">
//         <h1 className="text-2xl lg:text-3xl font-bold">Support Your Team!</h1>
//         <p className="text-gray-400 lg:w-[450px] w-auto mx-auto mt-3">
//           Cheer for your favorite team and be part of the excitement! Follow
//           their journey through the tournament and join us at the matches to
//           show your support.
//         </p>
//         <div className="flex justify-center mt-7">
//           <a
//             href="/tournament/schedule"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-red-600 tracking-tight text-white px-8 py-3 rounded-md text-lg font-bold hover:bg-red-700 transition duration-300"
//           >
//             View tournament schedule
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";

// const teams = [
//   {
//     id: 1,
//     name: "Sway Fitness FC",
//     rating: 5,
//     description: "A top-tier team.",
//     location: "Unity, Ilorin, Kwara State",
//     manager: "Mohammed Aliu",
//     logo: "/sway.png",
//   },
//   {
//     id: 2,
//     name: "Shadow Rovers",
//     rating: 4,
//     description: "Strong competitors.",
//     location: "Mandate, Ilorin, Kwara State",
//     manager: "James Adeniji",
//     logo: "/two.png",
//   },
//   {
//     id: 3,
//     name: "Iron Titans",
//     rating: 4.5,
//     description: "Rising stars.",
//     location: "Adewole, Ilorin, Kwara State",
//     manager: "Michael Chuks",
//     logo: "/three.png",
//   },
//   {
//     id: 4,
//     name: "Crimson Blazers FC",
//     rating: 3.5,
//     description: "Consistent performers.",
//     location: "Irewolede, Ilorin, Kwara State",
//     manager: "Boluwaji Adams",
//     logo: "/four.png",
//   },
//   {
//     id: 5,
//     name: "Nigerian Bar Association FC",
//     rating: 4.8,
//     description: "Fan favorites.",
//     location: "Olorunsogo, Ilorin, Kwara State",
//     manager: "Prof. Ismail Mustapha Adua",
//     logo: "/nba.png",
//   },
//   {
//     id: 6,
//     name: "Midnight Rangers",
//     rating: 3.9,
//     description: "Hardworking squad.",
//     location: "Geri alimi, Ilorin, Kwara State",
//     manager: "Isaiah Johnson",
//     logo: "/twelve.png",
//   },
//   {
//     id: 7,
//     name: "Icebreakers",
//     rating: 4.2,
//     description: "Upcoming champions.",
//     location: "Asa dam, Ilorin, Kwara State",
//     manager: "David Ayanda",
//     logo: "/five.png",
//   },
//   {
//     id: 8,
//     name: "Blaze Warriors FC",
//     rating: 3.7,
//     description: "Defensive experts.",
//     location: "GRA, Ilorin, Kwara State",
//     manager: "Emmanuel Nwachukwu",
//     logo: "/six.png",
//   },
//   {
//     id: 9,
//     name: "Frost Giants FC",
//     rating: 4.5,
//     description: "Offensive powerhouse.",
//     location: "Tanke, Ilorin, Kwara State",
//     manager: "Samuel Alex",
//     logo: "/seven.png",
//   },
//   {
//     id: 10,
//     name: "Inferno Stars",
//     rating: 3.8,
//     description: "Team of strategy.",
//     location: "Airport, Ilorin, Kwara State",
//     manager: "Lukman Adeyemo",
//     logo: "/fifteen.png",
//   },
//   {
//     id: 11,
//     name: "Omega Falcons FC",
//     rating: 4.3,
//     description: "Tacticians at heart.",
//     location: "Challenge, Ilorin, Kwara State",
//     manager: "Michael Balogun",
//     logo: "/thirteen.png",
//   },
//   {
//     id: 12,
//     name: "Arctic Panthers FC",
//     rating: 3.6,
//     description: "Always improving.",
//     location: "Cottage, Ilorin, Kwara State",
//     manager: "Divine Sule",
//     logo: "/fourteen.png",
//   },
//   {
//     id: 13,
//     name: "Lunar Predators FC",
//     rating: 4.1,
//     description: "Unpredictable gameplay.",
//     location: "Kiddiz, Ilorin, Kwara State",
//     manager: "Efe Ayomide",
//     logo: "/nine.png",
//   },
//   {
//     id: 14,
//     name: "Titan Crushers FC",
//     rating: 3.4,
//     description: "Fighting spirit.",
//     location: "Aiyetoro, Ilorin, Kwara State",
//     manager: "Sheu Ahmad",
//     logo: "/ten.png",
//   },
//   {
//     id: 15,
//     name: "Shadow Rovers",
//     rating: 3.9,
//     description: "Comeback kings.",
//     location: "Pipeline, Ilorin, Kwara State",
//     manager: "Ethan Thomas",
//     logo: "/fifteen.png",
//   },
//   {
//     id: 16,
//     name: "Leo FC",
//     rating: 4.7,
//     description: "Tactical masterminds.",
//     location: "Baseline, Ilorin, Kwara State",
//     manager: "Uthman", 
//     logo: "/loe.jpg",
//   },
// ];

// export default function TeamList() {
//   const [visibleTeams, setVisibleTeams] = useState(6);
//   const [searchQuery, setSearchQuery] = useState("");

//   const sortedTeams = [...teams].sort((a, b) => b.rating - a.rating);
//   const filteredTeams = sortedTeams.filter((team) =>
//     team.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <div className="bg-[#FAFAFA] min-h-screen p-6 text-black rounded-md">
//         <div className="my-8 text-center">
//           <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">
//             Participating Teams
//           </h1>
//         </div>
//         <div className="max-w-4xl mx-auto">
//           <input
//             type="text"
//             placeholder="Search teams..."
//             className="w-full p-3 mb-4 rounded-lg bg-[#FFFFFF] text-black placeholder-gray-400"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           {filteredTeams.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-12">
//               {filteredTeams.slice(0, visibleTeams).map((team) => (
//                 <div
//                   key={team.id}
//                   className="flex flex-col md:flex-row items-center gap-4 p-4 border border-gray-700 rounded-lg relative"
//                 >
//                   {/* Team Logo */}
//                   <img
//                     src={team.logo}
//                     alt={team.name}
//                     className="w-24 h-24 object-cover "
//                   />

//                   {/* Team Info */}
//                   <div className="text-center space-y-1 md:text-left flex-1">
//                     <h2 className="text-xl font-bold">{team.name}</h2>
//                     {/* <p className="text-gray-400">{team.description}</p> */}
//                     {/* <p className="text-gray-400">Location: {team.location}</p> */}
//                     <p className="text-gray-400">Manager: {team.manager}</p>
//                   </div>

//                   {/* Golden Star and Rating */}
//                   <div className="flex  flex-col items-center md:flex-col md:items-center md:justify-between md:ml-4">
//                     {/* Golden Star */}
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-8 w-8 text-yellow-400"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>

//                     {/* Rating */}
//                     <p className="text-white text-sm mt-1 md:mt-2">
//                       Rating: {team.rating}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-[#B0B3B8] mt-5">
//               No results for "{searchQuery}"
//             </p>
//           )}
//           {visibleTeams < filteredTeams.length && (
//             <button
//               onClick={() => setVisibleTeams((prev) => prev + 5)}
//               className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
//             >
//               Load more
//             </button>
//           )}
//         </div>
//       </div>
//       <div className="my-16 text-center">
//         <h1 className="text-2xl lg:text-3xl font-bold">Support Your Team!</h1>
//         <p className="text-gray-400 lg:w-[450px] w-auto mx-auto mt-3">
//           Cheer for your favorite team and be part of the excitement! Follow
//           their journey through the tournament and join us at the matches to
//           show your support.
//         </p>
//         <div className="flex justify-center mt-7">
//           <a
//             href="/tournament/schedule"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-red-600 tracking-tight text-white px-8 py-3 rounded-md text-lg font-bold hover:bg-red-700 transition duration-300"
//           >
//             View tournament schedule
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";
import { useState } from "react";

const teams = [
  {
    id: 1,
    name: "Sway Fitness FC",
    description: "A top-tier team.",
    location: "Unity, Ilorin, Kwara State",
    manager: "Mohammed Aliu",
    logo: "/sway.png",
  },
  {
    id: 2,
    name: "Nigerian Bar Association FC",
    description: "Fan favorites.",
    location: "Olorunsogo, Ilorin, Kwara State",
    manager: "Prof. Ismail Mustapha Adua",
    logo: "/nba.png",
  },
  {
    id: 3,
    name: "Leo FC",
    description: "Tactical masterminds.",
    location: "Baseline, Ilorin, Kwara State",
    manager: "Uthman", 
    logo: "/loe.jpg",
  },
  // {
  //   id: 4,
  //   name: "Crimson Blazers FC",
  //   description: "Consistent performers.",
  //   location: "Irewolede, Ilorin, Kwara State",
  //   manager: "Boluwaji Adams",
  //   logo: "/four.png",
  // },
  // {
  //   id: 5,
  //   name: "Nigerian Bar Association FC",
  //   description: "Fan favorites.",
  //   location: "Olorunsogo, Ilorin, Kwara State",
  //   manager: "Prof. Ismail Mustapha Adua",
  //   logo: "/nba.png",
  // },
  // {
  //   id: 6,
  //   name: "Midnight Rangers",
  //   description: "Hardworking squad.",
  //   location: "Geri alimi, Ilorin, Kwara State",
  //   manager: "Isaiah Johnson",
  //   logo: "/twelve.png",
  // },
  // {
  //   id: 7,
  //   name: "Icebreakers",
  //   description: "Upcoming champions.",
  //   location: "Asa dam, Ilorin, Kwara State",
  //   manager: "David Ayanda",
  //   logo: "/five.png",
  // },
  // {
  //   id: 8,
  //   name: "Blaze Warriors FC",
  //   description: "Defensive experts.",
  //   location: "GRA, Ilorin, Kwara State",
  //   manager: "Emmanuel Nwachukwu",
  //   logo: "/six.png",
  // },
  // {
  //   id: 9,
  //   name: "Frost Giants FC",
  //   description: "Offensive powerhouse.",
  //   location: "Tanke, Ilorin, Kwara State",
  //   manager: "Samuel Alex",
  //   logo: "/seven.png",
  // },
  // {
  //   id: 10,
  //   name: "Inferno Stars",
  //   description: "Team of strategy.",
  //   location: "Airport, Ilorin, Kwara State",
  //   manager: "Lukman Adeyemo",
  //   logo: "/fifteen.png",
  // },
  // {
  //   id: 11,
  //   name: "Omega Falcons FC",
  //   description: "Tacticians at heart.",
  //   location: "Challenge, Ilorin, Kwara State",
  //   manager: "Michael Balogun",
  //   logo: "/thirteen.png",
  // },
  // {
  //   id: 12,
  //   name: "Arctic Panthers FC",
  //   description: "Always improving.",
  //   location: "Cottage, Ilorin, Kwara State",
  //   manager: "Divine Sule",
  //   logo: "/fourteen.png",
  // },
  // {
  //   id: 13,
  //   name: "Lunar Predators FC",
  //   description: "Unpredictable gameplay.",
  //   location: "Kiddiz, Ilorin, Kwara State",
  //   manager: "Efe Ayomide",
  //   logo: "/nine.png",
  // },
  // {
  //   id: 14,
  //   name: "Titan Crushers FC",
  //   description: "Fighting spirit.",
  //   location: "Aiyetoro, Ilorin, Kwara State",
  //   manager: "Sheu Ahmad",
  //   logo: "/ten.png",
  // },
  // {
  //   id: 15,
  //   name: "Shadow Rovers",
  //   description: "Comeback kings.",
  //   location: "Pipeline, Ilorin, Kwara State",
  //   manager: "Ethan Thomas",
  //   logo: "/fifteen.png",
  // },
  // {
  //   id: 16,
  //   name: "Leo FC",
  //   description: "Tactical masterminds.",
  //   location: "Baseline, Ilorin, Kwara State",
  //   manager: "Uthman", 
  //   logo: "/loe.jpg",
  // },
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
                <div
                  key={team.id}
                  className="flex flex-col md:flex-row items-center gap-4 p-4 border border-gray-300 rounded-lg relative"
                >
                  {/* Team Logo */}
                  <img
                    src={team.logo}
                    alt={team.name}
                    className="w-24 h-24 object-cover "
                  />

                  {/* Team Info */}
                  <div className="text-center space-y-1 md:text-left flex-1">
                    <h2 className="text-xl font-bold">{team.name}</h2>
                    {/* <p className="text-gray-400">{team.description}</p> */}
                    {/* <p className="text-gray-400">Location: {team.location}</p> */}
                    <p className="text-gray-400">Manager: {team.manager}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-[#B0B3B8] mt-5">
              No results for "{searchQuery}"
            </p>
          )}
        </div>
      </div>

      {/* <div>
        <h1 className="text-center mt-7 text-[#C90A1D]">
          Stay tuned in. More teams are registering! <br />
          Grab a spot for your team now
        </h1>
      </div> */}


      <div className="my-16 text-center">
        <h1 className="text-2xl lg:text-3xl font-bold">Support Your Team!</h1>
        <p className="text-gray-400 lg:w-[450px] w-auto mx-auto mt-3">
          Cheer for your favorite team and be part of the excitement! Follow
          their journey through the tournament and join us at the matches to
          show your support.
        </p>
        <div className="flex justify-center mt-7">
          <a
            href="/tournament/schedule"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 tracking-tight text-white px-8 py-3 rounded-md text-lg font-bold hover:bg-red-700 transition duration-300"
          >
            View tournament schedule
          </a>
        </div>
      </div>
    </div>
  );
}
