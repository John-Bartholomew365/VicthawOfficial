import Footer from "@/components/landing-page/Footer";
import CommunityImpact from "@/components/the-visionary/contact/CommunityImpact";
import ContactHero from "@/components/the-visionary/contact/ContactHero";
import GetInTouch from "@/components/the-visionary/contact/GetInTouch";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#0F0F0F] text-white tracking-tight">
      <ContactHero />
      <div className="container lg:px-[30px] px-2">
        <CommunityImpact />
        <GetInTouch />
      </div>
      <Footer />
    </div>
  );
};

export default page;
