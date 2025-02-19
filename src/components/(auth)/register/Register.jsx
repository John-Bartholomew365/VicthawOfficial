"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    teamName: "",
    managerName: "",
    teamContact: "",
    email: "",
    password: "",
    terms: false,
  });

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Restrict team contact to numbers only
    if (name === "teamContact" && !/^\d*$/.test(value)) {
      return;
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { teamName, managerName, teamContact, email, password, terms } = formData;

    if (!teamName || !managerName || !teamContact || !email || !password || !terms) {
      setFormError("Please, fill out all fields and agree to the terms.");
      toast.error("Please, fill out all fields and agree to the terms.");
      return;
    }

    if (password.length < 8) {
      setFormError("Password must be at least 8 characters long.");
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    if (teamContact.length < 10) {
      setFormError("Team Contact must be at least 10 digits.");
      toast.error("Team Contact must be at least 10 digits.");
      return;
    }

    setFormError("");
    toast.success("Registration successful! Redirecting...");
    
    setTimeout(() => {
      router.push("/verify-account");
    }, 2000);
  };

  return (
    <div className="pt-24 flex flex-col items-center tracking-tight">
      <ToastContainer position="top-right" autoClose={3000} />
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="pt-6 text-left">
          <h2 className="font-bold text-[30px] leading-tight">
            Get in the Game! <br /> Create Your Team
          </h2>
          <p className="opacity-70 text-[14px] mt-3 mb-8">
            Ready to experience the thrill of the Victhaw Official Unity Cup? <br />
            Create your team account and get ready to compete!
          </p>
        </div>

        {formError && (
          <div className="mt-4 text-red-500 font-bold text-[16px]">
            {formError}
          </div>
        )}

        <div className="mt-4">
          <h1 className="font-bold text-[16px]">Team Name</h1>
          <input
            type="text"
            name="teamName"
            placeholder="e.g Storm FC"
            value={formData.teamName}
            onChange={handleInputChange}
            className="mt-5 p-2 text-[14px] bg-black/40 w-full border-[0.5px] border-black/10 rounded-md text-white"
          />
        </div>

        <div className="mt-9">
          <h1 className="font-bold text-[16px]">Manager Name</h1>
          <input
            type="text"
            name="managerName"
            placeholder="e.g Jose Mourinho"
            value={formData.managerName}
            onChange={handleInputChange}
            className="mt-5 p-2 text-[14px] bg-black/40 w-full border-[0.5px] border-black/10 rounded-md text-white"
          />
        </div>

        <div className="mt-9">
          <h1 className="font-bold text-[16px]">Team Contact No.</h1>
          <input
            type="text"
            name="teamContact"
            placeholder="e.g 08047910042"
            value={formData.teamContact}
            onChange={handleInputChange}
            maxLength={15}
            className="mt-5 p-2 text-[14px] bg-black/40 w-full border-[0.5px] border-black/10 rounded-md text-white"
          />
        </div>

        <div className="mt-7">
          <h1 className="font-bold text-[16px]">Email</h1>
          <input
            type="email"
            name="email"
            placeholder="e.g example@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-5 p-2 text-[14px] bg-black/40 w-full border-[0.5px] border-black/10 rounded-md text-white"
          />
        </div>

        <div className="mt-7 relative">
          <h1 className="font-bold text-[16px]">Password</h1>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="*************"
            value={formData.password}
            onChange={handleInputChange}
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

        <div className="mt-7 flex items-center">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleInputChange}
            className="w-5 h-5 border-[0.5px] border-black/10 rounded-sm text-black focus:ring-0 focus:ring-offset-0 focus:outline-none cursor-pointer"
          />
          <label htmlFor="terms" className="ml-2 text-[14px] text-white opacity-70">
            By continuing, you agree to our{" "}
            <Link href={"/terms"} className="text-[#C81E23] ml-1">
              terms and conditions
            </Link>
          </label>
        </div>

        <div className="my-8">
          <button
            type="submit"
            className="bg-[#C81E23] rounded-md p-2 text-white w-full transition-colors duration-200 hover:bg-[#a81a1e]"
          >
            Continue
          </button>
        </div>

        <div className="mb-5 flex gap-3">
          <div>Already have an account?</div>
          <div>
            <Link href={"/login"} className="font-bold">
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
