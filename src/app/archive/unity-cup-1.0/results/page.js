import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import LeagueTable from "@/components/tournament/results/LeagueTable";
import PlayerRankings from "@/components/tournament/results/PlayerRankings";
import ResultsHero from "@/components/tournament/results/ResultHero";
import ResultsPage from "@/components/tournament/results/Results";
import React from "react";

export const metadata = {
  title: "Unity Cup 1.0 – Results & Standings",
  description:
    "Final results, standings and player rankings from the Victhaw Unity Cup 1.0.",
  alternates: {
    canonical: "/archive/unity-cup-1.0/results",
  },
};

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
