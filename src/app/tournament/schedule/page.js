import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import Fixtures from "@/components/unity-cup-2/Fixtures";
import ScheduleHero from "@/components/unity-cup-2/ScheduleHero";
import React from "react";

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black">
        <div className="container lg:px-[50px] px-2">
          <ScheduleHero />
        </div>
        <div className="container">
          <Fixtures />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
