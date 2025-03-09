import ChooseUs from "@/components/about/vision/ChooseUs";
import VisionHero from "@/components/about/vision/VisionHero";
import Footer from "@/components/landing-page/Footer";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#0F0F0F] text-white">
      <div className="container lg:px-[30px] px-2">
        <VisionHero />
        <ChooseUs />
        <Footer />
      </div>
    </div>
  );
};

export default page;
