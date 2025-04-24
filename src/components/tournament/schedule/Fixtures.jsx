// "use client";
// import { useState, useEffect } from "react";
// import {
//   FaClock,
//   FaCloudSunRain,
//   FaMapMarkerAlt,
//   FaParking,
// } from "react-icons/fa";

// const teams = [
//   { id: 1, name: "Leo FC", logo: "/loe.jpg" },
//   { id: 2, name: "NBA FC", logo: "/nba.png" },
//   { id: 3, name: "Sway Fitness FC", logo: "/sway.png" },
//   { id: 4, name: "Bankers All Stars FC", logo: "/bankers-fc.png" },
//   { id: 5, name: "Maracana FC", logo: "/maracana.png" },
//   { id: 6, name: "Unilorin Quarters FC", logo: "/unilorin.jpg" },
// ];

// // Custom fixtures for each matchday
// const customFixtures = {
//   "Matchday 1": [
//     {
//       home: "Leo FC",
//       away: "NBA FC",
//       homeLogo: "/loe.jpg",
//       awayLogo: "/nba.png",
//       time: "10:00am",
//       date: "13th April 2025",
//       stage: "Opening Fixture",
//       completed: true,
//     },
//     {
//       home: "Bankers All Stars FC",
//       away: "Unilorin Quarters FC",
//       homeLogo: "/bankers-fc.png",
//       awayLogo: "/unilorin.jpg",
//       time: "04:30pm",
//       date: "19th April 2025",
//       stage: "Opening Fixture",
//       completed: false,
//     },
//     {
//       home: "Sway Fitness FC",
//       away: "Maracana FC",
//       homeLogo: "/sway.png",
//       awayLogo: "/maracana.png",
//       time: "04:30pm",
//       date: "20th April 2025",
//       stage: "Opening Fixture",
//       completed: false,
//     },
//   ],
//   "Matchday 2": [
//     {
//       home: "Leo FC",
//       away: "Maracana FC",
//       homeLogo: "/loe.jpg",
//       awayLogo: "/maracana.png",
//       time: "04:30pm",
//       date: "26th April 2025",
//       stage: "Matchday 2",
//       completed: false,
//     },
//     {
//       home: "NBA FC",
//       away: "Bankers All Stars FC",
//       homeLogo: "/nba.png",
//       awayLogo: "/bankers-fc.png",
//       time: "04:00pm",
//       date: "27th April 2025",
//       stage: "Matchday 2",
//       completed: false,
//     },
//     {
//       home: "Sway Fitness FC",
//       away: "Unilorin Quarters FC",
//       homeLogo: "/sway.png",
//       awayLogo: "/unilorin.jpg",
//       time: "05:20pm",
//       date: "27th April 2025",
//       stage: "Matchday 2",
//       completed: false,
//     },
//   ],
//   "Matchday 3": [
//     {
//       home: "Leo FC",
//       away: "Sway Fitness FC",
//       homeLogo: "/loe.jpg",
//       awayLogo: "/sway.png",
//       time: "02:00pm",
//       date: "28th April 2025",
//       stage: "Matchday 3",
//       completed: false,
//     },
//     {
//       home: "Maracana FC",
//       away: "Bankers All Stars FC",
//       homeLogo: "/maracana.png",
//       awayLogo: "/bankers-fc.png",
//       time: "03:30pm",
//       date: "28th April 2025",
//       stage: "Matchday 3",
//       completed: false,
//     },
//     {
//       home: "NBA FC",
//       away: "Unilorin Quarters FC",
//       homeLogo: "/nba.png",
//       awayLogo: "/unilorin.jpg",
//       time: "05:00pm",
//       date: "28th April 2025",
//       stage: "Matchday 3",
//       completed: false,
//     },
//   ],
//   "Matchday 4": [
//     {
//       home: "Leo FC",
//       away: "Bankers All Stars FC",
//       homeLogo: "/loe.jpg",
//       awayLogo: "/bankers-fc.png",
//       time: "02:00pm",
//       date: "29th April 2025",
//       stage: "Matchday 4",
//       completed: false,
//     },
//     {
//       home: "NBA FC",
//       away: "Maracana FC",
//       homeLogo: "/nba.png",
//       awayLogo: "/maracana.png",
//       time: "03:30pm",
//       date: "29th April 2025",
//       stage: "Matchday 4",
//       completed: false,
//     },
//     {
//       home: "Sway Fitness FC",
//       away: "Unilorin Quarters FC",
//       homeLogo: "/sway.png",
//       awayLogo: "/unilorin.jpg",
//       time: "05:00pm",
//       date: "29th April 2025",
//       stage: "Matchday 4",
//       completed: false,
//     },
//   ],
//   "Matchday 5": [
//     {
//       home: "Leo FC",
//       away: "Unilorin Quarters FC",
//       homeLogo: "/loe.jpg",
//       awayLogo: "/unilorin.jpg",
//       time: "02:00pm",
//       date: "30th April 2025",
//       stage: "Matchday 5",
//       completed: false,
//     },
//     {
//       home: "NBA FC",
//       away: "Sway Fitness FC",
//       homeLogo: "/nba.png",
//       awayLogo: "/sway.png",
//       time: "03:30pm",
//       date: "30th April 2025",
//       stage: "Matchday 5",
//       completed: false,
//     },
//     {
//       home: "Maracana FC",
//       away: "Bankers All Stars FC",
//       homeLogo: "/maracana.png",
//       awayLogo: "/bankers-fc.png",
//       time: "05:00pm",
//       date: "30th April 2025",
//       stage: "Matchday 5",
//       completed: false,
//     },
//   ],
// };

