import Questions from "@/components/faq/Questions";
import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import React from "react";

export const metadata = {
  title: "Unity Cup 1.0 – FAQs",
  description:
    "Frequently asked questions about the Victhaw Unity Cup 1.0 tournament.",
  alternates: {
    canonical: "/archive/unity-cup-1.0/faq",
  },
};

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
