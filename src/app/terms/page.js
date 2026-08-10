import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import TermsAndConditions from "@/components/terms/TermsConditions";
import React from "react";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing the use of the Victhaw Official website and its services.",
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black tracking-tight">
        <div className="container lg:px-[30px] px-2">
          <TermsAndConditions />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
