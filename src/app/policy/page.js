import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import PrivacyPolicy from "@/components/policy/PrivacyPolicy";
import React from "react";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy policy for Victhaw Official — how we collect, use and protect your information.",
  alternates: {
    canonical: "/policy",
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
          <PrivacyPolicy />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
