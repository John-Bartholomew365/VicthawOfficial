import TeamHero from "@/components/about/teams/TeamHero";
import TeamList from "@/components/about/teams/TeamList";
import Footer from "@/components/landing-page/Footer";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#0F0F0F] text-white">
      <div className="container lg:px-[30px] px-2">
        <TeamHero />
        {/* <TeamList /> */}
        <Footer />
      </div>
    </div>
  );
};

export default page;
