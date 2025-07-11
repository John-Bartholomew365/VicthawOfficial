"use client";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export function CorporateBallers() {
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
              src="/corporate-ballers.png"
              alt="Corporate Ballers Logo"
              width={80}
              height={80}
              className="rounded-full "
            />
            <div>
              <h1 className="lg:text-[40px] text-[26px] font-[600] leading-tight text-black">
                Corporate Ballers FA
              </h1>
              <p className="text-lg text-[#00000090]">
                Discipline • Development • Excellence
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Image
              src="/team-cbfa.jpeg" 
              alt="Corporate Ballers Team"
              width={646}
              height={457}
              className="flex justify-center items-center lg:px-0 px-5 rounded-md"
            />
          </div>

          <div className="mt-10 mb-32 lg:w-[741px] w-auto space-y-6 text-[#00000070]">
            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
              <h2 className="font-[600] text-black text-lg mb-2">
                Academy Overview
              </h2>
              <p>
                Corporate Ballers Football Academy (CBFA) is a premier football institution 
                based in Ilorin, Kwara State, offering structured development pathways for 
                players aged 12 and above. Our vertically integrated program features both 
                junior and senior categories, providing seamless progression from grassroots 
                to competitive football. We combine professional training standards with 
                character development to nurture complete footballers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Our Methodology
                </h2>
                <p className="text-black/80 font-bold">Structured Player Development</p>
                <p className="mt-2">
                  CBFA implements a comprehensive curriculum focusing on technical skills, 
                  tactical awareness, physical conditioning, and mental resilience. Our 
                  age-appropriate training modules are designed by UEFA-licensed coaches 
                  to maximize player potential. We emphasize discipline, teamwork, and 
                  sportsmanship as core values that transcend football.
                </p>
              </div>

              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Academy Advantages
                </h2>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Age-specific training programs (12+ years)</li>
                  <li>
                    Clear progression pathway from junior to senior teams
                  </li>
                  <li>
                    Diverse coaching staff with international experience
                  </li>
                  <li>
                    Inclusive environment welcoming all backgrounds
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="font-[600] pt-7 text-black text-xl">Our Corporate Ethos</h2>
            <p>
              True to our name, Corporate Ballers operates with the precision and 
              professionalism of a business organization. We maintain meticulous 
              records of player development, implement structured training schedules, 
              and uphold the highest standards of discipline. Our administrative 
              processes mirror corporate best practices, ensuring transparency and 
              accountability in all operations while never compromising the joy of 
              the beautiful game.
            </p>

            <h2 className="font-[600] pt-7 text-black text-xl">Coaching Philosophy</h2>
            <p>Our coaching staff embodies:</p>
            <ul className="list-disc space-y-4 ml-8">
              <li>
                Qualified professionals with proven track records
              </li>
              <li>Ability to work with diverse cultures and backgrounds</li>
              <li>
                Commitment to holistic player development
              </li>
              <li>
                Focus on translating training to competitive success
              </li>
            </ul>

            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100 mt-8">
              <h2 className="font-[600] text-black text-lg mb-2">
                Our Academy Creed
              </h2>
              <p className="italic">
                "At Corporate Ballers, we don't just train footballers - we develop 
                complete athletes and individuals. Through disciplined training, 
                structured progression, and professional standards, we unlock the 
                God-given potential in every player entrusted to our care."
              </p>
              <p className="mt-4 text-right">- CBFA Philosophy</p>
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
              src="/corporate-ballers.png"
              alt="Corporate Ballers Logo"
              width={80}
              height={80}
              className="rounded-full mx-auto lg:mx-0"
            />
            <div>
              <h1 className="text-[26px] lg:text-[40px] font-[600] leading-tight text-black">
                Corporate Ballers FA
              </h1>
              <p className="text-lg text-[#00000090]">
                Discipline • Development • Excellence
              </p>
            </div>
          </div>

          {/* Team Image */}
          <div className="mt-8 flex justify-center">
            <Image
              src="/team-cbfa.jpeg" 
              alt="Corporate Ballers Team"
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
                Academy Overview
              </h2>
              <p>
                Corporate Ballers Football Academy (CBFA) is a premier football institution 
                based in Ilorin, Kwara State, offering structured development pathways for 
                players aged 12 and above. Our vertically integrated program features both 
                junior and senior categories, providing seamless progression from grassroots 
                to competitive football. We combine professional training standards with 
                character development to nurture complete footballers.
              </p>
            </div>

            {/* Methodology & Advantages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Methodology */}
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Our Methodology
                </h2>
                <p className="text-black/80 font-bold">Structured Player Development</p>
                <p className="mt-2">
                  CBFA implements a comprehensive curriculum focusing on technical skills, 
                  tactical awareness, physical conditioning, and mental resilience. Our 
                  age-appropriate training modules are designed by UEFA-licensed coaches 
                  to maximize player potential. We emphasize discipline, teamwork, and 
                  sportsmanship as core values that transcend football.
                </p>
              </div>

              {/* Advantages */}
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Academy Advantages
                </h2>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Age-specific training programs (12+ years)</li>
                  <li>
                    Clear progression pathway from junior to senior teams
                  </li>
                  <li>
                    Diverse coaching staff with international experience
                  </li>
                  <li>
                    Inclusive environment welcoming all backgrounds
                  </li>
                </ul>
              </div>
            </div>

            {/* Ethos */}
            <div>
              <h2 className="font-[600] pt-7 text-black text-xl">Our Corporate Ethos</h2>
              <p className="mt-2">
                True to our name, Corporate Ballers operates with the precision and 
                professionalism of a business organization. We maintain meticulous 
                records of player development, implement structured training schedules, 
                and uphold the highest standards of discipline. Our administrative 
                processes mirror corporate best practices, ensuring transparency and 
                accountability in all operations while never compromising the joy of 
                the beautiful game.
              </p>
            </div>

            {/* Coaching */}
            <div>
              <h2 className="font-[600] pt-7 text-black text-xl">Coaching Philosophy</h2>
              <p className="mt-2">
                Our coaching staff embodies:
              </p>
              <ul className="list-disc space-y-4 ml-8 mt-2">
                <li>
                  Qualified professionals with proven track records
                </li>
                <li>Ability to work with diverse cultures and backgrounds</li>
                <li>
                  Commitment to holistic player development
                </li>
                <li>
                  Focus on translating training to competitive success
                </li>
              </ul>
            </div>

            {/* Philosophy */}
            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100 mt-8">
              <h2 className="font-[600] text-black text-lg mb-2">
                Our Academy Creed
              </h2>
              <p className="italic">
                "At Corporate Ballers, we don't just train footballers - we develop 
                complete athletes and individuals. Through disciplined training, 
                structured progression, and professional standards, we unlock the 
                God-given potential in every player entrusted to our care."
              </p>
              <p className="mt-4 text-right">- CBFA Philosophy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}