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
      <div className="py-4 lg:px-[70px] px-[30px] w-full z-50 text-white bg-[#000000] fixed justify-between gap-28 font-navbar flex items-center">
        {/* Left section */}
        <div className="flex items-center gap-[80px]">
          <Link href={"/"} className="hidden md:block">
            <Image
              src="/victhaw-logo.svg"
              alt="logo"
              height={40}
              width={47}
              className="rounded-full"
              style={{ boxShadow: "0 12px 0 rgba(0, 0, 0, 0.3)" }} // Bottom-only shadow
            />
          </Link>

          {/* Logo visible on mobile */}
          <Link href={"/"} className="md:hidden">
            <Image src="/victhaw-logo.svg" alt="logo" height={40} width={47} />
          </Link>
        </div>

        {/* Navigation links visible on larger screens */}
        <div className="hidden md:flex gap-[40px]">
          {/* Tournament Info Dropdown */}
          <div className="relative">
            <div
              className="text-sm gap-2 items-center flex cursor-pointer"
              onClick={() => toggleDropdown("tournament")}
            >
              <div className="font-navbar">Tournament Info</div>
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${
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
                className="absolute top-full p-3 left-0 mt-2 w-52 bg-[#000000] text-white rounded-lg shadow-xl z-50"
              >
                <Link
                  href="/tournament/team"
                  className="block px-4 py-2 hover:bg-[#0F0F0F]"
                >
                  Team
                </Link>
                <Link
                  href="/tournament/rules"
                  className="block px-4 py-2 hover:bg-[#0F0F0F]"
                >
                  Rules & Guidelines
                </Link>
                <Link
                  href="/tournament/schedule"
                  className="block px-4 py-2 hover:bg-[#0F0F0F]"
                >
                  Schedule
                </Link>
                <Link
                  href="/tournament/results"
                  className="block px-4 py-2 hover:bg-[#0F0F0F]"
                >
                  Results
                </Link>
                <Link
                  href="/tournament/prizes"
                  className="block px-4 py-2 hover:bg-[#0F0F0F]"
                >
                  Prizes
                </Link>
              </div>
            )}
          </div>

          {/* About Dropdown */}
          <div className="relative">
            <div
              className="text-sm gap-2 items-center flex cursor-pointer"
              onClick={() => toggleDropdown("about")}
            >
              <div className="font-navbar">About</div>
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${
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
                className="absolute top-full p-3 left-0 mt-2 w-52 bg-[#000000] text-white rounded-lg shadow-xl z-50"
              >
                <Link
                  href="/about/tournament"
                  className="block px-4 py-2 hover:bg-[#0F0F0F]"
                >
                  The Tournament
                </Link>

                <Link
                  href="/about/vision"
                  className="block px-4 py-2 hover:bg-[#0F0F0F]"
                >
                  Victhaw Vision
                </Link>
                <Link
                  href="/about/sponsors"
                  className="block px-4 py-2 hover:bg-[#0F0F0F]"
                >
                  Sponsors
                </Link>
                <Link
                  href="/about/faq"
                  className="block px-4 py-2 hover:bg-[#0F0F0F]"
                >
                  FAQs
                </Link>
                <Link
                  href="/about/contact"
                  className="block px-4 py-2 hover:bg-[#0F0F0F]"
                >
                  Contact
                </Link>
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
                className={`w-4 h-4 ml-1 transition-transform ${
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
                className="absolute top-full p-3 left-0 mt-2 w-52 bg-[#000000] text-white rounded-lg shadow-xl z-50"
              >
                <Link
                  href="/visionary/home"
                  className="block px-4 py-2 hover:bg-[#0F0F0F]"
                >
                  Home
                </Link>
                <Link
                  href="/visionary/certification"
                  className="block px-4 py-2 hover:bg-[#0F0F0F]"
                >
                  Certification
                </Link>
                <Link
                  href="/visionary/services"
                  className="block px-4 py-2 hover:bg-[#0F0F0F]"
                >
                  Services
                </Link>
                <Link
                  href="/visionary/contact"
                  className="block px-4 py-2 hover:bg-[#0F0F0F]"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile hamburger menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(true)}>
            <Image src="/toggle-btn.svg" alt="menu" height={30} width={30} />
          </button>
        </div>

        {/* Right section with buttons */}
        <div className="hidden md:flex space-x-7 items-center">
          {/* Login Button */}
          <Link
            href={"/login"}
            className="font-navbar font-semibold border border-[#C81E23] text-white rounded-lg py-2 px-8 text-sm hover:bg-[#C81E23] hover:text-white"
          >
            Login
          </Link>

          {/* Register Button */}
          <Link
            href={"/register"}
            className="font-navbar font-semibold bg-[#C81E23] text-white py-2 px-8 text-sm rounded-lg hover:bg-black hover:text-white hover:border-[#C81E23] hover:border"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#0F0F0F] text-white z-50 flex flex-col items-start py-5 px-10">
          <Link href={"/"} className="md:hidden">
            <Image
              src="/victhaw-logo.svg"
              alt="logo"
              height={40}
              width={47}
              className="rounded-[100%]"
            />
          </Link>
          {/* Close button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5"
          >
            <Image src="/x2.svg" alt="close" height={30} width={30} />
          </button>

          {/* Menu links */}
          <div className="flex flex-col justify-start font-navbar items-start gap-6 mt-10 w-full">
            {/* Tournament Info Dropdown for Mobile */}
            <div className="w-full">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleDropdown("tournament-mobile")}
              >
                <div className="font-navbar">Tournament Info</div>
                <svg
                  className={`w-4 h-4 transition-transform ${
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
                    href="/tournament/team"
                    className="block p-2 hover:bg-[#000000]"
                  >
                    Team
                  </Link>
                  <Link
                    href="/tournament/rules"
                    className="block p-2 hover:bg-[#000000]"
                  >
                    Rules & Guidelines
                  </Link>
                  <Link
                    href="/tournament/schedule"
                    className="block p-2 hover:bg-[#000000]"
                  >
                    Schedule
                  </Link>
                  <Link
                    href="/tournament/results"
                    className="block p-2 hover:bg-[#000000]"
                  >
                    Results
                  </Link>
                  <Link
                    href="/tournament/prizes"
                    className="block p-2 hover:bg-[#000000]"
                  >
                    Prizes
                  </Link>
                </div>
              )}
            </div>

            {/* About Dropdown for Mobile */}
            <div className="w-full">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleDropdown("about-mobile")}
              >
                <div className="font-navbar">About</div>
                <svg
                  className={`w-4 h-4 transition-transform ${
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
                    href="/about/tournament"
                    className="block p-2 hover:bg-[#000000]"
                  >
                    The Tournament
                  </Link>

                  <Link
                    href="/about/vision"
                    className="block p-2 hover:bg-[#000000]"
                  >
                    Victhaw Vision
                  </Link>
                  <Link
                    href="/about/sponsors"
                    className="block p-2 hover:bg-[#000000]"
                  >
                    Sponsors
                  </Link>
                  <Link
                    href="/about/faq"
                    className="block p-2 hover:bg-[#000000]"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/about/contact"
                    className="block p-2 hover:bg-[#000000]"
                  >
                    Contact
                  </Link>
                </div>
              )}
            </div>

            {/* Visionary Dropdown for Mobile */}
            <div className="w-full">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleDropdown("visionary-mobile")}
              >
                <div className="font-navbar">The Visionary</div>
                <svg
                  className={`w-4 h-4 transition-transform ${
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
                    className="block p-2 hover:bg-[#000000]"
                  >
                    Home
                  </Link>
                  <Link
                    href="/visionary/certification"
                    className="block p-2 hover:bg-[#000000]"
                  >
                    Certification
                  </Link>
                  <Link
                    href="/visionary/services"
                    className="block p-2 hover:bg-[#000000]"
                  >
                    Services
                  </Link>
                  <Link
                    href="/visionary/contact"
                    className="block p-2 hover:bg-[#000000]"
                  >
                    Contact
                  </Link>
                </div>
              )}
            </div>

            {/* Login and Register Buttons for Mobile */}
            <div className="flex flex-col gap-4 items-center mt-6 w-full">
              <Link
                href={"/login"}
                className="font-navbar font-semibold w-full text-center border border-[#C81E23] text-[#C81E23] rounded-lg py-2 px-8 text-sm hover:bg-[#C81E23] hover:text-white"
              >
                Login
              </Link>
              <Link
                href={"register"}
                className="font-navbar font-semibold w-full text-center bg-[#C81E23] text-white py-2 px-8 text-sm rounded-lg hover:bg-black hover:text-[#FFFFFF] hover:border-[#C81E23] hover:border"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
