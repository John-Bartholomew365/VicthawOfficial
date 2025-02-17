"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="pt-24 flex flex-col items-center">
      <div className="pt-6 text-left w-full max-w-lg mx-auto">
        <div>
          <h2 className="font-bold text-[30px]">Reset Password</h2>
          <p className="opacity-70 text-[14px] mt-2">
            Kindly reset your password to protect your account
          </p>
        </div>
      </div>
      <div className="w-full max-w-lg mx-auto">
        <div className="mt-7 relative">
          <h1 className="font-bold text-[16px]">New password</h1>
          <label htmlFor="new-password"></label>
          <input
            type={showNewPassword ? "text" : "password"}
            id="new-password"
            name="new-password"
            placeholder="*************"
            autoComplete="off"
            className="mt-1 p-2 text-[14px] w-full border-[0.5px] border-black/10 rounded-md text-black"
          />
          <button
            type="button"
            onClick={toggleNewPasswordVisibility}
            className="absolute right-3 top-[70%] translate-y-[-50%] text-black opacity-70"
          >
            {showNewPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        </div>

        <div className="mt-7 relative">
          <h1 className="font-bold text-[16px]">Confirm password</h1>
          <label htmlFor="confirm-password"></label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirm-password"
            name="confirm-password"
            placeholder="*************"
            className="mt-1 p-2 text-[14px] w-full border-[0.5px] border-black/10 rounded-md text-black"
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute right-3 top-[70%] translate-y-[-50%] text-black opacity-70"
          >
            {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        </div>

        <div className="my-8">
          <button className="bg-[#C81E23] rounded-md p-2 text-white w-full">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
