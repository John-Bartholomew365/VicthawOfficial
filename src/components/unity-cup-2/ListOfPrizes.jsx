"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { prizes, awards } from "@/data/unity-cup-2";

const ListOfPrizes = () => {
  return (
    <div className="my-[50px]">
      <div className="my-[50px]">
        <h1 className="lg:text-[40px] text-[30px] tracking-tight text-center">
          Tournament Prizes & Awards
        </h1>
        <p className="text-[#6B6F76] lg:w-[480px] w-auto text-center m-auto mt-4">
          Top-performing teams and standout players were rewarded with
          exciting prizes, recognizing their hard work, skill, and achievements
          throughout the competition.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-5xl mx-auto px-4">
        {prizes.map((prize) => (
          <div
            key={prize.key}
            className={`bg-[#FAFAFA] rounded-xl shadow-md p-6 border-t-4 ${prize.accent} hover:shadow-lg transition-shadow`}
          >
            <div
              className={`w-16 h-16 ${prize.iconBg} rounded-full flex items-center justify-center text-3xl mx-auto`}
            >
              <span>{prize.icon}</span>
            </div>
            <h2 className="text-[22px] font-bold text-center mt-4">
              {prize.title}
            </h2>
            <ul className="mt-5 space-y-3">
              {prize.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <img
                    src="/checkmark.svg"
                    alt="Checkmark"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-[#6B6F76] text-[14px]">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {awards.length > 0 && (
        <div className="max-w-6xl mx-auto mt-20 px-4">
          <h2 className="lg:text-[36px] text-[26px] font-bold text-center tracking-tight">
            Unity Cup 2.0 Award Winners
          </h2>
          <p className="text-[#6B6F76] text-center max-w-lg mx-auto mt-3">
            Honouring the standout players, coaches and teams who defined this
            season&apos;s tournament.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[280px] sm:h-[380px] lg:h-[460px] rounded-2xl overflow-hidden mt-10 shadow-lg"
          >
            <Image
              src="/prize-winners-group.jpg"
              alt="Unity Cup 2.0 award winners with the tournament director"
              fill
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 sm:p-8">
              <p className="text-white font-semibold text-[14px] sm:text-[16px]">
                Unity Cup 2.0 award winners, honoured at the closing ceremony
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-6 mt-10">
            {awards.map((award, i) => (
              <motion.div
                key={award.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
                  <Image
                    src={award.image}
                    alt={`${award.title} — ${award.player}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent h-1/2" />
                  <span className="absolute top-3 left-3 bg-[#C81E23] text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                    Winner
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-[13px] font-semibold text-[#C81E23] uppercase tracking-wide">
                    {award.title}
                  </p>
                  <p className="font-bold text-[16px] mt-1 leading-snug">
                    {award.player}
                  </p>
                  <p className="text-[#6B6F76] text-[13px] mt-0.5">
                    {award.team}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListOfPrizes;
