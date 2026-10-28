"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "500+", label: "Clients Coached" },
  { value: "95%", label: "Success Rate" },
];

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const Victor = () => {
  return (
    <section className="min-h-screen flex items-center pt-28 pb-20 px-4 lg:px-0">
      <div className="w-full grid lg:grid-cols-12 gap-14 lg:gap-12 items-center">
        {/* Text */}
        <motion.div
          {...rise(0)}
          className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left"
        >
          <span className="inline-block whitespace-nowrap text-[#C81E23] uppercase text-[11px] sm:text-xs font-bold tracking-[0.18em] sm:tracking-[0.25em] bg-red-50 px-3 py-1.5 rounded-full">
            Certified Fitness Coach
          </span>

          <p className="text-lg sm:text-xl text-[#6B6F76] mt-7">Hi, I&apos;m</p>
          <h1 className="text-5xl sm:text-7xl xl:text-[96px] font-extrabold leading-[0.98] tracking-tight mt-1">
            <span className="block text-[#1a1a1a]">Victor Gbolabo</span>
            <span className="block text-[#C81E23]">ADENIJI</span>
          </h1>

          <p className="text-base sm:text-lg text-[#6B6F76] leading-relaxed mt-7 max-w-xl mx-auto lg:mx-0">
            Certified fitness coach with{" "}
            <span className="font-bold text-[#1a1a1a]">7+ years</span> of
            experience in strength training, weight loss and sports
            performance coaching, and the organizer behind the Victhaw
            Official Unity Cup and Tradfit Rhythms.
          </p>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-9 max-w-xl mx-auto lg:mx-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l-4 border-[#C81E23] pl-3 sm:pl-4 text-left"
              >
                <p className="text-3xl sm:text-5xl font-bold text-[#1a1a1a] leading-none">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-medium text-[#6B6F76] mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
            <Link
              href="/visionary/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-semibold bg-[#C81E23] text-white border-2 border-[#C81E23] hover:bg-white hover:text-[#C81E23] transition-colors duration-300"
            >
              Contact Me
              <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/visionary/services"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold border-2 border-[#C81E23] text-[#C81E23] hover:bg-[#C81E23] hover:text-white transition-colors duration-300"
            >
              View Services
            </Link>
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          {...rise(0.1)}
          className="lg:col-span-5 order-1 lg:order-2 relative w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none"
        >
          <div className="absolute top-5 left-5 w-full h-full bg-[#C81E23] rounded-2xl" />
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/visionary/victhaw-portrait.jpg"
              alt="Victor Gbolabo Adeniji, Victhaw Official"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover object-[50%_18%]"
              priority
              quality={85}
            />
          </div>
          <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white rounded-xl shadow-xl px-5 py-4 border-l-4 border-[#C81E23]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C81E23]">
              Victhaw Official
            </p>
            <p className="text-sm font-semibold text-[#1a1a1a] mt-1">
              Unity Cup &amp; Tradfit Rhythms
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Victor;
