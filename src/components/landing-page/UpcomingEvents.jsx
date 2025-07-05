// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const UpcomingEvents = () => {
//   return (
//     <div>
//       <div className="my-[100px] lg:flex lg:flex-row flex-col-reverse gap-[100px] lg:pl-[100px] pl-[10px]">
//         <div className="lg:mb-0 mb-10 lg:hidden flex">
//           <Image
//             src="/stadium.svg"
//             alt="logo"
//             height={372}
//             width={410}
//             className="rounded-md"
//           />
//         </div>
//         <div>
//           <h1 className="lg:text-[45px] lg:text-start text-center text-[30px] tracking-tight">
//             Upcoming Event
//           </h1>
//           <p className="lg:w-[430px] tracking-tight w-auto my-3 m-auto text-[#6B6F76]">
//             The <strong>Victhaw Official Unity Cup 1.0</strong> will commence on
//             <strong> April 12th to June 29th, 2025!</strong> This highly
//             anticipated tournament will take place at Basin, Ilorin, Kwara
//             State, bringing together top talents, passionate fans, and the
//             electrifying energy of the game we all love.
//           </p>
//           <div className="mt-8 flex lg:justify-start justify-center">
//             <Link href={"/about/tournament"}>
//               <button className="bg-[#C81E23] py-[10px] px-[20px] text-white rounded-[6px] hover:bg-[#ffffff] hover:text-black hover:border-[#C81E23] hover:border">
//                 Learn more
//               </button>
//             </Link>
//           </div>
//         </div>

//         <div className="lg:mt-0 mt-10 lg:flex hidden">
//           <Image
//             src="/stadium.svg"
//             alt="logo"
//             height={372}
//             width={410}
//             className="rounded-md"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpcomingEvents;




import Image from "next/image";
import Link from "next/link";
import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-[100px] lg:flex lg:flex-row flex-col-reverse items-center gap-[100px]">
        {/* Mobile Image (hidden on lg screens) */}
        <div className="lg:hidden w-full mb-10">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/brings.jpeg"
              alt="Tournament venue"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-[55%] lg:pl-3">
          <h1 className="text-[24px] lg:text-5xl font-medium tracking-tight lg:text-left text-center">
            A Successful Inaugural Tournament
          </h1>
          <p className="mt-6 text-lg text-[#6B6F76] lg:text-left text-center lg:pr-8 leading-relaxed">
            The <strong className="text-black">Victhaw Official Unity Cup 1.0</strong> was held from{" "}
            <strong className="text-black">April 12th to June 29th, 2025</strong> at Basin, Ilorin, Kwara
            State. The tournament brought together top talents, passionate fans, and
            created unforgettable football memories.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
            <Link href="/tournament/highlights">
              <button className="bg-[#C81E23] py-3 px-8 text-white rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-[#C81E23] transition-all duration-300 text-lg font-medium lg:w-fit w-[85%] lg:mx-0 mx-auto flex justify-center">
                Relive the Moments
              </button>
            </Link>
          </div>
        </div>

        {/* Desktop Image (hidden on mobile) */}
        <div className="hidden lg:flex lg:w-1/2">
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/brings.jpeg"
              alt="Tournament venue"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;