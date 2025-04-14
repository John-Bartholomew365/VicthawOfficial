import Footer from "@/components/landing-page/Footer";
import LeagueTable from "@/components/tournament/results/LeagueTable";
import PlayerRankings from "@/components/tournament/results/PlayerRankings";
import ResultsHero from "@/components/tournament/results/ResultHero";
import ResultsPage from "@/components/tournament/results/Results";
import ResultsSection from "@/components/tournament/results/ResultsSection";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#FFFFFF] text-black tracking-tight">
      <div className="container lg:px-[30px] px-2 tracking-tight">
        <ResultsHero />

        <ResultsPage />
        <LeagueTable />
        {/* <PlayerRankings /> */}

        {/* <ResultsSection /> */}
      </div>
      <Footer />
    </div>
  );
};

export default page;
