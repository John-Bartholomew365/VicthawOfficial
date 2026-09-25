"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight, FaTrophy } from "react-icons/fa";
import { gallery, edition } from "@/data/unity-cup-2";

const CATEGORIES = ["All", "Matchday", "Teams", "Ceremony"];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const items = useMemo(
    () =>
      active === "All" ? gallery : gallery.filter((g) => g.category === active),
    [active]
  );

  const openLightbox = (key) => {
    const idx = items.findIndex((g) => g.key === key);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const step = (dir) => {
    setLightboxIndex((prev) => {
      if (prev === null) return prev;
      const next = (prev + dir + items.length) % items.length;
      return next;
    });
  };

  const current = lightboxIndex !== null ? items[lightboxIndex] : null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-2 text-[#C81E23] mb-3">
          <FaTrophy />
          <span className="uppercase text-xs font-bold tracking-[0.2em]">
            {edition.fullTitle}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight">
          Tournament Gallery
        </h1>
        <p className="text-[#6B6F76] max-w-xl mx-auto mt-4">
          Match action, closing ceremony and team moments from Unity Cup 2.0 —
          a season that brought {edition.numberOfTeams} teams and one
          community together.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
              active === cat
                ? "bg-[#C81E23] text-white border-[#C81E23]"
                : "bg-white text-gray-700 border-gray-200 hover:border-[#C81E23] hover:text-[#C81E23]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        <AnimatePresence>
          {items.map((item, i) => (
            <motion.button
              key={item.key}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: (i % 9) * 0.05 }}
              onClick={() => openLightbox(item.key)}
              className="group relative block w-full break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 text-left"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-[13px] leading-snug">
                  {item.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-5 right-5 text-white/80 hover:text-white text-2xl"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <button
              className="absolute left-3 sm:left-8 text-white/70 hover:text-white text-3xl p-2"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>

            <motion.div
              key={current.key}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={current.image}
                  alt={current.caption}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-white/90 text-center mt-4 text-sm">
                {current.caption}
              </p>
            </motion.div>

            <button
              className="absolute right-3 sm:right-8 text-white/70 hover:text-white text-3xl p-2"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
