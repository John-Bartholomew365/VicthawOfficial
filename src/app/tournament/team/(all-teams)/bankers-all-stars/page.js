import { Bankers } from "@/components/about/teams/(all-teams)/bankers/Bankers";
import Footer from "@/components/landing-page/Footer";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#FFFFFF] text-black">
      <div className="container lg:px-[30px] px-2">
        <Bankers />
      </div>
      <Footer />
    </div>
  );
};

export default page;
