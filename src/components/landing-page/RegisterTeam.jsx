// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const RegisterTeam = () => {
//   return (
//     <div className="my-[100px] lg:ml-[90px] ml-[10px]">
//       <div className="lg:flex lg:flex-row flex-col gap-[100px] items-center">
//         <div>
//           <Image
//             src="/img3.jpg"
//             alt="logo"
//             height={280}
//             width={420}
//             className="rounded-md"
//           />
//         </div>

//         <div>
//           <h1 className="lg:text-[40px] lg:w-[400px] w-auto leading-tight tracking-tight text-[30px] lg:text-start text-center lg:mt-0 mt-6">
//             Register Your Team Today!
//           </h1>
//           <p className="lg:w-[410px] w-auto text-[#6B6F76] mt-3 mb-8">
//             Be part of the action! Register your team for the Unity Cup 1.0 and
//             seize the opportunity to showcase your talent, compete against the
//             best, and make your mark on the pitch.
//           </p>
//           <div className="flex justify-center lg:justify-start">
//             <Link href="/register">
//               <button className="bg-[#C81E23] text-white py-2 px-6 text-lg rounded-md hover:bg-white hover:text-black hover:border-[#C81E23] hover:border">
//                 Register now
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterTeam;



import Image from "next/image";
import Link from "next/link";
import React from "react";

const RegisterTeam = () => {
  return (
    <div className="my-[100px] lg:ml-[90px] ml-[10px]">
      <div className="lg:flex lg:flex-row flex-col gap-[100px] items-center">
        <div>
          <Image
            src="/use5.jpeg"
            alt="Tournament action"
            height={280}
            width={420}
            className="rounded-md"
          />
        </div>

        <div className="lg:text-start text-center">
          <h1 className="lg:text-[40px] lg:w-[400px] w-auto leading-tight tracking-tight text-[30px] lg:mt-0 mt-5">
            Relive the Unity Cup 1.0 Action!
          </h1>
          <p className="lg:w-[410px] w-auto text-[#6B6F76] mt-3 mb-8 leading-tight">
            While team registration for 1.0 has closed, you can still experience the excitement. 
            Stay tuned for Unity Cup 2.0 - bigger, better, and coming soon!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
            <Link href="/tournament/results">
              <button className="bg-[#C81E23] text-white py-2 px-10 lg:px-6 text-lg rounded-md hover:bg-white hover:text-black hover:border-[#C81E23] hover:border transition-all">
                See Highlights
              </button>
            </Link>
            {/* <Link href="/notify-me">
              <button className="bg-white border border-[#C81E23] text-[#C81E23] py-2 px-6 text-lg rounded-md hover:bg-[#C81E23] hover:text-white transition-all">
                Notify Me About 2.0
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterTeam;