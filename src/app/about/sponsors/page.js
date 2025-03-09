import Hero from "@/components/about/sponsors/Hero";
import Footer from "@/components/landing-page/Footer";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#0F0F0F] text-white">
      <div className="container lg:px-[30px] px-2">
        <Hero />
      </div>
      <Footer />

    </div>
  );
};

export default page;
