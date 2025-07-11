import { Leo } from "@/components/about/teams/(all-teams)/Leo/Leo";
import Footer from "@/components/landing-page/Footer";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#FFFFFF] text-black">
      <div className="container lg:px-[30px] px-2">
        <Leo />
      </div>
      <Footer />
    </div>
  );
};

export default page;
