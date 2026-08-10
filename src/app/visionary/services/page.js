import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import Offering from "@/components/the-visionary/services/Offering";
import ServiceHero from "@/components/the-visionary/services/ServiceHero";
import ServicesCta from "@/components/the-visionary/services/ServicesCta";
import Testimonials from "@/components/the-visionary/services/Testimonials";
import React from "react";

export const metadata = {
  title: "Services – The Visionary",
  description:
    "Explore the services offered by The Visionary through Victhaw Official — tailored solutions for growth and excellence.",
  alternates: {
    canonical: "/visionary/services",
  },
};

const page = () => {
  return (
    <PageLoader>
    <div className="bg-[#FFFFFF] text-black tracking-tight">
      <ServiceHero />
      <div className="container lg:px-[30px] px-2">
        <Offering />
        <Testimonials />
        <ServicesCta />
      </div>
      <Footer />
    </div>
    </PageLoader>
  );
};

export default page;
