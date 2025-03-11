import AboutHero from "@/components/about/about-us/AboutHero";
import AboutUs from "@/components/about/about-us/AboutUs";
import Footer from "@/components/landing-page/Footer";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#FFFFFF] text-black tracking-tight">
      <div className="container lg:px-[30px] px-2">
        <AboutHero />
        <AboutUs />
      </div>
      <Footer/>

    </div>
  );
};

export default page;
