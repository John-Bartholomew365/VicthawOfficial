import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import ListOfPrizes from "@/components/unity-cup-2/ListOfPrizes";
import PrizesHero from "@/components/unity-cup-2/PrizesHero";
import React from "react";

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
