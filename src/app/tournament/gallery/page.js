import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import Gallery from "@/components/unity-cup-2/Gallery";

export const metadata = {
  title: "Photo Gallery – Unity Cup 2.0",
  description:
    "Match action, closing ceremony and team moments from Victhaw Official Unity Cup 2.0 — browse the full tournament photo gallery.",
  alternates: {
    canonical: "/tournament/gallery",
  },
};

const page = () => {
  return (
    <PageLoader>
      <div className="bg-[#FFFFFF] text-black tracking-tight">
        <div className="container lg:px-[30px] px-2 tracking-tight">
          <Gallery />
        </div>
        <Footer />
      </div>
    </PageLoader>
  );
};

export default page;
