import Footer from "@/components/landing-page/Footer";
import TermsAndConditions from "@/components/terms/TermsConditions";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#FFFFFF] text-black tracking-tight">
      <div className="container lg:px-[30px] px-2">
        <TermsAndConditions />
      </div>
      <Footer />
    </div>
  );
};

export default page;
