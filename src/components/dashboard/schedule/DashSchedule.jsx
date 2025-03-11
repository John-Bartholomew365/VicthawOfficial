"use client";
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
      <div className="flex flex-col justify-center items-center lg:w-[1000px] w-auto m-auto">
        <h1 className="text-[30px] lg:text-[45px] font-bold text-center">
          Tournament Schedule
        </h1>
        <p className="text-[#B0B3B8] text-center mt-3 m-auto lg:w-[560px] w-auto">
          The official schedule for the Victhaw Official Unity Cup 1.0 is coming
          soon! Stay tuned for match dates, times, and venue. We can't wait to
          share the excitement with you.
        </p>

        {/* Countdown Section */}
        {isLive ? (
          <p className="text-[#C81E23] mt-5 font-bold text-[24px]">
            THE TOURNAMENT SCHEDULE IS NOW AVAILABLE!
          </p>
        ) : (
          <div className="mt-10">
            <p className="text-[#C81E23] font-bold text-[20px] text-center">
              Countdown to Tournament:
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-4">
              <div className="bg-[#0F0F0F] text-white flex flex-col items-center text-[20px] px-6 py-3 rounded-md">
                {formatTime(days)}
                <span className="text-[#B0B3B8] block">days</span>
              </div>
              <div className="bg-[#0F0F0F] text-white flex flex-col items-center text-[20px] px-6 py-3 rounded-md">
                {formatTime(hours)}
                <span className="text-[#B0B3B8] block">hours</span>
              </div>
              <div className="bg-[#0F0F0F] text-white flex flex-col items-center text-[20px] px-6 py-3 rounded-md">
                {formatTime(minutes)}
                <span className="text-[#B0B3B8] block">mins</span>
              </div>
              <div className="bg-[#0F0F0F] text-white flex flex-col items-center text-[20px] px-6 py-3 rounded-md">
                {formatTime(seconds)}
                <span className="text-[#B0B3B8] block">secs</span>
              </div>
            </div>
          </div>
        )}

        {/* Email Subscription Section */}

        <h1 className="my-[25px] font-bold text-center">Get Notified</h1>
        <p className="text-[#B0B3B8] mb-4">
          You'll get notified upon the tournament schedule release!
        </p>
      </div>
    </div>
  );
};

export default DashSchedule;
