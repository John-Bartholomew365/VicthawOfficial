import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import CommunityImpact from "@/components/the-visionary/contact/CommunityImpact";
import ContactHero from "@/components/the-visionary/contact/ContactHero";
import GetInTouch from "@/components/the-visionary/contact/GetInTouch";
import React from "react";

export const metadata = {
  title: "Contact – The Visionary",
  description:
    "Get in touch with The Visionary and the Victhaw Official team — partnerships, enquiries and community initiatives.",
  alternates: {
    canonical: "/visionary/contact",
  },
};

const page = () => {
  return (
    <PageLoader>
    <div className="bg-[#FFFFFF] text-black tracking-tight">
      <ContactHero />
      <div className="container lg:px-[30px] px-2">
        <CommunityImpact />
        <GetInTouch />
      </div>
      <Footer />
    </div>
    </PageLoader>
  );
};

export default page;
