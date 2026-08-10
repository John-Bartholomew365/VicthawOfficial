import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import Hero from "@/components/tournament/rules/Hero";
import React from "react";

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black">
        <div className="container lg:px-[50px] px-2">
          <Hero />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
