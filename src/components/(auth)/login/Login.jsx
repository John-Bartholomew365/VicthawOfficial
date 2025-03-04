"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true, 
    });
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (email && password) {
      toast.success("Login successful!", { position: "top-center" });
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } else {
      toast.error("Please fill in all fields.", { position: "top-center" });
    }
  };

  return (
    <div className="pt-24 tracking-tight flex flex-col items-center">
      <ToastContainer autoClose={2000} hideProgressBar />
      <div className="pt-6 text-left w-full max-w-lg mx-auto" data-aos="fade-up">
        <div>
          <h2 className="font-bold text-[30px]">Welcome back! </h2>
          <p className="opacity-70 text-[14px] mt-2">
            Log in to manage your team and tournament details.
          </p>
        </div>
      </div>
      <div className="w-full max-w-lg mx-auto">
        <div className="mt-7" data-aos="fade-up">
          <h1 className="font-bold text-[16px]">Email</h1>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g example@gmail.com"
            className="mt-5 p-2 text-[14px] bg-black/40 w-full border-[0.5px] border-black/10 rounded-md text-white"
          />
        </div>
        <div className="mt-7 relative" data-aos="fade-up">
          <h1 className="font-bold text-[16px]">Password</h1>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*************"
            className="mt-5 p-2 text-[14px] bg-black/40 w-full border-[0.5px] border-black/10 rounded-md text-white"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-[70%] translate-y-[-50%] text-white opacity-70"
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        </div>
        <Link href={"/forgot-password"} className="mt-7 flex justify-end" data-aos="fade-up">
          <p className="text-[14px] font-bold">Need help with password?</p>
        </Link>
        <div className="my-8" data-aos="fade-up">
          <button
            onClick={handleLogin}
            className="bg-[#C81E23] rounded-md p-2 text-white w-full"
          >
            Login
          </button>
        </div>
        <div className="mb-5 flex gap-3" data-aos="fade-up">
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