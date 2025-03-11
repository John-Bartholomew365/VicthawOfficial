import AboutSection from "@/components/landing-page/AboutSection";
import Footer from "@/components/landing-page/Footer";
import HeroSection from "@/components/landing-page/HeroSection";
import Prizes from "@/components/landing-page/Prizes";
import RegisterTeam from "@/components/landing-page/RegisterTeam";
import Sponsors from "@/components/landing-page/Sponsors";
import TournamentHighlight from "@/components/landing-page/TournamentHighlight";
import UpcomingEvents from "@/components/landing-page/UpcomingEvents";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF] text-[#000000] tracking-tight">
      <div className="container lg:px-[30px] px-2">
        <HeroSection />
        <AboutSection />
        <TournamentHighlight />
        <Prizes />
        <Sponsors />
        <RegisterTeam />
        <UpcomingEvents />
      </div>
      <Footer />
    </div>
  );
}