// // Add final matchday
// customFixtures["Final"] = [
//   {
//     id: 99,
//     home: "Top Team",
//     away: "Runner Up",
//     time: "04:30pm",
//     date: "4th May 2025",
//     stage: "Final",
//     homeLogo: "/one.png",
//     awayLogo: "/three.png",
//     completed: true,
//   },
// ];

// const matchdayKeys = Object.keys(customFixtures);

// export default function MatchSchedule() {
//   const [fixtures, setFixtures] = useState(customFixtures);
//   const [visibleMatchdays, setVisibleMatchdays] = useState(1); // Start with 1 matchday visible
//   const [selectedMatch, setSelectedMatch] = useState(null);

//   // Function to load more matchdays (loads 1 at a time)
//   const loadMoreMatchdays = () => {
//     setVisibleMatchdays(prev => Math.min(prev + 1, matchdayKeys.length));
//   };

//   // Function to mark matches as completed based on scheduled time
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date();
//       const updatedFixtures = { ...fixtures };

//       matchdayKeys.forEach(matchday => {
//         updatedFixtures[matchday] = updatedFixtures[matchday].map(match => {
//           const matchDate = new Date(`${match.date} ${match.time}`);
//           if (!match.completed && now >= matchDate) {
//             match.completed = true;
//           }
//           return match;
//         });
//       });

//       setFixtures(updatedFixtures);
//     }, 60000); // Check every minute

//     return () => clearInterval(interval);
//   }, [fixtures]);

//   return (
//     <div className="p-6 max-w-3xl mx-auto tracking-tight relative">
//       <div className="text-center">
//         <h1 className="text-2xl font-bold mb-7">Match Schedule</h1>
//         <div className="space-y-5 mb-6">
//           <div className="flex flex-col items-center">
//             <span className="font-bold lg:text-[20px] text-[16px]">Tournament Dates:</span>
//             <span className="text-[#6B6F76]">12th April – 4th May 2025</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <span className
// ="font-bold lg:text-[20px] text-[16px]">Number of Teams:</span>
// <span className="text-[#6B6F76]">6 teams competing</span>
// </div>
// <div className="flex flex-col items-center">
// <span className="font-bold lg:text-[20px] text-[16px]">Match Format:</span>
// <span className="text-[#6B6F76]">League style</span>
// </div>
// </div>
//     <h2 className="text-[#C81E23] mt-4">
//       The Top 2 teams will qualify for the final!
//     </h2>
//   </div>

//   {/* Matchday Selector */}
//   <div className="mt-16">
//     <h1 className="font-bold text-[24px] text-center">Match Fixtures</h1>
//   </div>

//   {/* Fixtures List */}
//   <div className="space-y-8">
//     {matchdayKeys.slice(0, visibleMatchdays).map((matchday) => {
//       const incompleteMatches = fixtures[matchday].filter(match => !match.completed);

//       if (incompleteMatches.length === 0) {
//         return (
//           <div key={matchday} className="mb-8">
//             <h2 className="text-xl font-bold mb-4 text-center">{matchday}</h2>
//             <div className="text-center py-4 text-gray-500">
//               All matches for this matchday have been completed
//             </div>
//           </div>
//         );
//       }

//       return (
//         <div key={matchday} className="mb-8">
//           <h2 className="text-xl font-bold mb-4 text-center">{matchday}</h2>
//           <div className="space-y-3">
//             {incompleteMatches.map((match) => (
//               <div
//                 key={match.id}
//                 className="p-4 border rounded-lg cursor-pointer hover:bg-[#FAFAFA] lg:flex lg:flex-row flex-col items-center justify-between text-center"
//                 onClick={() => setSelectedMatch(match)}
//               >
//                 <div className="flex items-center space-x-2 lg:w-2/5 w-auto lg:justify-start justify-center">
//                   <img
//                     src={match.homeLogo}
//                     alt={match.home}
//                     className="w-10 h-10 sm:w-12 sm:h-12"
//                   />
//                   <p className="text-lg font-semibold truncate">{match.home}</p>
//                 </div>
//                 <div className="text-center lg:w-1/5 w-auto">
//                   <p className="text-lg font-semibold lg:my-0 my-4">VS</p>
//                   <p className="text-sm text-gray-500">{match.time}</p>
//                 </div>
//                 <div className="flex items-center space-x-2 lg:w-2/5 w-auto lg:justify-end justify-center">
//                   <img
//                     src={match.awayLogo}
//                     alt={match.away}
//                     className="w-10 h-10 sm:w-12 sm:h-12 lg:hidden block"
//                   />
//                   <p className="text-lg font-semibold truncate">{match.away}</p>
//                   <img
//                     src={match.awayLogo}
//                     alt={match.away}
//                     className="w-10 h-10 sm:w-12 sm:h-12 lg:block hidden"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       );
//     })}
//   </div>

//   {/* Load More Button */}
//   {visibleMatchdays < matchdayKeys.length && (
//     <div className="flex justify-center mt-6">
//       <button
//         onClick={loadMoreMatchdays}
//         className="px-4 py-2 bg-[#C81E23] text-white rounded-lg hover:bg-[#A5191E] transition"
//       >
//         Load Next Matchday
//       </button>
//     </div>
//   )}

