import Questions from "@/components/faq/Questions";
import Footer from "@/components/landing-page/Footer";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="container lg:px-[30px] px-2 tracking-tight">
        <Questions />
        <Footer/>
      </div>
    </div>
  );
};

export default page;
