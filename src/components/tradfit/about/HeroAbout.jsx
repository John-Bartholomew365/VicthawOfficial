"use client";
import React, { useEffect } from "react";
import {
  Heart,
  Users,
  Drum,
  Music,
  Utensils,
  Sparkles,
  Target,
  Calendar,
  MapPin,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const HeroAbout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(/option3.jpg)`,
          backgroundAttachment: "fixed", // Optional: for parallax effect
        }}
      >
        {/* Overlay to soften the background */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* Subtle cultural pattern background with line pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMTVMMTUgMzBMMzAgNDVMNDUgMzBMMzAgMTVaTTE1IDE1TDAgMzBMMTUgNDVMMzAgMzBMMTUgMTVaTTQ1IDE1TDMwIDMwTDQ1IDQ1TDYwIDMwTDQ1IDE1WiIgc3Ryb2tlPSIjQzkwQTFEIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIgLz48L3N2Zz4=')]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#C90A1D10_1px,transparent_1px),linear-gradient(to_bottom,#C90A1D10_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Decorative elements with animation */}
        <div
          className="absolute top-0 left-0 w-72 h-72 bg-[#C90A1D] opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"
          data-aos="zoom-in"
          data-aos-delay="200"
        ></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#C90A1D] opacity-5 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-slow"
          data-aos="zoom-in"
          data-aos-delay="300"
        ></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div
            data-aos="fade-down"
            className="inline-block bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-lg"
          >
            Celebrating Heritage Through Movement
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="lg:text-[56px] text-[36px] font-bold text-white mb-5 leading-tight"
          >
            Move to the Beat of <br className="hidden lg:block" />
            Your <span className="bg-gradient-to-r from-yellow-200 via-orange-200 to-pink-300 bg-clip-text text-transparent animate-gradient">Heritage</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="lg:text-[18px] text-[16px] text-white/90 lg:w-[540px] w-auto mx-auto mb-10 lg:px-4 px-2 leading-tight"
          >
            TRADFIT RHYTHMS is not just a dance aerobics program; it's a
            cultural revival, a celebration of indigenous heritage, and a
            wellness movement rolled into one.
          </p>
          <Link href="/auth/register">
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="inline-flex gap-2 items-center bg-[#C90A1D] text-white px-9 py-2 rounded-full font-semibold shadow-lg cursor-pointer hover:bg-[#A30818] transition-colors transform hover:scale-105"
            >
              <span>Join Us</span>
            </div>
          </Link>
        </div>

        {/* Responsive Animated floating elements */}
        {/* Top Left Drum */}
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="absolute left-4 sm:left-8 md:left-12 lg:left-20 top-1/5 sm:top-1/4 opacity-70 animate-float"
        >
          <Drum size={30} className="sm:w-10 sm:h-10 text-[#C90A1D]" />
        </div>

        {/* Top Right Music */}
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          className="absolute right-4 sm:right-8 md:right-12 lg:right-24 top-2/4 sm:top-2/3 opacity-70 animate-float-reverse"
        >
          <Music size={28} className="sm:w-9 sm:h-9 text-[#C90A1D]" />
        </div>

        {/* Bottom Right Sparkles */}
        <div
          data-aos="fade-down"
          data-aos-delay="900"
          className="absolute right-8 sm:right-16 md:right-1/4 bottom-1/3 opacity-70 animate-float-reverse-slow"
        ></div>
      </section>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(3deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        @keyframes float-reverse {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(12px) rotate(-3deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        @keyframes float-slow {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(2deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        @keyframes float-reverse-slow {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(8px) rotate(-2deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        @keyframes float-slower {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-6px) rotate(1deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        @keyframes pulse-slow {
          0% {
            transform: scale(1);
            opacity: 0.05;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.1;
          }
          100% {
            transform: scale(1);
            opacity: 0.05;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-reverse-slow {
          animation: float-reverse-slow 9s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default HeroAbout;
