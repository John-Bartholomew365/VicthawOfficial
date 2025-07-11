// "use client";
// import Image from "next/image";
// import { FaArrowLeft } from "react-icons/fa6";
// import { useRouter } from "next/navigation";

// export function Bankers() {
//   const router = useRouter();

//   return (
// <section className="h-full flex flex-col lg:pt-32 pt-32">
//   <div className="flex w-full max-w-[90%] mx-auto gap-12 lg:px-[3%] px-[1%] mb-8 z-10">
//     {/* Left Side - Back Button */}
//     <div className="bg-[#FAFAFA] text-[#00000080] hover:bg-gray-200 h-fit w-fit p-3 mt-3 rounded-full transition-colors cursor-pointer">
//       <FaArrowLeft className="text-[20px]" onClick={() => router.back()} />
//     </div>

//     {/* Middle Content - Scrollable */}
//     <div className="flex flex-col w-full lg:ml-[10px] ml-[0px]">
//       {/* Team Header with Logo */}
//       <div className="lg:flex block items-center gap-4 border-b border-gray-200 pb-6">
//         <Image
//           src="/bankers-fc.png"
//           alt="Bankers All Stars Logo"
//           width={80}
//           height={80}
//           className="rounded-full border-2 border-gold-500"
//         />
//         <div>
//           <h1 className="lg:text-[40px] text-[26px] font-[600] leading-tight text-black">
//             Bankers All Stars FC
//           </h1>
//           <p className="text-lg text-[#00000090]">
//             The Undisputed Champions
//           </p>
//         </div>
//       </div>

//       <div className="mt-8">
//         <Image
//           src="/team-bankers.jpeg"
//           alt="Bankers All Stars Team"
//           width={646}
//           height={457}
//           className="flex justify-center items-center lg:px-0 px-5 rounded-md"
//         />
//       </div>

//       <div className="mt-10 mb-32 lg:w-[741px] w-auto space-y-6 text-[#00000070]">
//         <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
//           <h2 className="font-[600] text-black text-lg mb-2">
//             Team Overview
//           </h2>
//           <p>
//             Bankers All Stars FC is an elite football club formed by veteran
//             bankers and financial professionals. Known for their strategic
//             play and financial discipline on the pitch, they've dominated
//             the league with their unique blend of experience and tactical
//             brilliance.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6 mt-8">
//           <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
//             <h2 className="font-[600] text-black text-lg mb-2">
//               Team Manager
//             </h2>
//             <p className="text-black/80 font-bold">Coach Song</p>
//             <p className="mt-2">
//               The steady hand guiding Bankers All Stars—a team rooted in
//               experience and maturity. Coach Song blends tactical discipline
//               with professional poise, leading a squad made up of former
//               bankers, insurance experts, and seasoned business owners.
//               Often referred to as “The Maturity Maestro,” he’s known for
//               his composed sideline presence and sharp game strategies.
//             </p>
//           </div>

//           <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
//             <h2 className="font-[600] text-black text-lg mb-2">
//               Team Specialties
//             </h2>
//             <ul className="list-disc ml-5 space-y-2">
//               <li>Solid defensive structure (The “Old Guard” setup)</li>
//               <li>
//                 Calculated ball movement (The “Insurance Flow” rhythm)
//               </li>
//               <li>
//                 Smart set-piece routines (The “Premium Delivery” playbook)
//               </li>
//               <li>
//                 Mature decision-making on the field (The “Executive Finish”)
//               </li>
//             </ul>
//           </div>
//         </div>

//         <h2 className="font-[600] pt-7 text-black text-xl">Our Legacy</h2>
//         <p>
//           The name "Bankers All Stars" carries weight in football circles.
//           Originating from an old bankers' association, this team has
//           evolved from casual matches between financial institutions to
//           becoming professional champions. Our players may be veterans, but
//           their experience creates an unstoppable force on the pitch.
//         </p>

//         <h2 className="font-[600] pt-7 text-black text-xl">Membership</h2>
//         <p>Bankers All Stars maintains an exclusive selection policy:</p>
//         <ul className="list-disc space-y-4 ml-8">
//           <li>
//             Open only to current or former banking/finance professionals
//           </li>
//           <li>Must demonstrate exceptional football IQ and discipline</li>
//           <li>
//             Commitment to the team's values of integrity and excellence
//           </li>
//         </ul>

//         <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100 mt-8">
//           <h2 className="font-[600] text-black text-lg mb-2">
//             Our Championship Philosophy
//           </h2>
//           <p className="italic">
//             "We play the game like we manage portfolios - with precision,
//             strategy, and an eye for opportunity. Every match is an
//             investment, and we always deliver returns."
//           </p>
//           <p className="mt-4 text-right">- Bankers All Stars FC Motto</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//   );
// }

