"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    ageRange: "",
    culture: "",
    clothingSize: "",
    ticketType: "regular",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [timeLeft, setTimeLeft] = useState({});

  // Registration deadline: November 28, 2025, 23:59:59
  const deadline = new Date("2025-11-28T23:59:59").getTime();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });

    // Countdown timer
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          expired: true,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        expired: false,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        contact_no: formData.phone,
        gender: formData.gender,
        age: formData.ageRange,
        tribe: formData.culture,
        ticket_type: formData.ticketType, // Backend expects "regular with cloth"
        size: formData.clothingSize,
      };

      console.log("Sending payload to API:", payload);

      const response = await axios.post("/api/tradfit/register", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = response.data;
      console.log("API response:", result);

      if (result.statusCode === "00") {
        const registrations = JSON.parse(
          localStorage.getItem("tradfit_registrations") || "[]"
        );
        const newRegistration = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          gender: formData.gender,
          ageRange: formData.ageRange,
          culture: formData.culture,
          ticketType: formData.ticketType, // Ensure correct ticketType
          clothingSize: formData.clothingSize || "N/A", // Fallback for clothingSize
          ticketId: result.data.ticket_id,
          registrationId: result.data._id, // Store _id for API calls
          registrationDate: new Date().toISOString(),
          confirmed: false,
          paymentStatus: "pending",
          receiptUrl: null,
        };
        console.log("Saving new registration to localStorage:", newRegistration);

        registrations.push(newRegistration);
        localStorage.setItem(
          "tradfit_registrations",
          JSON.stringify(registrations)
        );

        localStorage.setItem(
          "current_registration",
          JSON.stringify(newRegistration)
        );

        router.push("/auth/register/payment");
      } else {
        alert(result.message || "Registration failed. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting registration:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
      alert(
        error.response?.data?.message ||
          "An error occurred. Please try again later."
      );
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderStep1 = () => (
    <div data-aos="fade-up" data-aos-delay="200">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#C90A1D] mb-2">
          Personal Information
        </h3>
        <p className="text-[#C90A1D]/70">Let's get to know you better</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-[#C90A1D] font-medium">
            First Name *
          </label>
          <input
            id="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="w-full border border-[#C90A1D]/30 focus:border-[#C90A1D] rounded-md p-3 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#C90A1D]/30 outline-none"
            placeholder="Enter your first name"
            aria-label="First Name"
            data-aos="fade-right"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-[#C90A1D] font-medium">
            Last Name *
          </label>
          <input
            id="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="w-full border border-[#C90A1D]/30 focus:border-[#C90A1D] rounded-md p-3 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#C90A1D]/30"
            placeholder="Enter your last name"
            aria-label="Last Name"
            data-aos="fade-left"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={nextStep}
          className="bg-[#C90A1D] hover:bg-[#A30818] text-white rounded-md px-6 py-2 font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer"
          disabled={!formData.firstName || !formData.lastName}
        >
          Next Step
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div data-aos="fade-up" data-aos-delay="200">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#C90A1D] mb-2">
          Contact Information
        </h3>
        <p className="text-[#C90A1D]/70">How can we reach you?</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-[#C90A1D] font-medium">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="w-full border border-[#C90A1D]/30 focus:border-[#C90A1D] rounded-md p-3 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#C90A1D]/30"
            placeholder="your.email@example.com"
            aria-label="Email Address"
            data-aos="fade-up"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-[#C90A1D] font-medium">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="w-full border border-[#C90A1D]/30 focus:border-[#C90A1D] rounded-md p-3 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#C90A1D]/30"
            placeholder="+234 xxx xxx xxxx"
            aria-label="Phone Number"
            data-aos="fade-up"
            data-aos-delay="100"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="border border-[#C90A1D] text-[#C90A1D] rounded-md px-6 py-2 font-medium transition-all duration-300 hover:bg-[#C90A1D]/10"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="bg-[#C90A1D] hover:bg-[#A30818] text-white rounded-md px-6 py-2 font-medium transition-all duration-300 transform hover:scale-105"
          disabled={!formData.email || !formData.phone}
        >
          Next Step
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div data-aos="fade-up" data-aos-delay="200">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#C90A1D] mb-2">
          Additional Details
        </h3>
        <p className="text-[#C90A1D]/70">Help us personalize your experience</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3" data-aos="fade-up">
          <p className="text-[#C90A1D] font-medium">Gender *</p>
          <div className="flex flex-wrap gap-6">
            {["male", "female"].map((gender, index) => (
              <div
                key={gender}
                className="flex items-center space-x-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <input
                  type="radio"
                  id={gender}
                  name="gender"
                  value={gender}
                  checked={formData.gender === gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  className="border-[#C90A1D] text-[#C90A1D] focus:ring-[#C90A1D] transition-all duration-300"
                  required
                />
                <label
                  htmlFor={gender}
                  className="text-[#C90A1D]/80 cursor-pointer capitalize"
                >
                  {gender}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2" data-aos="fade-up" data-aos-delay="200">
          <label htmlFor="ageRange" className="text-[#C90A1D] font-medium">
            Age Range *
          </label>
          <select
            id="ageRange"
            value={formData.ageRange}
            onChange={(e) => handleInputChange("ageRange", e.target.value)}
            className="w-full border border-[#C90A1D]/30 focus:border-[#C90A1D] rounded-md p-3 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#C90A1D]/30"
            required
            aria-label="Select your age range"
          >
            <option value="" disabled>
              Select your age range
            </option>
            <option value="18-24">18-24 years</option>
            <option value="25-34">25-34 years</option>
            <option value="35-44">35-44 years</option>
            <option value="45-55">45-54 years</option>
            <option value="55&above">55 & Above</option>
          </select>
        </div>

        <div className="space-y-2" data-aos="fade-up" data-aos-delay="300">
          <label htmlFor="culture" className="text-[#C90A1D] font-medium">
            Cultural Background
          </label>
          <input
            id="culture"
            type="text"
            value={formData.culture}
            onChange={(e) => handleInputChange("culture", e.target.value)}
            className="w-full border border-[#C90A1D]/30 focus:border-[#C90A1D] rounded-md p-3 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#C90A1D]/30"
            placeholder="e.g., Yoruba, Igbo, Hausa, Fulani, etc."
            aria-label="Cultural Background"
          />
          <p className="text-sm text-[#C90A1D]/60">
            Tell us about your cultural heritage
          </p>
        </div>

        <div className="space-y-2" data-aos="fade-up" data-aos-delay="400">
          <label htmlFor="clothingSize" className="text-[#C90A1D] font-medium">
            Clothing Size *
          </label>
          <select
            id="clothingSize"
            value={formData.clothingSize}
            onChange={(e) => handleInputChange("clothingSize", e.target.value)}
            className="w-full border border-[#C90A1D]/30 focus:border-[#C90A1D] rounded-md p-3 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#C90A1D]/30"
            required
            aria-label="Select your clothing size"
          >
            <option value="" disabled>
              Select your clothing size
            </option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
          <p className="text-sm text-[#C90A1D]/60">
            Select your size for event merchandise
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="border border-[#C90A1D] text-[#C90A1D] rounded-md px-6 py-2 font-medium transition-all duration-300 hover:bg-[#C90A1D]/10"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="bg-[#C90A1D] hover:bg-[#A30818] text-white rounded-md px-6 py-2 font-medium transition-all duration-300 transform hover:scale-105"
          disabled={!formData.gender || !formData.ageRange || !formData.clothingSize}
        >
          Next Step
        </button>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div data-aos="fade-up" data-aos-delay="200">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#C90A1D] mb-2">
          Select Your Ticket
        </h3>
        <p className="text-[#C90A1D]/70">
          Choose the experience that suits you best
        </p>
      </div>

      <div className="space-y-4">
        <div
          className={`flex items-start space-x-4 p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
            formData.ticketType === "regular"
              ? "border-[#C90A1D] bg-[#C90A1D]/5 shadow-md"
              : "border-[#C90A1D]/30 hover:border-[#C90A1D]/50"
          }`}
          onClick={() => handleInputChange("ticketType", "regular")}
          data-aos="fade-right"
        >
          <input
            type="radio"
            id="regular"
            name="ticketType"
            value="regular"
            checked={formData.ticketType === "regular"}
            onChange={(e) => handleInputChange("ticketType", e.target.value)}
            className="mt-1 border-[#C90A1D] text-[#C90A1D] focus:ring-[#C90A1D]"
          />
          <div className="flex-1">
            <label
              htmlFor="regular"
              className="text-[#C90A1D] font-medium cursor-pointer"
            >
              Regular Ticket - ₦3,000
            </label>
            <p className="text-sm text-[#C90A1D]/80 mt-1">
              Access to all dance sessions, basic amenities, and event materials
            </p>
          </div>
        </div>

        <div
          className={`flex items-start space-x-4 p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
            formData.ticketType === "regular with cloth"
              ? "border-[#C90A1D] bg-[#C90A1D]/5 shadow-md"
              : "border-[#C90A1D]/30 hover:border-[#C90A1D]/50"
          }`}
          onClick={() => handleInputChange("ticketType", "regular with cloth")}
          data-aos="fade-left"
        >
          <input
            type="radio"
            id="regular-with-cloth"
            name="ticketType"
            value="regular with cloth"
            checked={formData.ticketType === "regular with cloth"}
            onChange={(e) => handleInputChange("ticketType", e.target.value)}
            className="mt-1 border-[#C90A1D] text-[#C90A1D] focus:ring-[#C90A1D]"
          />
          <div className="flex-1">
            <label
              htmlFor="regular-with-cloth"
              className="text-[#C90A1D] font-medium cursor-pointer"
            >
              Regular Ticket with Cloth - ₦8,000
            </label>
            <p className="text-sm text-[#C90A1D]/80 mt-1">
              All the benefits of the Regular Ticket, plus a customized traditional attire to celebrate your cultural heritage
            </p>
          </div>
        </div>

        <div
          className={`flex items-start space-x-4 p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
            formData.ticketType === "vip"
              ? "border-[#C90A1D] bg-[#C90A1D]/5 shadow-md"
              : "border-[#C90A1D]/30 hover:border-[#C90A1D]/50"
          }`}
          onClick={() => handleInputChange("ticketType", "vip")}
          data-aos="fade-left"
        >
          <input
            type="radio"
            id="vip"
            name="ticketType"
            value="vip"
            checked={formData.ticketType === "vip"}
            onChange={(e) => handleInputChange("ticketType", e.target.value)}
            className="mt-1 border-[#C90A1D] text-[#C90A1D] focus:ring-[#C90A1D]"
          />
          <div className="flex-1">
            <label
              htmlFor="vip"
              className="text-[#C90A1D] font-medium cursor-pointer"
            >
              VIP Ticket - ₦20,000
            </label>
            <p className="text-sm text-[#C90A1D]/80 mt-1">
             A premium experience awaits — an unforgettable package designed to elevate every moment.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 lg:flex block justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="border border-[#C90A1D] text-[#C90A1D] rounded-md px-6 py-2 font-medium transition-all duration-300 lg:w-fit w-full lg:mb-0 mb-5 hover:bg-[#C90A1D]/10"
        >
          Previous
        </button>
        <button
          type="submit"
          disabled={isSubmitting || timeLeft.expired}
          className="bg-[#C90A1D] hover:bg-[#A30818] text-white rounded-md px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105 disabled:bg-[#C90A1D]/50 disabled:transform-none lg:w-fit w-full"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : timeLeft.expired ? (
            "Registration Closed"
          ) : (
            "Complete Registration"
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div
      className="min-h-screen py-24 lg:py-24 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('/option3.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/85"></div>
      <div className="container mx-auto px-4 lg:px-24 max-w-2xl relative z-10">
        <div className="mb-8" data-aos="fade-down">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-[#FFFFFF]">
              Step {currentStep} of 4
            </span>
            <span className="text-sm text-[#FFFFFF]/70">
              {Math.round((currentStep / 4) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-[#FFFFFF]/20 rounded-full h-2">
            <div
              className="bg-[#FFFFFF] h-2 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="text-center mb-8" data-aos="fade-up">
          <h1 className="lg:text-[30px] text-[26px] font-bold text-[#FFFFFF] mb-3">
            Register for TRADFIT RHYTHMS
          </h1>
          <p className="text-[#FFFFFF]/80 leading-tight">
            Join us for an unforgettable indigenous dance aerobics experience!
          </p>
          {timeLeft.expired ? (
            <p className="text-[#FFFFFF] font-semibold mt-4 bg-red-600/20 p-4 rounded-lg">
              Registration has closed. Stay tuned for future events!
            </p>
          ) : (
            <div className="mt-4 bg-[#C90A1D]/10 p-4 rounded-lg">
              <p className="text-[#FFFFFF] font-semibold">
                Registration Closes In:
              </p>
              <div className="flex justify-center gap-4 mt-2">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-[#FFFFFF]">
                    {timeLeft.days || 0}
                  </span>
                  <span className="text-sm text-[#FFFFFF]/80">Days</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-[#FFFFFF]">
                    {timeLeft.hours || 0}
                  </span>
                  <span className="text-sm text-[#FFFFFF]/80">Hours</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-[#FFFFFF]">
                    {timeLeft.minutes || 0}
                  </span>
                  <span className="text-sm text-[#FFFFFF]/80">Minutes</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-[#FFFFFF]">
                    {timeLeft.seconds || 0}
                  </span>
                  <span className="text-sm text-[#FFFFFF]/80">Seconds</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className="shadow-xl border border-[#C90A1D]/30 rounded-lg bg-white overflow-hidden"
          data-aos="zoom-in"
        >
          <div className="bg-[#C90A1D] text-white p-6">
            <h2 className="text-2xl font-bold">Event Registration</h2>
            <p className="text-white/80">
              {currentStep === 1 && "Let's start with your basic information"}
              {currentStep === 2 && "How can we reach you?"}
              {currentStep === 3 && "Tell us a bit more about yourself"}
              {currentStep === 4 && "Select your preferred experience"}
            </p>
          </div>
          <div className="p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
              {currentStep === 4 && renderStep4()}
            </form>
          </div>
        </div>
        <div
          className="text-center mt-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-[#FFFFFF]/80">
            Want to learn more about ticket benefits?{" "}
            <a
              href="/tradfit/tickets"
              className="text-[#FFFFFF] hover:text-[#FFFFFE] font-medium underline transition-colors duration-300"
            >
              Compare ticket options
            </a>
          </p>
        </div>
      </div>
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-pulse-slow {
          animation: pulse 2s infinite;
        }
        input:focus,
        select:focus {
          box-shadow: 0 0 0 3px rgba(201, 10, 29, 0.1);
        }
      `}</style>
    </div>
  );
}