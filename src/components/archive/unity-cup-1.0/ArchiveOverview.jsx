import Link from "next/link";

const sections = [
  {
    title: "About",
    description: "The story and spirit behind the inaugural Unity Cup.",
    href: "/archive/unity-cup-1.0/about",
  },
  {
    title: "Teams",
    description: "Meet the 7 teams that battled for the first title.",
    href: "/archive/unity-cup-1.0/team",
  },
  {
    title: "Schedule",
    description: "Every fixture from the group stage to the final.",
    href: "/archive/unity-cup-1.0/schedule",
  },
  {
    title: "Results",
    description: "Full results, league standings and top scorers.",
    href: "/archive/unity-cup-1.0/results",
  },
  {
    title: "Prizes",
    description: "The rewards the champions took home.",
    href: "/archive/unity-cup-1.0/prizes",
  },
  {
    title: "Rules",
    description: "The guidelines every team played by.",
    href: "/archive/unity-cup-1.0/rules",
  },
  {
    title: "Sponsors",
    description: "The partners who powered Unity Cup 1.0.",
    href: "/archive/unity-cup-1.0/sponsors",
  },
  {
    title: "FAQs",
    description: "Frequently asked questions about the tournament.",
    href: "/archive/unity-cup-1.0/faq",
  },
];

export default function ArchiveOverview() {
  return (
    <div className="text-black tracking-tight">
      <div className="mt-[80px] mb-[40px] text-center">
        <span className="inline-block bg-[#C81E23]/10 text-[#C81E23] text-[13px] font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 mb-5">
          Archived Tournament
        </span>
        <h1 className="text-[34px] lg:text-[52px] font-[600] leading-tight">
          Unity Cup 1.0
        </h1>
        <p className="text-[#6B6F76] mt-4 max-w-[560px] mx-auto text-lg">
          The inaugural Victhaw Official Unity Cup, held from April 12th to
          June 29th, 2025 at Basin, Ilorin, Kwara State. Relive the moments,
          results, and champions of the tournament that started it all.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/tournament/schedule">
            <button className="bg-[#C81E23] text-white py-3 px-8 rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-[#C81E23] transition-all duration-300 text-lg font-medium w-full sm:w-auto">
              Back to Unity Cup 2.0
            </button>
          </Link>
          <Link href="/archive/unity-cup-1.0/results">
            <button className="bg-white border-2 border-[#C81E23] text-[#C81E23] py-3 px-8 rounded-lg hover:bg-[#C81E23] hover:text-white transition-all duration-300 text-lg font-medium w-full sm:w-auto">
              See the Results
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-[80px]">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group border border-gray-200 rounded-xl p-6 hover:border-[#C81E23] hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-[600] group-hover:text-[#C81E23] transition-colors">
              {section.title}
            </h3>
            <p className="text-[#6B6F76] mt-2 text-[15px] leading-relaxed">
              {section.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
