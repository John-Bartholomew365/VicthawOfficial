"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Muscle Building",
    description:
      "Structured training programs designed to help clients build lean muscle and develop strength.",
  },
  {
    title: "Weight Loss",
    description:
      "Effective workout and nutrition plans tailored to help individuals burn fat and achieve their desired physique.",
  },
  {
    title: "Sports Coaching",
    description:
      "Dynamic coaching for aspiring and professional athletes, focusing on technical skills, tactical awareness, and peak conditioning.",
  },
  {
    title: "Endurance Training",
    description:
      "Programs that enhance stamina, cardiovascular fitness, and overall athletic performance.",
  },
  {
    title: "Football Training",
    description:
      "Specialized coaching to improve gameplay, strategy, and athletic discipline on the football field.",
  },
];

export default function Services() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % services.length); // Move to the next service
    }, 4000); // Interval duration (4 seconds)

    // Initialize AOS
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Animation only once
    });

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="lg:flex lg:flex-row flex-col gap-[70px] items-center justify-center min-h-screen p-3 lg:pr-16">

      {/* Services Info for mobile*/}
      <div
        className="lg:ml-10 ml-0 lg:mb-0 mb-7 max-w-md"
        data-aos="fade-left"
      >
        <h2 className="text-4xl lg:text-start text-center font-bold text-[#FFFFFF]">
          My Awesome <span className="text-[#C81E23]">Services</span>
        </h2>
        <p className="text-[#B0B3B8] mt-4">
          As a certified fitness coach with over 7 years of experience, I
          specialize in helping individuals achieve their fitness goals.
        </p>
        <p className="text-[#B0B3B8] mt-4">
          Whether it's muscle building, weight loss, or athletic performance, my
          goal is to help you push limits, stay disciplined, and achieve lasting
          results.
        </p>
        <Link href={"/visionary/contact"}>
          <button className="mt-6 px-6 py-3 bg-[#C81E23] lg:w-[180px] w-full text-white font-semibold rounded-lg">
            Contact me
          </button>
        </Link>
      </div>
      {/* Services List */}
      <div
        className="space-y-2 bg-[#000000] p-6 rounded-xl"
        data-aos="fade-right"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl cursor-pointer transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
              selected === index
                ? "border-2 border-[#C81E23] p-5"
                : "border-2 border-transparent"
            }`}
            onClick={() => setSelected(index)}
          >
            {/* Dashed Border Animation */}
            {selected === index && (
              <div
                className="absolute inset-0 top-[-2] rounded-xl border-[6px] border-dashed border-transparent"
                style={{
                  borderImage:
                    "linear-gradient(to right, transparent 40px, #0F0F0F 40px, #0F0F0F 80px, transparent 80px) 4",
                  animation: "dashBorder 2s linear infinite",
                }}
              ></div>
            )}
            <h3 className="text-white text-lg font-semibold mb-2 relative z-10">
              {service.title}
            </h3>
            <p
              className={`text-gray-400 text-sm transition-all duration-300 overflow-hidden relative z-10 ${
                selected === index ? "opacity-100 h-auto" : "opacity-0 h-0"
              }`}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Services Info */}
      {/* <div
        className="lg:ml-10 ml-0 lg:mt-0 mt-7 lg:block hidden max-w-md"
        data-aos="fade-left"
      >
        <h2 className="text-4xl lg:text-start text-center font-bold text-[#FFFFFF]">
          My Awesome <span className="text-[#C81E23]">Services</span>
        </h2>
        <p className="text-[#B0B3B8] mt-4">
          As a certified fitness coach with over 7 years of experience, I
          specialize in helping individuals achieve their fitness goals.
        </p>
        <p className="text-[#B0B3B8] mt-4">
          Whether it's muscle building, weight loss, or athletic performance, my
          goal is to help you push limits, stay disciplined, and achieve lasting
          results.
        </p>
        <Link href={"/visionary/contact"}>
          <button className="mt-6 px-6 py-3 bg-[#C81E23] text-white font-semibold rounded-lg">
            Contact me
          </button>
        </Link>
      </div> */}

      {/* Inline Styles for Animation */}
      <style jsx>{`
        @keyframes dashBorder {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
