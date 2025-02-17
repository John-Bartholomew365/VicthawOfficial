"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
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
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, terms } = formData;

    if (!name || !email || !password || !terms) {
      setFormError("Please, fill out all fields and agree to the terms.");
      return;
    }

    setFormError("");

    router.push("/verify-account");
  };

  return (
    <div className="pt-24 flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="pt-6 text-left">
          <h2 className="font-bold text-[30px] leading-tight">
            Get in the Game! <br /> Create Your Team
          </h2>
          <p className="opacity-70 text-[14px] mt-3 mb-8">
            Ready to experience the thrill of the Victhaw Official Unity Cup?{" "}
            <br /> Create your team account and get ready to compete!
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
            id="name"
            name="name"
            placeholder="e.g Dynamics FC"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 text-[14px] w-full border-[0.5px] border-black/10 rounded-md text-black"
          />
        </div>
        <div className="mt-6">
          <h1 className="font-bold text-[16px]">Manager Name</h1>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g Jose Mourinho"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 text-[14px] w-full border-[0.5px] border-black/10 rounded-md text-black"
          />
        </div>
        <div className="mt-6">
          <h1 className="font-bold text-[16px]">Team Contact No.</h1>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g +2348047910042"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 text-[14px] w-full border-[0.5px] border-black/10 rounded-md text-black"
          />
        </div>
        <div className="mt-7">
          <h1 className="font-bold text-[16px]">Email</h1>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="e.g example@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-2 text-[14px] w-full border-[0.5px] border-black/10 rounded-md text-black"
          />
        </div>
        <div className="mt-7 relative">
          <h1 className="font-bold text-[16px]">Password</h1>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="*************"
            value={formData.password}
            onChange={handleInputChange}
            className="mt-1 p-2 text-[14px] w-full border-[0.5px] border-black/10 rounded-md text-black pr-10"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-[70%] translate-y-[-50%] text-black opacity-70"
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        </div>

        <div className="mt-7 flex items-center">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleInputChange}
            className="w-5 h-5 border-[0.5px] border-black/10 rounded-sm text-black focus:ring-0 focus:ring-offset-0 focus:outline-none cursor-pointer"
          />
          <label
            htmlFor="terms"
            className="ml-2 text-[14px] text-white opacity-70"
          >
            By continuing, you agree to our <Link href={"/terms-and-privacy"} className="text-[#C81E23] ml-1">terms and privacy</Link> 
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
          <div> Already have an account? </div>
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
