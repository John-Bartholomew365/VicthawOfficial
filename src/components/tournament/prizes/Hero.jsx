// import Image from "next/image";
// import React from "react";

// const Hero = () => {
//   return (
//     <div className="my-[70px]">
//       <div className="lg:flex lg:flex-row flex-col items-center justify-center gap-[100px] lg:pr-[50px] pr-0">
//         <div>
//           <h1 className="lg:text-[50px] text-[30px] leading-tight tracking-tight">
//             Prizes and Awards
//           </h1>
//           <p className="text-[#B0B3B8] tracking-tight lg:w-[380px] w-auto mt-4">
//             The Victhaw Official Unity Cup 1.0 celebrates excellence with
//             exciting prizes and awards for outstanding teams and players.
//           </p>
//         </div>
//         <div className="my-[50px] lg:flex lg:flex-row flex-col justify-center">
//           <div>
//             <Image
//               src="/prizes.svg"
//               alt="logo"
//               height={430}
//               width={430}
//               className="rounded-md"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <div className="my-[80px]" data-aos="fade-up">
      <div className="lg:flex lg:flex-row flex-col items-center justify-center gap-[100px] lg:pr-[50px] pr-0">
        <div data-aos="fade-right">
          <h1 className="lg:text-[50px] text-[30px] lg:text-start text-center leading-tight tracking-tight">
            Prizes and Awards
          </h1>
          <p className="text-[#6B6F76] lg:text-start text-center tracking-tight lg:w-[410px] w-auto mt-4">
            This tournament is all about celebrating excellence! Outstanding
            teams and exceptional players will be recognized with prestigious
            awards and exciting prizes for their skill, dedication, and
            performance on the field.
          </p>
        </div>
        <div className="my-[50px] lg:flex lg:flex-row flex-col justify-center">
          <div data-aos="fade-left">
            <Image
              src="/prizes.svg"
              alt="logo"
              height={430}
              width={430}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
