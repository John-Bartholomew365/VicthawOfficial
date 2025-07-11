"use client";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export function UnilorinQuarters() {
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
              src="/unilorin.jpg" // Replace with actual logo
              alt="Unilorin Quarters FC Logo"
              width={80}
              height={80}
              className="rounded-full border-2 border-gold-500"
            />
            <div>
              <h1 className="lg:text-[40px] text-[26px] font-[600] leading-tight text-black">
                Unilorin Quarters FC
              </h1>
              <p className="text-lg text-[#00000090]">
                The Community Champions
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Image
              src="/team-unilorin.jpeg" // Replace with actual team photo
              alt="Unilorin Quarters FC Team"
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
                Unilorin Quarters FC is a community team formed by residents around 
                Tanke and surrounding areas near the University of Ilorin. The team 
                brings together players of all ages - young, middle-aged, and veterans - 
                who share a passion for football. They train and play friendlies every 
                Saturday at the Unilorin Quarters football field, building both skills 
                and community spirit.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Manager
                </h2>
                <p className="text-black/80 font-bold">Coach Walter</p>
                <p className="mt-2">
                  A local legend who brings together players from all walks of life, 
                  Coach Walter has a unique ability to blend different generations 
                  into a cohesive team. Known for his inclusive approach and Saturday 
                  morning training sessions, he's the glue that holds this diverse 
                  squad together. His philosophy is simple: "Football is for everyone."
                </p>
              </div>

              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Specialties
                </h2>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Mixed-generation teamwork (The "Community Blend")</li>
                  <li>
                    Saturday morning football rituals
                  </li>
                  <li>
                    Adaptable playing styles (Young energy meets veteran wisdom)
                  </li>
                  <li>
                    Strong local fanbase (The Quarters Crew)
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="font-[600] pt-7 text-black text-xl">Our Roots</h2>
            <p>
              Unilorin Quarters FC was born from the love of football in the 
              neighborhoods around the University of Ilorin. What started as casual 
              Saturday matches at the Quarters field evolved into a proper team. 
              Though they haven't been around too long, they've quickly become a 
              beloved part of the local sports scene, representing the vibrant 
              community spirit of the area.
            </p>

            <h2 className="font-[600] pt-7 text-black text-xl">Membership</h2>
            <p>Unilorin Quarters FC is open to all with a few simple principles:</p>
            <ul className="list-disc space-y-4 ml-8">
              <li>
                Open to residents around Tanke and Unilorin Quarters
              </li>
              <li>All ages welcome - from young talents to seasoned veterans</li>
              <li>
                Commitment to weekly Saturday sessions
              </li>
              <li>
                Passion for football and community spirit
              </li>
            </ul>

            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100 mt-8">
              <h2 className="font-[600] text-black text-lg mb-2">
                Our Community Philosophy
              </h2>
              <p className="italic">
                "We may come from different generations and backgrounds, but on 
                this pitch we're one team. Saturday mornings at the Unilorin Quarters field 
                are where friendships are made and football dreams live."
              </p>
              <p className="mt-4 text-right">- Unilorin Quarters FC Motto</p>
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
              src="/unilorin.jpg" // Replace with actual logo
              alt="Unilorin Quarters FC Logo"
              width={80}
              height={80}
              className="rounded-full border-2 border-gold-500 mx-auto lg:mx-0"
            />
            <div>
              <h1 className="text-[26px] lg:text-[40px] font-[600] leading-tight text-black">
                Unilorin Quarters FC
              </h1>
              <p className="text-lg text-[#00000090]">
                The Community Champions
              </p>
            </div>
          </div>

          {/* Team Image */}
          <div className="mt-8 flex justify-center">
            <Image
              src="/team-unilorin.jpeg" // Replace with actual team photo
              alt="Unilorin Quarters FC Team"
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
                Unilorin Quarters FC is a community team formed by residents around 
                Tanke and surrounding areas near the University of Ilorin. The team 
                brings together players of all ages - young, middle-aged, and veterans - 
                who share a passion for football. They train and play friendlies every 
                Saturday at the Unilorin Quarters football field, building both skills 
                and community spirit.
              </p>
            </div>

            {/* Manager & Specialties */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Manager */}
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Manager
                </h2>
                <p className="text-black/80 font-bold">Coach Walter</p>
                <p className="mt-2">
                  A local legend who brings together players from all walks of life, 
                  Coach Walter has a unique ability to blend different generations 
                  into a cohesive team. Known for his inclusive approach and Saturday 
                  morning training sessions, he's the glue that holds this diverse 
                  squad together. His philosophy is simple: "Football is for everyone."
                </p>
              </div>

              {/* Specialties */}
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Specialties
                </h2>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Mixed-generation teamwork (The "Community Blend")</li>
                  <li>
                    Saturday morning football rituals
                  </li>
                  <li>
                    Adaptable playing styles (Young energy meets veteran wisdom)
                  </li>
                  <li>
                    Strong local fanbase (The Quarters Crew)
                  </li>
                </ul>
              </div>
            </div>

            {/* Legacy */}
            <div>
              <h2 className="font-[600] pt-7 text-black text-xl">Our Roots</h2>
              <p className="mt-2">
                Unilorin Quarters FC was born from the love of football in the 
                neighborhoods around the University of Ilorin. What started as casual 
                Saturday matches at the Quarters field evolved into a proper team. 
                Though they haven't been around too long, they've quickly become a 
                beloved part of the local sports scene, representing the vibrant 
                community spirit of the area.
              </p>
            </div>

            {/* Membership */}
            <div>
              <h2 className="font-[600] pt-7 text-black text-xl">Membership</h2>
              <p className="mt-2">
                Unilorin Quarters FC is open to all with a few simple principles:
              </p>
              <ul className="list-disc space-y-4 ml-8 mt-2">
                <li>
                  Open to residents around Tanke and Unilorin Quarters
                </li>
                <li>All ages welcome - from young talents to seasoned veterans</li>
                <li>
                  Commitment to weekly Saturday sessions
                </li>
                <li>
                  Passion for football and community spirit
                </li>
              </ul>
            </div>

            {/* Philosophy */}
            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100 mt-8">
              <h2 className="font-[600] text-black text-lg mb-2">
                Our Community Philosophy
              </h2>
              <p className="italic">
                "We may come from different generations and backgrounds, but on 
                this pitch we're one team. Saturday mornings at the Unilorin Quarters field 
                are where friendships are made and football dreams live."
              </p>
              <p className="mt-4 text-right">- Unilorin Quarters FC Motto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}