//   {/* Match Details Modal */}
//   {selectedMatch && (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-lg p-6 max-w-md w-full">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">{selectedMatch.stage}</h2>
//           <button
//             onClick={() => setSelectedMatch(null)}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             ✕
//           </button>
//         </div>

//         <div className="text-center">
//           <div className="flex justify-between items-center mb-4">
//             <div className="flex-1 text-center">
//               <img
//                 src={selectedMatch.homeLogo}
//                 alt={selectedMatch.home}
//                 className="w-16 h-16 mx-auto"
//               />
//               <p className="font-bold mt-2">{selectedMatch.home}</p>
//             </div>
//             <div className="mx-4">
//               <p className="text-2xl font-bold">VS</p>
//             </div>
//             <div className="flex-1 text-center">
//               <img
//                 src={selectedMatch.awayLogo}
//                 alt={selectedMatch.away}
//                 className="w-16 h-16 mx-auto"
//               />
//               <p className="font-bold mt-2">{selectedMatch.away}</p>
//             </div>
//           </div>

//           <div className="mt-8 space-y-2 text-left">
//             <p>
//               <span className="font-bold">Date:</span> {selectedMatch.date}
//             </p>
//             <p>
//               <span className="font-bold">Time:</span> {selectedMatch.time}
//             </p>
//             <p>
//               <span className="font-bold">Venue:</span> Basin Stadium, Ilorin
//             </p>
//           </div>

//           <button
//             onClick={() => setSelectedMatch(null)}
//             className="mt-6 bg-[#C81E23] text-white px-4 py-2 rounded-lg w-full"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   )}

//   {/* Important Notes Section */}
//   <div className="lg:p-6 p-1 max-w-3xl mx-auto mt-16">
//     <h1 className="text-[25px] text-[#C81E23] lg:text-[35px] font-bold mb-8 text-center">
//       Important Notes
//     </h1>
//     <div className="space-y-6">
//       <div className="flex flex-col gap-3">
//         <div className="flex gap-4 items-center">
//           <FaClock className="text-[#C81E23] text-2xl" />
//           <h1 className="text-[18px] font-bold">Match Duration:</h1>
//         </div>
//         <p className="text-[#6B6F76] mt-[-10px] ml-[40px] lg:w-[350px] w-auto">
//           Each match consists of two 30-minute halves with a 10-minute
//           halftime break.
//         </p>
//       </div>

//       <div className="flex flex-col gap-3">
//         <div className="flex gap-4 items-center">
//           <FaMapMarkerAlt className="text-[#C81E23] text-2xl" />
//           <h1 className="text-[18px] font-bold">Venue Address:</h1>
//         </div>
//         <p className="text-[#6B6F76] mt-[-10px] ml-[40px]">
//           Basin Stadium, Ilorin, Kwara State
//         </p>
//       </div>

//       <div className="flex flex-col gap-3">
//         <div className="flex gap-4 items-center">
//           <FaParking className="text-[#C81E23] text-2xl" />
//           <h1 className="text-[18px] font-bold">Parking:</h1>
//         </div>
//         <p className="text-[#6B6F76] mt-[-10px] ml-[40px]">
//           Parking will be available at the tournament venue.
//         </p>
//       </div>

//       <div className="flex flex-col gap-3">
//         <div className="flex gap-4 items-center">
//           <FaCloudSunRain className="text-[#C81E23] text-2xl" />
//           <h1 className="text-[18px] font-bold">Weather Updates:</h1>
//         </div>
//         <p className="text-[#6B6F76] mt-[-10px] ml-[40px]">
//           In case of adverse weather, matches may be rescheduled. <br />{" "}
//           Check the website or social media for updates.
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
// );
// }

// "use client";
// import { useState, useEffect } from "react";
// import {
//   FaClock,
//   FaCloudSunRain,
//   FaMapMarkerAlt,
//   FaParking,
// } from "react-icons/fa";

// const teams = [
//   { id: 1, name: "Leo FC", logo: "/loe.jpg" },
//   { id: 2, name: "NBA FC", logo: "/nba.png" },
//   { id: 3, name: "Sway Fitness FC", logo: "/sway.png" },
//   { id: 4, name: "Bankers All Stars FC", logo: "/bankers-fc.png" },
//   { id: 5, name: "Maracana FC", logo: "/maracana.png" },
//   { id: 6, name: "Unilorin Quarters FC", logo: "/unilorin.jpg" },
// ];

