"use client";
import React, { useState, useEffect } from "react";

const VerifyEmail = () => {
  const [seconds, setSeconds] = useState(59);
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    if (timerActive && seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }

    if (seconds === 0) {
      setTimerActive(false);
    }
  }, [seconds, timerActive]);

  const handleResend = () => {
    setSeconds(59);
    setTimerActive(true);
  };

  return (
    <div className="pt-24 flex flex-col items-center">
      <div className="pt-6 text-left w-full max-w-lg mx-auto">
        <div>
          <h2 className="font-bold text-[30px]">Verify email</h2>
          <p className="opacity-70 text-[14px] mt-2">
            Kindly verify your email to reset password
          </p>
        </div>
      </div>
      <div className="w-full max-w-lg mx-auto">
        <div className="mt-7">
          <h1 className="font-bold text-[16px]">Enter code</h1>
          <label htmlFor="code"></label>
          <input
            type="number"
            id="code"
            name="code"
            placeholder="e.g 123456"
            className="mt-1 p-2 text-[14px] w-full border-[0.5px] border-black/10 rounded-md text-black"
          />
        </div>

        <div className="my-8">
          <button className="bg-[#C81E23] rounded-md p-2 text-white w-full">
            Confirm
          </button>
        </div>
        <div className="mb-5 flex gap-3">
          Don't have receive a code?{" "}
          {timerActive ? (
            <span className="font-bold text-[#C81E23]">
              Resend in 00:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
          ) : (
            <button onClick={handleResend} className="font-bold text-white">
              Resend
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
