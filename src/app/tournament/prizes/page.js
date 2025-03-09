import Footer from "@/components/landing-page/Footer";
import Hero from "@/components/tournament/prizes/Hero";
import ListOfPrizes from "@/components/tournament/prizes/ListOfPrizes";
import ReadyPrize from "@/components/tournament/prizes/ReadyPrize";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#0F0F0F] text-white">
      <div className="container lg:px-[50px] px-2">
        <Hero />
        <ListOfPrizes />
        <ReadyPrize />
      </div>
      <Footer />

    </div>
  );
};

export default page;
