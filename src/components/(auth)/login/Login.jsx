"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (email && password) {
      router.push("/dashboard");
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <div className="pt-24 flex flex-col items-center">
      <div className="pt-6 text-left w-full max-w-lg mx-auto">
        <div>
          <h2 className="font-bold text-[30px]">Welcome back! </h2>
          <p className="opacity-70 text-[14px] mt-2">
            Log in to manage your team and tournament details.
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
        <div className="mt-7 relative">
          <h1 className="font-bold text-[16px]">Password</h1>
          <label htmlFor="password"></label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*************"
            className="mt-1 p-2 text-[14px] w-full border-[0.5px] border-black/10 rounded-md text-black"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-[70%] translate-y-[-50%] text-black opacity-70"
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        </div>
        {error && (
          <p className="text-red-500 font-bold text-[16px] mt-2">{error}</p>
        )}
        <Link href={"/forgot-password"} className="mt-7 flex justify-end">
          <p className="text-[14px] font-bold">Need help with password?</p>
        </Link>
        <div className="my-8">
          <button
            onClick={handleLogin}
            className="bg-[#C81E23] rounded-md p-2 text-white w-full"
          >
            Login
          </button>
        </div>
        <div className="mb-5 flex gap-3">
          Don't have an account?{" "}
          <Link href={"/register"} className="font-bold">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
