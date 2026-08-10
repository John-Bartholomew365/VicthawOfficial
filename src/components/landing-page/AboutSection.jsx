"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { edition } from "@/data/unity-cup-2";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="my-[60px] lg:my-[120px] px-4">
      <div>
        <h1 className="text-center font-semibold text-[#C81E23] lg:text-[40px] text-[28px] tracking-tight">
          {edition.fullTitle}
        </h1>
        <p className="text-center text-lg text-[#6B6F76] mt-3 lg:w-[470px] w-auto mx-auto leading-tight">
          A bigger, bolder edition of the football tournament that unites
          communities and showcases incredible talent!
        </p>
      </div>

      {/* Tournament Message */}
      <div className="flex flex-col items-center justify-center mt-8 gap-4">
        <div className="bg-green-600 text-white lg:px-6 px-4 py-3 rounded-full lg:text-xl text-[16px] font-bold">
          🏆 8 TEAMS. 2 GROUPS. 1 CHAMPION. 🏆
        </div>
        <Link href="/tournament/schedule">
          <button className="bg-white border-2 border-[#C81E23] text-[#C81E23] hover:bg-gray-50 transition-colors font-medium py-2 px-5 rounded-lg flex items-center gap-2 lg:text-[16px] text-[15px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            VIEW FULL SCHEDULE
          </button>
        </Link>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 justify-center mt-10 bg-[#FAFAFA] w-fit m-auto py-3 px-5 lg:px-8 rounded-[40px]">
        {["about", "vision"].map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer rounded-[20px] py-[10px] px-[20px] lg:px-[30px] ${
              activeTab === tab
                ? "bg-[#C90A1D] text-[#FFFFFF]"
                : "text-[#000000]"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-[50px] lg:gap-[100px] mt-[60px]">
        {activeTab === "about" ? (
          <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[100px] text-center lg:text-left">
            <Image
              src="/use2.jpeg"
              alt="About"
              height={600}
              width={494}
              className="rounded-md mx-auto"
              priority
            />
            <div>
              <h1 className="text-[23px] font-[600] lg:text-[34px] tracking-tight">
                The Next Chapter Begins
              </h1>
              <p className="lg:w-[350px] w-full text-[#6B6F76] tracking-tight mt-2">
                Unity Cup 2.0 takes the tournament to the next level at{" "}
                {edition.venue}, with 8 teams split into two competitive
                groups.
              </p>
              <p className="text-[#6B6F76] tracking-tight mt-2 mb-7 lg:w-[350px] w-full">
                Group stage drama, semi-final showdowns, and a grand final that
                will crown the new champion.
              </p>
              <Link href="/tournament/team">
                <button className="bg-[#C81E23] hover:bg-[#A5161E] transition-colors py-[10px] px-[20px] text-white rounded-[6px]">
                  Meet the Teams
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col-reverse lg:flex-row-reverse gap-[50px] lg:gap-[100px] text-center lg:text-left">
            <Image
              src="/mission.svg"
              alt="Mission"
              height={370}
              width={464}
              className="rounded-md mx-auto"
              priority
            />
            <div>
              <h1 className="text-[25px] lg:text-[34px] tracking-tight">
                Our Vision Continues
              </h1>
              <p className="lg:w-[400px] w-full text-[#6B6F76] tracking-tight mt-2">
                Building on the success of Unity Cup 1.0, we remain committed
                to uniting communities through the power of football.
              </p>
              <ul
                className="ml-7 mt-3 mb-7 tracking-tight text-left"
                style={{ listStyleType: "disc" }}
              >
                <li className="text-[#C81E23]">
                  <span className="text-[#000000]">
                    Bring more teams and communities together than ever before
                  </span>
                </li>
                <li className="text-[#C81E23]">
                  <span className="text-[#000000]">
                    Celebrate competitive spirit and fair play at its finest
                  </span>
                </li>
                <li className="text-[#C81E23]">
                  <span className="text-[#000000]">
                    Discover and showcase the next generation of football
                    talent
                  </span>
                </li>
              </ul>
              <Link href="/tournament/about">
                <button className="bg-[#C81E23] hover:bg-[#A5161E] transition-colors py-[10px] px-[20px] text-white rounded-[6px]">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
