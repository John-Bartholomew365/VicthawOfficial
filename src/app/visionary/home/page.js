import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import ImpactSection from "@/components/the-visionary/home/ImpactSection";
import JourneyStarts from "@/components/the-visionary/home/JournerStarts";
import JoinMovement from "@/components/the-visionary/home/Services";
import Victor from "@/components/the-visionary/home/Victor";
import WhyVicthaw from "@/components/the-visionary/home/WhyVicthaw";
import React from "react";

export const metadata = {
  title: "The Visionary",
  description:
    "The Visionary by Victhaw Official — empowering growth through certification, professional services and community impact.",
  alternates: {
    canonical: "/visionary/home",
  },
};

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black tracking-tight">
        <div className="container lg:px-[30px] px-0">
          <Victor />
          <WhyVicthaw />
          <ImpactSection />
          <JoinMovement />
          <JourneyStarts />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
