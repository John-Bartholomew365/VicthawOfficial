"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import Link from "next/link";

const Victor = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isAppearing, setIsAppearing] = useState(true);

  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Allow animations to trigger every time the element is in view
      mirror: true, // Allow animations to trigger when scrolling back up
    });

    // Refresh AOS when the component mounts or updates
    AOS.refresh();
  }, []);

  const nameParts = ["Victor", "Gbolabo"];
  const lastName = "ADENIJI";
  const fullName = [...nameParts, lastName].join("");

  useEffect(() => {
    if (isAppearing) {
      // Appearing logic
      if (currentLetterIndex < fullName.length) {
        const timeout = setTimeout(() => {
          setCurrentLetterIndex((prev) => prev + 1);
        }, 200); // Adjust the delay between letters
        return () => clearTimeout(timeout);
      } else {
        // Once the full name is visible, wait and start disappearing
        const timeout = setTimeout(() => {
          setIsAppearing(false);
        }, 2000); // Wait 2 seconds before disappearing
        return () => clearTimeout(timeout);
      }
    } else {
      // Disappearing logic
      if (currentLetterIndex >= 0) {
        const timeout = setTimeout(() => {
          setCurrentLetterIndex((prev) => prev - 1);
        }, 200); // Adjust the delay between letters
        return () => clearTimeout(timeout);
      } else {
        // Once the full name is hidden, wait and start appearing again
        const timeout = setTimeout(() => {
          setIsAppearing(true);
        }, 500); // Wait 0.5 seconds before reappearing
        return () => clearTimeout(timeout);
      }
    }
  }, [currentLetterIndex, isAppearing, fullName.length]);

  return (
    <div className="py-[100px] lg:px-[50px] px-[10px] ">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[40px]">
        <div data-aos="fade-right" data-aos-once="false">
          <h1 className="text-[27px] pl-[10px]">Hi, I&apos;m </h1>
          <h1 className="lg:text-[45px] text-[35px] text-[#FF0000] tracking-tight leading-tight">
            <span className="font-bold">
              {/* Render "Victor" and "Gbolabo" on the first line */}
              {nameParts.map((part, partIndex) => (
                <span key={partIndex} className="inline-block">
                  {Array.from(part).map((letter, index) => (
                    <span
                      key={index}
                      className={`inline-block transition-all duration-500 ${
                        isAppearing
                          ? index + (partIndex > 0 ? nameParts[0].length : 0) <
                            currentLetterIndex
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-4"
                          : index + (partIndex > 0 ? nameParts[0].length : 0) >=
                            currentLetterIndex
                          ? "opacity-0 translate-x-4"
                          : "opacity-100 translate-x-0"
                      }`}
                    >
                      {letter}
                    </span>
                  ))}
                  {/* Add spacing after each name except the last one */}
                  {partIndex < nameParts.length - 1 && <span>&nbsp;</span>}
                </span>
              ))}
            </span>
            <br /> {/* Line break for the last name */}
            <span className="font-bold">
              {/* Render "ADENIJI" on the next line */}
              {Array.from(lastName).map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-500 ${
                    isAppearing
                      ? index + nameParts.join("").length < currentLetterIndex
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                      : index + nameParts.join("").length >= currentLetterIndex
                      ? "opacity-0 translate-x-4"
                      : "opacity-100 translate-x-0"
                  }`}
                >
                  {letter}
                </span>
              ))}
            </span>
          </h1>
          <p
            className="lg:w-[400px] tracking-tight w-full py-[20px] text-[#B0B3B8]"
            data-aos="fade-up"
            data-aos-once="false"
          >
            Certified fitness coach with 7+ years of experience in strength
            training, weight loss, and sports coaching. Helping individuals
            build muscle, burn fat, and improve performance.
          </p>
          <div
            className="flex flex-row gap-[20px]"
            data-aos="zoom-in"
            data-aos-once="false"
          >
            <div className="hover:bg-[#0f0f0f] hover:border-[1px] hover:border-[#FF0000] py-[10px] px-[40px] rounded-[50px] bg-[#FF0000] hover:text-white cursor-pointer">
              <Link href="/visionary/contact">
                <button className="flex items-center gap-[15px]">
                  Contact me <FaArrowRightLong />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="bg-[#FF0000] p-[2px] rounded-[100%] mt-10 lg:mt-0"
          data-aos="fade-left"
          data-aos-once="false"
        >
          <Image
            className="rounded-full"
            src="/vicky.jpg"
            alt="Profile Image"
            width={450}
            height={450}
          />
        </div>
      </div>
    </div>
  );
};

export default Victor;
