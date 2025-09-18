import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import Hero from "@/components/tournament/prizes/Hero";
import ListOfPrizes from "@/components/tournament/prizes/ListOfPrizes";
// import ReadyPrize from "@/components/tournament/prizes/ReadyPrize";
import React from "react";

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black">
        <div className="container lg:px-[50px] px-2">
          <Hero />
          <ListOfPrizes />
          {/* <ReadyPrize /> */}
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
