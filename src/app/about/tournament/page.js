import AboutHero from "@/components/about/about-us/AboutHero";
import AboutUs from "@/components/about/about-us/AboutUs";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#0F0F0F] text-white tracking-tight">
      <div className="container lg:px-[30px] px-2">
        <AboutHero />
        <AboutUs />
      </div>
    </div>
  );
};

export default page;
