"use client";
import React, { useState, useEffect } from "react";

const DashSchedule = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isLive, setIsLive] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Countdown to the schedule release date
  useEffect(() => {
    const targetDate = new Date("2024-12-01T00:00:00").getTime(); // Schedule release date

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setIsLive(true);
        return;
      }

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle email subscription
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMessage("Please enter your email before subscribing.");
      return;
    }
    setErrorMessage("");
    setSuccessMessage("Thank you for subscribing! We'll notify you when the schedule is released.");
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  // Format time to always show two digits
  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div className="my-[100px] px-5">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-[30px] lg:text-[45px] font-bold">Tournament Schedule</h1>
        <p className="text-[#B0B3B8] mt-3 lg:w-[600px] w-auto">
          The official schedule for the Victhaw Official Unity Cup 1.0 is coming soon! Stay tuned for match dates, times, and venue. We can't wait to share the excitement with you.
        </p>

        {/* Countdown Section */}
        {isLive ? (
          <p className="text-[#C81E23] mt-5 font-bold text-[24px]">THE TOURNAMENT SCHEDULE IS WILL BE AVAILABLE SOON!</p>
        ) : (
          <div className="mt-10">
            <p className="text-[#C81E23] font-bold text-[20px]">Countdown to Schedule Release:</p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-4">
              <div className="bg-[#0F0F0F] text-white text-[20px] px-6 py-3 rounded-md">
                {formatTime(days)}
                <span className="text-[#B0B3B8] ml-1 block">days</span>
              </div>
              <div className="bg-[#0F0F0F] text-white text-[20px] px-6 py-3 rounded-md">
                {formatTime(hours)}
                <span className="text-[#B0B3B8] ml-1 block">hours</span>
              </div>
              <div className="bg-[#0F0F0F] text-white text-[20px] px-6 py-3 rounded-md">
                {formatTime(minutes)}
                <span className="text-[#B0B3B8] ml-1 block">mins</span>
              </div>
              <div className="bg-[#0F0F0F] text-white text-[20px] px-6 py-3 rounded-md">
                {formatTime(seconds)}
                <span className="text-[#B0B3B8] ml-1 block">secs</span>
              </div>
            </div>
          </div>
        )}

        {/* Email Subscription Section */}
        {/* <form onSubmit={handleSubmit} className="mt-10 w-full max-w-md">
          <h1 className="my-[25px]">Get Notified</h1>
          <p className="text-[#B0B3B8] mb-4">
            Don't miss the schedule release! Enter your email below, and we'll notify you as soon as it's available.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#0F0F0F] text-white p-3 rounded-md w-full sm:w-auto border border-[#C81E23]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="bg-[#C81E23] text-white p-3 rounded-md font-bold">
              Notify Me
            </button>
          </div>
          {errorMessage && (
            <p className="mt-2 text-red-500">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="mt-4 bg-green-500 text-white p-3 rounded-md flex items-center justify-center">
              ✅ {successMessage}
            </p>
          )}
        </form> */}
      </div>
    </div>
  );
};

export default DashSchedule;