"use client";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export function Bankers() {
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
              src="/bankers-fc.png"
              alt="Bankers All Stars Logo"
              width={80}
              height={80}
              className="rounded-full border-2 border-gold-500"
            />
            <div>
              <h1 className="lg:text-[40px] text-[26px] font-[600] leading-tight text-black">
                Bankers All Stars FC
              </h1>
              <p className="text-lg text-[#00000090]">
                The Undisputed Champions
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Image
              src="/team-bankers.jpeg"
              alt="Bankers All Stars Team"
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
                Bankers All Stars FC is an elite football club formed by veteran
                bankers and financial professionals. Known for their strategic
                play and financial discipline on the pitch, they've dominated
                the league with their unique blend of experience and tactical
                brilliance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Manager
                </h2>
                <p className="text-black/80 font-bold">Coach Song</p>
                <p className="mt-2">
                  The steady hand guiding Bankers All Stars—a team rooted in
                  experience and maturity. Coach Song blends tactical discipline
                  with professional poise, leading a squad made up of former
                  bankers, insurance experts, and seasoned business owners.
                  Often referred to as “The Maturity Maestro,” he’s known for
                  his composed sideline presence and sharp game strategies.
                </p>
              </div>

              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Specialties
                </h2>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Solid defensive structure (The “Old Guard” setup)</li>
                  <li>
                    Calculated ball movement (The “Insurance Flow” rhythm)
                  </li>
                  <li>
                    Smart set-piece routines (The “Premium Delivery” playbook)
                  </li>
                  <li>
                    Mature decision-making on the field (The “Executive Finish”)
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="font-[600] pt-7 text-black text-xl">Our Legacy</h2>
            <p>
              The name "Bankers All Stars" carries weight in football circles.
              Originating from an old bankers' association, this team has
              evolved from casual matches between financial institutions to
              becoming professional champions. Our players may be veterans, but
              their experience creates an unstoppable force on the pitch.
            </p>

            <h2 className="font-[600] pt-7 text-black text-xl">Membership</h2>
            <p>Bankers All Stars maintains an exclusive selection policy:</p>
            <ul className="list-disc space-y-4 ml-8">
              <li>
                Open only to current or former banking/finance professionals
              </li>
              <li>Must demonstrate exceptional football IQ and discipline</li>
              <li>
                Commitment to the team's values of integrity and excellence
              </li>
            </ul>

            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100 mt-8">
              <h2 className="font-[600] text-black text-lg mb-2">
                Our Championship Philosophy
              </h2>
              <p className="italic">
                "We play the game like we manage portfolios - with precision,
                strategy, and an eye for opportunity. Every match is an
                investment, and we always deliver returns."
              </p>
              <p className="mt-4 text-right">- Bankers All Stars FC Motto</p>
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
              src="/bankers-fc.png"
              alt="Bankers All Stars Logo"
              width={80}
              height={80}
              className="rounded-full border-2 border-gold-500 mx-auto lg:mx-0"
            />
            <div>
              <h1 className="text-[26px] lg:text-[40px] font-[600] leading-tight text-black">
                Bankers All Stars FC
              </h1>
              <p className="text-lg text-[#00000090]">
                The Undisputed Champions
              </p>
            </div>
          </div>

          {/* Team Image */}
          <div className="mt-8 flex justify-center">
            <Image
              src="/team-bankers.jpeg"
              alt="Bankers All Stars Team"
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
                Bankers All Stars FC is an elite football club formed by veteran
                bankers and financial professionals. Known for their strategic
                play and financial discipline on the pitch, they've dominated
                the league with their unique blend of experience and tactical
                brilliance.
              </p>
            </div>

            {/* Manager & Specialties */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Manager */}
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Manager
                </h2>
                <p className="text-black/80 font-bold">Coach Song</p>
                <p className="mt-2">
                  The steady hand guiding Bankers All Stars—a team rooted in
                  experience and maturity. Coach Song blends tactical discipline
                  with professional poise, leading a squad made up of former
                  bankers, insurance experts, and seasoned business owners.
                  Often referred to as “The Maturity Maestro,” he’s known for
                  his composed sideline presence and sharp game strategies.
                </p>
              </div>

              {/* Specialties */}
              <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100">
                <h2 className="font-[600] text-black text-lg mb-2">
                  Team Specialties
                </h2>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Solid defensive structure (The “Old Guard” setup)</li>
                  <li>
                    Calculated ball movement (The “Insurance Flow” rhythm)
                  </li>
                  <li>
                    Smart set-piece routines (The “Premium Delivery” playbook)
                  </li>
                  <li>
                    Mature decision-making on the field (The “Executive Finish”)
                  </li>
                </ul>
              </div>
            </div>

            {/* Legacy */}
            <div>
              <h2 className="font-[600] pt-7 text-black text-xl">Our Legacy</h2>
              <p className="mt-2">
                The name "Bankers All Stars" carries weight in football circles.
                Originating from an old bankers' association, this team has
                evolved from casual matches between financial institutions to
                becoming professional champions. Our players may be veterans,
                but their experience creates an unstoppable force on the pitch.
              </p>
            </div>

            {/* Membership */}
            <div>
              <h2 className="font-[600] pt-7 text-black text-xl">Membership</h2>
              <p className="mt-2">
                Bankers All Stars maintains an exclusive selection policy:
              </p>
              <ul className="list-disc space-y-4 ml-8 mt-2">
                <li>
                  Open only to current or former banking/finance professionals
                </li>
                <li>Must demonstrate exceptional football IQ and discipline</li>
                <li>
                  Commitment to the team's values of integrity and excellence
                </li>
              </ul>
            </div>

            {/* Philosophy */}
            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-gray-100 mt-8">
              <h2 className="font-[600] text-black text-lg mb-2">
                Our Championship Philosophy
              </h2>
              <p className="italic">
                "We play the game like we manage portfolios - with precision,
                strategy, and an eye for opportunity. Every match is an
                investment, and we always deliver returns."
              </p>
              <p className="mt-4 text-right">- Bankers All Stars FC Motto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
