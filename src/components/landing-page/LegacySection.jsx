"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { unityCup1Tagline } from "@/data/unity-cup-2";

const LegacySection = () => {
  return (
    <section className="my-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -inset-2 border-2 border-[#C81E23]/30 rounded-lg" />
          <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[420px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/thrill.jpeg"
              alt="Unity Cup 1.0 champions celebrating"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 lg:order-2 text-center lg:text-left"
        >
          <span className="inline-block text-[#C81E23] uppercase text-xs font-bold tracking-[0.25em] bg-red-50 px-3 py-1.5 rounded-full">
            Where It All Began
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.15] tracking-tight mt-5">
            <span className="text-black">Unity Cup</span>{" "}
            <span className="text-[#C81E23]">1.0</span>
          </h2>

          <p className="text-[#6B6F76] mt-3 max-w-md mx-auto lg:mx-0 leading-relaxed italic">
            &ldquo;{unityCup1Tagline}&rdquo;
          </p>

          <p className="text-[#6B6F76] mt-4 max-w-md mx-auto lg:mx-0 leading-relaxed">
            The inaugural Victhaw Official Unity Cup ran from April 12th to
            June 29th, 2025 at Basin, Ilorin, Kwara State. Bankers All Stars
            FC were crowned the very first champions, beating NBA FC 1-0 in a
            final that set the tone for everything Unity Cup has become.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <Link
              href="/archive/unity-cup-1.0"
              className="inline-block px-7 py-3 rounded-full text-center font-semibold bg-[#C81E23] text-white hover:bg-white hover:text-[#C81E23] border-2 border-[#C81E23] transition-colors duration-300"
            >
              Explore Unity Cup 1.0
            </Link>
            <Link
              href="/archive/unity-cup-1.0/results"
              className="inline-block px-7 py-3 rounded-full text-center font-semibold border-2 border-[#C81E23] text-[#C81E23] hover:bg-[#C81E23] hover:text-white transition-colors duration-300"
            >
              See the First Results
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegacySection;
