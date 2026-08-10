import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import Rules from "@/components/unity-cup-2/Rules";
import React from "react";

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black">
        <div className="container lg:px-[50px] px-2">
          <Rules />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