// // Custom fixtures for each matchday
// const customFixtures = {
//   "Matchday 1": [
//     {
//       home: "Leo FC",
//       away: "NBA FC",
//       homeLogo: "/loe.jpg",
//       awayLogo: "/nba.png",
//       time: "10:00am",
//       date: "13/04/2025",
//       stage: "Opening Fixture",
//       completed: true,
//     },
//     {
//       home: "Bankers All Stars FC",
//       away: "Unilorin Quarters FC",
//       homeLogo: "/bankers-fc.png",
//       awayLogo: "/unilorin.jpg",
//       time: "04:30pm",
//       date: "19/04/2025",
//       stage: "Opening Fixture",
//       completed: false,
//     },
//     {
//       home: "Sway Fitness FC",
//       away: "Maracana FC",
//       homeLogo: "/sway.png",
//       awayLogo: "/maracana.png",
//       time: "04:30pm",
//       date: "20/04/2025",
//       stage: "Opening Fixture",
//       completed: false,
//     },
//   ],
//   "Matchday 2": [
//     {
//       home: "Leo FC",
//       away: "Maracana FC",
//       homeLogo: "/loe.jpg",
//       awayLogo: "/maracana.png",
//       time: "04:30pm",
//       date: "26/04/2025",
//       stage: "Matchday 2",
//       completed: false,
//     },
//     {
//       home: "NBA FC",
//       away: "Bankers All Stars FC",
//       homeLogo: "/nba.png",
//       awayLogo: "/bankers-fc.png",
//       time: "04:00pm",
//       date: "27/04/2025",
//       stage: "Matchday 2",
//       completed: false,
//     },
//     {
//       home: "Sway Fitness FC",
//       away: "Unilorin Quarters FC",
//       homeLogo: "/sway.png",
//       awayLogo: "/unilorin.jpg",
//       time: "05:20pm",
//       date: "27/04/2025",
//       stage: "Matchday 2",
//       completed: false,
//     },
//   ],
//   "Matchday 3": [
//     {
//       home: "Leo FC",
//       away: "Sway Fitness FC",
//       homeLogo: "/loe.jpg",
//       awayLogo: "/sway.png",
//       time: "02:00pm",
//       date: "28/04/2025",
//       stage: "Matchday 3",
//       completed: false,
//     },
//     {
//       home: "Maracana FC",
//       away: "Bankers All Stars FC",
//       homeLogo: "/maracana.png",
//       awayLogo: "/bankers-fc.png",
//       time: "03:30pm",
//       date: "28/04/2025",
//       stage: "Matchday 3",
//       completed: false,
//     },
//     {
//       home: "NBA FC",
//       away: "Unilorin Quarters FC",
//       homeLogo: "/nba.png",
//       awayLogo: "/unilorin.jpg",
//       time: "05:00pm",
//       date: "28/04/2025",
//       stage: "Matchday 3",
//       completed: false,
//     },
//   ],
//   "Matchday 4": [
//     {
//       home: "Leo FC",
//       away: "Bankers All Stars FC",
//       homeLogo: "/loe.jpg",
//       awayLogo: "/bankers-fc.png",
//       time: "02:00pm",
//       date: "29/04/2025",
//       stage: "Matchday 4",
//       completed: false,
//     },
//     {
//       home: "NBA FC",
//       away: "Maracana FC",
//       homeLogo: "/nba.png",
//       awayLogo: "/maracana.png",
//       time: "03:30pm",
//       date: "29/04/2025",
//       stage: "Matchday 4",
//       completed: false,
//     },
//     {
//       home: "Sway Fitness FC",
//       away: "Unilorin Quarters FC",
//       homeLogo: "/sway.png",
//       awayLogo: "/unilorin.jpg",
//       time: "05:00pm",
//       date: "29/04/2025",
//       stage: "Matchday 4",
//       completed: false,
//     },
//   ],
//   "Matchday 5": [
//     {
//       home: "Leo FC",
//       away: "Unilorin Quarters FC",
//       homeLogo: "/loe.jpg",
//       awayLogo: "/unilorin.jpg",
//       time: "02:00pm",
//       date: "30/04/2025",
//       stage: "Matchday 5",
//       completed: false,
//     },
//     {
//       home: "NBA FC",
//       away: "Sway Fitness FC",
//       homeLogo: "/nba.png",
//       awayLogo: "/sway.png",
//       time: "03:30pm",
//       date: "30/04/2025",
//       stage: "Matchday 5",
//       completed: false,
//     },
//     {
//       home: "Maracana FC",
//       away: "Bankers All Stars FC",
//       homeLogo: "/maracana.png",
//       awayLogo: "/bankers-fc.png",
//       time: "05:00pm",
//       date: "30/04/2025",
//       stage: "Matchday 5",
//       completed: false,
//     },
//   ],
// };

// // Add final matchday
// customFixtures["Final"] = [
//   {
//     id: 99,
//     home: "Top Team",
//     away: "Runner Up",
//     time: "04:30pm",
//     date: "4th May 2025",
//     stage: "Final",
//     homeLogo: "/one.png",
//     awayLogo: "/three.png",
//     completed: true,
//   },
// ];

// const matchdayKeys = Object.keys(customFixtures);

// export default function MatchSchedule() {
//   const [fixtures, setFixtures] = useState(customFixtures);
//   const [visibleMatchdays, setVisibleMatchdays] = useState(1); // Start with 1 matchday visible
//   const [selectedMatch, setSelectedMatch] = useState(null);

//   // Function to load more matchdays (loads 1 at a time)
//   const loadMoreMatchdays = () => {
//     setVisibleMatchdays(prev => Math.min(prev + 1, matchdayKeys.length));
//   };

//   // Function to mark matches as completed based on scheduled time
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date();
//       const updatedFixtures = { ...fixtures };

//       matchdayKeys.forEach(matchday => {
//         updatedFixtures[matchday] = updatedFixtures[matchday].map(match => {
//           const matchDate = new Date(`${match.date} ${match.time}`);
//           if (!match.completed && now >= matchDate) {
//             match.completed = true;
//           }
//           return match;
//         });
//       });

//       setFixtures(updatedFixtures);
//     }, 60000); // Check every minute

//     return () => clearInterval(interval);
//   }, [fixtures]);

