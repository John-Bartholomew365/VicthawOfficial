"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaInstagram,
  FaPhone,
  FaPhoneAlt,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const SponsorsPage = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isLive, setIsLive] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-04-12T09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setIsLive(true);
        return;
      }

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMessage("Please enter your email before subscribing.");
      return;
    }
    setErrorMessage("");
    setSuccessMessage(
      "Thank you for subscribing! You'll receive updates about the tournament and sponsorship opportunities."
    );
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div className="my-[100px] px-5">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-[30px] lg:text-[45px] font-bold">Our Sponsors</h1>
        <p className="text-[#6B6F76] mt-3 lg:w-[600px] w-auto">
          The Victhaw Official Unity Cup 1.0 is proud to partner with these
          incredible sponsors who are helping us bring this tournament to life.
        </p>

        <div className="mt-20 ">
          <div className="mb-10">
            <h1 className="lg:text-[40px] text-[30px] text-[#C81E23] tracking-tight">
              Meet our sponsors
            </h1>
          </div>
          <div className="lg:p-6 p-0 rounded-lg lg:flex lg:flex-row flex-col gap-[150px] items-center justify-center">
            <div>
              <Image
                src="/sponsors1.jpg"
                alt="Sponsor 1"
                width={370}
                height={370}
                className="rounded-md "
              />
            </div>
            <div className="tracking-tight text-start lg:mt-0 mt-10">
              <h1 className="lg:text-[40px] text-[30px] lg:text-start text-center">
                Shopperstrend
              </h1>
              <p className="text-[#B0B3B8] lg:w-[350px] w-auto lg:text-start text-center mt-3">
                Proud sponsor of top-quality thrift fashion, keeping you stylish
                on a budget.
              </p>
              <div className="mt-7 flex flex-col lg:items-start items-center justify-center">
                <h1>See more about us</h1>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://www.instagram.com/Shopperstrend.ng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-[#C81E23] text-[24px]" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@Shopperstrend.ng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTiktok className="text-[#C81E23] text-[24px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:p-6 p-0 rounded-lg lg:flex lg:flex-row flex-col gap-[100px] items-center justify-center">
            <div className="lg:hidden block ">
              <Image
                src="/sponsors2.jpg"
                alt="Sponsor 2"
                width={370}
                height={370}
                className="rounded-md"
              />
            </div>
            <div className="tracking-tight text-start mt-5">
              <h1 className="lg:text-[40px] text-[30px] lg:text-start text-center">
                Sway Fitness
              </h1>
              <p className="text-[#B0B3B8] lg:w-[350px] w-auto lg:text-start text-center mt-3">
                Your ultimate fitness destination! Helping you achieve strength,
                endurance, and a healthier lifestyle through expert training and
                top-notch equipment.
              </p>
              <div className="mt-7 flex flex-col lg:items-start items-center justify-center">
                <h1>See more about us</h1>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://www.instagram.com/swayfitness_ng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-[#C81E23] text-[24px]" />
                  </a>
                  {/* <a
                    href="https://www.tiktok.com/@Swayfitness"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTiktok className="text-[#C81E23] text-[24px]" />
                  </a> */}
                </div>
              </div>
            </div>
            <div className="lg:block hidden ">
              <Image
                src="/sponsors2.jpg"
                alt="Sponsor 2"
                width={370}
                height={370}
                className="rounded-md"
              />
            </div>
          </div>

          <div className="lg:p-6 p-0 rounded-lg lg:flex lg:flex-row flex-col gap-[150px] items-center justify-center mt-10">
            <div>
              <Image
                src="/nayo.jpeg"
                alt="Sponsor 4"
                width={390}
                height={430}
                className="rounded-md "
              />
            </div>
            <div className="tracking-tight text-start lg:mt-0 mt-10">
              <h1 className="lg:text-[40px] text-[30px] lg:text-start text-center">
                Nayo Beauty Empire
              </h1>
              <p className="text-[#B0B3B8] lg:w-[350px] w-auto lg:text-start text-center mt-3">
                A versatile beauty expert specializing in flawless makeup &
                gele, stunning nails, lash extensions, semi-permanent brows,
                pedicure & manicure, wig revamping, and hair branding — bringing
                out the best version of you, from head to toe.
              </p>
              <div className="mt-7 flex flex-col lg:items-start items-center justify-center">
                <h1>See more about us</h1>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://api.whatsapp.com/send?phone=2348166097928"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="text-[#C81E23] text-[24px]" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@nayobeauty_empire"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTiktok className="text-[#C81E23] text-[24px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-[70px]">
          <h1 className="lg:text-[35px] text-[25px] leading-tight tracking-tight">
            More sponsors are coming <br /> - Stay tuned in
          </h1>
        </div>

        {isLive ? (
          <p className="text-[#C81E23] mt-5 font-bold text-[24px]">
            THE TOURNAMENT HAS ENDED!
          </p>
        ) : (
          <div className="mt-10">
            <p className="text-[#C81E23] font-bold text-[20px]">
              Countdown to Tournament:
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-4">
              <div className="bg-[#FAFAFA] text-black text-[20px] px-6 py-3 rounded-md">
                {formatTime(days)}
                <span className="text-[#6B6F76] ml-1 block">days</span>
              </div>
              <div className="bg-[#FAFAFA] text-black text-[20px] px-6 py-3 rounded-md">
                {formatTime(hours)}
                <span className="text-[#6B6F76] ml-1 block">hours</span>
              </div>
              <div className="bg-[#FAFAFA] text-black text-[20px] px-6 py-3 rounded-md">
                {formatTime(minutes)}
                <span className="text-[#6B6F76] ml-1 block">mins</span>
              </div>
              <div className="bg-[#FAFAFA] text-black text-[20px] px-6 py-3 rounded-md">
                {formatTime(seconds)}
                <span className="text-[#6B6F76] ml-1 block">secs</span>
              </div>
            </div>
          </div>
        )}
        <div className="mt-5">
          <Link href="/tournament/results">
            <button className="border-[#C81E23] border flex justify-center items-center text-center py-[10px] px-[20px] text-black rounded-[6px] hover:bg-white hover:text-black hover:border-[#C81E23] hover:border transition-all lg:mx-0 mx-auto">
              See all details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;
