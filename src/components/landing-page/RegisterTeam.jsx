"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const RegisterTeam = () => {
  return (
    <div className="my-[100px] lg:ml-[90px] ml-[10px] mr-[10px] lg:mr-[90px]">
      <div className="lg:flex lg:flex-row flex-col gap-[100px] items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full lg:w-[420px] h-[280px] rounded-md overflow-hidden"
        >
          <Image
            src="/gallery/guests-of-honour-1.jpg"
            alt="Unity Cup 2.0 closing ceremony"
            fill
            sizes="(max-width: 1024px) 100vw, 420px"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:text-start text-center"
        >
          <h1 className="lg:text-[40px] lg:w-[420px] w-auto leading-tight tracking-tight text-[30px] lg:mt-0 mt-5">
            That&apos;s a Wrap on Unity Cup 2.0!
          </h1>
          <p className="lg:w-[420px] w-auto text-[#6B6F76] mt-3 mb-8 leading-tight">
            Thank you to every team, player, sponsor and fan who made this
            edition one to remember. Browse the full photo gallery, relive the
            closing ceremony, and follow us for news on what&apos;s next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
            <Link href="/tournament/gallery">
              <button className="bg-[#C81E23] text-white py-2 px-6 text-lg rounded-md hover:bg-white hover:text-black hover:border-[#C81E23] hover:border transition-all">
                View Gallery
              </button>
            </Link>
            <Link href="/tournament/results">
              <button className="bg-white border border-[#C81E23] text-[#C81E23] py-2 px-6 text-lg rounded-md hover:bg-[#C81E23] hover:text-white transition-all">
                Full Results
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterTeam;
