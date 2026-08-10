import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import Fixtures from "@/components/unity-cup-2/Fixtures";
import ScheduleHero from "@/components/unity-cup-2/ScheduleHero";
import React from "react";

export const metadata = {
  title: "Match Schedule – Unity Cup 2.0",
  description:
    "View all Unity Cup 2.0 fixtures — group stage, semi-finals and the grand finale with dates and kick-off times.",
  alternates: {
    canonical: "/tournament/schedule",
  },
};

const sportsEventSchema = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: "Victhaw Unity Cup 2.0",
  description:
    "8 teams, two groups, one champion — the Victhaw Unity Cup 2.0 football tournament.",
  startDate: "2026-08-15",
  endDate: "2026-08-30",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  organizer: {
    "@type": "Organization",
    name: "Victhaw Official",
    url: "http://www.victhawofficial.com",
  },
};

const page = () => {
  return (
    <PageLoader>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsEventSchema) }}
      />
      <div className="bg-[#FFFFFF] text-black">
        <div className="container lg:px-[50px] px-2">
          <ScheduleHero />
        </div>
        <div className="container">
          <Fixtures />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
