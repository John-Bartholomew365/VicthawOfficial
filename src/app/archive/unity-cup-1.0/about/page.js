import AboutHero from "@/components/about/about-us/AboutHero";
import AboutUs from "@/components/about/about-us/AboutUs";
import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import React from "react";

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
