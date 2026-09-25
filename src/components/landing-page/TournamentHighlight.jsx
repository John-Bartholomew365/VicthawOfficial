"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const highlights = [
  {
    title: "Expanded 8-Team Format",
    body: "Eight teams competed across Groups A and B, with the top 2 from each group advancing to the semi-finals and a grand final.",
  },
  {
    title: "A Proven Platform for All Ages (25-50)",
    body: "Building on Unity Cup 1.0, this edition was even more competitive and inclusive — showcasing talent across generations.",
  },
  {
    title: "Professional Execution",
    body: "Certified referees, top-notch officials, and seamless coordination across every matchday, from kickoff to closing ceremony.",
  },
  {
    title: "Rewards That Motivated",
    body: "Trophies, medals, cash prizes, and individual accolades — including MVP, Best Goalkeeper, and Top Scorer — were awarded at the closing ceremony.",
  },
];

const TournamentHighlight = () => {
  return (
    <div className="my-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="lg:text-5xl text-3xl font-bold leading-tight text-center tracking-tight mb-10">
          A Tournament That Delivered <br /> On Every Promise
        </h1>
      </motion.div>

      <div className="lg:flex lg:flex-row flex-col items-center justify-center lg:ml-[70px] ml-0">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
        >
          <div className="relative w-full lg:h-[500px] h-[320px] max-w-[468px] rounded-md overflow-hidden">
            <Image
              src="/gallery/squad-photo.jpg"
              alt="A squad photo from Unity Cup 2.0"
              fill
              sizes="(max-width: 1024px) 100vw, 468px"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <h2 className="text-xl lg:text-2xl font-semibold leading-tight tracking-tight mb-6 lg:w-[440px] w-auto">
            Unity Cup 2.0 was bigger, bolder, and better than ever.
          </h2>
          <ul className="ml-5 space-y-4 mb-7 tracking-tight">
            {highlights.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 lg:w-[410px] w-auto"
              >
                <span className="text-red-600">●</span>
                <div className="flex flex-col">
                  <div>
                    <strong>{item.title}:</strong>
                  </div>
                  <div>
                    <p className="text-black">
                      <span className="text-[#6B6F76]">{item.body}</span>
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link className="ml-0 lg:ml-6" href="/tournament/results">
              <button className="bg-[#C81E23] flex justify-center items-center text-center py-[10px] px-[20px] text-white rounded-[6px] hover:bg-white hover:text-black hover:border-[#C81E23] hover:border transition-all lg:w-fit w-[80%] lg:mx-0 mx-auto">
                See Full Results
              </button>
            </Link>
            <Link href="/tournament/team">
              <button className="bg-white border border-[#C81E23] flex justify-center items-center text-center py-[10px] px-[20px] text-[#C81E23] rounded-[6px] hover:bg-[#C81E23] hover:text-white transition-all lg:w-fit w-[80%] lg:mx-0 mx-auto">
                Meet the Teams
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentHighlight;