//   return (
//     <div className="p-6 max-w-3xl mx-auto tracking-tight relative">
//       <div className="text-center">
//         <h1 className="text-2xl font-bold mb-7">Match Schedule</h1>
//         <div className="space-y-5 mb-6">
//           <div className="flex flex-col items-center">
//             <span className="font-bold lg:text-[20px] text-[16px]">Tournament Dates:</span>
//             <span className="text-[#6B6F76]">12th April – 4th May 2025</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <span className="font-bold lg:text-[20px] text-[16px]">Number of Teams:</span>
//             <span className="text-[#6B6F76]">6 teams competing</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <span className="font-bold lg:text-[20px] text-[16px]">Match Format:</span>
//             <span className="text-[#6B6F76]">League style</span>
//           </div>
//         </div>
//         <h2 className="text-[#C81E23] mt-4">
//           The Top 2 teams will qualify for the final!
//         </h2>
//       </div>

//       {/* Matchday Selector */}
//       <div className="mt-16">
//         <h1 className="font-bold text-[24px] text-center">Match Fixtures</h1>
//       </div>

//       {/* Fixtures List - Updated Layout */}
//       <div className="space-y-8">
//         {matchdayKeys.slice(0, visibleMatchdays).map((matchday) => {
//           const incompleteMatches = fixtures[matchday].filter(match => !match.completed);

//           if (incompleteMatches.length === 0) {
//             return (
//               <div key={matchday} className="mb-8">
//                 <h2 className="text-xl font-bold mb-4 text-center">{matchday}</h2>
//                 <div className="text-center py-4 text-gray-500">
//                   All matches for this matchday have been completed
//                 </div>
//               </div>
//             );
//           }

//           return (
//             <div key={matchday} className="mb-8">
//               <h2 className="text-xl font-bold mb-4 text-center">{matchday}</h2>
//               <div className="space-y-7">
//                 {incompleteMatches.map((match) => (
//                   <div
//                     key={match.id}
//                     className="lg:p-4 p-2 border rounded-lg cursor-pointer hover:bg-[#FAFAFA] flex items-center justify-between"
//                     onClick={() => setSelectedMatch(match)}
//                   >
//                     <div className="flex-1">
//                       {/* Home Team */}
//                       <div className="flex items-center space-x-2 mb-3">
//                         <img
//                           src={match.homeLogo}
//                           alt={match.home}
//                           className="w-10 h-10 sm:w-12 sm:h-12"
//                         />
//                         <p className="lg:text-[16px] text-[14px] font-semibold">{match.home}</p>
//                       </div>

//                       {/* Away Team */}
//                       <div className="flex items-center space-x-2">
//                         <img
//                           src={match.awayLogo}
//                           alt={match.away}
//                           className="w-10 h-10 sm:w-12 sm:h-12"
//                         />
//                         <p className="lg:text-[16px] text-[14px] font-semibold">{match.away}</p>
//                       </div>
//                     </div>

//                     {/* Match Time and Date */}
//                     <div className="text-right flex flex-col justify-between h-full">
//                       <div>
//                         <p className="font-semibold lg:text-[14px] text-[12px]">{match.date}</p>
//                         <p className="text-gray-500 lg:text-[14px] text-[12px]">{match.time}</p>
//                       </div>
//                       {/* <div className="mt-2">
//                         <span className="bg-[#C81E23] text-white text-xs px-2 py-1 rounded">
//                           {match.stage}
//                         </span>
//                       </div> */}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Load More Button */}
//       {visibleMatchdays < matchdayKeys.length && (
//         <div className="flex justify-center mt-6">
//           <button
//             onClick={loadMoreMatchdays}
//             className="px-4 py-2 bg-[#C81E23] text-white rounded-lg hover:bg-[#A5191E] transition"
//           >
//             Load Next Matchday
//           </button>
//         </div>
//       )}

//       {/* Match Details Modal */}
//       {selectedMatch && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg p-6 max-w-md w-full">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold">{selectedMatch.stage}</h2>
//               <button
//                 onClick={() => setSelectedMatch(null)}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="text-center">
//               <div className="flex justify-between items-center mb-4">
//                 <div className="flex-1 text-center">
//                   <img
//                     src={selectedMatch.homeLogo}
//                     alt={selectedMatch.home}
//                     className="w-16 h-16 mx-auto"
//                   />
//                   <p className="font-bold mt-2">{selectedMatch.home}</p>
//                 </div>
//                 <div className="mx-4">
//                   <p className="text-2xl font-bold">VS</p>
//                 </div>
//                 <div className="flex-1 text-center">
//                   <img
//                     src={selectedMatch.awayLogo}
//                     alt={selectedMatch.away}
//                     className="w-16 h-16 mx-auto"
//                   />
//                   <p className="font-bold mt-2">{selectedMatch.away}</p>
//                 </div>
//               </div>

//               <div className="mt-8 space-y-2 text-left">
//                 <p>
//                   <span className="font-bold">Date:</span> {selectedMatch.date}
//                 </p>
//                 <p>
//                   <span className="font-bold">Time:</span> {selectedMatch.time}
//                 </p>
//                 <p>
//                   <span className="font-bold">Venue:</span> Basin Stadium, Ilorin
//                 </p>
//               </div>

//               <button
//                 onClick={() => setSelectedMatch(null)}
//                 className="mt-6 bg-[#C81E23] text-white px-4 py-2 rounded-lg w-full"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Important Notes Section */}
//       <div className="lg:p-6 p-1 max-w-3xl mx-auto mt-16">
//         <h1 className="text-[25px] text-[#C81E23] lg:text-[35px] font-bold mb-8 text-center">
//           Important Notes
//         </h1>
//         <div className="space-y-6">
//           <div className="flex flex-col gap-3">
//             <div className="flex gap-4 items-center">
//               <FaClock className="text-[#C81E23] text-2xl" />
//               <h1 className="text-[18px] font-bold">Match Duration:</h1>
//             </div>
//             <p className="text-[#6B6F76] mt-[-10px] ml-[40px] lg:w-[350px] w-auto">
//               Each match consists of two 30-minute halves with a 10-minute
//               halftime break.
//             </p>
//           </div>

