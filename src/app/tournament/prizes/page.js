import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import ListOfPrizes from "@/components/unity-cup-2/ListOfPrizes";
import PrizesHero from "@/components/unity-cup-2/PrizesHero";
import React from "react";

export const metadata = {
  title: "Prizes & Awards – Unity Cup 2.0",
  description:
    "Prizes and awards up for grabs at Unity Cup 2.0 — cash prizes, medals and recognition for the champions.",
  alternates: {
    canonical: "/tournament/prizes",
  },
};

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black">
        <div className="container lg:px-[50px] px-2">
          <PrizesHero />
          <ListOfPrizes />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
