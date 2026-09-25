"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { gallery } from "@/data/unity-cup-2";

const featured = gallery.filter((g) =>
  [
    "teams-greeting",
    "fifty-fifty-challenge",
    "guests-of-honour-1",
    "squad-photo",
    "box-scramble",
    "officials-walkout",
    "team-huddle",
    "tournament-mc",
  ].includes(g.key)
);

const GalleryTeaser = () => {
  return (
    <section className="my-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 px-1"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight">
            Moments from the Tournament
          </h2>
          <p className="text-[#6B6F76] mt-2 max-w-lg">
            Match action, the closing ceremony, and the teams that made Unity
            Cup 2.0 one to remember.
          </p>
        </div>
        <Link
          href="/tournament/gallery"
          className="shrink-0 inline-block px-6 py-2.5 rounded-full text-center font-semibold border-2 border-[#C81E23] text-[#C81E23] hover:bg-[#C81E23] hover:text-white transition-all duration-300"
        >
          View Full Gallery
        </Link>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {featured.map((item, i) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={`group relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ${
              i === 0 ? "col-span-2 row-span-2" : ""
            }`}
          >
            <Link href="/tournament/gallery" className="block relative w-full h-full">
              <div className={`relative w-full ${i === 0 ? "aspect-square sm:aspect-[4/3]" : "aspect-square"}`}>
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GalleryTeaser;
