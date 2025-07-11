"use client";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export function Maracana() {
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
              src="/maracana.png" // Replace with actual logo
              alt="Maracana FC Logo"
              width={80}
              height={80}
              className="rounded-full "
            />
            <div>
              <h1 className="lg:text-[40px] text-[26px] font-[600] leading-tight text-black">
                Maracana FC
              </h1>
              <p className="text-lg text-[#00000090]">
                The Neighborhood Ballers
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Image
              src="/team-maracana.jpeg" // Replace with actual team photo
              alt="Maracana FC Team"
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
                Maracana FC was born from a private football field at Adewole, 
                where mature football enthusiasts gather to enjoy the beautiful game. 
                The team blends experienced players with energetic youths, creating 
                a unique mix of wisdom and vitality on the pitch. What started as 
                casual five-aside matches has grown into a proper football family 
                that plays for both competition and camaraderie.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Founder
                </h2>
                <p className="text-black/80 font-bold">The Field Owner</p>
                <p className="mt-2">
                  The visionary behind Maracana FC established the Adewole field 
                  as a haven for football lovers. While not always on the pitch, 
                  this patron ensures the space remains available for both competitive 
                  matches and casual play. The field has become a community hub where 
                  different generations connect through their shared passion for football.
                </p>
              </div>

              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Culture
                </h2>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Mixed-generation play (Experience meets youthful energy)</li>
                  <li>
                    Five-aside football tradition (The "Adewole Special")
                  </li>
                  <li>
                    Casual meets competitive (Serious football, good vibes)
                  </li>
                  <li>
                    Strong neighborhood bonds (More than just teammates)
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="font-[600] pt-7 text-black text-xl">Our Home Ground</h2>
            <p>
              The heart of Maracana FC is the private football field at Adewole, 
              a well-maintained pitch that attracts players from across the area. 
              This field serves as both training ground and social space, where 
              strategies are shared between generations and friendships are forged 
              through countless matches. The distinctive five-aside games have 
              become legendary in the neighborhood.
            </p>

            <h2 className="font-[600] pt-7 text-black text-xl">Team Composition</h2>
            <p>Maracana FC thrives on its diverse membership:</p>
            <ul className="list-disc space-y-4 ml-8">
              <li>
                Mature players bringing experience and game intelligence
              </li>
              <li>Youthful talents adding speed and energy</li>
              <li>
                Open to all skilled players who respect the game
              </li>
              <li>
                Regulars who form the core "Adewole Crew"
              </li>
            </ul>

            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100 mt-8">
              <h2 className="font-[600] text-black text-lg mb-2">
                Our Football Philosophy
              </h2>
              <p className="italic">
                "At Maracana FC, we play hard but never forget why we started - 
                for the love of the game. Our field is where young legs learn from 
                wise minds, and where every match feels like coming home."
              </p>
              <p className="mt-4 text-right">- Maracana FC Creed</p>
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
              src="/maracana.png" // Replace with actual logo
              alt="Maracana FC Logo"
              width={80}
              height={80}
              className="rounded-full  mx-auto lg:mx-0"
            />
            <div>
              <h1 className="text-[26px] lg:text-[40px] font-[600] leading-tight text-black">
                Maracana FC
              </h1>
              <p className="text-lg text-[#00000090]">
                The Neighborhood Ballers
              </p>
            </div>
          </div>

          {/* Team Image */}
          <div className="mt-8 flex justify-center">
            <Image
              src="/team-maracana.jpeg" // Replace with actual team photo
              alt="Maracana FC Team"
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
                Maracana FC was born from a private football field at Adewole, 
                where mature football enthusiasts gather to enjoy the beautiful game. 
                The team blends experienced players with energetic youths, creating 
                a unique mix of wisdom and vitality on the pitch. What started as 
                casual five-aside matches has grown into a proper football family 
                that plays for both competition and camaraderie.
              </p>
            </div>

            {/* Founder & Culture */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Founder */}
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Founder
                </h2>
                <p className="text-black/80 font-bold">The Field Owner</p>
                <p className="mt-2">
                  The visionary behind Maracana FC established the Adewole field 
                  as a haven for football lovers. While not always on the pitch, 
                  this patron ensures the space remains available for both competitive 
                  matches and casual play. The field has become a community hub where 
                  different generations connect through their shared passion for football.
                </p>
              </div>

              {/* Culture */}
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Culture
                </h2>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Mixed-generation play (Experience meets youthful energy)</li>
                  <li>
                    Five-aside football tradition (The "Adewole Special")
                  </li>
                  <li>
                    Casual meets competitive (Serious football, good vibes)
                  </li>
                  <li>
                    Strong neighborhood bonds (More than just teammates)
                  </li>
                </ul>
              </div>
            </div>

            {/* Home Ground */}
            <div>
              <h2 className="font-[600] pt-7 text-black text-xl">Our Home Ground</h2>
              <p className="mt-2">
                The heart of Maracana FC is the private football field at Adewole, 
                a well-maintained pitch that attracts players from across the area. 
                This field serves as both training ground and social space, where 
                strategies are shared between generations and friendships are forged 
                through countless matches. The distinctive five-aside games have 
                become legendary in the neighborhood.
              </p>
            </div>

            {/* Team Composition */}
            <div>
              <h2 className="font-[600] pt-7 text-black text-xl">Team Composition</h2>
              <p className="mt-2">
                Maracana FC thrives on its diverse membership:
              </p>
              <ul className="list-disc space-y-4 ml-8 mt-2">
                <li>
                  Mature players bringing experience and game intelligence
                </li>
                <li>Youthful talents adding speed and energy</li>
                <li>
                  Open to all skilled players who respect the game
                </li>
                <li>
                  Regulars who form the core "Adewole Crew"
                </li>
              </ul>
            </div>

            {/* Philosophy */}
            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100 mt-8">
              <h2 className="font-[600] text-black text-lg mb-2">
                Our Football Philosophy
              </h2>
              <p className="italic">
                "At Maracana FC, we play hard but never forget why we started - 
                for the love of the game. Our field is where young legs learn from 
                wise minds, and where every match feels like coming home."
              </p>
              <p className="mt-4 text-right">- Maracana FC Creed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}