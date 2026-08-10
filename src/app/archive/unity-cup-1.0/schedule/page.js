import Fixtures from "@/components/tournament/schedule/Fixtures";
import Hero from "@/components/tournament/schedule/Hero";
import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import React from "react";

export const metadata = {
  title: "Unity Cup 1.0 – Schedule",
  description:
    "The full match schedule from the Victhaw Unity Cup 1.0 — fixtures, dates and kick-off times.",
  alternates: {
    canonical: "/archive/unity-cup-1.0/schedule",
  },
};

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black">
        <div className="container lg:px-[50px] px-2">
          <Hero />
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
