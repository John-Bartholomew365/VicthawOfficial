// "use client";
// import Image from "next/image";
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Hero = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return (
//     <div className="my-[140px]">
//       <div
//         className="lg:flex lg:flex-row flex-col items-center justify-center gap-[100px]"
//         data-aos="fade-up"
//       >
//         <div data-aos="fade-right">
//           <h1 className="lg:text-[50px] text-[30px] leading-tight tracking-tight">
//             Tournament Rules <br /> and Guidelines
//           </h1>
//           <p className="text-[#B0B3B8] lg:w-[380px] w-auto mt-4">
//             Clear and fair rules are in place to ensure a safe, competitive, and
//             well-organized tournament while promoting sportsmanship and
//             teamwork.
//           </p>
//         </div>
//         <div className="lg:mt-0 mt-10" data-aos="fade-left">
//           <Image
//             src="/team.jpg"
//             alt="logo"
//             height={520}
//             width={490}
//             className="rounded-md"
//           />
//         </div>
//       </div>
//       <div className="my-[50px]">
//         <div className="space-y-8 ">
//           <div className=" lg:p-6 p-4 shadow-md">
//             <h2 className="text-xl font-semibold text-white mb-4">
//               Team Composition & Match Rules
//             </h2>
//             <ul className="space-y-4 ml-4 lg:ml-10 lg:w-[600px] w-auto tracking-tight">
//               <li className="flex gap-3">
//                 ⚽
//                 <p className="text-[#B0B3B8]">
//                   Each team will have <b>11 players,</b> consisting of
//                   <b>10 outfield players</b> and <b>1 goalkeeper.</b>
//                 </p>
//               </li>
//               <li className="flex gap-3">
//                 🔄
//                 <p className="text-[#B0B3B8]">
//                   Teams are allowed a maximum of <b>9 substitutes,</b> with only{" "}
//                   <b>5</b> permitted to enter during play. An additional
//                   concussion substitution is allowed if needed after the 5th
//                   substitution.
//                 </p>
//               </li>
//               <li className="flex gap-3">
//                 ⏰
//                 <p className="text-[#B0B3B8]">
//                   All teams must arrive at the match venue at least{" "}
//                   <b>40 minutes</b> before kick-off.
//                 </p>
//               </li>
//               <li className="flex gap-3">
//                 🚶‍♂️
//                 <p className="text-[#B0B3B8]">
//                   A match will commence as long as a team has a minimum of{" "}
//                   <b>7 players</b> at kick-off. Late arrivals will not delay the
//                   game.
//                 </p>
//               </li>
//               <li className="flex gap-3">
//                 🚫
//                 <p className="text-[#B0B3B8]">
//                   If a team fails to present at least <b>7 players</b> within{" "}
//                   <b>15 minutes</b> after the scheduled kick-off, the opposing
//                   team will be awarded the match.
//                 </p>
//               </li>
//             </ul>
//           </div>

//           <div className="lg:p-6 p-4">
//             <h2 className="text-xl font-semibold text-white mb-4">
//               Match Duration & Tie Resolution
//             </h2>
//             <ul className="space-y-4 ml-4 lg:ml-10 lg:w-[600px] w-auto">
//               <li className="flex gap-3">
//                 ⏱️
//                 <p className="text-[#B0B3B8]">
//                   Each half will be <b>30 minutes</b> long, with <b>no</b>{" "}
//                   additional injury time.
//                 </p>
//               </li>
//               <li className="flex gap-3">
//                 🏆
//                 <p className="text-[#B0B3B8]">
//                   The tournament follows a <b>knockout format</b>. In the event
//                   of a draw, an extra <b>15 minutes</b> will be played.
//                 </p>
//               </li>
//               <li className="flex gap-3">
//                 🏆
//                 <p className="text-[#B0B3B8]">
//                   If the match remains tied after extra time, the winner will be
//                   determined through a <b>penalty shootout.</b>
//                 </p>
//               </li>
//             </ul>
//           </div>

//           <div className=" lg:p-6 p-4 ">
//             <h2 className="text-xl font-semibold text-white mb-4">
//               Player Registration & Safety
//             </h2>
//             <ul className="space-y-4 ml-4 lg:ml-10 lg:w-[600px] w-auto tracking-tight">
//               <li className="flex gap-3">
//                 📝
//                 <p className="text-[#B0B3B8]">
//                   Each team must register all <b>18 players</b> before the
//                   tournament. Unregistered players and officials will not be
//                   allowed to participate.
//                 </p>
//               </li>
//               <li className="flex gap-3">
//                 🚑
//                 <p className="text-[#B0B3B8]">
//                   The tournament organizers are not responsible for player
//                   injuries. Teams are required to bring their{" "}
//                   <b> medical personnel</b>, although first aid will be
//                   available.
//                 </p>
//               </li>
//               <li className="flex gap-3">
//                 ⚖️
//                 <p className="text-[#B0B3B8]">
//                   The referee’s decision is <b>final</b>. Any complaints must be
//                   addressed to the organizers respectfully.
//                 </p>
//               </li>
//             </ul>
//           </div>

//           <div className=" lg:p-6 p-4 ">
//             <h2 className="text-xl font-semibold text-white mb-4">
//               Player Requirements
//             </h2>
//             <ul className="space-y-4 ml-4 lg:ml-10 lg:w-[600px] w-auto tracking-tight">
//               <li className="flex gap-3">
//                 ⚽
//                 <p className="text-[#B0B3B8]">
//                   All players must wear the appropriate equipment, including
//                   <b>
//                     football boots, shin guards, team uniforms, and uniform
//                     socks.
//                   </b>
//                 </p>
//               </li>
//               <li className="flex gap-3">
//                 ✂️
//                 <p className="text-[#B0B3B8]">
//                   Before each match day, players are required to trim their
//                   fingernails short to ensure safety during play.
//                 </p>
//               </li>
//               <li className="flex gap-3">
//                 🚫
//                 <p className="text-[#B0B3B8]">
//                   Accessories such as bracelets, chains, beads, and any other
//                   jewellery are strictly prohibited on the field.
//                 </p>
//               </li>
//               <li className="flex gap-3">
//                 <span className="text-red-600">👕</span>
//                 <p className="text-[#B0B3B8]">
//                   Players must remain in full team uniform at all times
//                   throughout the tournament.
//                 </p>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="mt-[90px]">
//         <div>
//           <h1 className="lg:text-[40px] text-[30px] text-center leading-tight tracking-tight">
//             Ready to Compete? <br /> Play Fair, Play Smart!
//           </h1>
//           <p className="text-center lg:w-[460px] tracking-tight mt-3 m-auto w-auto text-[#B0B3B8]">
//             Whether you are aiming for victory or playing for the love of the
//             game, always remember that discipline, respect, and fair play are
//             just as important as scoring goals.
//           </p>
//         </div>
//       </div>

//       <div className="mt-[50px] text-center">
//         <a
//           href="/register"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-[#C81E23]  text-white px-8 py-3 rounded-md text-[18px] font-bold hover:bg-[#a8191d] transition duration-300"
//         >
//           Register now
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Hero;



"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="my-[140px]">
      <div
        className="lg:flex lg:flex-row flex-col items-center justify-center gap-[100px]"
        data-aos="fade-up"
      >
        <div data-aos="fade-right">
          <h1 className="lg:text-[50px] text-[30px] leading-tight tracking-tight">
            Tournament Rules <br /> and Guidelines
          </h1>
          <p className="text-[#B0B3B8] lg:w-[380px] w-auto mt-4">
            Clear and fair rules are in place to ensure a safe, competitive, and
            well-organized tournament while promoting sportsmanship and
            teamwork.
          </p>
        </div>
        <div className="lg:mt-0 mt-10" data-aos="fade-left">
          <Image
            src="/team.jpg"
            alt="logo"
            height={520}
            width={490}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="my-[50px]">
        <div className="space-y-8 ">
          <div className=" lg:p-6 p-4 shadow-md">
            <h2 className="text-xl font-semibold text-white mb-4">
              Team Composition & Match Rules
            </h2>
            <ul className="space-y-4 ml-4 lg:ml-10 lg:w-[600px] w-auto tracking-tight">
              <li className="flex gap-3">
                <span className="text-[#C81E23]">•</span>
                <p className="text-[#B0B3B8]">
                  Each team will have <b>11 players,</b> consisting of 
                  <b> 10 outfield players</b> and <b>1 goalkeeper.</b>
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C81E23]">•</span>
                <p className="text-[#B0B3B8]">
                  Teams are allowed a maximum of <b>9 substitutes,</b> with only{" "}
                  <b>5</b> permitted to enter during play. An additional
                  concussion substitution is allowed if needed after the 5th
                  substitution.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C81E23]">•</span>
                <p className="text-[#B0B3B8]">
                  All teams must arrive at the match venue at least{" "}<b>40 minutes</b> before kick-off.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C81E23]">•</span>
                <p className="text-[#B0B3B8]">
                  A match will commence as long as a team has a minimum of{" "}<b>7 players</b> at kick-off. Late arrivals will not delay the game.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C81E23]">•</span>
                <p className="text-[#B0B3B8]">
                  If a team fails to present at least <b>7 players</b> within{" "}<b>15 minutes</b> after the scheduled kick-off, the opposing team will be awarded the match.
                </p>
              </li>
            </ul>
          </div>

          <div className="lg:p-6 p-4">
            <h2 className="text-xl font-semibold text-white mb-4">
              Match Duration & Tie Resolution
            </h2>
            <ul className="space-y-4 ml-4 lg:ml-10 lg:w-[600px] w-auto">
              <li className="flex gap-3">
                <span className="text-[#C81E23]">•</span>
                <p className="text-[#B0B3B8]">
                  Each half will be <b>30 minutes</b> long, with <b>no</b> additional injury time.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C81E23]">•</span>
                <p className="text-[#B0B3B8]">
                  The tournament follows a <b>knockout format</b>. In the event of a draw, an extra <b>15 minutes</b> will be played.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C81E23]">•</span>
                <p className="text-[#B0B3B8]">
                  If the match remains tied after extra time, the winner will be determined through a <b>penalty shootout</b>.
                </p>
              </li>
            </ul>
          </div>

          <div className=" lg:p-6 p-4 ">
            <h2 className="text-xl font-semibold text-white mb-4">
              Player Registration & Safety
            </h2>
            <ul className="space-y-4 ml-4 lg:ml-10 lg:w-[600px] w-auto tracking-tight">
              <li className="flex gap-3">
                <span className="text-[#C81E23]">•</span>
                <p className="text-[#B0B3B8]">
                  Each team must register all <b>18 players</b> before the tournament. Unregistered players and officials will not be allowed to participate.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C81E23]">•</span>
                <p className="text-[#B0B3B8]">
                  The tournament organizers are not responsible for player injuries. Teams are required to bring their <b>medical personnel</b>, although first aid will be available.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C81E23]">•</span>
                <p className="text-[#B0B3B8]">
                  The referee’s decision is <b>final</b>. Any complaints must be addressed to the organizers respectfully.
                </p>
              </li>
            </ul>
          </div>

          <div className=" lg:p-6 p-4 ">
            <h2 className="text-xl font-semibold text-white mb-4">
              Player Requirements
            </h2>
            <ul className="space-y-4 ml-4 lg:ml-10 lg:w-[600px] w-auto tracking-tight">
              <li className="flex gap-3">
                <span className="text-[#C81E23]">•</span>
                <p className="text-[#B0B3B8]">
                  All players must wear the appropriate equipment, including <b>football boots, shin guards, team uniforms, and uniform socks</b>.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C81E23]">•</span>
                <p className="text-[#B0B3B8]">
                  Before each match day, players are required to trim their fingernails short to ensure safety during play.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C81E23]">•</span>
                <p className="text-[#B0B3B8]">
                  Accessories such as bracelets, chains, beads, and any other jewellery are strictly prohibited on the field.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C81E23]">•</span>
                <p className="text-[#B0B3B8]">
                  Players must remain in full team uniform at all times throughout the tournament.
                </p>
              </li>
            </ul>
          </div>

          <div className=" lg:p-6 p-4 ">
            <h2 className="text-xl font-semibold text-white mb-4">
              Disciplinary Rules
            </h2>
            <ul className="space-y-4 ml-4 lg:ml-10 lg:w-[600px] w-auto tracking-tight">
              <li className="flex gap-3">
                <span className="text-[#C81E23]">•</span>
                <p className="text-[#B0B3B8]">
                  <span className="text-white">Yellow Card:</span> A fine of <b>500 Naira</b> will be imposed for each yellow card.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500">•</span>
                <p className="text-[#B0B3B8] ">
                  <span className="text-white">Red Card:</span> A fine of <b>1000 Naira</b> will be imposed for each red card.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-[90px]">
        <div>
          <h1 className="lg:text-[40px] text-[30px] text-center leading-tight tracking-tight">
            Ready to Compete? <br /> Play Fair, Play Smart!
          </h1>
          <p className="text-center lg:w-[460px] tracking-tight mt-3 m-auto w-auto text-[#B0B3B8]">
            Whether you are aiming for victory or playing for the love of the game, always remember that discipline, respect, and fair play are just as important as scoring goals.
          </p>
        </div>
      </div>

      <div className="mt-[50px] text-center">
        <a
          href="/register"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#C81E23]  text-white px-8 py-3 rounded-md text-[18px] font-bold hover:bg-[#a8191d] transition duration-300"
        >
          Register now
        </a>
      </div>
    </div>
  );
};

export default Hero;