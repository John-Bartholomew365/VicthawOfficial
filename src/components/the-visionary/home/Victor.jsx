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
    <section className="min-h-screen flex items-center pt-28 pb-16 lg:pt-10 px-4 lg:px-0">
      <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Photo */}
        <motion.div {...rise(0.1)} className="relative order-1 lg:order-2">
          <div className="absolute -inset-2 border-2 border-[#C81E23]/30 rounded-lg" />
          <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/gallery/organizer-trophy-raised.jpg"
              alt="Victhaw Official raising the Unity Cup 2.0 trophy"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
              quality={85}
            />
          </div>
          <div className="absolute -bottom-4 left-4 sm:left-auto sm:-right-4 bg-[#C81E23] text-white rounded-lg shadow-lg px-5 py-3">
            <span className="font-bold text-sm uppercase tracking-wide">
              Organizer · Unity Cup 2.0
            </span>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          {...rise(0)}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <span className="inline-block text-[#C81E23] uppercase text-xs font-bold tracking-[0.25em] bg-red-50 px-3 py-1.5 rounded-full">
            Certified Fitness Coach
          </span>

          <p className="text-lg sm:text-xl text-gray-600 mt-6">
            Hi, I&apos;m
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight mt-1">
            <span className="block text-[#1a1a1a]">Victor Gbolabo</span>
            <span className="block text-[#C81E23]">ADENIJI</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mt-6 max-w-xl mx-auto lg:mx-0">
            Certified fitness coach with{" "}
            <span className="font-bold text-[#C81E23]">7+ years</span> of
            experience in strength training, weight loss and sports
            performance coaching, and the organizer behind the Victhaw Official
            Unity Cup.
          </p>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 max-w-xl mx-auto lg:mx-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-t-2 border-[#C81E23] pt-3 text-left"
              >
                <p className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] leading-none">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-medium text-gray-600 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
            <Link
              href="/visionary/contact"
              className="group inline-flex items-center justify-center gap-3 px-7 py-3 rounded-full font-semibold bg-[#C81E23] text-white border-2 border-[#C81E23] hover:bg-white hover:text-[#C81E23] transition-colors duration-300"
            >
              Contact Me
              <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/visionary/services"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold border-2 border-[#C81E23] text-[#C81E23] hover:bg-[#C81E23] hover:text-white transition-colors duration-300"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Victor;
