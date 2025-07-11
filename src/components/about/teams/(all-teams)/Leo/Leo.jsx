"use client";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export function Leo() {
  const router = useRouter();

  return (
    <section className="h-full flex flex-col pt-24 lg:pt-32">
      {/* Desktop */}
      <div className="lg:flex hidden w-full max-w-[90%] mx-auto gap-12 lg:px-[3%] px-[1%] z-10">
        {/* Left Side - Back Button */}
        <div className="bg-[#FAFAFA] text-[#00000080] hover:bg-gray-200 h-fit w-fit p-3 mt-3 rounded-full transition-colors cursor-pointer">
          <FaArrowLeft className="text-[20px]" onClick={() => router.back()} />
        </div>

        {/* Middle Content - Scrollable */}
        <div className="flex flex-col w-full lg:ml-[10px] ml-[0px]">
          {/* Team Header with Logo */}
          <div className="lg:flex block items-center gap-4 border-b border-gray-200 pb-6">
            <Image
              src="/loe.jpg"
              alt="Leo FC Logo"
              width={80}
              height={80}
              className="rounded-full object-cover w-[80px] h-[80px] mx-auto lg:mx-0"
            />
            <div>
              <h1 className="lg:text-[40px] text-[26px] font-[600] leading-tight text-black">
                Leo FC
              </h1>
              <p className="text-lg text-[#00000090]">The Young Lions</p>
            </div>
          </div>

          <div className="mt-8">
            <Image
              src="/team-leo.jpeg" // Replace with actual team photo
              alt="Leo FC Team"
              width={646}
              height={457}
              className="flex justify-center items-center lg:px-0 px-5 rounded-md"
            />
          </div>

          <div className="mt-10 mb-32 lg:w-[741px] w-auto space-y-6 text-[#00000070]">
            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
              <h2 className="font-[600] text-black text-lg mb-2">
                Team Overview
              </h2>
              <p>
                Leo FC is a grassroots football initiative founded by a
                passionate young football enthusiast dedicated to nurturing
                emerging talent. The team primarily consists of students and
                young players, blended with a few experienced mentors who've
                completed their education. This unique mix creates an
                environment where raw talent meets street-smart football wisdom,
                producing exciting, dynamic players with tremendous potential.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Founder's Vision
                </h2>
                <p className="text-black/80 font-bold">
                  The Young Football Believer
                </p>
                <p className="mt-2">
                  The founder of Leo FC is a young entrepreneur with deep
                  football roots and access to quality five-aside facilities.
                  His vision combines opportunity creation for young players
                  with maintaining the authentic spirit of street football. The
                  team serves as both a proving ground for student athletes and
                  a community for football-loving professionals who've kept
                  their passion for the game.
                </p>
              </div>

              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Dynamics
                </h2>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Youthful energy meets street football wisdom</li>
                  <li>Five-aside roots with full-pitch ambition</li>
                  <li>Student athletes mentored by working professionals</li>
                  <li>Raw talent refined through competitive play</li>
                </ul>
              </div>
            </div>

            <h2 className="font-[600] pt-7 text-black text-xl">
              Our Football Culture
            </h2>
            <p>
              Leo FC embodies the vibrant energy of young footballers chasing
              their dreams while balancing education and life responsibilities.
              The team's culture blends the discipline of structured training
              with the creativity of street football. Regular five-aside matches
              serve as both training ground and talent showcase, where players
              develop the technical skills and football IQ needed to compete at
              higher levels.
            </p>

            <h2 className="font-[600] pt-7 text-black text-xl">
              Team Composition
            </h2>
            <p>Leo FC's unique player mix includes:</p>
            <ul className="list-disc space-y-4 ml-8">
              <li>Student athletes balancing football and education</li>
              <li>Young talents developing through five-aside football</li>
              <li>Seasoned players who've transitioned to working life</li>
              <li>Hustlers who maintain their football passion</li>
            </ul>

            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100 mt-8">
              <h2 className="font-[600] text-black text-lg mb-2">
                Our Development Philosophy
              </h2>
              <p className="italic">
                "At Leo FC, we believe every young lion deserves their chance to
                roar. Our pitch is where students become footballers, where
                street skills meet tactical discipline, and where passion gets
                its opportunity to shine."
              </p>
              <p className="mt-4 text-right">- Leo FC Creed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="w-full max-w-[95%] mx-auto px-[5%] lg:px-[3%] lg:hidden z-10">
        {/* Back Button */}
        <div className="bg-[#FAFAFA] text-[#00000080] hover:bg-gray-200 w-fit p-3 mt-3 rounded-full transition-colors cursor-pointer">
          <FaArrowLeft className="text-[20px]" onClick={() => router.back()} />
        </div>

        {/* Content Section */}
        <div className="flex flex-col w-full mt-4">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-center gap-4 border-b border-gray-200 pb-6 text-center lg:text-left">
            <Image
              src="/loe.jpg"
              alt="Leo FC Logo"
              width={80}
              height={80}
              className="rounded-full object-cover w-[80px] h-[80px] mx-auto lg:mx-0"
            />
            <div>
              <h1 className="text-[26px] lg:text-[40px] font-[600] leading-tight text-black">
                Leo FC
              </h1>
              <p className="text-lg text-[#00000090]">The Young Lions</p>
            </div>
          </div>

          {/* Team Image */}
          <div className="mt-8 flex justify-center">
            <Image
              src="/team-leo.jpeg" // Replace with actual team photo
              alt="Leo FC Team"
              width={646}
              height={457}
              className="rounded-md w-full max-w-full object-cover"
            />
          </div>

          {/* Team Details */}
          <div className="mt-10 mb-32 w-full lg:max-w-[741px] space-y-6 text-[#00000070] mx-auto">
            {/* Overview */}
            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
              <h2 className="font-[600] text-black text-lg mb-2">
                Team Overview
              </h2>
              <p>
                Leo FC is a grassroots football initiative founded by a
                passionate young football enthusiast dedicated to nurturing
                emerging talent. The team primarily consists of students and
                young players, blended with a few experienced mentors who've
                completed their education. This unique mix creates an
                environment where raw talent meets street-smart football wisdom,
                producing exciting, dynamic players with tremendous potential.
              </p>
            </div>

            {/* Founder & Dynamics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Founder */}
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Founder's Vision
                </h2>
                <p className="text-black/80 font-bold">
                  The Young Football Believer
                </p>
                <p className="mt-2">
                  The founder of Leo FC is a young entrepreneur with deep
                  football roots and access to quality five-aside facilities.
                  His vision combines opportunity creation for young players
                  with maintaining the authentic spirit of street football. The
                  team serves as both a proving ground for student athletes and
                  a community for football-loving professionals who've kept
                  their passion for the game.
                </p>
              </div>

              {/* Dynamics */}
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Dynamics
                </h2>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Youthful energy meets street football wisdom</li>
                  <li>Five-aside roots with full-pitch ambition</li>
                  <li>Student athletes mentored by working professionals</li>
                  <li>Raw talent refined through competitive play</li>
                </ul>
              </div>
            </div>

            {/* Culture */}
            <div>
              <h2 className="font-[600] pt-7 text-black text-xl">
                Our Football Culture
              </h2>
              <p className="mt-2">
                Leo FC embodies the vibrant energy of young footballers chasing
                their dreams while balancing education and life
                responsibilities. The team's culture blends the discipline of
                structured training with the creativity of street football.
                Regular five-aside matches serve as both training ground and
                talent showcase, where players develop the technical skills and
                football IQ needed to compete at higher levels.
              </p>
            </div>

            {/* Composition */}
            <div>
              <h2 className="font-[600] pt-7 text-black text-xl">
                Team Composition
              </h2>
              <p className="mt-2">Leo FC's unique player mix includes:</p>
              <ul className="list-disc space-y-4 ml-8 mt-2">
                <li>Student athletes balancing football and education</li>
                <li>Young talents developing through five-aside football</li>
                <li>Seasoned players who've transitioned to working life</li>
                <li>Hustlers who maintain their football passion</li>
              </ul>
            </div>

            {/* Philosophy */}
            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100 mt-8">
              <h2 className="font-[600] text-black text-lg mb-2">
                Our Development Philosophy
              </h2>
              <p className="italic">
                "At Leo FC, we believe every young lion deserves their chance to
                roar. Our pitch is where students become footballers, where
                street skills meet tactical discipline, and where passion gets
                its opportunity to shine."
              </p>
              <p className="mt-4 text-right">- Leo FC Creed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
