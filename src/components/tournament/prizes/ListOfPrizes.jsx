// import Image from "next/image";
// import React from "react";

// const ListOfPrizes = () => {
//   return (
//     <div className="">
//       <div className="my-[50px]">
//         <h1 className="lg:text-[40px] text-[30px] tracking-tight text-center">
//           Tournament Prizes & Awards
//         </h1>
//         <p className="text-[#6B6F76] lg:w-[480px] w-auto text-center m-auto mt-4">
//           Top-performing teams and standout players will be rewarded with
//           exciting prizes, recognizing their hard work, skill, and achievements
//           throughout the competition.
//         </p>
//       </div>

//       <div className="my-[50px] lg:flex lg:flex-row flex-col justify-center gap-[150px]">
//         <div className="lg:mb-0 mb-10 flex lg:justify-end justify-center">
//           <Image
//             src="/gold-winner.jpg"
//             alt="Winner"
//             height={320}
//             width={390}
//             className="rounded-md"
//           />
//         </div>
//         <div>
//           <h1 className="lg:text-[30px] tracking-tight text-[20px]">
//             What champions take home
//           </h1>
//           <ul className="mt-4 space-y-4 ml-7">
//             <li className="flex items-start gap-3">
//               <img
//                 src="/checkmark.svg"
//                 alt="Checkmark"
//                 className="w-5 h-5 mt-1"
//               />
//               <div>
//                 <h2 className="font-bold">Gold Medal:</h2>
//                 <p className="text-[#6B6F76]">
//                   A symbol of victory and excellence.
//                 </p>
//               </div>
//             </li>
//             <li className="flex items-start gap-3">
//               <img
//                 src="/checkmark.svg"
//                 alt="Checkmark"
//                 className="w-5 h-5 mt-1"
//               />
//               <div>
//                 <h2 className="font-bold">Trophy:</h2>
//                 <p className="text-[#6B6F76] lg:w-[280px] leading-tight">
//                   A prestigious award to commemorate your team’s success.
//                 </p>
//               </div>
//             </li>
//             <li className="flex items-start gap-3">
//               <img
//                 src="/checkmark.svg"
//                 alt="Checkmark"
//                 className="w-5 h-5 mt-1"
//               />
//               <div>
//                 <h2 className="font-bold">Cash Prize:</h2>
//                 <p className="text-[#6B6F76] lg:w-[250px] leading-tight">
//                   A generous cash reward for the winning team.
//                 </p>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="my-[80px] lg:flex lg:flex-row flex-col justify-center gap-[150px]">
//         <div className="lg:hidden lg:mb-0 mb-10 flex justify-center">
//           <Image
//             src="/second-win.jpg"
//             alt="Winner"
//             height={320}
//             width={390}
//             className="rounded-md"
//           />
//         </div>

//         <div>
//           <h1 className="lg:text-[30px] tracking-tight text-[20px]">
//             What runner-up take home
//           </h1>
//           <ul className="mt-4 space-y-4 ml-7">
//             <li className="flex items-start gap-3">
//               <img
//                 src="/checkmark.svg"
//                 alt="Checkmark"
//                 className="w-5 h-5 mt-1"
//               />
//               <div>
//                 <h2 className="font-bold">Silver Medals</h2>
//                 <p className="text-[#6B6F76] lg:w-[300px] w-auto leading-tight">
//                   The runner-up team will receive silver medals for their strong
//                   performance.
//                 </p>
//               </div>
//             </li>
//             <li className="flex items-start gap-3">
//               <img
//                 src="/checkmark.svg"
//                 alt="Checkmark"
//                 className="w-5 h-5 mt-1"
//               />
//               <div>
//                 <h2 className="font-bold">Sporting Equipment:</h2>
//                 <p className="text-[#6B6F76] lg:w-[280px] w-auto leading-tight">
//                   Runners-up also receive high-quality sporting equipment.
//                 </p>
//               </div>
//             </li>
//             {/* <li className="flex items-start gap-3">
//               <img
//                 src="/checkmark.svg"
//                 alt="Checkmark"
//                 className="w-5 h-5 mt-1"
//               />
//               <div>
//                 <h2 className="font-bold">Cash Prize:</h2>
//                 <p className="text-[#6B6F76] lg:w-[280px] w-auto leading-tight">
//                   A generous cash reward for the runner-up team.
//                 </p>
//               </div>
//             </li> */}
//           </ul>
//         </div>
//         <div className="lg:block hidden">
//           <Image
//             src="/second-win.jpg"
//             alt="Winner"
//             height={320}
//             width={390}
//             className="rounded-md"
//           />
//         </div>
//       </div>

