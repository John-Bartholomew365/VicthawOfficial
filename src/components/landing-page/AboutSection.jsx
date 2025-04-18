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
  const [isTournamentLive, setIsTournamentLive] = useState(false);

  useEffect(() => {
    const targetDate = new Date("April 12, 2025 09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        setIsTournamentLive(true);
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
        <p className="text-center text-lg text-[#6B6F76] mt-3">
          {isTournamentLive
            ? "The tournament is now live! Don't miss the action!"
            : "The countdown to the most thrilling football tournament has begun!"}
        </p>
      </div>

      {/* Countdown Timer or Live Message */}
      {isTournamentLive ? (
        <div className="flex flex-col items-center justify-center mt-8 gap-4">
          <div className="bg-green-600 text-white px-6 py-3 rounded-full lg:text-xl text-[16px] font-bold animate-pulse">
            🎉 TOURNAMENT IS LIVE! 🎉
          </div>
          {/* <Link href="/tournament/schedule">
            <button className="bg-[#C81E23] hover:bg-[#A5161E] transition-colors text-white font-bold py-3 px-6 rounded-lg shadow-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              WATCH LIVE MATCHES
            </button>
          </Link> */}
          <Link href="/tournament/schedule">
            <button className="bg-white border-2 border-[#C81E23] text-[#C81E23] hover:bg-gray-50 transition-colors font-medium py-2 px-5 rounded-lg flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              VIEW FULL SCHEDULE
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className="lg:flex hidden flex-wrap justify-center gap-3 lg:gap-5 mt-5 text-white text-lg lg:text-2xl">
            <div className="bg-[#C90A1D] px-4 py-2 rounded-md text-center w-[90px] lg:w-auto">
              {timeLeft.days} days
            </div>
            <div className="bg-[#C90A1D] px-4 py-2 rounded-md text-center w-[90px] lg:w-auto">
              {timeLeft.hours} hours
            </div>
            <div className="bg-[#C90A1D] px-4 py-2 rounded-md text-center w-[90px] lg:w-auto">
              {timeLeft.minutes} minutes
            </div>
            <div className="bg-[#C90A1D] px-4 py-2 rounded-md text-center w-[90px] lg:w-auto">
              {timeLeft.seconds} seconds
            </div>
          </div>
          <div className="lg:hidden flex flex-col justify-center items-center mt-5 text-white text-lg">
            <div className="flex gap-3">
              <div className="bg-[#C90A1D] px-4 py-2 rounded-md text-center w-[130px]">
                {timeLeft.days} days
              </div>
              <div className="bg-[#C90A1D] px-4 py-2 rounded-md text-center w-[130px]">
                {timeLeft.hours} hours
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <div className="bg-[#C90A1D] px-4 py-2 rounded-md text-center w-[130px]">
                {timeLeft.minutes} minutes
              </div>
              <div className="bg-[#C90A1D] px-4 py-2 rounded-md text-center w-[130px]">
                {timeLeft.seconds} seconds
              </div>
            </div>
          </div>
        </>
      )}

      {/* Rest of your component remains the same */}
      <div className="flex flex-wrap gap-2 justify-center mt-10 bg-[#FAFAFA] w-fit m-auto py-3 px-5 lg:px-8 rounded-[40px]">
        {["about", "vision"].map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer rounded-[20px] py-[10px] px-[20px] lg:px-[30px] ${
              activeTab === tab
                ? "bg-[#C90A1D] text-[#FFFFFF]"
                : "text-[#000000]"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-[50px] lg:gap-[100px] mt-[60px]">
        {activeTab === "about" ? (
          <div className="flex flex-col-reverse lg:flex-row gap-[50px] lg:gap-[100px] text-center lg:text-left">
            <Image
              src="/team.jpg"
              alt="About"
              height={370}
              width={464}
              className="rounded-md mx-auto"
              priority
            />
            <div>
              <h1 className="text-[25px] lg:text-[34px] tracking-tight">
                {isTournamentLive
                  ? "Experience the Action"
                  : "Countdown to Glory"}
              </h1>
              <p className="lg:w-[350px] w-full text-[#6B6F76] tracking-tight mt-2">
                {isTournamentLive
                  ? "The tournament is underway at Basin, Ilorin! Catch all the live matches and cheer for your favorite teams."
                  : "Mark your calendars! Join us at Basin, Ilorin, Kwara State on April 12, 2025 for the year's most electrifying tournament."}
              </p>
              <p className="text-[#6B6F76] tracking-tight mt-2 mb-7">
                {isTournamentLive
                  ? "Follow the intense competition as teams battle for the championship trophy."
                  : "Witness top teams compete for the championship title."}
              </p>
              {/* Should incase live matches are later introduced to the website, I can rechange the CTA button to fit in to what we want */}
              <Link
                href={
                  isTournamentLive ? "/tournament/schedule" : "/about/tournament"
                }
              >
                <button className="bg-[#C81E23] hover:bg-[#A5161E] transition-colors py-[10px] px-[20px] text-white rounded-[6px]">
                  {isTournamentLive ? "See full fixtures" : "Discover more"}
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
              <p className="lg:w-[400px] w-full text-[#6B6F76] tracking-tight mt-2">
                {isTournamentLive
                  ? "Witnessing our vision come to life as communities unite through football!"
                  : "To bring communities together, create memorable moments, and inspire the next generation of football stars."}
              </p>
              <ul
                className="ml-7 mt-3 mb-7 tracking-tight text-left"
                style={{ listStyleType: "disc" }}
              >
                <li className="text-[#C81E23]">
                  <span className="text-[#000000]">
                    {isTournamentLive
                      ? "Seeing unity and teamwork in action"
                      : "Encourage unity and teamwork among players"}
                  </span>
                </li>
                <li className="text-[#C81E23]">
                  <span className="text-[#000000]">
                    {isTournamentLive
                      ? "Celebrating competitive spirit and fair play"
                      : "Promote competitive spirit and fair play"}
                  </span>
                </li>
                <li className="text-[#C81E23]">
                  <span className="text-[#000000]">
                    {isTournamentLive
                      ? "Spotting future football talents emerging"
                      : "Provide a platform for discovering future football talents"}
                  </span>
                </li>
              </ul>
              <Link href="/about/vision">
                <button className="bg-[#C81E23] hover:bg-[#A5161E] transition-colors py-[10px] px-[20px] text-white rounded-[6px]">
                  {isTournamentLive ? "See Our Progress" : "Learn More"}
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