//           <div className="flex flex-col gap-3">
//             <div className="flex gap-4 items-center">
//               <FaMapMarkerAlt className="text-[#C81E23] text-2xl" />
//               <h1 className="text-[18px] font-bold">Venue Address:</h1>
//             </div>
//             <p className="text-[#6B6F76] mt-[-10px] ml-[40px]">
//               Basin Stadium, Ilorin, Kwara State
//             </p>
//           </div>

//           <div className="flex flex-col gap-3">
//             <div className="flex gap-4 items-center">
//               <FaParking className="text-[#C81E23] text-2xl" />
//               <h1 className="text-[18px] font-bold">Parking:</h1>
//             </div>
//             <p className="text-[#6B6F76] mt-[-10px] ml-[40px]">
//               Parking will be available at the tournament venue.
//             </p>
//           </div>

//           <div className="flex flex-col gap-3">
//             <div className="flex gap-4 items-center">
//               <FaCloudSunRain className="text-[#C81E23] text-2xl" />
//               <h1 className="text-[18px] font-bold">Weather Updates:</h1>
//             </div>
//             <p className="text-[#6B6F76] mt-[-10px] ml-[40px]">
//               In case of adverse weather, matches may be rescheduled. <br />{" "}
//               Check the website or social media for updates.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import {
  FaClock,
  FaCloudSunRain,
  FaMapMarkerAlt,
  FaParking,
} from "react-icons/fa";

const teams = [
  { id: 1, name: "Leo FC", logo: "/loe.jpg" },
  { id: 2, name: "NBA FC", logo: "/nba.png" },
  { id: 3, name: "Sway Fitness FC", logo: "/sway.png" },
  { id: 4, name: "Bankers All Stars FC", logo: "/bankers-fc.png" },
  { id: 5, name: "Maracana FC", logo: "/maracana.png" },
  { id: 6, name: "Unilorin Quarters FC", logo: "/unilorin.jpg" },
  { id: 7, name: "Corporate Ballers FA", logo: "/corporate-ballers.png" },
];

