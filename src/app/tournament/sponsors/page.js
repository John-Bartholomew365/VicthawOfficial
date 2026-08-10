import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import Sponsors from "@/components/unity-cup-2/Sponsors";
import React from "react";

export const metadata = {
  title: "Sponsors – Unity Cup 2.0",
  description:
    "Meet the sponsors powering Unity Cup 2.0 and learn how to partner with Victhaw Official.",
  alternates: {
    canonical: "/tournament/sponsors",
  },
};

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black">
        <div className="container lg:px-[30px] px-2">
          <Sponsors />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
