import ChooseUs from "@/components/about/vision/ChooseUs";
import VisionHero from "@/components/about/vision/VisionHero";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#0F0F0F] text-white">
      <div className="container lg:px-[30px] px-2">
        <VisionHero />
        <ChooseUs />
      </div>
    </div>
  );
};

export default page;
