"use client";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { groups } from "@/data/unity-cup-2";

const TeamContent = ({ team }) => {
  return (
    <div className="flex flex-col w-full lg:ml-[10px] ml-[0px]">
      {/* Team Header with Logo */}
      <div className="lg:flex block items-center gap-4 border-b border-gray-200 pb-6">
        <Image
          src={team.logo}
          alt={`${team.name} Logo`}
          width={80}
          height={80}
          className="rounded-full border-2 border-[#C81E23]"
        />
        <div>
          <h1 className="lg:text-[40px] text-[26px] font-[600] leading-tight text-black">
            {team.name}
          </h1>
          <p className="text-lg text-[#00000090]">{team.tagline}</p>
        </div>
      </div>

      <div className="mt-8">
        <Image
          src={team.image}
          alt={`${team.name} Team`}
          width={646}
          height={457}
          className="flex justify-center items-center lg:px-0 px-5 rounded-md"
        />
      </div>

      <div className="mt-10 mb-32 lg:w-[741px] w-auto space-y-6 text-[#00000070]">
        <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
          <h2 className="font-[600] text-black text-lg mb-2">Team Overview</h2>
          <p>{team.overview}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
            <h2 className="font-[600] text-black text-lg mb-2">
              Team Manager
            </h2>
            <p className="text-black/80 font-bold">{team.manager}</p>
            <p className="mt-2">{team.managerInfo || team.tagline}</p>
          </div>

          <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
            <h2 className="font-[600] text-black text-lg mb-2">
              Team Specialties
            </h2>
            <ul className="list-disc ml-5 space-y-2">
              {team.specialties.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="font-[600] pt-7 text-black text-xl">Our Legacy</h2>
        <p>{team.legacy}</p>

        <h2 className="font-[600] pt-7 text-black text-xl">Membership</h2>
        <ul className="list-disc space-y-4 ml-8">
          {team.membership.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>

        <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100 mt-8">
          <h2 className="font-[600] text-black text-lg mb-2">
            Our Championship Philosophy
          </h2>
          <p className="italic">{team.philosophy}</p>
          <p className="mt-4 text-right">{team.motto}</p>
        </div>
      </div>
    </div>
  );
};

export function TeamPage({ team }) {
  const router = useRouter();
  const group = groups.find((g) => g.teams.includes(team.slug));

  return (
    <section className="h-full flex flex-col pt-24 lg:pt-32">
      {/* Desktop */}
      <div className="lg:flex hidden w-full max-w-[90%] mx-auto gap-12 lg:px-[3%] px-[1%] z-10">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-[#FAFAFA] text-[#00000080] hover:bg-gray-200 h-fit w-fit p-3 mt-3 rounded-full transition-colors cursor-pointer">
            <FaArrowLeft
              className="text-[20px]"
              onClick={() => router.back()}
            />
          </div>
          {group && (
            <span className="bg-[#C81E23]/10 text-[#C81E23] text-[13px] font-bold px-4 py-1 rounded-full whitespace-nowrap">
              Group {group.name}
            </span>
          )}
        </div>
        <TeamContent team={team} />
      </div>

      {/* Mobile */}
      <div className="w-full max-w-[95%] mx-auto px-[5%] lg:px-[3%] lg:hidden z-10">
        <div className="flex items-center gap-4">
          <div className="bg-[#FAFAFA] text-[#00000080] hover:bg-gray-200 w-fit p-3 mt-3 rounded-full transition-colors cursor-pointer">
            <FaArrowLeft
              className="text-[20px]"
              onClick={() => router.back()}
            />
          </div>
          {group && (
            <span className="bg-[#C81E23]/10 text-[#C81E23] text-[13px] font-bold px-4 py-1 rounded-full mt-3">
              Group {group.name}
            </span>
          )}
        </div>

        <div className="flex flex-col w-full mt-4">
          <div className="flex flex-col lg:flex-row items-center gap-4 border-b border-gray-200 pb-6 text-center lg:text-left">
            <Image
              src={team.logo}
              alt={`${team.name} Logo`}
              width={80}
              height={80}
              className="rounded-full border-2 border-[#C81E23] mx-auto lg:mx-0"
            />
            <div>
              <h1 className="text-[26px] lg:text-[40px] font-[600] leading-tight text-black">
                {team.name}
              </h1>
              <p className="text-lg text-[#00000090]">{team.tagline}</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Image
              src={team.image}
              alt={`${team.name} Team`}
              width={646}
              height={457}
              className="rounded-md w-full max-w-full object-cover"
            />
          </div>

          <div className="mt-10 mb-32 w-full lg:max-w-[741px] space-y-6 text-[#00000070] mx-auto">
            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
              <h2 className="font-[600] text-black text-lg mb-2">
                Team Overview
              </h2>
              <p>{team.overview}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Manager
                </h2>
                <p className="text-black/80 font-bold">{team.manager}</p>
                <p className="mt-2">{team.managerInfo || team.tagline}</p>
              </div>

              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Specialties
                </h2>
                <ul className="list-disc ml-5 space-y-2">
                  {team.specialties.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-[600] pt-7 text-black text-xl">Our Legacy</h2>
              <p className="mt-2">{team.legacy}</p>
            </div>

            <div>
              <h2 className="font-[600] pt-7 text-black text-xl">
                Membership
              </h2>
              <ul className="list-disc space-y-4 ml-8 mt-2">
                {team.membership.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100 mt-8">
              <h2 className="font-[600] text-black text-lg mb-2">
                Our Championship Philosophy
              </h2>
              <p className="italic">{team.philosophy}</p>
              <p className="mt-4 text-right">{team.motto}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamPage;
