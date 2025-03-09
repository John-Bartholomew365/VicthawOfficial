import ImpactSection from "@/components/the-visionary/home/ImpactSection";
import JourneyStarts from "@/components/the-visionary/home/JournerStarts";
import JoinMovement from "@/components/the-visionary/home/Services";
import Victor from "@/components/the-visionary/home/Victor";
import WhyVicthaw from "@/components/the-visionary/home/WhyVicthaw";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#0F0F0F] text-white tracking-tight">
      <div className="container lg:px-[30px] px-0">
        <Victor />
        <WhyVicthaw />
        <ImpactSection />
        <JoinMovement />
        <JourneyStarts />
      </div>
    </div>
  );
};

export default page;
