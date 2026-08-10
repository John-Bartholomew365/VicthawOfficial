import Questions from "@/components/faq/Questions";
import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import React from "react";

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black">
        <div className="container lg:px-[30px] px-2 tracking-tight">
          <Questions />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
