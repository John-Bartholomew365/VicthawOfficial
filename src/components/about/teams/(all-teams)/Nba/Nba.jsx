"use client";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export function NBA() {
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
              src="/nba.png" // Replace with actual NBA FC logo
              alt="NBA FC Logo"
              width={80}
              height={80}
              className="rounded-full "
            />
            <div>
              <h1 className="lg:text-[40px] text-[26px] font-[600] leading-tight text-black">
                NBA FC
              </h1>
              <p className="text-lg text-[#00000090]">
                The Second Titans
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Image
              src="/team-nba.jpeg" // Replace with actual NBA team photo
              alt="NBA FC Team"
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
                NBA FC represents the Nigerian Bar Association's sporting division. 
                While primarily handling legal matters, the NBA also has a strong 
                sports department that formed this competitive football team. 
                They bring the same discipline and strategic thinking from the 
                courtroom to the football pitch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Manager
                </h2>
                <p className="text-black/80 font-bold">Coach Barrister</p>
                <p className="mt-2">
                  A legal mind with a passion for football, Coach Barrister 
                  combines courtroom strategy with sporting tactics. Known for 
                  his ability to "argue" his way through tough matches, he 
                  leads the team with a unique blend of legal precision and 
                  football flair. His halftime speeches are said to be as 
                  compelling as closing arguments.
                </p>
              </div>

              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Specialties
                </h2>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Tactical formations (The "Legal Formation" strategy)</li>
                  <li>
                    Precision passing (The "Exhibit A" passing game)
                  </li>
                  <li>
                    Strong defense (The "Objection Sustained" defense)
                  </li>
                  <li>
                    Last-minute goals (The "Closing Argument" play)
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="font-[600] pt-7 text-black text-xl">Our Origin</h2>
            <p>
              The Nigerian Bar Association, while primarily focused on legal 
              matters, maintains a vibrant sports department. NBA FC was formed 
              as part of this initiative, bringing together legal professionals 
              with football talent. They've quickly risen through the ranks to 
              become formidable competitors in the league.
            </p>

            <h2 className="font-[600] pt-7 text-black text-xl">Membership</h2>
            <p>NBA FC maintains a unique selection criteria:</p>
            <ul className="list-disc space-y-4 ml-8">
              <li>
                Open primarily to legal professionals and NBA members
              </li>
              <li>Must demonstrate both legal acumen and football skills</li>
              <li>
                Commitment to fair play and sportsmanship
              </li>
            </ul>

            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100 mt-8">
              <h2 className="font-[600] text-black text-lg mb-2">
                Our Playing Philosophy
              </h2>
              <p className="italic">
                "We approach football like we approach the law - with strategy, 
                precision, and an unwavering commitment to justice on the pitch. 
                Every match is a case to be won."
              </p>
              <p className="mt-4 text-right">- NBA FC Motto</p>
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
              src="/nba.png" // Replace with actual NBA FC logo
              alt="NBA FC Logo"
              width={80}
              height={80}
              className="rounded-full mx-auto lg:mx-0"
            />
            <div>
              <h1 className="text-[26px] lg:text-[40px] font-[600] leading-tight text-black">
                NBA FC
              </h1>
              <p className="text-lg text-[#00000090]">
                The Second Titans
              </p>
            </div>
          </div>

          {/* Team Image */}
          <div className="mt-8 flex justify-center">
            <Image
              src="/team-nba.jpeg" // Replace with actual NBA team photo
              alt="NBA FC Team"
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
                NBA FC represents the Nigerian Bar Association's sporting division. 
                While primarily handling legal matters, the NBA also has a strong 
                sports department that formed this competitive football team. 
                They bring the same discipline and strategic thinking from the 
                courtroom to the football pitch.
              </p>
            </div>

            {/* Manager & Specialties */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Manager */}
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Manager
                </h2>
                <p className="text-black/80 font-bold">Coach Barrister</p>
                <p className="mt-2">
                  A legal mind with a passion for football, Coach Barrister 
                  combines courtroom strategy with sporting tactics. Known for 
                  his ability to "argue" his way through tough matches, he 
                  leads the team with a unique blend of legal precision and 
                  football flair. His halftime speeches are said to be as 
                  compelling as closing arguments.
                </p>
              </div>

              {/* Specialties */}
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Specialties
                </h2>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Tactical formations (The "Legal Formation" strategy)</li>
                  <li>
                    Precision passing (The "Exhibit A" passing game)
                  </li>
                  <li>
                    Strong defense (The "Objection Sustained" defense)
                  </li>
                  <li>
                    Last-minute goals (The "Closing Argument" play)
                  </li>
                </ul>
              </div>
            </div>

            {/* Legacy */}
            <div>
              <h2 className="font-[600] pt-7 text-black text-xl">Our Origin</h2>
              <p className="mt-2">
                The Nigerian Bar Association, while primarily focused on legal 
                matters, maintains a vibrant sports department. NBA FC was formed 
                as part of this initiative, bringing together legal professionals 
                with football talent. They've quickly risen through the ranks to 
                become formidable competitors in the league.
              </p>
            </div>

            {/* Membership */}
            <div>
              <h2 className="font-[600] pt-7 text-black text-xl">Membership</h2>
              <p className="mt-2">
                NBA FC maintains a unique selection criteria:
              </p>
              <ul className="list-disc space-y-4 ml-8 mt-2">
                <li>
                  Open primarily to legal professionals and NBA members
                </li>
                <li>Must demonstrate both legal acumen and football skills</li>
                <li>
                  Commitment to fair play and sportsmanship
                </li>
              </ul>
            </div>

            {/* Philosophy */}
            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100 mt-8">
              <h2 className="font-[600] text-black text-lg mb-2">
                Our Playing Philosophy
              </h2>
              <p className="italic">
                "We approach football like we approach the law - with strategy, 
                precision, and an unwavering commitment to justice on the pitch. 
                Every match is a case to be won."
              </p>
              <p className="mt-4 text-right">- NBA FC Motto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}