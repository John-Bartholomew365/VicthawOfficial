"use client";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export function SwayFitness() {
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
              src="/sway.png" // Replace with actual logo
              alt="Sway Fitness FC Logo"
              width={80}
              height={80}
              className="rounded-full "
            />
            <div>
              <h1 className="lg:text-[40px] text-[26px] font-[600] leading-tight text-black">
                Sway Fitness FC
              </h1>
              <p className="text-lg text-[#00000090]">
                Where Fitness Meets Football
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Image
              src="/team-sway.jpeg" // Replace with actual team photo
              alt="Sway Fitness FC Team"
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
                Sway Fitness FC represents the sporting arm of Sway Fitness, 
                formed to extend their fitness philosophy to the football pitch. 
                Comprised of gym members with a passion for football, this team 
                combines athletic conditioning with beautiful game skills. Their 
                unique approach bridges the gap between fitness training and 
                competitive football, creating physically dominant players who 
                excel in endurance and strength on the field.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Fitness Philosophy
                </h2>
                <p className="text-black/80 font-bold">Gym-to-Pitch Approach</p>
                <p className="mt-2">
                  Sway Fitness FC players benefit from integrated training that 
                  combines football drills with strength and conditioning. Their 
                  workouts are specially designed to enhance on-field performance - 
                  explosive sprints, endurance for full 90-minute matches, and 
                  injury prevention. This fusion creates players who maintain peak 
                  performance throughout the game.
                </p>
              </div>

              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Advantages
                </h2>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Superior physical conditioning (The "Sway Edge")</li>
                  <li>
                    Injury-resistant players (Gym-strengthened muscles)
                  </li>
                  <li>
                    Full-match endurance (90-minute fitness)
                  </li>
                  <li>
                    Explosive power (Gym-to-pitch transfer)
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="font-[600] pt-7 text-black text-xl">Our Origin Story</h2>
            <p>
              Sway Fitness FC emerged naturally from gym members who wanted to 
              apply their fitness to football. What began as casual kickabouts 
              between workout sessions evolved into a proper football team. 
              The club maintains strong ties to its fitness roots, with many 
              players transitioning directly from weight racks to the pitch. 
              This unique background gives them both physical and mental 
              advantages in competition.
            </p>

            <h2 className="font-[600] pt-7 text-black text-xl">Membership</h2>
            <p>Sway Fitness FC has distinctive membership criteria:</p>
            <ul className="list-disc space-y-4 ml-8">
              <li>
                Open to Sway Fitness members with football interest
              </li>
              <li>Commitment to both fitness and football training</li>
              <li>
                Willingness to integrate gym work with pitch performance
              </li>
              <li>
                Emphasis on athletic development alongside skills
              </li>
            </ul>

            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100 mt-8">
              <h2 className="font-[600] text-black text-lg mb-2">
                Our Training Creed
              </h2>
              <p className="italic">
                "We don't just play football - we train for it. Every squat, 
                every sprint, every session in the gym translates to dominance 
                on the pitch. At Sway Fitness FC, we're building complete 
                football athletes."
              </p>
              <p className="mt-4 text-right">- Sway Fitness FC Philosophy</p>
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
              src="/sway.png" // Replace with actual logo
              alt="Sway Fitness FC Logo"
              width={80}
              height={80}
              className="rounded-full  mx-auto lg:mx-0"
            />
            <div>
              <h1 className="text-[26px] lg:text-[40px] font-[600] leading-tight text-black mt-[-30px]">
                Sway Fitness FC
              </h1>
              <p className="text-lg text-[#00000090]">
                Where Fitness Meets Football
              </p>
            </div>
          </div>

          {/* Team Image */}
          <div className="mt-8 flex justify-center">
            <Image
              src="/team-sway.jpeg" // Replace with actual team photo
              alt="Sway Fitness FC Team"
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
                Sway Fitness FC represents the sporting arm of Sway Fitness, 
                formed to extend their fitness philosophy to the football pitch. 
                Comprised of gym members with a passion for football, this team 
                combines athletic conditioning with beautiful game skills. Their 
                unique approach bridges the gap between fitness training and 
                competitive football, creating physically dominant players who 
                excel in endurance and strength on the field.
              </p>
            </div>

            {/* Fitness & Advantages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Fitness */}
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Fitness Philosophy
                </h2>
                <p className="text-black/80 font-bold">Gym-to-Pitch Approach</p>
                <p className="mt-2">
                  Sway Fitness FC players benefit from integrated training that 
                  combines football drills with strength and conditioning. Their 
                  workouts are specially designed to enhance on-field performance - 
                  explosive sprints, endurance for full 90-minute matches, and 
                  injury prevention. This fusion creates players who maintain peak 
                  performance throughout the game.
                </p>
              </div>

              {/* Advantages */}
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Advantages
                </h2>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Superior physical conditioning (The "Sway Edge")</li>
                  <li>
                    Injury-resistant players (Gym-strengthened muscles)
                  </li>
                  <li>
                    Full-match endurance (90-minute fitness)
                  </li>
                  <li>
                    Explosive power (Gym-to-pitch transfer)
                  </li>
                </ul>
              </div>
            </div>

            {/* Origin */}
            <div>
              <h2 className="font-[600] pt-7 text-black text-xl">Our Origin Story</h2>
              <p className="mt-2">
                Sway Fitness FC emerged naturally from gym members who wanted to 
                apply their fitness to football. What began as casual kickabouts 
                between workout sessions evolved into a proper football team. 
                The club maintains strong ties to its fitness roots, with many 
                players transitioning directly from weight racks to the pitch. 
                This unique background gives them both physical and mental 
                advantages in competition.
              </p>
            </div>

            {/* Membership */}
            <div>
              <h2 className="font-[600] pt-7 text-black text-xl">Membership</h2>
              <p className="mt-2">
                Sway Fitness FC has distinctive membership criteria:
              </p>
              <ul className="list-disc space-y-4 ml-8 mt-2">
                <li>
                  Open to Sway Fitness members with football interest
                </li>
                <li>Commitment to both fitness and football training</li>
                <li>
                  Willingness to integrate gym work with pitch performance
                </li>
                <li>
                  Emphasis on athletic development alongside skills
                </li>
              </ul>
            </div>

            {/* Philosophy */}
            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100 mt-8">
              <h2 className="font-[600] text-black text-lg mb-2">
                Our Training Creed
              </h2>
              <p className="italic">
                "We don't just play football - we train for it. Every squat, 
                every sprint, every session in the gym translates to dominance 
                on the pitch. At Sway Fitness FC, we're building complete 
                football athletes."
              </p>
              <p className="mt-4 text-right">- Sway Fitness FC Philosophy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}