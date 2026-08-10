import About from "@/components/unity-cup-2/About";
import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import React from "react";

export const metadata = {
  title: "About Unity Cup 2.0",
  description:
    "Everything about the Victhaw Unity Cup 2.0 — tournament dates, match formats, the 8 competing teams and the battle for the trophy.",
  alternates: {
    canonical: "/tournament/about",
  },
};

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black tracking-tight">
        <div className="container lg:px-[30px] px-2">
          <About />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
