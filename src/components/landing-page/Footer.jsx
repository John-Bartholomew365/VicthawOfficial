// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";

// const Footer = () => {
//   const calculateTimeLeft = () => {
//     const targetDate = new Date("2025-04-12T09:00:00");
//     const currentTime = new Date();
//     const difference = targetDate - currentTime;

//     const formatTime = (time) => (time < 10 ? `0${time}` : time);

//     let timeLeft = {};
//     if (difference > 0) {
//       timeLeft = {
//         days: formatTime(Math.floor(difference / (1000 * 60 * 60 * 24))),
//         hours: formatTime(Math.floor((difference / (1000 * 60 * 60)) % 24)),
//         minutes: formatTime(Math.floor((difference / 1000 / 60) % 60)),
//         seconds: formatTime(Math.floor((difference / 1000) % 60)),
//       };
//     }
//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(timer); // Cleanup interval on unmount
//   }, []);

//   return (
//     <div className="bg-[#000000] text-white lg:px-[140px] pb-[15px] pt-[50px] px-[30px]">
//       <div className="flex justify-between items-center border-t border-b border-white/10 py-8">
//         <div>
//           <Image src="/victhaw-logo.svg" alt="logo" height={80} width={90} />
//         </div>
//         <div>
//           <h1 className="lg:text-[24px] text-[16px] leading-tight">
//             Bringing Communities Together <br /> Through Unity and Sports.
//           </h1>
//         </div>
//       </div>

//       <div className="mt-[80px] grid lg:grid-cols-4 grid-cols-1 gap-1">
//         <div>
//           <h1 className="text-[#C90A1D] font-bold lg:text-[24px] text-[20px]">
//             About
//           </h1>
//           <div className="ml-4 mt-5 flex flex-col space-y-2">
//             <Link className="hover:text-[#C81E23]" href={"/faq"}>
//               FAQs
//             </Link>

//             <Link className="hover:text-[#C81E23]" href={"/about/vision"}>
//               Vision
//             </Link>
//             <Link
//               className="hover:text-[#C81E23]"
//               href={"/terms"}
//             >
//               Terms & Conditions
//             </Link>
//             <Link
//               className="hover:text-[#C81E23]"
//               href={"/policy"}
//             >
//               Privacy Policy
//             </Link>
//             <Link className="hover:text-[#C81E23]" href={"/contact"}>
//               Contact us
//             </Link>
//           </div>
//         </div>
//         <div>
//           <h1 className="text-[#C81E23] font-bold lg:text-[24px] text-[20px]">
//             Tournament info
//           </h1>
//           <div className="ml-4 mt-5 flex flex-col space-y-2">
//             <Link className="hover:text-[#C81E23]" href={"/tournament/rules"}>
//               Rules
//             </Link>
//             <Link
//               className="hover:text-[#C81E23]"
//               href={"/tournament/schedule"}
//             >
//               Schedule
//             </Link>
//             <Link className="hover:text-[#C81E23]" href={"/tournament/prizes"}>
//               Prizes
//             </Link>
//           </div>
//         </div>
//         <div>
//           <h1 className="text-[#C81E23] font-bold lg:text-[24px] text-[20px]">
//             Quick Links
//           </h1>
//           <div className="ml-4 mt-5 flex flex-col space-y-2">
//             <Link className="hover:text-[#C81E23]" href={"/register"}>
//               Register now
//             </Link>
//             <Link
//               className="hover:text-[#C81E23]"
//               href={"/about/sponsors"}
//             >
//               Become a sponsor
//             </Link>
//             <Link className="hover:text-[#C81E23]" href={"/news"}>
//               News & Updates
//             </Link>
//           </div>
//         </div>
//         <div>
//           <h1 className="text-[#C81E23] font-bold lg:text-[24px] text-[20px]">
//             Countdown
//           </h1>
//           <div className="ml-4 mt-5 flex flex-col space-y-2 text-[20px]">
//             {Object.keys(timeLeft).length > 0 ? (
//               <div className="flex space-x-4">
//                 <div>
//                   <span className="font-bold">{timeLeft.days}</span> Days
//                 </div>
//                 <div>
//                   <span className="font-bold">{timeLeft.hours}</span> Hours
//                 </div>
//                 <div>
//                   <span className="font-bold">{timeLeft.minutes}</span> Minutes
//                 </div>
//                 <div>
//                   <span className="font-bold">{timeLeft.seconds}</span> Seconds
//                 </div>
//               </div>
//             ) : (
//               <p className="text-[18px] text-green-600 font-semibold">
//                 The event is live now!
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       <div>
//         <div className="flex justify-between items-center border-t border-white/10 py-8 mt-[80px]">
//           <div>
//             <p className="copyright text-[#B0B3B8]">
//               &copy; 2025 Victhaw Official Unity Cup. All rights reserved.
//             </p>
//           </div>
//           <div className="gap-3">
//             <Link
//               className="bg-[#C81E23] p-2 rounded-full inline-flex items-center justify-center"
//               href="https://www.x.com/coachvhicktaw"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Image src="/x-vic.svg" alt="X" height={20} width={20} />
//             </Link>
//             <Link
//               className="bg-[#C81E23] mx-2 p-2 rounded-full inline-flex items-center justify-center"
//               href="https://wa.me/08106163804"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Image
//                 src="/whatsapp-vic.svg"
//                 alt="WhatsApp"
//                 height={20}
//                 width={20}
//               />
//             </Link>

//             <Link
//               className="bg-[#C81E23] mr-2 p-2 rounded-full inline-flex items-center justify-center"
//               href="mailto:Victhawofficial@gmail.com"
//             >
//               <Image src="/email-vic.svg" alt="Email" height={20} width={20} />
//             </Link>

