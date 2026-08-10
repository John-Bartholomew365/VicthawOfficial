import ArchiveOverview from "@/components/archive/unity-cup-1.0/ArchiveOverview";
import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import React from "react";

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black">
        <div className="container lg:px-[30px] px-2">
          <ArchiveOverview />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
