"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Muscle Building",
    description:
      "Customised strength training programs are designed to help you build muscle, increase power, and achieve a well-defined physique.",
  },
  {
    title: "Weight Loss",
    description:
      "Personalised workout and nutrition plans focused on burning fat, boosting metabolism, and shaping a healthier body.",
  },
  {
    title: "Sports Coaching",
    description:
      "Comprehensive training for athletes at all levels, enhancing technical skills, tactical awareness, and overall physical conditioning.",
  },
  {
    title: "Endurance Training",
    description:
      "Targeted programs to improve stamina, cardiovascular fitness, and athletic performance, helping you go the extra mile.",
  },
  {
    title: "Football Training",
    description:
      "Specialised coaching to sharpen skills, enhance game strategy, and develop the discipline needed to excel on the field.",
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
      <div className="lg:ml-10 ml-0 lg:mb-0 mb-7 max-w-md" data-aos="fade-left">
        <h2 className="lg:text-[35px] text-[28px] lg:text-start text-center font-bold text-[#FFFFFF]">
          My Expert <span className="text-[#C81E23]">Services</span>
        </h2>
        <p className="text-[#B0B3B8] mt-4 w-auto">
          As a certified fitness coach with over seven years of experience, I am
          dedicated to helping individuals reach their full potential.
        </p>
        <p className="text-[#B0B3B8] mt-4 w-auto">
          Whether you’re looking to build muscle, lose weight, or enhance
          athletic performance, I provide tailored training programs designed to
          push your limits, instil discipline, and deliver lasting results.
          Let’s turn your fitness goals into reality!
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
