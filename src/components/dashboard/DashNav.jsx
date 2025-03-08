"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TbSearch, TbX } from "react-icons/tb";
import { BsMoon, BsSun } from "react-icons/bs";
import Link from "next/link";
import { IoHelpCircleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaBell } from "react-icons/fa";
import { useRouter } from "next/navigation";

const DashNav = ({ handleToggleIcon, icon, toggleSidebar }) => {
  const router = useRouter()
  const [openSideBar, setOpenSideBar] = useState(false);
  const [login, setLogin] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Your tournament payment has been confirmed",
      type: "payment",
    },
    {
      id: 2,
      message: "Check the fixture schedule to check your team's next fixture",
      type: "message",
    },
    { id: 3, message: "You're all set", type: "follower" },
  ]);

  const handleClick = () => {
    setOpenSideBar(!openSideBar);
  };

  useEffect(() => {
    const closeStates = () => {
      setOpenSideBar(false);
      setLogin(false);
      setNotificationsOpen(false);
    };
    document.body.addEventListener("click", closeStates);
    return () => {
      document.removeEventListener("click", closeStates);
    };
  }, []);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    toggleSidebar();
  };

  const handleuser = () => {
    setLogin(!login);
  };

  const handleNotifications = (event) => {
    event.stopPropagation();
    setNotificationsOpen(!notificationsOpen);
  };

  const logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('userData')
    router.push("/login")
  }
  return (
    <div className="bg-black border-b-2 border-white fixed w-full top-0  border-opacity-10 z-[5000]">
      <div className="px-[5%] flex items-center justify-between  w-full py-3">
        <div className="flex items-center gap-3">
          <Link
            href={"/dashboard"}
            // className="flex items-center gap-3"
          >
            <Image
              src={"/victhaw-logo.svg"}
              height={50}
              width={57}
              alt=""
              className="lg:w-[57px] w-[40%]"
            />
          </Link>
          <h1 className="text-white lg:text-[25px] text-[20px]">
            Victhaw Official
          </h1>
          <div className="pl-20 sm:hidden"></div>
        </div>

        <div className="flex gap-3 items-center w-[55%] justify-end">
          
          <div className="">
            <button onClick={logout} className="bg-[#C81E23] py-2 px-7 rounded-md text-white">
              Logout
            </button>
          </div>
          <button className=" text-black flex flex-row gap-1">
            <div className="text-[20px] sm:hidden">
              <IoHelpCircleOutline />
            </div>
          </button>
          {/* <div className="lg:flex relative z-[1000] items-center gap-3 hidden">
            <Link
              href={"https://smartpaygenie.com/account/login"}
              target="_blank"
              className="bg-[var(--dark-color)]  text-[14px] text-[#000000] font-bold py-2 px-6 rounded-full border"
            >
              Login
            </Link>
            <Link
              href={"https://smartpaygenie.com/account/register"}
              target="_blank"
              className="bg-[#FF4F18] text-[14px] text-[#ffffff] font-bold py-2 px-6 rounded-full border"
            >
              Sign up
            </Link>
          </div> */}
          <div className="hidden md:flex space-x-7 items-center">
            {/* Login Button */}
            {/* <Link
              href={"/login"}
              className="font-navbar font-semibold border border-[#C81E23] text-white rounded-lg py-2 px-8 text-sm hover:bg-[#C81E23] hover:text-white"
            >
              Login
            </Link> */}

            {/* Register Button */}
            {/* <Link
              href={"register"}
              className="font-navbar font-semibold bg-[#C81E23] text-white py-2 px-8 text-sm rounded-lg hover hover:bg-black hover:text-white hover:border-[#C81E23] hover:border"
            >
              Register
            </Link> */}
          </div>
          <div
            onClick={handleuser}
            className="lg:hidden block cursor-pointer text-3xl text-[var(--text-color)] relative"
          >
            <CgProfile />
            {login && (
              <div className="absolute flex flex-col  top-11 left-[-20px] ">
                {/* <span className="w-[15px] h-[15px] bg-[var(--secondary-color)] border-2 border-[var(--border-color)] absolute rotate-45 top-[-8px]  z-[400] left-6"></span> */}
                <div className="flex flex-col z-[500] border-2 bg-white rounded-lg px-5 py-1">
                  <Link href={""} target="_blank" className="text-[15px]">
                    Login
                  </Link>
                  <Link href={""} target="_blank" className="text-[15px]">
                    Sign up
                  </Link>
                </div>
              </div>
            )}
          </div>
          {/* <FaBars size={24} className='lg:hidden sm:block' onClick={toggleSidebar} /> */}

          <div
            className="lg:hidden block text-[var(--text-color)] text-3xl cursor-pointer"
            onClick={handleToggleSidebar}
          >
            {isSidebarOpen ? (
              <TbX className="text-white" />
            ) : (
              <RxHamburgerMenu className="text-white" />
            )}
          </div>
        </div>
      </div>
      <div className="border w-full border-[#9595951A]"></div>
    </div>
  );
};

export default DashNav;
