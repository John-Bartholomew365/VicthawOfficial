"use client";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyEmail = () => {
  const [seconds, setSeconds] = useState(59);
  const [timerActive, setTimerActive] = useState(true);
  const [code, setCode] = useState("");
  const correctCode = "123456"; // Example correct code (replace with actual validation logic)

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
    toast.success("Verification code resent successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleConfirm = () => {
    if (!code) {
      toast.warn("Please enter the verification code!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (code === correctCode) {
      toast.success("Code verified successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Invalid code. Please try again!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="pt-24 flex flex-col tracking-tight items-center">
      <ToastContainer />
      <div className="pt-6 text-left w-full max-w-lg mx-auto">
        <h2 className="font-bold text-[30px]">Verify email</h2>
        <p className="opacity-70 text-[14px] mt-2">
          Kindly verify your email to reset password
        </p>
      </div>
      <div className="w-full max-w-lg mx-auto">
        <div className="mt-7">
          <h1 className="font-bold text-[16px]">Enter code</h1>
          <input
            type="number"
            id="code"
            name="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="e.g 123456"
            className="mt-5 p-2 text-[14px] bg-black/40 w-full border-[0.5px] border-black/10 rounded-md text-white"
          />
        </div>

        <div className="my-8">
          <button onClick={handleConfirm} className="bg-[#C81E23] rounded-md p-2 text-white w-full">
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
