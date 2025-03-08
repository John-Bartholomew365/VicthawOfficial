"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // Formik validation schema
  const validationSchema = Yup.object({
    teamName: Yup.string().required("Team Name is required"),
    managerName: Yup.string().required("Manager Name is required"),
    teamContact: Yup.string()
      .required("Team Contact is required")
      .matches(/^\d{10,15}$/, "Team Contact must be 10-15 digits"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    // terms: Yup.boolean()
    //   .oneOf([true], "You must accept the terms and conditions")
    //   .required("You must accept the terms and conditions"),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      team_name: "",
      manager_name: "",
      team_contact_no: "",
      email: "",
      password: "",
      // terms: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // POST request to backend
        const response = await axios.post("/api/register", values, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.data.statusCode === "00") {
          toast.success("Registration successful! Redirecting...");
          setTimeout(() => {
            router.push("/verify-account");
          }, 2000);
        } else {
          toast.error(
            response.data.message || "Registration failed. Please try again."
          );
        }
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            "Registration failed. Please try again."
        );
        console.error("Registration error:", error);
      }
    },
  });

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Initialize AOS
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="pt-24 flex flex-col items-center tracking-tight">
      <ToastContainer position="top-right" autoClose={3000} />
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-md"
        data-aos="fade-up"
      >
        <div className="pt-6 text-left">
          <h2 className="font-bold text-[30px] leading-tight">
            Get in the Game! <br /> Create Your Team
          </h2>
          <p className="opacity-70 text-[14px] mt-3 mb-8">
            Ready to experience the thrill of the Victhaw Official Unity Cup?{" "}
            <br />
            Create your team account and get ready to compete!
          </p>
        </div>

        {formik.errors.submit && (
          <div className="mt-4 text-red-500 font-bold text-[16px]">
            {formik.errors.submit}
          </div>
        )}

        <div className="mt-4" data-aos="fade-up">
          <h1 className="font-bold text-[16px]">Team Name</h1>
          <input
            type="text"
            name="teamName"
            placeholder="e.g Storm United"
            value={formik.values.teamName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-5 p-2 text-[14px] bg-black/40 w-full border-[0.5px] border-black/10 rounded-md text-white"
          />
          {formik.touched.teamName && formik.errors.teamName && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.teamName}
            </div>
          )}
        </div>

        <div className="mt-9" data-aos="fade-up">
          <h1 className="font-bold text-[16px]">Manager Name</h1>
          <input
            type="text"
            name="managerName"
            placeholder="e.g Jose Mourinho"
            value={formik.values.managerName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-5 p-2 text-[14px] bg-black/40 w-full border-[0.5px] border-black/10 rounded-md text-white"
          />
          {formik.touched.managerName && formik.errors.managerName && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.managerName}
            </div>
          )}
        </div>

        <div className="mt-9" data-aos="fade-up">
          <h1 className="font-bold text-[16px]">Team Contact No.</h1>
          <input
            type="text"
            name="teamContact"
            placeholder="e.g 08047910042"
            value={formik.values.teamContact}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            maxLength={15}
            className="mt-5 p-2 text-[14px] bg-black/40 w-full border-[0.5px] border-black/10 rounded-md text-white"
          />
          {formik.touched.teamContact && formik.errors.teamContact && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.teamContact}
            </div>
          )}
        </div>

        <div className="mt-7" data-aos="fade-up">
          <h1 className="font-bold text-[16px]">Email</h1>
          <input
            type="email"
            name="email"
            placeholder="e.g example@gmail.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-5 p-2 text-[14px] bg-black/40 w-full border-[0.5px] border-black/10 rounded-md text-white"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </div>
          )}
        </div>

        <div className="mt-7 relative" data-aos="fade-up">
          <h1 className="font-bold text-[16px]">Password</h1>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="*************"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-5 p-2 text-[14px] bg-black/40 w-full border-[0.5px] border-black/10 rounded-md text-white"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-[70%] translate-y-[-50%] text-white opacity-70"
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.password}
            </div>
          )}
        </div>

        <div className="mt-7 flex items-center" data-aos="fade-up">
          <input
            type="checkbox"
            name="terms"
            checked={formik.values.terms}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-5 h-5 border-[0.5px] border-black/10 rounded-sm text-black focus:ring-0 focus:ring-offset-0 focus:outline-none cursor-pointer"
          />
          <label
            htmlFor="terms"
            className="ml-2 text-[14px] text-white opacity-70"
          >
            By continuing, you agree to our{" "}
            <Link href={"/terms"} className="text-[#C81E23] ml-1">
              terms and conditions
            </Link>
          </label>
          {formik.touched.terms && formik.errors.terms && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.terms}
            </div>
          )}
        </div>

        <div className="my-8" data-aos="fade-up">
          <button
            type="submit"
            className="bg-[#C81E23] rounded-md p-2 text-white w-full transition-colors duration-200 hover:bg-[#a81a1e]"
          >
            Continue
          </button>
        </div>

        <div className="mb-5 flex gap-3" data-aos="fade-up">
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
