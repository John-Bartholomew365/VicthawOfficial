import ArchiveOverview from "@/components/archive/unity-cup-1.0/ArchiveOverview";
import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import React from "react";

export const metadata = {
  title: "Unity Cup 1.0 Archive",
  description:
    "Relive the first Victhaw Unity Cup 1.0 — teams, results, schedule, prizes and highlights from the debut tournament.",
  alternates: {
    canonical: "/archive/unity-cup-1.0",
  },
};

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
