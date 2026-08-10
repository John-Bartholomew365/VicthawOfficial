import AboutHero from "@/components/about/about-us/AboutHero";
import AboutUs from "@/components/about/about-us/AboutUs";
import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import React from "react";

export const metadata = {
  title: "Unity Cup 1.0 – About",
  description:
    "About the debut Victhaw Unity Cup 1.0 — the story, the format and how the Battle of Champions began.",
  alternates: {
    canonical: "/archive/unity-cup-1.0/about",
  },
};

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black tracking-tight">
        <div className="container lg:px-[30px] px-2">
          <AboutHero />
          <AboutUs />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
