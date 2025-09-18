import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import CertificationsHero from "@/components/the-visionary/certification/CertificationHero";
import Certifications from "@/components/the-visionary/certification/Certifications";
import FinalCerti from "@/components/the-visionary/certification/FinalCerti";
import React from "react";

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black tracking-tight">
        <CertificationsHero />
        <div className="container lg:px-[30px] px-2">
          <Certifications />
          <FinalCerti />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