// Custom fixtures for each matchday
const customFixtures = {
  "Matchday 1": [
    {
      home: "Leo FC",
      away: "NBA FC",
      homeLogo: "/loe.jpg",
      awayLogo: "/nba.png",
      time: "10:00am",
      date: "13/04/2025",
      stage: "Opening Fixture",
      completed: true,
    },
    {
      home: "Bankers All Stars",
      away: "Unilorin Quarters FC",
      homeLogo: "/bankers-fc.png",
      awayLogo: "/unilorin.jpg",
      time: "04:30pm",
      date: "19/04/2025",
      stage: "Opening Fixture",
      completed: true,
    },
    {
      home: "Sway FC",
      away: "Maracana FC",
      homeLogo: "/sway.png",
      awayLogo: "/maracana.png",
      time: "04:30pm",
      date: "20/04/2025",
      stage: "Opening Fixture",
      completed: true,
    },
  ],
  "Matchday 2": [
    {
      home: "Leo FC",
      away: "Corporate Ballers FA",
      homeLogo: "/loe.jpg",
      awayLogo: "/corporate-ballers.png",
      time: "04:00pm",
      date: "26/04/2025",
      stage: "Matchday 2",
      completed: false,
    },
    {
      home: "NBA FC",
      away: "Maracana FC",
      homeLogo: "/nba.png",
      awayLogo: "/maracana.png",
      time: "03:00pm",
      date: "27/04/2025",
      stage: "Matchday 2",
      completed: false,
    },
    {
      home: "Bankers All Stars",
      away: "Sway FC",
      homeLogo: "/bankers-fc.png",
      awayLogo: "/sway.png",
      time: "05:20pm",
      date: "27/04/2025",
      stage: "Matchday 2",
      completed: false,
    },
  ],
  "Matchday 3": [
    {
      home: "Unilorin Quarters FC",
      away: "Leo FC",
      homeLogo: "/unilorin.jpg",
      awayLogo: "/loe.jpg",
      time: "01:00pm",
      date: "03/05/2025",
      stage: "Matchday 3",
      completed: false,
    },
    {
      home: "Maracana FC",
      away: "Bankers All Stars",
      homeLogo: "/maracana.png",
      awayLogo: "/bankers-fc.png",
      time: "02:40pm",
      date: "03/05/2025",
      stage: "Matchday 3",
      completed: false,
    },
    {
      home: "Corporate Ballers FA",
      away: "NBA FC",
      homeLogo: "/corporate-ballers.png",
      awayLogo: "/nba.png",
      time: "05:00pm",
      date: "03/05/2025",
      stage: "Matchday 3",
      completed: false,
    },
  ],
  "Matchday 4": [
    {
      home: "Sway FC",
      away: "Unilorin Quarters FC",
      homeLogo: "/sway.png",
      awayLogo: "/unilorin.jpg",
      time: "01:00pm",
      date: "11/05/2025",
      stage: "Matchday 4",
      completed: false,
    },
    {
      home: "Leo FC",
      away: "Maracana FC",
      homeLogo: "/loe.jpg",
      awayLogo: "/maracana.png",
      time: "02:40pm",
      date: "11/05/2025",
      stage: "Matchday 4",
      completed: false,
    },
    {
      home: "Bankers All Stars",
      away: "Corporate Ballers FA",
      homeLogo: "/bankers-fc.png",
      awayLogo: "/corporate-ballers.png",
      time: "05:00pm",
      date: "11/05/2025",
      stage: "Matchday 4",
      completed: false,
    },
  ],
  "Matchday 5": [
    {
      home: "NBA FC",
      away: "Bankers All Stars",
      homeLogo: "/nba.png",
      awayLogo: "/bankers-fc.png",
      time: "01:00pm",
      date: "17/05/2025",
      stage: "Matchday 5",
      completed: false,
    },
    {
      home: "Unilorin Quarters FC",
      away: "Maracana FC",
      homeLogo: "/unilorin.jpg",
      awayLogo: "/maracana.png",
      time: "02:40pm",
      date: "17/05/2025",
      stage: "Matchday 5",
      completed: false,
    },
    {
      home: "Sway FC",
      away: "Corporate Ballers FA",
      homeLogo: "/sway.png",
      awayLogo: "/corporate-ballers.png",
      time: "05:00pm",
      date: "17/05/2025",
      stage: "Matchday 5",
      completed: false,
    },
  ],
  "Matchday 6": [
    {
      home: "Leo FC",
      away: "Sway FC",
      homeLogo: "/loe.jpg",
      awayLogo: "/sway.png",
      time: "01:00pm",
      date: "25/05/2025",
      stage: "Matchday 6",
      completed: false,
    },
    {
      home: "NBA FC",
      away: "Unilorin Quarters FC",
      homeLogo: "/nba.png",
      awayLogo: "/unilorin.jpg",
      time: "02:40pm",
      date: "25/05/2025",
      stage: "Matchday 6",
      completed: false,
    },
    {
      home: "Maracana FC",
      away: "Corporate Ballers FA",
      homeLogo: "/maracana.png",
      awayLogo: "/corporate-ballers.png",
      time: "05:00pm",
      date: "25/05/2025",
      stage: "Matchday 6",
      completed: false,
    },
  ],
  "Matchday 7": [
    {
      home: "Unilorin Quarters FC",
      away: "Corporate Ballers FA",
      homeLogo: "/unilorin.jpg",
      awayLogo: "/corporate-ballers.png",
      time: "01:00pm",
      date: "31/05/2025",
      stage: "Matchday 7",
      completed: false,
    },
    {
      home: "Bankers All Stars",
      away: "Leo FC",
      homeLogo: "/bankers-fc.png",
      awayLogo: "/loe.jpg",
      time: "02:40pm",
      date: "31/05/2025",
      stage: "Matchday 7",
      completed: false,
    },
    {
      home: "NBA FC",
      away: "Sway FC",
      homeLogo: "/nba.png",
      awayLogo: "/sway.png",
      time: "05:00pm",
      date: "31/05/2025",
      stage: "Matchday 7",
      completed: false,
    },
  ],
};

// Add final matchday
// customFixtures["Final"] = [
//   {
//     id: 99,
//     home: "Top Team",
//     away: "Runner Up",
//     time: "04:30pm",
//     date: "8th JUne 2025",
//     stage: "Final",
//     homeLogo: "/one.png",
//     awayLogo: "/three.png",
//     completed: true,
//   },
// ];

const matchdayKeys = Object.keys(customFixtures);

