// "use client";
// import Image from "next/image";
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const ResultsHero = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800, // Animation duration
//       easing: "ease-in-out", // Easing function
//       once: true, // Trigger animations only once
//     });
//   }, []);

//   return (
//     <div className="my-[100px]" data-aos="fade-up">
//       <div className="lg:flex lg:flex-row flex-col items-center gap-[140px] my-[100px] lg:pl-[70px] pl-0">
//         <div data-aos="fade-right">
//           <h1 className="lg:text-[45px] text-[30px]">Match Day Results</h1>
//           <p className="lg:w-[400px] w-auto tracking-tight text-[#6B6F76] mt-3">
//             Keep up with all the thrilling moments from the Victhaw Official
//             Unity Cup 1.0! Here, you’ll find the latest match results, key
//             highlights, and team performances. Stay tuned for more exciting
//             games as the tournament unfolds!
//           </p>
//         </div>
//         <div className="lg:mt-0 mt-10" data-aos="fade-left">
//           <Image
//             src="/victhaw-logo.svg"
//             alt="logo"
//             height={230}
//             width={420}
//             className="rounded-md"
//           />
//         </div>
//       </div>

//       {/* <div>
//         <h1 className="text-center text-[20px] mt-7 text-[#C81E23]">
//           Stay tuned in. More details coming soon!
//         </h1>
//       </div> */}
//     </div>
//   );
// };

// export default ResultsHero;






"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const ResultsHero = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  // Animation variants
  const trophyVariants = {
    hidden: { scale: 0, rotate: -30 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.3
      }
    }
  };

  const floatVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="my-[100px]" data-aos="fade-up">
      <div className="lg:flex lg:flex-row flex-col items-center gap-[140px] my-[100px] lg:pl-[40px] pl-0">
        <div data-aos="fade-right" className="lg:text-left text-center relative">
          {/* Animated Floating Trophy Badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={trophyVariants}
            className="absolute -top-16 -left-16 hidden lg:block"
          >
            <motion.div variants={floatVariants} animate="float">
              <Image
                src="/gold-trophy.png" // Use a shiny trophy asset
                alt="Trophy"
                width={120}
                height={120}
                className="drop-shadow-lg"
              />
            </motion.div>
          </motion.div>

          {/* Winner Announcement - Enhanced with confetti effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8 p-4 bg-gradient-to-br from-[#C81E23] via-[#d12b30] lg:w-[450px] w-auto to-[#9b1a1d] rounded-xl shadow-2xl border-2 border-gold-500 relative overflow-hidden"
          >
            {/* Subtle shimmer effect */}
            <div className="absolute inset-0 bg-[url('/sparkle-pattern.png')] opacity-10 mix-blend-overlay"></div>
            
            <h2 className="text-white text-[20px] font-bold mb-4 tracking-wider">
              🏆 UNITY CUP 1.0 CHAMPIONS 🏆
            </h2>
            
            <motion.div 
              className="flex items-center justify-center lg:justify-start"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ type: "spring" }}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-1 rounded-full mr-4 ring-4 ring-yellow-400"
              >
                <Image
                  src="/bankers-fc.png"
                  alt="Bankers All Stars logo"
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-yellow-400"
                />
              </motion.div>
              <div>
                <motion.h1 
                  className="text-white text-[24px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  BANKERS ALL STARS
                </motion.h1>
                <p className="text-yellow-200 mt-1 font-medium">
                  Champions • Undisputed • Legendary
                </p>
              </div>
            </motion.div>
            
            {/* Subtle floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-yellow-400 rounded-full"
                  style={{
                    width: Math.random() * 6 + 2 + 'px',
                    height: Math.random() * 6 + 2 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.8, 0],
                    transition: {
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }
                  }}
                />
              ))}
            </div>
          </motion.div>

          <motion.h1 
            className="lg:text-[45px] text-[30px] font-bold mt-8 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Relive The Tournament Glory
          </motion.h1>
          
          <motion.p 
            className="lg:w-[400px] w-auto tracking-tight text-[#6B6F76] mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Every goal, every save, every epic moment from Unity Cup 1.0. 
            Explore complete results, match highlights, and player statistics.
          </motion.p>
        </div>
        
        <motion.div 
          className="lg:mt-0 mt-10"
          data-aos="fade-left"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/victhaw-logo.svg"
            alt="Victhaw logo"
            height={230}
            width={420}
            className="rounded-md drop-shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ResultsHero;