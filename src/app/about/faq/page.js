import Questions from "@/components/faq/Questions";
import Footer from "@/components/landing-page/Footer";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#FFFFFF] text-black">
      <div className="container lg:px-[30px] px-2 tracking-tight">
        <Questions />
      </div>
      <Footer/>

    </div>
  );
};

export default page;
