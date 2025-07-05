// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";

// const About = () => {
//   const prizes = [
//     {
//       title: "Champion team",
//       description: [
//         "Gold Medals for every player",
//         "A gleaming Champion’s Trophy to take home",
//         "Cash Prize that rewards your hard work and triumph!",
//       ],
//       image: "/winners.svg",
//     },
//     {
//       title: "Runners-up",
//       description: [
//         "Silver Medals to honor your achievement",
//         "Top-tier Sporting Equipment for your continued journey",
//         "Certificate of Excellence – A symbol of your grit and dedication.",
//       ],
//       image: "/second.svg",
//     },
//     {
//       title: "Individual awards",
//       description: [
//         "MVP (Best Player) – For the player who dominates the field",
//         "Best Goalkeeper – The ultimate shot-stopper",
//         "Top Scorer – The deadliest finisher of the tournament",
//       ],
//       image: "/mvp.svg",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % prizes.length);
//     }, 6500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col my-[100px] items-center gap-[4rem]">
//       <div className="flex flex-col items-center">
//         <h3 className="bg-[#FAFAFA] h-[30px] w-[73px] rounded-full flex items-center justify-center text-[14px] font-medium text-[#6B6F76]">
//           Prizes
//         </h3>
//         <h2 className="lg:text-[45px] text-[25px] font-normal text-center leading-tight tracking-tight mt-[40px]">
//           Rewards of Glory: <br /> What Champions Take Home!
//         </h2>
//       </div>

//       <div className="lg:flex lg:flex-row items-center sm:flex-col lg:space-x-6 space-x-2 p-6 sm:gap-4">
//         <div className="lg:w-1/2 rounded-lg w-full lg:hidden flex lg:m-0 m-auto lg:justify-end justify-center lg:mb-0 mb-6">
//           <div className="lg:w-[549px] w-full h-[400px] relative">
//             <Image
//               src={prizes[currentIndex].image}
//               alt={prizes[currentIndex].title}
//               layout="fill"
//               className="object-contain rounded-lg"
//             />
//           </div>
//         </div>
//         <div className="lg:flex lg:flex-col items-center space-y-2 hidden">
//           {prizes.map((_, index) => (
//             <div
//               key={index}
//               className={`relative w-2 bg-[#FAFAFA] rounded-full overflow-hidden ${
//                 index === currentIndex ? "h-24" : "h-12"
//               }`}
//             >
//               <div
//                 className={`absolute top-0 left-0 w-full bg-[#C81E23] transition-all ${
//                   index === currentIndex
//                     ? "animate-progress"
//                     : "h-[30%] bg-transparent"
//                 }`}
//               />
//             </div>
//           ))}
//         </div>

//         <div className="lg:w-1/2 flex flex-col gap-4 w-auto">
//           <h2 className="lg:text-[40px] text-[30px] font-normal lg:w-[350px] tracking-tight w-auto leading-tight">
//             {prizes[currentIndex].title}
//           </h2>
//           <ul className="text-[#6B6F76] text-[14px] font-normal lg:w-[350px] tracking-tight w-auto lg:mb-0 mb-5 space-y-3">
//             {prizes[currentIndex].description.map((desc, index) => (
//               <li key={index} className="flex items-center ml-4">
//                 <Image
//                   src="/checkmark.svg"
//                   alt="Checkmark"
//                   width={20}
//                   height={20}
//                   className="mr-2"
//                 />
//                 {desc}
//               </li>
//             ))}
//           </ul>
//           <Link className="mt-4 " href={"/tournament/prizes"}>
//             <button className="bg-[#C81E23] flex justify-center items-center lg:m-0 m-auto text-center py-[10px] px-[20px] text-white rounded-[6px] hover hover:bg-[#FFFFFF] hover:text-black hover:border-[#C81E23] hover:border">
//               Learn more
//             </button>
//           </Link>
//         </div>

