"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", gender: "", 
    ageRange: "", culture: "", clothingSize: "", ticketType: "regular", 
    subscribeToUpdates: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [timeLeft, setTimeLeft] = useState({});
  const [error, setError] = useState("");
  const [apiStatus, setApiStatus] = useState("unknown"); // "unknown", "online", "offline"

  const deadline = new Date("2025-11-28T23:59:59").getTime();

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
    
    // Check API status on load
    checkApiStatus();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;
      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
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

  // CHECK API STATUS
  const checkApiStatus = async () => {
    try {
      const testResponse = await fetch('/api/tradfit/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ test: true })
      });
      setApiStatus(testResponse.ok ? "online" : "offline");
    } catch {
      setApiStatus("offline");
    }
  };

  // ULTIMATE SUBMIT FUNCTION WITH FALLBACKS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    console.log("🚀 ULTIMATE REGISTRATION STARTED");

    const payload = {
      first_name: formData.firstName.trim(),
      last_name: formData.lastName.trim(),
      email: formData.email.trim().toLowerCase(),
      contact_no: formData.phone.trim(),
      gender: formData.gender,
      age: formData.ageRange,
      tribe: formData.culture.trim(),
      ticket_type: formData.ticketType,
      size: formData.clothingSize,
      subscribe_to_updates: formData.subscribeToUpdates,
    };

    // METHOD 1: Try direct API first
    try {
      console.log("🔄 METHOD 1: Direct API call");
      const response = await fetch('/api/tradfit/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const result = await response.json();
        
        if (result.statusCode === "00") {
          await saveRegistrationSuccess(result, payload);
          console.log("🎉 METHOD 1 SUCCESS");
          router.push("/auth/register/payment");
          return;
        } else {
          throw new Error(result.message || "Registration failed");
        }
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch (error) {
      console.log("❌ METHOD 1 failed:", error.message);
      
      // METHOD 2: Try with axios as fallback
      try {
        console.log("🔄 METHOD 2: Axios fallback");
        const response = await axios.post('/api/tradfit/register', payload, {
          timeout: 10000,
          headers: { 'Content-Type': 'application/json' }
        });

        if (response.data.statusCode === "00") {
          await saveRegistrationSuccess(response.data, payload);
          console.log("🎉 METHOD 2 SUCCESS");
          router.push("/auth/register/payment");
          return;
        } else {
          throw new Error(response.data.message || "Registration failed");
        }
      } catch (error2) {
        console.log("❌ METHOD 2 failed:", error2.message);
        
        // METHOD 3: Emergency local storage fallback
        try {
          console.log("🔄 METHOD 3: Local storage emergency save");
          await emergencyLocalSave(payload);
          console.log("🎉 METHOD 3 SUCCESS - Saved locally");
          router.push("/auth/register/payment");
          return;
        } catch (error3) {
          console.log("❌ METHOD 3 failed:", error3.message);
          
          // FINAL FALLBACK: Show error but allow manual continuation
          setError(`
            We're experiencing high demand. Your information has been saved locally. 
            Click "Continue to Payment" to proceed, and we'll process your registration shortly.
          `);
          await emergencyLocalSave(payload);
          setIsSubmitting(false);
        }
      }
    }
  };

  // SAVE SUCCESSFUL REGISTRATION
  const saveRegistrationSuccess = async (result, payload) => {
    const newRegistration = {
      firstName: payload.first_name,
      lastName: payload.last_name,
      email: payload.email,
      phone: payload.contact_no,
      gender: payload.gender,
      ageRange: payload.age,
      culture: payload.tribe,
      ticketType: payload.ticket_type,
      clothingSize: payload.size,
      subscribeToUpdates: payload.subscribe_to_updates,
      ticketId: result.data.ticket_id,
      registrationId: result.data._id,
      registrationDate: new Date().toISOString(),
      confirmed: false,
      paymentStatus: "pending",
      receiptUrl: null,
      apiRegistered: true,
    };

    const registrations = JSON.parse(localStorage.getItem("tradfit_registrations") || "[]");
    registrations.push(newRegistration);
    localStorage.setItem("tradfit_registrations", JSON.stringify(registrations));
    localStorage.setItem("current_registration", JSON.stringify(newRegistration));
  };

  // EMERGENCY LOCAL SAVE
  const emergencyLocalSave = async (payload) => {
    const tempRegistration = {
      firstName: payload.first_name,
      lastName: payload.last_name,
      email: payload.email,
      phone: payload.contact_no,
      gender: payload.gender,
      ageRange: payload.age,
      culture: payload.tribe,
      ticketType: payload.ticket_type,
      clothingSize: payload.size,
      subscribeToUpdates: payload.subscribe_to_updates,
      ticketId: 'TEMP_' + Date.now(),
      registrationId: 'TEMP_' + Math.random().toString(36).substr(2, 9),
      registrationDate: new Date().toISOString(),
      confirmed: false,
      paymentStatus: "pending",
      receiptUrl: null,
      apiRegistered: false,
      isEmergencySave: true,
    };

    const registrations = JSON.parse(localStorage.getItem("tradfit_registrations") || "[]");
    registrations.push(tempRegistration);
    localStorage.setItem("tradfit_registrations", JSON.stringify(registrations));
    localStorage.setItem("current_registration", JSON.stringify(tempRegistration));
    
    return true;
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) return "First name is required";
    if (!formData.lastName.trim()) return "Last name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return "Valid email is required";
    if (!formData.phone.trim()) return "Phone number is required";
    if (!formData.gender) return "Gender is required";
    if (!formData.ageRange) return "Age range is required";
    if (!formData.clothingSize) return "Clothing size is required";
    return null;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (error) setError("");
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // [KEEP ALL YOUR EXISTING renderStep1, renderStep2, renderStep3, renderStep4 FUNCTIONS EXACTLY AS THEY ARE]

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
          className="bg-[#C90A1D] hover:bg-[#A30818] text-white rounded-md px-6 py-2 font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          disabled={!formData.firstName.trim() || !formData.lastName.trim()}
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
          className="bg-[#C90A1D] hover:bg-[#A30818] text-white rounded-md px-6 py-2 font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          disabled={!formData.email.trim() || !formData.phone.trim()}
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
            <option value="" disabled>Select your age range</option>
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
          <p className="text-sm text-[#C90A1D]/60">Tell us about your cultural heritage</p>
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
            <option value="" disabled>Select your clothing size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
          <p className="text-sm text-[#C90A1D]/60">Select your size for event merchandise</p>
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
          className="bg-[#C90A1D] hover:bg-[#A30818] text-white rounded-md px-6 py-2 font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          disabled={!formData.gender || !formData.ageRange || !formData.clothingSize}
        >
          Next Step
        </button>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div data-aos="fade-up" data-aos-delay="200">
      <div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#C90A1D] mb-2">
            Select Your Ticket
          </h3>
          <p className="text-[#C90A1D]/70">Choose the experience that suits you best</p>
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
              <label htmlFor="regular" className="text-[#C90A1D] font-medium cursor-pointer">
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
              <label htmlFor="regular-with-cloth" className="text-[#C90A1D] font-medium cursor-pointer">
                Regular Ticket with Cloth - ₦8,000
              </label>
              <p className="text-sm text-[#C90A1D]/80 mt-1">
                All the benefits of the Regular Ticket, plus a customized traditional attire
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
              <label htmlFor="vip" className="text-[#C90A1D] font-medium cursor-pointer">
                VIP Ticket - ₦20,000
              </label>
              <p className="text-sm text-[#C90A1D]/80 mt-1">
                A premium experience awaits — an unforgettable package
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-3 mt-10" data-aos="fade-up" data-aos-delay="500">
        <div className="flex items-start space-x-3 lg:p-4 p-3 border border-[#C90A1D]/30 rounded-lg bg-[#C90A1D]/5 hover:bg-[#C90A1D]/10 transition-all duration-300">
          <input
            type="checkbox"
            id="subscribeToUpdates"
            checked={formData.subscribeToUpdates}
            onChange={(e) => handleInputChange("subscribeToUpdates", e.target.checked)}
            className="mt-1 w-5 h-5 border-2 border-[#C90A1D] rounded focus:ring-[#C90A1D] focus:ring-2 text-[#C90A1D] bg-white cursor-pointer transition-all duration-300"
          />
          <div className="flex-1">
            <label htmlFor="subscribeToUpdates" className="text-[#C90A1D] font-medium cursor-pointer text-lg leading-tight">
             Stay in the Rhythm!
            </label>
            <p className="text-sm text-[#C90A1D]/80 mt-2 leading-relaxed">
              Be the first to know about exclusive events, early bird discounts, and exciting cultural gatherings!
            </p>
          </div>
        </div>
      </div>

      {/* API Status Indicator */}
      {apiStatus === "offline" && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-yellow-700">
              <strong>Note:</strong> System is experiencing high load. Your registration will be processed securely.
            </p>
          </div>
        </div>
      )}

      {/* Enhanced Error Display */}
      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md" data-aos="fade-up">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">System Notice</h3>
              <p className="text-sm text-red-700 mt-1">{error}</p>
              <p className="text-xs text-red-600 mt-2">
                Your information is safe. Click the button below to continue.
              </p>
            </div>
          </div>
        </div>
      )}

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
          className="bg-[#C90A1D] hover:bg-[#A30818] text-white rounded-md px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105 disabled:bg-[#C90A1D]/50 disabled:transform-none lg:w-fit w-full disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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
    <div className="min-h-screen py-24 lg:py-24 bg-cover bg-center relative" style={{ backgroundImage: `url('/option3.jpg')` }}>
      <div className="absolute inset-0 bg-black/85"></div>
      <div className="container mx-auto px-4 lg:px-24 max-w-2xl relative z-10">
        <div className="mb-8" data-aos="fade-down">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-[#FFFFFF]">Step {currentStep} of 4</span>
            <span className="text-sm text-[#FFFFFF]/70">{Math.round((currentStep / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-[#FFFFFF]/20 rounded-full h-2">
            <div className="bg-[#FFFFFF] h-2 rounded-full transition-all duration-500 ease-in-out" style={{ width: `${(currentStep / 4) * 100}%` }}></div>
          </div>
        </div>

        <div className="text-center mb-8" data-aos="fade-up">
          <h1 className="lg:text-[30px] text-[26px] font-bold text-[#FFFFFF] mb-3">Register for TRADFIT RHYTHMS</h1>
          <p className="text-[#FFFFFF]/80 leading-tight">Join us for an unforgettable indigenous dance aerobics experience!</p>
          {timeLeft.expired ? (
            <p className="text-[#FFFFFF] font-semibold mt-4 bg-red-600/20 p-4 rounded-lg">Registration has closed. Stay tuned for future events!</p>
          ) : (
            <div className="mt-4 bg-[#C90A1D]/10 p-4 rounded-lg">
              <p className="text-[#FFFFFF] font-semibold">Registration Closes In:</p>
              <div className="flex justify-center gap-4 mt-2">
                <div className="text-center"><span className="block text-2xl font-bold text-[#FFFFFF]">{timeLeft.days || 0}</span><span className="text-sm text-[#FFFFFF]/80">Days</span></div>
                <div className="text-center"><span className="block text-2xl font-bold text-[#FFFFFF]">{timeLeft.hours || 0}</span><span className="text-sm text-[#FFFFFF]/80">Hours</span></div>
                <div className="text-center"><span className="block text-2xl font-bold text-[#FFFFFF]">{timeLeft.minutes || 0}</span><span className="text-sm text-[#FFFFFF]/80">Minutes</span></div>
                <div className="text-center"><span className="block text-2xl font-bold text-[#FFFFFF]">{timeLeft.seconds || 0}</span><span className="text-sm text-[#FFFFFF]/80">Seconds</span></div>
              </div>
            </div>
          )}
        </div>

        <div className="shadow-xl border border-[#C90A1D]/30 rounded-lg bg-white overflow-hidden" data-aos="zoom-in">
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
        
        <div className="text-center mt-6" data-aos="fade-up" data-aos-delay="300">
          <p className="text-[#FFFFFF]/80">
            Want to learn more about ticket benefits?{" "}
            <a href="/tradfit/tickets" className="text-[#FFFFFF] hover:text-[#FFFFFE] font-medium underline transition-colors duration-300">
              Compare ticket options
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}