//       <div className="my-[50px] lg:flex lg:flex-row flex-col justify-center gap-[150px]">
//         <div className="lg:mb-0 mb-10 flex lg:justify-start justify-center">
//           <Image
//             src="/all-mvp.jpg"
//             alt="Winner"
//             height={350}
//             width={410}
//             className="rounded-md"
//           />
//         </div>
//         <div>
//           <h1 className="lg:text-[30px] tracking-tight text-[20px]">
//             Individual player awards
//           </h1>
//           <ul className="mt-4 space-y-4 ml-7">
//             <li className="flex items-start gap-3">
//               <img
//                 src="/checkmark.svg"
//                 alt="Checkmark"
//                 className="w-5 h-5 mt-1"
//               />
//               <div>
//                 <h2 className="font-bold">Best Player (MVP):</h2>
//                 <p className="text-[#6B6F76] lg:w-[280px] w-auto leading-tight">
//                   Awarded to the Most Valuable Player of the tournament.
//                 </p>
//               </div>
//             </li>
//             <li className="flex items-start gap-3">
//               <img
//                 src="/checkmark.svg"
//                 alt="Checkmark"
//                 className="w-5 h-5 mt-1"
//               />
//               <div>
//                 <h2 className="font-bold">Best Goalkeeper:</h2>
//                 <p className="text-[#6B6F76] lg:w-[280px] w-auto leading-tight">
//                   Awarded to the goalkeeper with the most outstanding
//                   performance.
//                 </p>
//               </div>
//             </li>
//             <li className="flex items-start gap-3">
//               <img
//                 src="/checkmark.svg"
//                 alt="Checkmark"
//                 className="w-5 h-5 mt-1"
//               />
//               <div>
//                 <h2 className="font-bold">Top Scorer:</h2>
//                 <p className="text-[#6B6F76] lg:w-[250px] w-auto leading-tight">
//                   Awarded to the player with the highest number of goals
//                 </p>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListOfPrizes;

// import Image from "next/image";
// import React from "react";

// const ListOfPrizes = () => {
//   const winners = [
//     {
//       category: "Best Goalkeeper",
//       name: "Oyebanji James",
//       team: "Bankers All Stars",
//       image: "/best-goalie.jpeg",
//       teamLogo: "/bankers-fc.png",
//       prize: "Golden Glove Trophy"
//     },
//     {
//       category: "Best Coach",
//       name: "Coach Song",
//       team: "Bankers All Stars",
//       image: "/coachie.jpeg",
//       teamLogo: "/bankers-fc.png",
//       prize: "Coach of the Tournament"
//     },
//     {
//       category: "Best Player (MVP)",
//       name: "Olajube Samuel",
//       team: "Bankers All Stars",
//       image: "/best2.jpeg",
//       teamLogo: "/bankers-fc.png",
//       prize: "MVP Trophy"
//     },
//     {
//       category: "Fair Play Award",
//       name: "Corporate Ballers FA",
//       image: "/corporate-ballers.png",
//       teamLogo: "/corporate-ballers.png",
//       prize: "Fair Play Trophy"
//     },
//     {
//       category: "Highest Goal Scorer",
//       name: "Atoyebi Sheriff",
//       team: "Maracana FC",
//       image: "/scorer.jpeg",
//       teamLogo: "/maracana.png",
//       prize: "Golden Boot"
//     }
//   ];

