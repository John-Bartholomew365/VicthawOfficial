import Hero from "@/components/about/sponsors/Hero";
import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import React from "react";

export const metadata = {
  title: "Unity Cup 1.0 – Sponsors",
  description:
    "The sponsors and partners who supported the Victhaw Unity Cup 1.0.",
  alternates: {
    canonical: "/archive/unity-cup-1.0/sponsors",
  },
};

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black">
        <div className="container lg:px-[30px] px-2">
          <Hero />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