//             <Link
//               className="bg-[#C81E23] p-2 rounded-full inline-flex items-center justify-center"
//               href="https://www.instagram.com/victhawofficial"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Image
//                 src="/insta-vic.svg"
//                 alt="Instagram"
//                 height={20}
//                 width={20}
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-04-12T09:00:00");
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: formatTime(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: formatTime(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: formatTime(Math.floor((difference / 1000 / 60) % 60)),
        seconds: formatTime(Math.floor((difference / 1000) % 60)),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  return (
    <div className="bg-[#FAFAFA] text-black lg:px-[140px] px-[30px] pb-[15px] pt-[50px]">
      <div className="flex flex-col lg:flex-row justify-between items-center border-t border-b border-white/10 py-8">
        <div className="mb-6 lg:mb-0">
          <Image
            src="/victhaw-logo.svg"
            alt="logo"
            height={80}
            width={90}
            className="rounded-full"
          />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="lg:text-[24px] text-[16px] leading-tight">
            Uniting Communities Together <br /> Through Unity and Sports.
          </h1>
        </div>
      </div>

      <div className="mt-[80px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <h1 className="text-[#C90A1D] font-bold lg:text-[18px] text-[16px]">
            About
          </h1>
          <div className="ml-4 mt-5 flex flex-col space-y-2">
            <Link
              className="hover:text-[#C90A1D] text-[14px]"
              href={"/about/faq"}
            >
              FAQs
            </Link>
            <Link
              className="hover:text-[#C90A1D] text-[14px]"
              href={"/about/vision"}
            >
              Victhaw Vision
            </Link>
            <Link className="hover:text-[#C90A1D] text-[14px]" href={"/terms"}>
              Terms & Conditions
            </Link>
            <Link className="hover:text-[#C90A1D] text-[14px]" href={"/policy"}>
              Privacy Policy
            </Link>
            <Link
              className="hover:text-[#C90A1D] text-[14px]"
              href={"/about/contact"}
            >
              Contact us
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-[#C90A1D] font-bold lg:text-[18px] text-[16px]">
            Tournament info
          </h1>
          <div className="ml-4 mt-5 flex flex-col space-y-2">
            <Link
              className="hover:text-[#C90A1D] text-[14px]"
              href={"/tournament/team"}
            >
              Teams
            </Link>
            <Link
              className="hover:text-[#C90A1D] text-[14px]"
              href={"/tournament/rules"}
            >
              Rules
            </Link>
            <Link
              className="hover:text-[#C90A1D] text-[14px]"
              href={"/tournament/schedule"}
            >
              Schedule
            </Link>
            <Link
              className="hover:text-[#C90A1D] text-[14px]"
              href={"/tournament/prizes"}
            >
              Prizes
            </Link>
            <Link className="hover:text-[#C90A1D] text-[14px]" href={"/news"}>
              News & Updates
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-[#C90A1D] font-bold lg:text-[18px] text-[16px]">
            Quick Links
          </h1>
          <div className="ml-4 mt-5 flex flex-col space-y-2">
            <Link
              className="hover:text-[#C90A1D] text-[14px]"
              href={"/register"}
            >
              Register now
            </Link>
            <Link
              className="hover:text-[#C90A1D] text-[14px]"
              href={"/about/sponsors"}
            >
              Become a sponsor
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-[#C90A1D] font-bold lg:text-[18px] text-[16px]">
            Countdown
          </h1>
          <div className="ml-4 mt-5 flex flex-col space-y-2 text-[16px]">
            {Object.keys(timeLeft).length > 0 ? (
              <div className="flex flex-wrap gap-4">
                <div>
                  <p className="font-bold">{timeLeft?.days}</p> Days
                </div>
                <div>
                  <p className="font-bold">{timeLeft?.hours}</p> Hours
                </div>
                <div>
                  <p className="font-bold">{timeLeft?.minutes}</p> Minutes
                </div>
                <div>
                  <p className="font-bold">{timeLeft.seconds}</p> Seconds
                </div>
              </div>
            ) : (
              <p className="text-[18px] text-green-600 font-semibold">
                The tournament is underway!
              </p>
            )}
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col lg:flex-row justify-between items-center border-t border-white/10 py-8 mt-[80px]">
          <div className="mb-6 lg:mt-0 lg:block hidden">
            <p className="copyright text-[#6B6F76] text-[14px] text-center lg:text-left">
              &copy; 2025 Victhaw Official Unity Cup. All rights reserved.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              className="bg-[#C90A1D] p-2 rounded-full inline-flex items-center justify-center"
              href="https://www.x.com/coachvhicktaw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={20} className="text-white" />
            </Link>
            <Link
              className="bg-[#C90A1D] mx-2 p-2 rounded-full inline-flex items-center justify-center"
              href="https://wa.me/+2348106163804"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={20} className="text-white" />
            </Link>

            <Link
              className="bg-[#C90A1D] mr-2 p-2 rounded-full inline-flex items-center justify-center"
              href="mailto:Victhawofficial@gmail.com"
            >
              <MdEmail size={20} className="text-white" />
            </Link>

            <Link
              className="bg-[#C90A1D] p-2 rounded-full inline-flex items-center justify-center"
              href="https://www.instagram.com/victhawofficial_unitycup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} className="text-white" />
            </Link>
          </div>
          <div className="mt-4 lg:mb-0 lg:hidden block">
            <p className="copyright text-[#6B6F76] text-[14px] text-center lg:text-left">
              &copy; 2025 Victhaw Official Unity Cup. <br /> All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