export default function MatchSchedule() {
  const [fixtures, setFixtures] = useState(customFixtures);
  const [visibleMatchdays, setVisibleMatchdays] = useState(2);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Function to load more matchdays with loading state
  const loadMoreMatchdays = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleMatchdays((prev) => Math.min(prev + 1, matchdayKeys.length));
      setIsLoading(false);
    }, 2000); // 2 seconds delay
  };

  // Function to mark matches as completed based on scheduled time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const updatedFixtures = { ...fixtures };

      matchdayKeys.forEach((matchday) => {
        updatedFixtures[matchday] = updatedFixtures[matchday].map((match) => {
          const matchDate = new Date(`${match.date} ${match.time}`);
          if (!match.completed && now >= matchDate) {
            match.completed = true;
          }
          return match;
        });
      });

      setFixtures(updatedFixtures);
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [fixtures]);

  return (
    <div className="p-6 max-w-3xl mx-auto tracking-tight relative">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-7">Match Schedule</h1>
        <div className="space-y-5 mb-6">
          <div className="flex flex-col items-center">
            <span className="font-bold lg:text-[20px] text-[16px]">
              Tournament Dates:
            </span>
            <span className="text-[#6B6F76]">12th April – 8th June 2025</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold lg:text-[20px] text-[16px]">
              Number of Teams:
            </span>
            <span className="text-[#6B6F76]">7 teams competing</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold lg:text-[20px] text-[16px]">
              Match Format:
            </span>
            <span className="text-[#6B6F76]">League style</span>
          </div>
        </div>
        <h2 className="text-[#C81E23] mt-4">
          The Top 2 teams will qualify for the final!
        </h2>
      </div>

      {/* Matchday Selector */}
      <div className="mt-16">
        <h1 className="font-bold text-[24px] text-center">Match Fixtures</h1>
      </div>

      {/* Fixtures List - Updated Layout */}
      <div className="space-y-8">
        {matchdayKeys.slice(0, visibleMatchdays).map((matchday) => {
          const incompleteMatches = fixtures[matchday].filter(
            (match) => !match.completed
          );

          if (incompleteMatches.length === 0) {
            return (
              <div key={matchday} className="mb-8">
                <h2 className="text-xl font-bold mt-5 text-center">
                  {matchday}
                </h2>
                <div className="text-center py-4 text-gray-500">
                  All matches for this matchday have been completed
                  <p className="text-gray-500 text-center text-[14px]">
                    Check the{" "}
                    <a
                      className="text-[#C81E23] underline px-[2px]"
                      href="/tournament/results"
                    >
                      results
                    </a>{" "}
                    page for more info!
                  </p>
                </div>
              </div>
            );
          }

          return (
            <div key={matchday} className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-center">{matchday}</h2>
              <div className="space-y-7">
                {incompleteMatches.map((match) => (
                  <div
                    key={match.id}
                    className="lg:p-4 p-2 border rounded-lg cursor-pointer hover:bg-[#FAFAFA] flex items-center justify-between"
                    onClick={() => setSelectedMatch(match)}
                  >
                    <div className="flex-1">
                      {/* Home Team */}
                      <div className="flex items-center space-x-2 mb-3">
                        <img
                          src={match.homeLogo}
                          alt={match.home}
                          className="w-10 h-10 sm:w-12 sm:h-12"
                        />
                        <p className="lg:text-[16px] text-[14px] font-semibold">
                          {match.home}
                        </p>
                      </div>

                      {/* Away Team */}
                      <div className="flex items-center space-x-2">
                        <img
                          src={match.awayLogo}
                          alt={match.away}
                          className="w-10 h-10 sm:w-12 sm:h-12"
                        />
                        <p className="lg:text-[16px] text-[14px] font-semibold">
                          {match.away}
                        </p>
                      </div>
                    </div>

                    {/* Match Time and Date */}
                    <div className="text-right flex flex-col justify-between h-full">
                      <div>
                        <p className="font-semibold lg:text-[14px] text-[12px]">
                          {match.date}
                        </p>
                        <p className="text-gray-500 lg:text-[14px] text-[12px]">
                          {match.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      {visibleMatchdays < matchdayKeys.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMoreMatchdays}
            disabled={isLoading}
            className={`px-4 py-2 ${
              isLoading
                ? "bg-red-500 opacity-50 cursor-not-allowed"
                : "bg-[#C81E23] hover:bg-[#A5191E]"
            } text-white rounded-lg transition`}
          >
            {isLoading ? "Loading..." : "Load Next Matchday"}
          </button>
        </div>
      )}

      {/* Match Details Modal */}
      {selectedMatch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{selectedMatch.stage}</h2>
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
                  <img
                    src={selectedMatch.homeLogo}
                    alt={selectedMatch.home}
                    className="w-16 h-16 mx-auto"
                  />
                  <p className="font-bold mt-2">{selectedMatch.home}</p>
                </div>
                <div className="mx-4">
                  <p className="text-2xl font-bold">VS</p>
                </div>
                <div className="flex-1 text-center">
                  <img
                    src={selectedMatch.awayLogo}
                    alt={selectedMatch.away}
                    className="w-16 h-16 mx-auto"
                  />
                  <p className="font-bold mt-2">{selectedMatch.away}</p>
                </div>
              </div>

              <div className="mt-8 space-y-2 text-left">
                <p>
                  <span className="font-bold">Date:</span> {selectedMatch.date}
                </p>
                <p>
                  <span className="font-bold">Time:</span> {selectedMatch.time}
                </p>
                <p>
                  <span className="font-bold">Venue:</span> Basin Stadium,
                  Ilorin
                </p>
              </div>

              <button
                onClick={() => setSelectedMatch(null)}
                className="mt-6 bg-[#C81E23] text-white px-4 py-2 rounded-lg w-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Important Notes Section */}
      <div className="lg:p-6 p-1 max-w-3xl mx-auto mt-16">
        <h1 className="text-[25px] text-[#C81E23] lg:text-[35px] font-bold mb-8 text-center">
          Important Notes
        </h1>
        <div className="space-y-6">
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 items-center">
              <FaClock className="text-[#C81E23] text-2xl" />
              <h1 className="text-[18px] font-bold">Match Duration:</h1>
            </div>
            <p className="text-[#6B6F76] mt-[-10px] ml-[40px] lg:w-[350px] w-auto">
              Each match consists of two 30-minute halves with a 10-minute
              halftime break.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-4 items-center">
              <FaMapMarkerAlt className="text-[#C81E23] text-2xl" />
              <h1 className="text-[18px] font-bold">Venue Address:</h1>
            </div>
            <p className="text-[#6B6F76] mt-[-10px] ml-[40px]">
              Basin Stadium, Ilorin, Kwara State
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-4 items-center">
              <FaParking className="text-[#C81E23] text-2xl" />
              <h1 className="text-[18px] font-bold">Parking:</h1>
            </div>
            <p className="text-[#6B6F76] mt-[-10px] ml-[40px]">
              Parking will be available at the tournament venue.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-4 items-center">
              <FaCloudSunRain className="text-[#C81E23] text-2xl" />
              <h1 className="text-[18px] font-bold">Weather Updates:</h1>
            </div>
            <p className="text-[#6B6F76] mt-[-10px] ml-[40px]">
              In case of adverse weather, matches may be rescheduled. <br />{" "}
              Check the website or social media for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
