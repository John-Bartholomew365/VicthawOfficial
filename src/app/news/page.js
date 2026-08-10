import Footer from "@/components/landing-page/Footer";
import NewsUpdates from "@/components/news/NewsUpdates";
import PageLoader from "@/components/PageLoader";
import React from "react";

export const metadata = {
  title: "News & Updates",
  description:
    "Latest news and updates from Victhaw Official — Unity Cup 2.0, Tradfit Rhythms and community events.",
  alternates: {
    canonical: "/news",
  },
};

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
