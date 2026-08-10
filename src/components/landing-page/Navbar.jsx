"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const pathname = usePathname(); // Get current route
  const dropdownRef = useRef(null); // Ref for the dropdown element

  useEffect(() => {
    // Close menu when the page changes
    setIsMenuOpen(false);
    setOpenDropdown(null); // Close dropdowns on route change

    // Function to handle clicks outside the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pathname]);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div>
      <div className="py-4 border-b border-black/10 lg:px-[70px] px-[30px] w-full z-50 text-[#000000] bg-[#FFFFFF] fixed justify-between gap-28 font-navbar flex items-center">
        {/* Left section */}
        <div className="flex items-center gap-[80px]">
          <Link href={"/"} className="hidden md:block">
            <Image
              src="/victhaw-logo.svg"
              alt="logo"
              height={40}
              width={47}
              className="rounded-full"
            />
          </Link>

          {/* Logo visible on mobile */}
          <Link href={"/"} className="md:hidden">
            <Image
              src="/victhaw-logo.svg"
              alt="logo"
              height={40}
              width={47}
              className="rounded-full"
            />
          </Link>
        </div>

        {/* Navigation links visible on larger screens */}
        <div className="hidden md:flex gap-[30px]">
          {/* Tradfit Dropdown */}
          <div className="relative">
            <div
              className="text-sm gap-2 items-center flex cursor-pointer"
              onClick={() => toggleDropdown("about")}
            >
              <div className="font-navbar">Tradfit Rhythms</div>
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                  openDropdown === "about" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {openDropdown === "about" && (
              <div
                ref={dropdownRef}
                className="absolute top-full p-3 left-0 mt-2 w-52 bg-[#FFFFFF] text-[#000000] rounded-lg shadow-xl z-50 animate-fadeIn"
              >
                <Link
                  href="/tradfit/info"
                  className="block px-4 py-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                >
                  Info
                </Link>
                <Link
                  href="/tradfit/about"
                  className="block px-4 py-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/tradfit/gallery"
                  className="block px-4 py-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                >
                  Gallery
                </Link>
                <Link
                  href="/tradfit/sponsors"
                  className="block px-4 py-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                >
                  Sponsors
                </Link>
                <Link
                  href="/tradfit/collaboration"
                  className="block px-4 py-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                >
                  Collaboration
                </Link>
                <Link
                  href="/tradfit/faq"
                  className="block px-4 py-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                >
                  FAQs
                </Link>
                <Link
                  href="/tradfit/report"
                  className="block px-4 py-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                >
                  Report
                </Link>
              </div>
            )}
          </div>

          {/* Victhaw Official Unity Cup Dropdown */}
          <div className="relative">
            <div
              className="text-sm gap-2 items-center flex cursor-pointer"
              onClick={() => toggleDropdown("tournament")}
            >
              <div className="font-navbar">Victhaw Official Unity Cup</div>
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                  openDropdown === "tournament" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {openDropdown === "tournament" && (
              <div
                ref={dropdownRef}
                className="absolute top-full p-3 left-0 mt-2 w-52 bg-[#FFFFFF] text-[#000000] rounded-lg shadow-xl z-50 animate-fadeIn"
              >
                <Link
                  href="/tournament/about"
                  className="block px-4 py-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/tournament/rules"
                  className="block px-4 py-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                >
                  Rules & Guidelines
                </Link>
                <Link
                  href="/tournament/schedule"
                  className="block px-4 py-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                >
                  Schedule
                </Link>
                <Link
                  href="/tournament/results"
                  className="block px-4 py-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                >
                  Results
                </Link>
                <Link
                  href="/tournament/prizes"
                  className="block px-4 py-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                >
                  Prizes
                </Link>
                <Link
                  href="/tournament/faq"
                  className="block px-4 py-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                >
                  FAQs
                </Link>
                <Link
                  href="/tournament/sponsors"
                  className="block px-4 py-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                >
                  Sponsors
                </Link>
                <div className="border-t border-gray-200 mt-2 pt-2">
                  <Link
                    href="/archive/unity-cup-1.0"
                    className="block px-4 py-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                  >
                    Unity Cup 1.0 (Archive)
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* The Visionary Dropdown */}
          <div className="relative">
            <div
              className="text-sm gap-2 items-center flex cursor-pointer"
              onClick={() => toggleDropdown("visionary")}
            >
              <div className="font-navbar">The Visionary</div>
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                  openDropdown === "visionary" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {openDropdown === "visionary" && (
              <div
                ref={dropdownRef}
                className="absolute top-full p-3 left-0 mt-2 w-52 bg-[#FFFFFF] text-[#000000] rounded-lg shadow-xl z-50 animate-fadeIn"
              >
                <Link
                  href="/visionary/home"
                  className="block px-4 py-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/visionary/certification"
                  className="block px-4 py-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                >
                  Certification
                </Link>
                <Link
                  href="/visionary/services"
                  className="block px-4 py-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/visionary/contact"
                  className="block px-4 py-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile hamburger menu button */}
        <div className="md:hidden flex items-center">
          <button
            className={`flex flex-col justify-center items-center w-8 h-8 relative ${
              isMenuOpen ? "animate-bounce" : ""
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-800 absolute transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-0" : "translate-y-[-6px]"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 absolute transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 absolute transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-[6px]"
              }`}
            ></span>
          </button>
        </div>

        {/* Right section with buttons */}
        <div className="hidden md:flex space-x-7 items-center">
          {/* Login Button */}
          {/* <Link
            href={"/login"}
            className="font-navbar font-semibold border border-[#C81E23] text-[#000000] rounded-lg py-2 px-8 text-sm hover:bg-[#C81E23] hover:text-white transition-colors"
          >
            Login
          </Link> */}

          {/* Register Button */}
          <Link
            href={"/visionary/contact"}
            className="font-navbar font-semibold bg-[#C81E23] text-white py-2 px-8 text-sm rounded-lg hover:bg-white hover:text-black hover:border-[#C81E23] hover:border transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {isMenuOpen && (
        <div
          className={`md:hidden fixed inset-0 top-[72px] bg-[#FFFFFF] text-black z-50 flex flex-col items-start py-5 px-10 transition-all duration-300 ease-in-out h-[calc(100vh-72px)] ${
            isMenuOpen
              ? "animate-slideIn"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          {/* Menu links */}
          <div className="flex flex-col justify-start font-navbar items-start gap-6 w-full">
            {/* About Dropdown for Mobile */}
            <div className="w-full">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleDropdown("about-mobile")}
              >
                <div className="font-navbar text-[16px] text-[#000000] hover:text-[#C81E23] transition-colors">
                  Tradfit Rhythms
                </div>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openDropdown === "about-mobile" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {openDropdown === "about-mobile" && (
                <div className="mt-2 pl-4">
                  <Link
                    href="/tradfit/info"
                    className="block p-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                  >
                    Info
                  </Link>
                  <Link
                    href="/tradfit/about"
                    className="block p-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/tradfit/gallery"
                    className="block p-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                  >
                    Gallery
                  </Link>
                  <Link
                    href="/tradfit/sponsors"
                    className="block p-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                  >
                    Sponsors
                  </Link>
                  <Link
                    href="/tradfit/collaboration"
                    className="block p-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                  >
                    Collaboration
                  </Link>
                  <Link
                    href="/tradfit/faq"
                    className="block p-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/tradfit/report"
                    className="block p-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                  >
                    Report
                  </Link>
                </div>
              )}
            </div>

            {/* Victhaw Official Dropdown for Mobile */}
            <div className="w-full">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleDropdown("tournament-mobile")}
              >
                <div className="font-navbar text-[16px] text-[#000000] hover:text-[#C81E23] transition-colors">
                  Victhaw Official Unity Cup
                </div>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openDropdown === "tournament-mobile" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {openDropdown === "tournament-mobile" && (
                <div className="mt-2 pl-4">
                  <Link
                    href="/tournament/about"
                    className="block p-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/tournament/rules"
                    className="block p-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                  >
                    Rules & Guidelines
                  </Link>
                  <Link
                    href="/tournament/schedule"
                    className="block p-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                  >
                    Schedule
                  </Link>
                  <Link
                    href="/tournament/results"
                    className="block p-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                  >
                    Results
                  </Link>
                  <Link
                    href="/tournament/prizes"
                    className="block p-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                  >
                    Prizes
                  </Link>
                  <Link
                    href="/tournament/faq"
                    className="block p-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/tournament/sponsors"
                    className="block p-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                  >
                    Sponsors
                  </Link>
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <Link
                      href="/archive/unity-cup-1.0"
                      className="block p-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                    >
                      Unity Cup 1.0 (Archive)
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Visionary Dropdown for Mobile */}
            <div className="w-full">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleDropdown("visionary-mobile")}
              >
                <div className="font-navbar text-[16px] text-[#000000] hover:text-[#C81E23] transition-colors">
                  The Visionary
                </div>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openDropdown === "visionary-mobile" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {openDropdown === "visionary-mobile" && (
                <div className="mt-2 pl-4">
                  <Link
                    href="/visionary/home"
                    className="block p-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/visionary/certification"
                    className="block p-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                  >
                    Certification
                  </Link>
                  <Link
                    href="/visionary/services"
                    className="block p-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                  >
                    Services
                  </Link>
                  <Link
                    href="/visionary/contact"
                    className="block p-2 text-[14px] text-[#6B6F76] hover:bg-[#FAFAFA] transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              )}
            </div>

            {/* Login and Register Buttons for Mobile */}
            <div className="flex flex-col gap-4 items-center mt-9 w-full">
              {/* <Link
                href={"/login"}
                className="font-navbar font-semibold w-full text-center border border-[#C81E23] text-[#C81E23] rounded-lg py-2 px-8 text-sm hover:bg-[#C81E23] hover:text-white transition-colors"
              >
                Login
              </Link> */}
              <Link
                href={"/visionary/contact"}
                className="font-navbar font-semibold w-full text-center bg-[#C81E23] text-white py-2 px-8 text-sm rounded-lg hover:bg-white hover:text-[#000000] hover:border-[#C81E23] hover:border transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
