import { Bankers } from "@/components/about/teams/(all-teams)/bankers/Bankers";
import { CorporateBallers } from "@/components/about/teams/(all-teams)/corporate-ballers/CBFA";
import { Leo } from "@/components/about/teams/(all-teams)/Leo/Leo";
import { Maracana } from "@/components/about/teams/(all-teams)/Maracana/Maracana";
import { NBA } from "@/components/about/teams/(all-teams)/Nba/Nba";
import { SwayFitness } from "@/components/about/teams/(all-teams)/Sway/Sway";
import { UnilorinQuarters } from "@/components/about/teams/(all-teams)/unilorin/Unilorin";
import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import React from "react";
import { notFound } from "next/navigation";

const teamComponents = {
  "bankers-all-stars": Bankers,
  "corporate-ballers": CorporateBallers,
  leo: Leo,
  maracana: Maracana,
  nba: NBA,
  "sway-fitness": SwayFitness,
  "unilorin-quarters": UnilorinQuarters,
};

export function generateStaticParams() {
  return Object.keys(teamComponents).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const names = {
    "bankers-all-stars": "Bankers All Stars FC",
    "corporate-ballers": "Corporate Ballers FA",
    leo: "Leo FC",
    maracana: "Maracana FC",
    nba: "Nigerian Bar Association FC",
    "sway-fitness": "Sway Fitness FC",
    "unilorin-quarters": "Unilorin Quarters FC",
  };
  return {
    title: `${names[slug] || "Team"} | Unity Cup 1.0 Archive`,
  };
}

const page = async ({ params }) => {
  const { slug } = await params;
  const TeamComponent = teamComponents[slug];

  if (!TeamComponent) {
    notFound();
  }

  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black">
        <div className="container lg:px-[30px] px-2">
          <TeamComponent />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
