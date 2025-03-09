import Footer from "@/components/landing-page/Footer";
import PrivacyPolicy from "@/components/policy/PrivacyPolicy";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#0F0F0F] text-white tracking-tight">
      <div className="container lg:px-[30px] px-2">
        <PrivacyPolicy />
      </div>
      <Footer />
    </div>
  );
};

export default page;
