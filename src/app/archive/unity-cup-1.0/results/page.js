import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import LeagueTable from "@/components/tournament/results/LeagueTable";
import PlayerRankings from "@/components/tournament/results/PlayerRankings";
import ResultsHero from "@/components/tournament/results/ResultHero";
import ResultsPage from "@/components/tournament/results/Results";
import React from "react";

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black tracking-tight">
        <div className="container lg:px-[30px] px-2 tracking-tight">
          <ResultsHero />
          <ResultsPage />
          <LeagueTable />
          <PlayerRankings />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
