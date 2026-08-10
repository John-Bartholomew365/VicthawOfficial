import Faq from "@/components/unity-cup-2/Faq";
import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import React from "react";

export const metadata = {
  title: "FAQs – Unity Cup 2.0",
  description:
    "Answers to common questions about the Unity Cup 2.0 — registration, schedule, rules, teams and more.",
  alternates: {
    canonical: "/tournament/faq",
  },
};

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black">
        <div className="container lg:px-[30px] px-2 tracking-tight">
          <Faq />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