//   return (
//     <div className="py-12 px-4 lg:px-8 max-w-7xl mx-auto">
//       {/* Hero Section */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl lg:text-5xl font-bold text-[#C81E23] mb-4">
//           Unity Cup 1.0 Award Winners
//         </h1>
//         <p className="text-[#6B6F76] text-lg max-w-3xl mx-auto">
//           Celebrating the exceptional talents and sportsmanship displayed during
//           the tournament. These individuals and teams earned their honors through
//           outstanding performance and dedication.
//         </p>
//       </div>

//       {/* Winners Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//         {winners.map((winner, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//           >
//             <div className="relative h-48 w-full">
//               <Image
//                 src={winner.image}
//                 alt={winner.name}
//                 layout="fill"
//                 objectFit="cover"
//                 className="brightness-90"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 bg-white rounded-full p-1 mr-3">
//                     <Image
//                       src={winner.teamLogo}
//                       alt={winner.team || winner.name}
//                       width={40}
//                       height={40}
//                       className="rounded-full"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-white font-bold text-lg">{winner.name}</h3>
//                     {winner.team && (
//                       <p className="text-yellow-200 text-sm">{winner.team}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="p-6">
//               <div className="flex justify-between items-start mb-3">
//                 <span className="bg-[#C81E23] text-white text-xs font-bold px-3 py-1 rounded-full">
//                   {winner.category}
//                 </span>
//                 <span className="text-yellow-600 font-bold">🏆</span>
//               </div>
//               <p className="text-[#6B6F76] mb-4">
//                 Awarded for exceptional performance during Unity Cup 1.0
//               </p>
//               <div className="flex items-center">
//                 <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//                 <span className="font-semibold text-gray-900">{winner.prize}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Prize Breakdown Section */}
//       <div className="bg-[#FAFAFA] rounded-2xl p-8 lg:p-12 shadow-inner">
//         <h2 className="text-3xl font-bold text-center mb-12">Prize Breakdown</h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Champions Prize */}
//           <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-400">
//             <div className="flex items-center mb-4">
//               <div className="bg-yellow-100 p-3 rounded-full mr-4">
//                 <span className="text-yellow-600 text-2xl">🥇</span>
//               </div>
//               <h3 className="text-xl font-bold">Champions</h3>
//             </div>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <span className="text-yellow-500 mr-2">✓</span>
//                 <span>Gold Medals for all players</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-yellow-500 mr-2">✓</span>
//                 <span>Championship Trophy</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-yellow-500 mr-2">✓</span>
//                 <span>₦1,000,000 Cash Prize</span>
//               </li>
//             </ul>
//           </div>

//           {/* Runner-up Prize */}
//           <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-gray-300">
//             <div className="flex items-center mb-4">
//               <div className="bg-gray-100 p-3 rounded-full mr-4">
//                 <span className="text-gray-500 text-2xl">🥈</span>
//               </div>
//               <h3 className="text-xl font-bold">Runner-up</h3>
//             </div>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <span className="text-gray-500 mr-2">✓</span>
//                 <span>Silver Medals for all players</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-gray-500 mr-2">✓</span>
//                 <span>Runner-up Trophy</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-gray-500 mr-2">✓</span>
//                 <span>₦500,000 Cash Prize</span>
//               </li>
//             </ul>
//           </div>

//           {/* Individual Awards */}
//           <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-400">
//             <div className="flex items-center mb-4">
//               <div className="bg-red-100 p-3 rounded-full mr-4">
//                 <span className="text-red-500 text-2xl">⭐</span>
//               </div>
//               <h3 className="text-xl font-bold">Individual Awards</h3>
//             </div>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <span className="text-red-500 mr-2">✓</span>
//                 <span>MVP: ₦200,000 + Trophy</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-red-500 mr-2">✓</span>
//                 <span>Top Scorer: ₦120,000 + Golden Boot</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-red-500 mr-2">✓</span>
//                 <span>Best GK: ₦100,000 + Golden Glove</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-red-500 mr-2">✓</span>
//                 <span>Fair Play: ₦75,000 + Trophy</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Gallery Section */}
//       <div className="mt-16">
//         <h2 className="text-3xl font-bold text-center mb-8">Award Ceremony Highlights</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
//             <div key={item} className="aspect-square overflow-hidden rounded-lg">
//               <Image
//                 src={`/ceremony-${item}.jpg`}
//                 alt="Award ceremony"
//                 width={400}
//                 height={400}
//                 className="w-full h-full object-cover hover:scale-105 transition duration-300"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListOfPrizes;

