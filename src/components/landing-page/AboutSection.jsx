"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("April 12, 2025 09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-[60px] lg:my-[120px] px-4">
      <div>
        <h1 className="text-center font-semibold text-[#C81E23] lg:text-[40px] text-[28px] tracking-tight">
          Victhaw Official Unity Cup 1.0
        </h1>
        <p className="text-center text-lg text-[#B0B3B8] mt-3">
          The countdown to the most thrilling football tournament has begun!
        </p>
      </div>

      {/* Countdown Timer */}
      <div className="lg:flex hidden flex-wrap justify-center gap-3 lg:gap-5 mt-5 text-white text-lg lg:text-2xl">
        <div className="bg-[#C81E23] px-4 py-2 rounded-md text-center w-[90px] lg:w-auto">
          {timeLeft.days} days
        </div>
        <div className="bg-[#C81E23] px-4 py-2 rounded-md text-center w-[90px] lg:w-auto">
          {timeLeft.hours} hours
        </div>
        <div className="bg-[#C81E23] px-4 py-2 rounded-md text-center w-[90px] lg:w-auto">
          {timeLeft.minutes} minutes
        </div>
        <div className="bg-[#C81E23] px-4 py-2 rounded-md text-center w-[90px] lg:w-auto">
          {timeLeft.seconds} seconds
        </div>
      </div>
      <div className="lg:hidden flex flex-col justify-center items-center mt-5 text-white text-lg">
        <div className="flex gap-3">
          <div className="bg-[#C81E23] px-4 py-2 rounded-md text-center w-[130px]">
            {timeLeft.days} days
          </div>
          <div className="bg-[#C81E23] px-4 py-2 rounded-md text-center w-[130px]">
            {timeLeft.hours} hours
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <div className="bg-[#C81E23] px-4 py-2 rounded-md text-center w-[130px]">
            {timeLeft.minutes} minutes
          </div>
          <div className="bg-[#C81E23] px-4 py-2 rounded-md text-center w-[130px]">
            {timeLeft.seconds} seconds
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 justify-center mt-10 bg-black/10 w-fit m-auto py-3 px-5 lg:px-8 rounded-[40px]">
        {["about", "vision"].map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer rounded-[20px] py-[10px] px-[20px] lg:px-[30px] ${
              activeTab === tab ? "bg-[#C81E23] text-white" : "text-white"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[50px] lg:gap-[100px] mt-[60px]">
        {activeTab === "about" ? (
          <div className="flex flex-col-reverse lg:flex-row gap-[50px] lg:gap-[100px] text-center lg:text-left">
            <Image
              src="/about.svg"
              alt="About"
              height={370}
              width={464}
              className="rounded-md mx-auto"
              priority
            />
            <div>
              <h1 className="text-[25px] lg:text-[34px] tracking-tight">
                Countdown to Glory
              </h1>
              <p className="lg:w-[350px] w-full text-[#B0B3B8] tracking-tight mt-2">
                The excitement builds up as we approach April 12, 2025! In just
                a few days, top teams will battle for glory. Are you ready for
                the most electrifying tournament of the year? The stage is set,
                and the countdown is on!
              </p>
              <p className="text-[#B0B3B8] tracking-tight mt-2 mb-7">
                Join us and be part of history in Basin, Ilorin, Kwara State!
              </p>
              <Link href="/about">
                <button className="bg-[#C81E23] py-[10px] px-[20px] text-white rounded-[6px]">
                  Discover more
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col-reverse lg:flex-row-reverse gap-[50px] lg:gap-[100px] text-center lg:text-left">
            <Image
              src="/mission.svg"
              alt="Mission"
              height={370}
              width={464}
              className="rounded-md mx-auto"
              priority
            />
            <div>
              <h1 className="text-[25px] lg:text-[34px] tracking-tight">
                Our Vision
              </h1>
              <p className="lg:w-[380px] w-full text-[#B0B3B8] tracking-tight mt-2">
                Our vision is to bring communities together, create memorable
                moments, and inspire the next generation of football stars. As
                the countdown to kick-off continues, we remain committed to
                ensuring an unforgettable experience for players and fans alike.
              </p>
              <ul
                className="ml-7 mt-3 mb-7 tracking-tight text-left"
                style={{ listStyleType: "disc" }}
              >
                <li className="text-[#C81E23]">
                  <span className="text-white">
                    Encourage unity and teamwork among players.
                  </span>
                </li>
                <li className="text-[#C81E23]">
                  <span className="text-white">
                    Promote competitive spirit and fair play.
                  </span>
                </li>
                <li className="text-[#C81E23]">
                  <span className="text-white">
                    Provide a platform for discovering future football talents.
                  </span>
                </li>
              </ul>
              <Link href="/about/vision">
                <button className="bg-[#C81E23] py-[10px] px-[20px] text-white rounded-[6px]">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
