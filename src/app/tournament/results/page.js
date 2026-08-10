import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import LeagueTable from "@/components/unity-cup-2/LeagueTable";
import ResultsHero from "@/components/unity-cup-2/ResultsHero";
import ResultsPage from "@/components/unity-cup-2/Results";
import TopScorers from "@/components/unity-cup-2/TopScorers";
import React from "react";

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black tracking-tight">
        <div className="container lg:px-[30px] px-2 tracking-tight">
          <ResultsHero />
          <ResultsPage />
          <LeagueTable />
          <TopScorers />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
