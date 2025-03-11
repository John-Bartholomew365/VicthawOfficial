import Footer from "@/components/landing-page/Footer";
import CertificationsHero from "@/components/the-visionary/certification/CertificationHero";
import Certifications from "@/components/the-visionary/certification/Certifications";
import FinalCerti from "@/components/the-visionary/certification/FinalCerti";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#FFFFFF] text-black tracking-tight">
      <CertificationsHero />
      <div className="container lg:px-[30px] px-2">
        <Certifications />
        <FinalCerti />
      </div>
      <Footer />

    </div>
  );
};

export default page;
