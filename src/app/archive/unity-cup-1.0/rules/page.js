import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import Hero from "@/components/tournament/rules/Hero";
import React from "react";

export const metadata = {
  title: "Unity Cup 1.0 – Rules & Guidelines",
  description:
    "The rules and guidelines that governed the Victhaw Unity Cup 1.0 tournament.",
  alternates: {
    canonical: "/archive/unity-cup-1.0/rules",
  },
};

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black">
        <div className="container lg:px-[50px] px-2">
          <Hero />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
