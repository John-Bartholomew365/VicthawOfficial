import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import TeamHero from "@/components/unity-cup-2/TeamHero";
import TeamList from "@/components/unity-cup-2/TeamList";
import React from "react";

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
