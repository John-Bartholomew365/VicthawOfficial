import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import Rules from "@/components/unity-cup-2/Rules";
import React from "react";

export const metadata = {
  title: "Rules & Guidelines – Unity Cup 2.0",
  description:
    "Official rules and guidelines for the Victhaw Unity Cup 2.0 — match formats, qualification, scoring and conduct.",
  alternates: {
    canonical: "/tournament/rules",
  },
};

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
