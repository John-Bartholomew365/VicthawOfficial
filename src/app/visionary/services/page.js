import Footer from "@/components/landing-page/Footer";
import Offering from "@/components/the-visionary/services/Offering";
import ServiceHero from "@/components/the-visionary/services/ServiceHero";
import ServicesCta from "@/components/the-visionary/services/ServicesCta";
import Testimonials from "@/components/the-visionary/services/Testimonials";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#FFFFFF] text-black tracking-tight">
      <ServiceHero />
      <div className="container lg:px-[30px] px-2">
        <Offering />
        <Testimonials />
        <ServicesCta />
      </div>
      <Footer />
    </div>
  );
};

export default page;
