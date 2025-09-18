import Footer from "@/components/landing-page/Footer";
import NewsUpdates from "@/components/news/NewsUpdates";
import PageLoader from "@/components/PageLoader";
import React from "react";

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black tracking-tight">
        <div className="container lg:px-[30px] px-2 tracking-tight">
          <NewsUpdates />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