import Image from "next/image";
import React from "react";

const ListOfPrizes = () => {
  const winners = [
    {
      category: "Best Goalkeeper",
      name: "Oyebanji James",
      team: "Bankers All Stars",
      image: "/best-goalie.jpeg",
      teamLogo: "/bankers-fc.png",
      prize: "Golden Glove",
    },
    {
      category: "Best Coach",
      name: "Coach Song",
      team: "Bankers All Stars",
      image: "/coachie.jpeg",
      teamLogo: "/bankers-fc.png",
      prize: "Coach of the Tournament",
    },
    {
      category: "Best Player (MVP)",
      name: "Olajube Samuel",
      team: "Bankers All Stars",
      image: "/best2.jpeg",
      teamLogo: "/bankers-fc.png",
      prize: "MVP",
    },

    {
      category: "Fair Play Award",
      name: "Fair Play Winner",
      team: "Corporate Ballers FA",
      image: "/fair-play.jpeg",
      teamLogo: "/corporate-ballers.png",
      prize: "Fair Play",
    },
    {
      category: "Highest Goal Scorer",
      name: "Atoyebi Sheriff",
      team: "Maracana FC",
      image: "/scorer.jpeg",
      teamLogo: "/maracana.png",
      prize: "Top Scorer",
    },
  ];

  const ceremonyHighlights = [
    {
      title: "The Glorious Trophy",
      description:
        "The Unity Cup trophy, a magnificent gold piece, was displayed prominently at the venue, catching the light and the attention of all attendees.",
      image: "/victhaw-trophy.jpeg",
    },
    {
      title: "The Esteemed Organizer",
      description:
        "Mr. Victor Adeniji, our dedicated organizer, proudly carried the trophy into the arena. With that moment, he kicked off an unforgettable award ceremony.",
      image: "/carried.jpeg",
    },
    {
      title: "Dignitaries in Attendance",
      description:
        "The Commissioner of Police and our dedicated organizer, Mr. Victor Adeniji, came together for commemorative photos before the big presentation.",
      image: "/the-two.jpeg",
    },
    {
      title: "Framed for Greatness",
      description:
        "The Nigeria Bar Association (NBA) Chairman, Ilorin Branch, shared a moment with the tournament's Most Valuable Player (MVP) captured in a memorable picture.",
      image: "/nba-chairman.jpeg",
    },
    {
      title: "Champions' Moment",
      description:
        "The winning team's captain lifted the trophy amidst cheers and confetti, creating the most iconic moment of Unity Cup 1.0.",
      image: "/captain.jpeg",
    },
    {
      title: "Individual Honors",
      description:
        "MVP Olajube Samuel received his award from the special guest of honor, demonstrating exceptional grace and sportsmanship.",
      image: "/best2.jpeg",
    },
    {
      title: "Golden Boot Presentation",
      description:
        "Top scorer, Atoyebi Sheriff, proudly displayed his medal to the cheering crowd. He made sure to acknowledge his teammates' support for his achievement.",
      image: "/scorer.jpeg",
    },
    {
      title: "Fair Play Award",
      description:
        "Fair Play Winner, proudly displayed his prize to the cheering crowd. He made sure to acknowledge his teammates' support for his achievement.",
      image: "/fair-play.jpeg",
    },
    {
      title: "Team Celebrations",
      description:
        "Bankers All Stars players celebrated wildly with their medals and trophies, creating an atmosphere of pure joy and accomplishment.",
      image: "/celebration.jpeg",
    },
    {
      title: "Closing Ceremony",
      description:
        "The event concluded with group photos of all sub-organizers, marking the successful end of Unity Cup 1.0 and building anticipation for version 2.0.",
      image: "/gather.jpeg",
    },
  ];

  return (
    <div className="py-12 px-4 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#C81E23] mb-4">
          Unity Cup 1.0 Award Winners
        </h1>
        <p className="text-[#6B6F76] lg:text-[16px] text-[14px] lg:w-[550px] w-auto mx-auto leading-tight">
          Celebrating the exceptional talents and sportsmanship displayed during
          the tournament. These individuals and teams earned their honors
          through outstanding performance and dedication.
        </p>
      </div>

      {/* Winners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {winners.map((winner, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
          >
            <div className="relative h-64 w-full">
              <Image
                src={winner.image}
                alt={winner.name}
                layout="fill"
                objectFit="cover"
                className="brightness-90"
                priority={index < 3} // Prioritize loading first few images
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white rounded-full p-1 mr-3">
                    <Image
                      src={winner.teamLogo}
                      alt={winner.team || winner.name}
                      width={40}
                      height={40}
                      className="rounded-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      {winner.name}
                    </h3>
                    {winner.team && (
                      <p className="text-yellow-200 text-sm">{winner.team}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-3">
                <span className="bg-[#C81E23] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {winner.category}
                </span>
                <span className="text-yellow-600 font-bold">🏆</span>
              </div>
              <p className="text-[#6B6F76] mb-4 lg:text-[16px] text-[14px] leading-tight">
                Awarded for exceptional performance during Unity Cup 1.0
              </p>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold text-gray-900">
                  {winner.prize}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prize Breakdown Section */}
      <div className="bg-[#FAFAFA] rounded-2xl p-8 lg:p-12 shadow-inner">
        <h2 className="text-3xl font-bold text-center mb-12">
          Prize Breakdown
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Champions Prize */}
          <div className="bg-white p-4 lg:p-6 rounded-xl shadow-md border-t-4 border-yellow-400">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <span className="text-yellow-600 text-2xl">🥇</span>
              </div>
              <h3 className="lg:text-[18px] text-[16px] font-bold">Champions</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Gold Medals for all players</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Championship Trophy</span>
              </li>
            </ul>
          </div>

          {/* Runner-up Prize */}
          <div className="bg-white p-4 lg:p-6 rounded-xl shadow-md border-t-4 border-gray-300">
            <div className="flex items-center mb-4">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <span className="text-gray-500 text-2xl">🥈</span>
              </div>
              <h3 className="lg:text-[18px] text-[16px] font-bold">Runner-up</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">✓</span>
                <span>Silver Medals for all players</span>
              </li>
            </ul>
          </div>

          {/* Individual Awards */}
          <div className="bg-white p-4 lg:p-6 rounded-xl shadow-md border-t-4 border-red-400">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <span className="text-red-500 text-2xl">⭐</span>
              </div>
              <h3 className="lg:text-[18px] text-[16px] font-bold">Individual Awards</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>MVP: Gold Medal</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Top Scorer: Gold Medal</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Best GK: Gold Medal</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✓</span>
                <span>Fair Play: Gold Medal</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Award Ceremony Highlights
        </h2>
        <p className="text-lg text-[#6B6F76] text-center lg:w-[610px] w-auto mx-auto mb-12 leading-tight">
          The Unity Cup 1.0 award ceremony was a night to remember, filled with
          excitement, pride, and the celebration of football excellence. Every
          moment captured the spirit of the tournament and set the stage for an
          even bigger and better Unity Cup 2.0.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ceremonyHighlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  layout="fill"
                  objectFit="cover"
                  className="brightness-90"
                />
              </div>
              <div className="lg:p-6 p-4">
                <h3 className="lg:text-xl text-[18px] font-bold text-[#C81E23] mb-2">
                  {highlight.title}
                </h3>
                <p className="text-[#6B6F76]">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#FFF5F5] lg:p-8 p-4 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-[#C81E23] mb-4">
            Anticipate Unity Cup 2.0!
          </h3>
          <p className="text-[16px] text-[#6B6F76] lg:w-[640px] w-auto mx-auto">
            After the tremendous success of Unity Cup 1.0, we're already working
            hard to make version 2.0 even more spectacular. Stay tuned for
            announcements about teams, venues, and an even bigger prize pool!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListOfPrizes;
