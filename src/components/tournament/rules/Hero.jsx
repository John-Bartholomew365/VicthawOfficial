"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="my-[140px]">
      <div
        className="lg:flex lg:flex-row flex-col items-center justify-center gap-[100px]"
        data-aos="fade-up"
      >
        <div data-aos="fade-right">
          <h1 className="lg:text-[50px] text-[30px] leading-tight tracking-tight">
            Tournament rules <br /> and regulations
          </h1>
          <p className="text-[#B0B3B8] lg:w-[380px] w-auto mt-4">
            These guidelines ensure fair play, safety, and smooth conduct of
            matches while promoting sportsmanship and a successful tournament
          </p>
        </div>
        <div className="lg:mt-0 mt-10" data-aos="fade-left">
          <Image
            src="/team.jpg"
            alt="logo"
            height={520}
            width={490}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="my-[50px]">
        <div className="space-y-8 ">
          <div className=" lg:p-6 p-4 shadow-md">
            <h2 className="text-xl font-semibold text-white mb-4">
              Team Composition & Match Rules
            </h2>
            <ul className="space-y-4 ml-4 lg:ml-10 lg:w-[600px] w-auto tracking-tight">
              <li className="flex gap-3">
                ⚽
                <p className="text-[#B0B3B8]">
                  Each team will have <b>11 players,</b> including{" "}
                  <b>10 outfield players</b> and <b>1 goalkeeper.</b>
                </p>
              </li>
              <li className="flex gap-3">
                🔄
                <p className="text-[#B0B3B8]">
                  Teams can have <b>9 substitutes,</b> but only <b>5</b> can be
                  used during play. A concussion substitution is allowed after
                  the 5th substitution if needed.
                </p>
              </li>
              <li className="flex gap-3">
                ⏰
                <p className="text-[#B0B3B8]">
                  Teams must be present at the match venue <b>40 minutes</b>{" "}
                  before kick-off.
                </p>
              </li>
              <li className="flex gap-3">
                🚶‍♂️
                <p className="text-[#B0B3B8]">
                  A match will start if a team has at least <b>7 players</b> at
                  kick-off time. Late players won’t be waited for.
                </p>
              </li>
              <li className="flex gap-3">
                🚫
                <p className="text-[#B0B3B8]">
                  If a team cannot produce at least 7 players within 15 minutes
                  after kick-off, the match will be awarded to the opposition.
                </p>
              </li>
            </ul>
          </div>

          <div className="lg:p-6 p-4">
            <h2 className="text-xl font-semibold text-white mb-4">
              Match Duration & Tie Resolution
            </h2>
            <ul className="space-y-4 ml-4 lg:ml-10 lg:w-[600px] w-auto">
              <li className="flex gap-3">
                ⏱️
                <p className="text-[#B0B3B8]">
                  Each half will last <b>30 minutes</b>. No injury time will be
                  added.
                </p>
              </li>
              <li className="flex gap-3">
                🏆
                <p className="text-[#B0B3B8]">
                  Matches are knockout style. In case of a draw, there will be
                  <b> 15 minutes</b> of extra time. If still tied,{" "}
                  <b>a penalty shootout</b>
                  will decide the winner.
                </p>
              </li>
            </ul>
          </div>

          <div className=" lg:p-6 p-4 ">
            <h2 className="text-xl font-semibold text-white mb-4">
              Player Registration & Safety
            </h2>
            <ul className="space-y-4 ml-4 lg:ml-10 lg:w-[600px] w-auto tracking-tight">
              <li className="flex gap-3">
                📝
                <p className="text-[#B0B3B8]">
                  All <b>18 players must be registered</b>. Unregistered players
                  and officials will not be allowed.
                </p>
              </li>
              <li className="flex gap-3">
                🚑
                <p className="text-[#B0B3B8]">
                  Organizers won’t be responsible for injuries. Teams must bring
                  their medical personnel, though first aid will be provided.
                </p>
              </li>
              <li className="flex gap-3">
                ⚖️
                <p className="text-[#B0B3B8]">
                  The referee’s decision is <b>final</b>. Complaints must be
                  directed to the organizers respectfully.
                </p>
              </li>
            </ul>
          </div>

          <div className=" lg:p-6 p-4 ">
            <h2 className="text-xl font-semibold text-white mb-4">
              Player Requirements
            </h2>
            <ul className="space-y-4 ml-4 lg:ml-10 lg:w-[600px] w-auto tracking-tight">
              <li className="flex gap-3">
                ⚽
                <p className="text-[#B0B3B8]">
                  Players must wear appropriate equipment such as{" "}
                  <b>footwear, shin guards, uniform, and uniform socks.</b>
                </p>
              </li>
              <li className="flex gap-3">
                ✂️
                <p className="text-[#B0B3B8]">
                  All <b>fingernails</b> must be cut short before each match
                  day.
                </p>
              </li>
              <li className="flex gap-3">
                🚫
                <p className="text-[#B0B3B8]">
                  No <b>accessories</b> such as bracelets, chains, or beads are
                  allowed.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600">👕</span>
                <p className="text-[#B0B3B8]">
                  Players must be in <b>uniform</b> at all times.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-[90px]">
        <div>
          <h1 className="lg:text-[40px] text-[30px] text-center leading-tight tracking-tight">
            Ready to Compete? <br /> Play Fair, Play Smart!
          </h1>
          <p className="text-center lg:w-[380px] tracking-tight mt-3 m-auto w-auto text-[#B0B3B8]">
            Whether you’re here to win or simply enjoy the game, remember that
            discipline and fair play are just as important as scoring goals.{" "}
            <br /> Let’s make this tournament one to remember!
          </p>
        </div>
      </div>

      <div className="mt-[50px] text-center">
        <a
          href="/register"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#C81E23]  text-white px-8 py-3 rounded-md text-[18px] font-bold hover:bg-[#a8191d] transition duration-300"
        >
          Register now
        </a>
      </div>
    </div>
  );
};

export default Hero;