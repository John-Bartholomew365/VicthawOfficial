"use client";
import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { edition } from "@/data/unity-cup-2";

const Sponsors = () => {
  return (
    <div className="my-[100px] px-5">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-[30px] lg:text-[45px] font-bold">Our Sponsors</h1>
        <p className="text-[#6B6F76] mt-3 lg:w-[600px] w-auto">
          {edition.fullTitle} is proud to partner with incredible sponsors who
          help bring this tournament to life. Sponsors for Unity Cup 2.0 will be
          announced here soon.
        </p>

        <div className="mt-20">
          <h1 className="lg:text-[40px] text-[30px] text-[#C81E23] tracking-tight">
            Sponsors coming soon
          </h1>
          <div className="mt-10 max-w-xl mx-auto bg-[#FAFAFA] rounded-xl p-10 shadow-md">
            <div className="w-20 h-20 bg-[#C81E23]/10 rounded-full flex items-center justify-center mx-auto">
              <Image
                src="/victhaw-logo.svg"
                alt="Victhaw Official"
                height={60}
                width={60}
                className="rounded-full"
              />
            </div>
            <h2 className="text-[22px] font-bold mt-6">
              Become a Partner
            </h2>
            <p className="text-[#6B6F76] mt-3">
              Align your brand with an unforgettable football tournament that
              unites communities through sports. Sponsorship packages and brand
              activations are available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="https://wa.me/+2348106163804"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#C81E23] text-white py-3 px-6 rounded-md hover:bg-[#A5191E] transition"
              >
                <FaWhatsapp size={18} />
                Chat with us
              </a>
              <a
                href="mailto:victhawofficial@gmail.com"
                className="flex items-center justify-center gap-2 border border-[#C81E23] text-[#C81E23] py-3 px-6 rounded-md hover:bg-[#C81E23] hover:text-white transition"
              >
                <MdEmail size={18} />
                Email us
              </a>
            </div>
          </div>
        </div>

        <div className="my-[70px]">
          <h1 className="lg:text-[35px] text-[25px] leading-tight tracking-tight">
            More sponsors are coming <br /> - Stay tuned in
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
