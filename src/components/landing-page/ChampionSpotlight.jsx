"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import { edition } from "@/data/unity-cup-2";

const ChampionSpotlight = () => {
  const { champion } = edition;

  return (
    <section className="my-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative order-1"
        >
          <div className="absolute -inset-2 border-2 border-[#C81E23]/30 rounded-lg" />
          <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[440px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={champion.image}
              alt={`${champion.teamName} — Unity Cup 2.0 champions`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-[#C81E23] text-white rounded-lg shadow-lg px-5 py-3 flex items-center gap-2">
            <FaTrophy className="text-lg" />
            <span className="font-bold text-sm uppercase tracking-wide">
              Champions
            </span>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-2 text-center lg:text-left"
        >
          <span className="inline-block text-[#C81E23] uppercase text-xs font-bold tracking-[0.25em] bg-red-50 px-3 py-1.5 rounded-full">
            Tournament Complete
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.15] tracking-tight mt-5">
            <span className="text-black">{champion.teamName} are your</span>
            <br />
            <span className="text-[#C81E23]">Unity Cup 2.0 Champions</span>
          </h2>

          <p className="text-[#6B6F76] mt-5 max-w-md mx-auto lg:mx-0 leading-relaxed">
            After {edition.numberOfTeams} teams, two group stages and a
            hard-fought final, {champion.teamName} were crowned champions of
            the {edition.fullTitle}. Relive every result, and meet the squad
            that went all the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <Link
              href="/tournament/results"
              className="inline-block px-7 py-3 rounded-full text-center font-semibold bg-[#C81E23] text-white hover:bg-white hover:text-[#C81E23] border-2 border-[#C81E23] transition-colors duration-300"
            >
              See Full Results
            </Link>
            <Link
              href={`/tournament/team/${champion.teamSlug}`}
              className="inline-block px-7 py-3 rounded-full text-center font-semibold border-2 border-[#C81E23] text-[#C81E23] hover:bg-[#C81E23] hover:text-white transition-colors duration-300"
            >
              Meet the Champions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChampionSpotlight;
