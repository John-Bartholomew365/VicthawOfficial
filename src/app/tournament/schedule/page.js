import Footer from "@/components/landing-page/Footer";
import Fixtures from "@/components/tournament/schedule/Fixtures";
import Hero from "@/components/tournament/schedule/Hero";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#0F0F0F] text-white">
      <div className="container lg:px-[50px] px-2">
        <Hero />
        <Fixtures />
        <Footer />
      </div>
    </div>
  );
};

export default page;
