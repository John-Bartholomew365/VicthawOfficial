"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { edition } from "@/data/unity-cup-2";

const ResultsHero = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const trophyVariants = {
    hidden: { scale: 0, rotate: -30 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 260, damping: 20, delay: 0.3 },
    },
  };

  return (
    <div className="my-[100px]" data-aos="fade-up">
      <div className="lg:flex lg:flex-row flex-col items-center gap-[140px] my-[100px] lg:pl-[40px] pl-0">
        <div data-aos="fade-right" className="lg:text-left text-center relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={trophyVariants}
            className="absolute -top-16 -left-16 hidden lg:block"
          >
            <Image
              src="/trophy.svg"
              alt="Trophy"
              width={120}
              height={120}
              className="drop-shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8 p-4 bg-gradient-to-br from-[#C81E23] via-[#d12b30] lg:w-[450px] w-auto to-[#9b1a1d] rounded-xl shadow-2xl border-2 border-gold-500 relative overflow-hidden"
          >
            <h2 className="text-white text-[17px] lg:text-[20px] font-bold mb-4 tracking-wider">
              🏆 UNITY CUP 2.0 🏆
            </h2>
            <motion.div
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ type: "spring" }}
            >
              <p className="text-yellow-200 font-semibold">
                Champions crowned: {edition.champion.teamName}.
              </p>
              <p className="text-white/90 mt-2 text-[14px]">
                {edition.numberOfTeams} teams. One unforgettable final. See
                every result from the tournament below.
              </p>
            </motion.div>
          </motion.div>

          <motion.h1
            className="lg:text-[45px] text-[28px] font-bold mt-8 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Match Day Results
          </motion.h1>

          <motion.p
            className="lg:w-[400px] w-auto tracking-tight text-[#6B6F76] mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Relive every result from {edition.fullTitle} — full scores, key
            highlights, and team performances from group stage through to the
            final.
          </motion.p>
        </div>

        <motion.div
          className="lg:mt-0 mt-10 relative"
          data-aos="fade-left"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative w-[320px] h-[230px] lg:w-[420px] lg:h-[280px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={edition.champion.image}
              alt={`${edition.champion.teamName} — Unity Cup 2.0 champions`}
              fill
              sizes="(max-width: 1024px) 320px, 420px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4">
              <p className="text-white font-bold text-[15px] tracking-wide">
                {edition.champion.teamName} — Unity Cup 2.0 Champions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultsHero;
