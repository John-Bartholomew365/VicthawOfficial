"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay },
});

const pillars = [
  {
    title: "Victhaw Official Unity Cup",
    text: "Football as a force for unity, and a kick against high blood pressure.",
    href: "/tournament/about",
    cta: "Explore the Unity Cup",
  },
  {
    title: "Tradfit Rhythms",
    text: "High-energy aerobics meets African dance, celebrating our heritage through fitness.",
    href: "/tradfit/info",
    cta: "Explore Tradfit Rhythms",
  },
];

const WhyVicthaw = () => {
  return (
    <section className="py-16 lg:px-[50px] px-0">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div {...rise()} className="text-center mb-14 lg:mb-20">
          <span className="inline-block text-[#C81E23] uppercase text-xs font-bold tracking-[0.25em] bg-red-50 px-3 py-1.5 rounded-full">
            The Man Behind the Movement
          </span>
          <h2 className="lg:text-[42px] text-[28px] font-bold leading-tight tracking-tight mt-5">
            The Vision Behind the Victhaw <br className="lg:block hidden" />{" "}
            Official Unity Cup
          </h2>
          <p className="text-lg text-[#6B6F76] leading-snug max-w-xl mx-auto mt-4">
            Football is more than just a sport to me, it&apos;s a passion, a
            lifestyle, and a powerful force that unites people from all walks
            of life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Photo mosaic */}
          <motion.div
            {...rise(0.1)}
            className="lg:col-span-6 grid grid-cols-6 gap-3 sm:gap-4"
          >
            <div className="relative col-span-6 aspect-[3/2] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/organizer-trophy-raised.jpg"
                alt="Victhaw Official raising the Unity Cup 2.0 trophy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-3 aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/visionary/shadow-portrait.jpg"
                alt="Victhaw Official portrait in dramatic light"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-[50%_20%]"
              />
            </div>
            <div className="relative col-span-3 aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/visionary/neon-portrait.jpg"
                alt="Victhaw Official at JAM2FIT"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-[50%_20%]"
              />
            </div>
            <div className="relative col-span-6 aspect-[16/10] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gallery/organizer-with-trophy-smiling.jpg"
                alt="Victhaw Official smiling with the Unity Cup trophy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[50%_28%]"
              />
            </div>
          </motion.div>

          {/* Story */}
          <motion.div {...rise(0.2)} className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="border-l-4 border-[#C81E23] pl-5">
              <p className="text-xl sm:text-2xl font-bold leading-snug text-[#1a1a1a]">
                &ldquo;Sports have the power to change lives, unite communities
                and inspire greatness.&rdquo;
              </p>
              <p className="text-sm font-semibold text-[#C81E23] uppercase tracking-wide mt-3">
                Victor Gbolabo Adeniji · Victhaw Official
              </p>
            </div>

            <div className="space-y-5 mt-8 text-[#6B6F76] leading-relaxed">
              <p>
                Growing up, I witnessed firsthand how sports can transform
                lives and strengthen communities. It became clear to me that I
                wanted to create a platform where people could come together,
                compete, and celebrate their passion for the game.
              </p>
              <p>
                The Unity Cup is my way of giving back to the community that
                shaped me. It&apos;s more than just a tournament, it&apos;s a
                celebration of talent, teamwork, and the power of sports to
                inspire greatness, giving aspiring athletes a stage while
                promoting a healthy, active lifestyle, unity and inclusion.
              </p>
              <p>
                That same belief gave birth to Tradfit Rhythms, a cultural
                revival and wellness movement that rolls indigenous heritage,
                high-energy aerobics and rich African dance traditions into one
                experience. Different arenas, one mission: building stronger
                bodies, sharper minds and more connected communities.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {pillars.map((p) => (
                <Link
                  key={p.title}
                  href={p.href}
                  className="group block border-t-2 border-[#C81E23] bg-gray-50 rounded-b-lg p-5 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-[#1a1a1a]">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#6B6F76] mt-2 leading-snug">
                    {p.text}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#C81E23] mt-4">
                    {p.cta}
                    <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyVicthaw;
