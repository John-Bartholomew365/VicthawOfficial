import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import CertificationsHero from "@/components/the-visionary/certification/CertificationHero";
import Certifications from "@/components/the-visionary/certification/Certifications";
import FinalCerti from "@/components/the-visionary/certification/FinalCerti";
import React from "react";

export const metadata = {
  title: "Certification – The Visionary",
  description:
    "Get certified with The Visionary — structured certification programmes by Victhaw Official that build real-world skills.",
  alternates: {
    canonical: "/visionary/certification",
  },
};

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
