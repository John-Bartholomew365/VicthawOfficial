"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { edition } from "@/data/unity-cup-2";

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay },
});

const HighlightVideo = () => {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    setStarted(true);
    const v = videoRef.current;
    if (v) v.play().catch(() => {});
  };

  return (
    <section className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">
      {/* Text */}
      <motion.div
        {...rise(0)}
        className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left"
      >
        <span className="inline-block text-[#C81E23] uppercase text-xs font-bold tracking-[0.25em] bg-red-50 px-3 py-1.5 rounded-full">
          Official Highlight
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-[1.1] tracking-tight mt-5">
          <span className="text-[#1a1a1a]">Unity Cup 2.0, </span>
          <span className="text-[#C81E23]">the full story</span>
        </h2>
        <p className="text-[#6B6F76] mt-5 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Relive the match action, the trophy lift, the closing ceremony and
          the moments that united {edition.numberOfTeams} teams and a whole
          community, all in the official {edition.fullTitle} highlight film.
        </p>

        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 max-w-md mx-auto lg:mx-0">
          {[
            { value: "3:08", label: "Full-length film" },
            { value: `${edition.numberOfTeams}`, label: "Teams" },
            { value: "1", label: "Unforgettable final" },
          ].map((s) => (
            <div
              key={s.label}
              className="border-l-4 border-[#C81E23] pl-3 sm:pl-4 text-left"
            >
              <p className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] leading-none">
                {s.value}
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#6B6F76] mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {!started && (
          <button
            onClick={play}
            className="mt-9 inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-semibold bg-[#C81E23] text-white border-2 border-[#C81E23] hover:bg-white hover:text-[#C81E23] transition-colors duration-300"
          >
            <FaPlay className="text-sm" />
            Watch the Highlight
          </button>
        )}
      </motion.div>

      {/* Player */}
      <motion.div
        {...rise(0.1)}
        className="lg:col-span-5 order-1 lg:order-2 relative w-full max-w-[320px] sm:max-w-[380px] mx-auto"
      >
        <div className="absolute top-4 left-4 w-full h-full bg-[#C81E23] rounded-2xl" />
        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-black">
          <video
            ref={videoRef}
            src="/video/unity-highlights.mp4"
            poster="/video/highlights-poster.jpg"
            preload="none"
            playsInline
            controls={started}
            onEnded={() => setStarted(false)}
            className="absolute inset-0 w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>

          {!started && (
            <button
              onClick={play}
              aria-label="Play the Unity Cup 2.0 highlight film"
              className="group absolute inset-0 flex items-center justify-center bg-black/25 hover:bg-black/35 transition-colors duration-300"
            >
              <span className="w-20 h-20 rounded-full bg-[#C81E23] text-white flex items-center justify-center shadow-xl ring-8 ring-white/30 group-hover:scale-110 transition-transform duration-300">
                <FaPlay className="text-2xl ml-1" />
              </span>
            </button>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default HighlightVideo;
