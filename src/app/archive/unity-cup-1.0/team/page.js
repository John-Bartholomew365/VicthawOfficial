import TeamHero from "@/components/about/teams/TeamHero";
import TeamList from "@/components/archive/unity-cup-1.0/TeamList";
import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import React from "react";

export const metadata = {
  title: "Unity Cup 1.0 – Teams",
  description:
    "The teams that competed in the Victhaw Unity Cup 1.0 tournament.",
  alternates: {
    canonical: "/archive/unity-cup-1.0/team",
  },
};

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black">
        <div className="container lg:px-[30px] px-2">
          <TeamHero />
          <TeamList />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
