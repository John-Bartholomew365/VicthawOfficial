"use client";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState("");

  const handleEmailVerification = () => {
    if (email) {
      setIsEmailSent(true);
      setError("");
      setTimeout(() => setIsEmailSent(false), 3000);
    } else {
      setError("Please enter your email.");
    }
  };

  return (
    <div className="pt-24 flex flex-col items-center">
      <div className="pt-6 text-left w-full max-w-lg mx-auto">
        {isEmailSent && (
          <div className="bg-green-500 text-white p-3 rounded-md mb-4 text-center">
            <h1 className="font-bold text-[16px]">Email Sent Successfully!</h1>{" "}
            <p>Please check your email to reset your password.</p>
          </div>
        )}
        <div>
          <h2 className="font-bold text-[30px]">Forgot password</h2>
          <p className="opacity-70 text-[14px] mt-2">
            Kindly enter your email to reset your password
          </p>
        </div>
      </div>
      <div className="w-full max-w-lg mx-auto">
        <div className="mt-7">
          <h1 className="font-bold text-[16px]">Email</h1>
          <label htmlFor="email"></label>
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
        {error && <p className="text-red-500 font-bold text-[16px] mt-2">{error}</p>}
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
