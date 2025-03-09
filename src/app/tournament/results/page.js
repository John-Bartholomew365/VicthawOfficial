import Footer from "@/components/landing-page/Footer";
import PlayerRankings from "@/components/tournament/results/PlayerRankings";
import ResultsHero from "@/components/tournament/results/ResultHero";
import ResultsPage from "@/components/tournament/results/Results";
import ResultsSection from "@/components/tournament/results/ResultsSection";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#0F0F0F] text-white tracking-tight">
      <div className="container lg:px-[30px] px-2 tracking-tight">
        <ResultsHero />

        {/* <ResultsPage /> */}
        {/* <PlayerRankings /> */}
        {/* <ResultsSection /> */}
        <Footer />
      </div>
    </div>
  );
};

export default page;
