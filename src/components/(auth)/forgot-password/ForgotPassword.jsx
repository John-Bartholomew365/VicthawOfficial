"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailVerification = () => {
    if (email) {
      toast.success("Email Sent Successfully! Check your inbox.", { position: "top-center" });
    } else {
      toast.error("Please enter your email.", { position: "top-center" });
    }
  };

  return (
    <div className="pt-24 tracking-tight flex flex-col items-center">
      <ToastContainer autoClose={3000} hideProgressBar />
      <div className="pt-6 text-left w-full max-w-lg mx-auto">
        <div>
          <h2 className="font-bold text-[30px] text-white">Forgot password</h2>
          <p className="text-[14px] mt-2 text-[#B0B3B8]">
            Kindly enter your email to reset your password
          </p>
        </div>
      </div>
      <div className="w-full max-w-lg mx-auto">
        <div className="mt-7">
          <h1 className="font-bold text-[16px] text-white">Email</h1>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g example@gmail.com"
            className="mt-1 p-2 text-[14px] w-full border-[0.5px] border-black/10 rounded-md text-black"
          />
        </div>
        <div className="my-8">
          <button
            onClick={handleEmailVerification}
            className="bg-[#C81E23] rounded-md p-2 text-white w-full"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
