"use client";
import React, { useState, useEffect } from "react";
import DashNav from "./DashNav";
import Sidebar from "./Sidebar";

const AppWrapper = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const [active, setActive] = useState(null);
  /*   const handleToggleIcon = () => {
          setIsLightMode(!isLightMode);
      };
   */
  const handleToggleIcon = () => {
    setIsLightMode(!isLightMode);
    const newLightMode = !isLightMode;
    setIsLightMode(newLightMode);
    localStorage.setItem("isLightMode", JSON.stringify(newLightMode));
  };
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", checkMobileView);

    checkMobileView();

    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <section className="flex flex-col">
      <DashNav toggleSidebar={toggleSidebar} />
      <div className="lg:flex min-h-screen gap-[4rem] md:ml-0 sm:ml-0">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="overflow-y-auto sidebar lg:ml-[15rem] sm:ml-0 h-full px-[5%] sm:px-3">
          {children}
        </main>
      </div>
    </section>
  );
};

export default AppWrapper;
