"use client";
import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const GetInTouch = () => {

  return (
    <section className="py-16 " id="contact-form">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tight font-bold mb-4 text-black">
          Let’s Connect
          </h2>
          <p className="text-[16px] tracking-tight leading-tight text-[#6B6F76] m-auto lg:w-[425px] w-auto">
          For inquiries, collaborations, or to book a session, reach out through the options below for a response tailored to your needs. Whether you’re looking to train, compete, or grow, your journey starts here!
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="https://wa.me/+2349097949863"
            className="text-[#6B6F76] hover:text-[#C81E23] transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="mailto:adenijijvictor27@gmail.com"
            className="text-[#6B6F76] hover:text-[#C81E23] transition duration-300"
          >
            <MdEmail size={24} />
          </a>
          <a
            href="https://instagram.com/victhawofficial"
            className="text-[#6B6F76] hover:text-[#C81E23] transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com/Coachvhicktaw"
            className="text-[#6B6F76] hover:text-[#C81E23] transition duration-300"
          >
            <FaXTwitter size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