//         <div className="lg:w-1/2 rounded-lg w-full lg:flex hidden lg:m-0 m-auto lg:justify-end justify-center lg:mt-0 mt-6">
//           <div className="lg:w-[549px] w-full h-[400px] relative">
//             <Image
//               src={prizes[currentIndex].image}
//               alt={prizes[currentIndex].title}
//               layout="fill"
//               className="object-contain rounded-lg"
//             />
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fillProgress {
//           from {
//             height: 0%;
//           }
//           to {
//             height: 100%;
//           }
//         }

//         .animate-progress {
//           animation: fillProgress 4.8s linear forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default About;






"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const About = () => {
  const prizes = [
    {
      title: "Champion team",
      description: [
        "Gold Medals awarded to every winning player",
        "The gleaming Champion's Trophy claimed by victors",
        "Cash Prize that rewarded their hard work and triumph!",
      ],
      image: "/thrill.jpeg",
    },
    {
      title: "Runners-up",
      description: [
        "Silver Medals honoring their achievement",
        "Top-tier Sporting Equipment for their continued journey",
        "Certificate of Excellence awarded for their grit and dedication",
      ],
      image: "/run2.jpeg",
    },
    {
      title: "Individual awards",
      description: [
        "MVP (Best Player) – Awarded to the tournament's dominant force",
        "Best Goalkeeper – Recognized as the ultimate shot-stopper",
        "Top Scorer – Crowned as the deadliest finisher of the competition",
      ],
      image: "/best2.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % prizes.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col my-[100px] items-center gap-[4rem]">
      <div className="flex flex-col items-center">
        <h3 className="bg-[#FAFAFA] h-[30px] w-[73px] rounded-full flex items-center justify-center text-[14px] font-medium text-[#6B6F76]">
          Prizes
        </h3>
        <h2 className="lg:text-[45px] text-[25px] font-normal text-center leading-tight tracking-tight mt-[40px]">
          Glory Achieved: <br /> What Our Champions Earned!
        </h2>
        <p className="text-[#6B6F76] text-center mt-4 max-w-[500px]">
          Unity Cup 1.0 winners claimed these prestigious prizes. Stay tuned for even greater rewards in future tournaments!
        </p>
      </div>

      <div className="lg:flex lg:flex-row items-center justify-center gap-16 lg:p-6 p-3 w-full max-w-7xl mx-auto">
        {/* Mobile Image (shown on small screens) */}
        <div className="lg:hidden w-full h-[300px] relative mb-6">
          <Image
            src={prizes[currentIndex].image}
            alt={prizes[currentIndex].title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Progress Indicators (desktop only) */}
        <div className="lg:flex flex-col items-center space-y-2 hidden">
          {prizes.map((_, index) => (
            <div
              key={index}
              className={`relative w-2 bg-[#FAFAFA] rounded-full overflow-hidden ${
                index === currentIndex ? "h-24" : "h-12"
              }`}
            >
              <div
                className={`absolute top-0 left-0 w-full bg-[#C81E23] transition-all ${
                  index === currentIndex
                    ? "animate-progress"
                    : "h-[30%] bg-transparent"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-4 lg:w-[40%] w-full">
          <h2 className="lg:text-[40px] text-[30px] font-normal tracking-tight leading-tight">
            {prizes[currentIndex].title}
          </h2>
          <ul className="text-[#6B6F76] text-[14px] font-normal tracking-tight space-y-3">
            {prizes[currentIndex].description.map((desc, index) => (
              <li key={index} className="flex items-center ml-4">
                <Image
                  src="/checkmark.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                {desc}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/tournament/prizes">
              <button className="bg-[#C81E23] flex justify-center items-center text-center py-[10px] px-[20px] text-white rounded-[6px] hover:bg-white hover:text-black hover:border-[#C81E23] hover:border transition-all lg:w-fit w-[85%] lg:mx-0 mx-auto">
                See all Winners
              </button>
            </Link>
          </div>
        </div>

        {/* Desktop Image (shown on large screens) */}
        <div className="hidden lg:flex w-[40%] h-[400px] relative">
          <Image
            src={prizes[currentIndex].image}
            alt={prizes[currentIndex].title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fillProgress {
          from {
            height: 0%;
          }
          to {
            height: 100%;
          }
        }

        .animate-progress {
          animation: fillProgress 4.8s linear forwards;
        }
      `}</style>
    </div>
  );
};

export default About;