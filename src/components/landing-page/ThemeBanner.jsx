"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { edition } from "@/data/unity-cup-2";

const facts = [
  {
    title: "40+ Legends Division",
    body: "A dedicated category for players 40 and above — the age group most at risk of high blood pressure.",
  },
  {
    title: edition.dates,
    body: `${edition.numberOfTeams} teams, ${edition.expectedAudience} expected fans, one venue: ${edition.venue}.`,
  },
  {
    title: "Beyond the Scoreline",
    body: "Light fitness & stretching sessions and a health-awareness campaign ran alongside every matchday.",
  },
];

const ThemeBanner = () => {
  return (
    <section className="my-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <span className="inline-block text-[#C81E23] uppercase text-xs font-bold tracking-[0.25em] bg-red-50 px-3 py-1.5 rounded-full">
            Our Theme
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight mt-5 leading-[1.15]">
            &ldquo;{edition.theme}&rdquo;
          </h2>

          <p className="text-[#6B6F76] mt-4 max-w-md mx-auto lg:mx-0 leading-relaxed">
            More than a football tournament — Unity Cup 2.0 used the game
            everyone loves to spark real conversations about hypertension,
            encourage regular physical activity, and bring a health-awareness
            campaign straight to the community.
          </p>

          <div className="mt-8 space-y-5 max-w-md mx-auto lg:mx-0">
            {facts.map((fact, i) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border-l-2 border-[#C81E23]/40 pl-4 text-left"
              >
                <h3 className="font-bold text-[16px] leading-snug">
                  {fact.title}
                </h3>
                <p className="text-[#6B6F76] text-[14px] mt-1 leading-relaxed">
                  {fact.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative order-1 lg:order-2"
        >
          <div className="absolute -inset-2 border-2 border-[#C81E23]/30 rounded-lg" />
          <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[440px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/gallery/coach-korede-presentation.jpg"
              alt="Victhaw Official presenting an award to Coach Korede"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThemeBanner;
