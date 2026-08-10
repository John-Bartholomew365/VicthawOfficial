import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import Hero from "@/components/tournament/prizes/Hero";
import ListOfPrizes from "@/components/tournament/prizes/ListOfPrizes";
import React from "react";

export const metadata = {
  title: "Unity Cup 1.0 – Prizes",
  description:
    "The prizes and awards won at the Victhaw Unity Cup 1.0 tournament.",
  alternates: {
    canonical: "/archive/unity-cup-1.0/prizes",
  },
};

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black">
        <div className="container lg:px-[50px] px-2">
          <Hero />
          <ListOfPrizes />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
