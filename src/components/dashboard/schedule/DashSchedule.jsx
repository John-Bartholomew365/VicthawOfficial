"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const DashSchedule = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-04-12T09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setIsLive(true);
        return;
      }

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format time to always show two digits
  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div className="my-[50px] lg:my-[100px] px-5 ">
      <div className="flex flex-col justify-center items-center lg:w-[950px] w-auto m-auto">
        <h1 className="text-[30px] lg:text-[45px] font-bold text-center">
          Tournament Schedule
        </h1>
        <p className="text-[#6B6F76] text-center mt-3 m-auto lg:w-[440px] w-auto">
          {/* The wait is over! The official full schedule for the Victhaw Official
          Unity Cup 1.0 has been released. Get all the details on match dates,
          times, and venues at [Insert Link Here]. Get ready for the action! */}
          The wait is over! The official full schedule for the Victhaw Official
          Unity Cup 1.0 is officially OUT! See all the match dates, times, and
          venue information below. Let the excitement begin!
        </p>

        {/* Countdown Section */}
        {/* {isLive ? (
          <p className="text-[#C81E23] mt-5 font-bold text-[24px]">
            THE TOURNAMENT SCHEDULE IS NOW AVAILABLE!
          </p>
        ) : (
          <div className="mt-10">
            <p className="text-[#C81E23] font-bold text-[20px] text-center">
              Countdown to Tournament:
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-4">
              <div className="bg-[#F5F5F5] text-black flex flex-col items-center text-[20px] px-6 py-3 rounded-md">
                {formatTime(days)}
                <span className="text-[#6B6F76] block">days</span>
              </div>
              <div className="bg-[#F5F5F5] text-black flex flex-col items-center text-[20px] px-6 py-3 rounded-md">
                {formatTime(hours)}
                <span className="text-[#6B6F76] block">hours</span>
              </div>
              <div className="bg-[#F5F5F5] text-black flex flex-col items-center text-[20px] px-6 py-3 rounded-md">
                {formatTime(minutes)}
                <span className="text-[#6B6F76] block">mins</span>
              </div>
              <div className="bg-[#F5F5F5] text-black flex flex-col items-center text-[20px] px-6 py-3 rounded-md">
                {formatTime(seconds)}
                <span className="text-[#6B6F76] block">secs</span>
              </div>
            </div>
          </div>
        )} */}

        {/* Email Subscription Section */}

        <Link href={"/tournament/schedule"} className="my-5">
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
    </div>
  );
};

export default DashSchedule;
