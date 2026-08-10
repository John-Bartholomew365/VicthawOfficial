import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import TeamPage from "@/components/unity-cup-2/TeamPage";
import { teams } from "@/data/unity-cup-2";
import React from "react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return teams.map((team) => ({ slug: team.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const team = teams.find((t) => t.slug === slug);
  if (!team) return { title: "Team Not Found" };
  return {
    title: `${team.name} - Unity Cup 2.0`,
    description: team.tagline,
  };
}

const page = async ({ params }) => {
  const { slug } = await params;
  const team = teams.find((t) => t.slug === slug);

  if (!team) {
    notFound();
  }

  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black">
        <div className="container lg:px-[30px] px-2">
          <TeamPage team={team} />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
