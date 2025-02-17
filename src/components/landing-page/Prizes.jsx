"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const About = () => {
  const prizes = [
    {
      title: "Champion team",
      description: [
        "Gold Medals for every player",
        "A gleaming Champion’s Trophy to take home",
        "Cash Prize that rewards your hard work and triumph!",
      ],
      image: "/winners.svg",
    },
    {
      title: "Runners-up",
      description: [
        "Silver Medals to honor your achievement",
        "Top-tier Sporting Equipment for your continued journey",
        "Certificate of Excellence – A symbol of your grit and dedication.",
      ],
      image: "/second.svg",
    },
    {
      title: "Individual awards",
      description: [
        "MVP (Best Player) – For the player who dominates the field",
        "Best Goalkeeper – The ultimate shot-stopper",
        "Top Scorer – The deadliest finisher of the tournament",
      ],
      image: "/mvp.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % prizes.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col my-[100px] items-center gap-[4rem]">
      <div className="flex flex-col items-center">
        <h3 className="bg-[#000000] h-[30px] w-[73px] rounded-full flex items-center justify-center text-[14px] font-medium text-[#B0B3B8]">
          Prizes
        </h3>
        <h2 className="lg:text-[45px] text-[30px] font-normal text-center leading-tight tracking-tight mt-[40px]">
          Rewards of Glory: <br /> What Champions Take Home!
        </h2>
      </div>

      <div className="lg:flex lg:flex-row items-center sm:flex-col lg:space-x-6 space-x-2 p-6 sm:gap-4">
        <div className="lg:flex lg:flex-col items-center space-y-2 hidden">
          {prizes.map((_, index) => (
            <div
              key={index}
              className={`relative w-2 bg-black rounded-full overflow-hidden ${
                index === currentIndex ? "h-24" : "h-12"
              }`}
            >
              <div
                className={`absolute top-0 left-0 w-full bg-[#C81E23] transition-all ${
                  index === currentIndex
                    ? "animate-progress"
                    : "h-[30%] bg-transparent"
                }`}
              />
            </div>
          ))}
        </div>

        <div className="lg:w-1/2 flex flex-col gap-4 w-auto">
          <h2 className="lg:text-[40px] text-[30px] font-normal lg:w-[350px] tracking-tight w-auto leading-tight">
            {prizes[currentIndex].title}
          </h2>
          <ul className="text-[#B0B3B8] text-[14px] font-normal lg:w-[350px] tracking-tight w-auto lg:mb-0 mb-5 space-y-3">
            {prizes[currentIndex].description.map((desc, index) => (
              <li key={index} className="flex items-center">
                <Image
                  src="/checkmark.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                {desc}
              </li>
            ))}
          </ul>
          <Link className="mt-4 " href={"/tournament/prizes"}>
            <button className="bg-[#C81E23] flex justify-center items-center lg:m-0 m-auto text-center py-[10px] px-[20px] text-white rounded-[6px] hover hover:bg-[#0F0F0F] hover:text-white hover:border-[#C81E23] hover:border">
              Learn more
            </button>
          </Link>
        </div>

        <div className="lg:w-1/2 rounded-lg w-full flex lg:m-0 m-auto lg:justify-end justify-center lg:mt-0 mt-6">
          <div className="lg:w-[549px] w-full h-[400px] relative">
            <Image
              src={prizes[currentIndex].image}
              alt={prizes[currentIndex].title}
              layout="fill"
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fillProgress {
          from {
            height: 0%;
          }
          to {
            height: 100%;
          }
        }

        .animate-progress {
          animation: fillProgress 4.8s linear forwards;
        }
      `}</style>
    </div>
  );
};

export default About;
