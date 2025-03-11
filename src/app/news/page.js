import Footer from "@/components/landing-page/Footer";
import NewsUpdates from "@/components/news/NewsUpdates";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#FFFFFF] text-black tracking-tight">
      <div className="container lg:px-[30px] px-2 tracking-tight">
        <NewsUpdates />
      </div>
      <Footer />

    </div>
  );
};

export default page;
