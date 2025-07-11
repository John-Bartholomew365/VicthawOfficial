import { UnilorinQuarters } from "@/components/about/teams/(all-teams)/unilorin/Unilorin";
import Footer from "@/components/landing-page/Footer";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#FFFFFF] text-black">
      <div className="container lg:px-[30px] px-2">
        <UnilorinQuarters />
      </div>
      <Footer />
    </div>
  );
};

export default page;
