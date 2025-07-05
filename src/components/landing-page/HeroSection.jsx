// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const HeroSection = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const slider = [
//     {
//       firstText: "Uniting the",
//       secondText: "community",
//       thirdText: "through soccer",
//       subTitle:
//         "Victhawofficial Unity Cup 1.0 isn’t just a tournament, it’s a movement! We bring players together to compete and fans to cheer them on, celebrating the love of football.",
//       image: "/img1.jpg",
//     },
//     {
//       firstText: "Showcase",
//       secondText: "your talent",
//       thirdText: "",
//       subTitle:
//         "Calling all aspiring football stars! This is your chance to shine, showcase your skills, and earn the recognition you deserve.",
//       image: "/use1.jpeg",
//     },
//     {
//       firstText: "Experience",
//       secondText: "the thrill",
//       thirdText: "of Victory",
//       subTitle:
//         "Think you have what it takes to compete against the best? This is your chance to battle it out in a professionally organized tournament, where glory and exciting prizes await the champions.",
//       image: "/victhaw-trophy.jpeg",
//     },
//   ];

//   const carousel = slider[activeSlide];

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });

//     const interval = setInterval(() => {
//       setActiveSlide((prev) => (prev === slider.length - 1 ? 0 : prev + 1));
//     }, 7500);

//     return () => clearInterval(interval);
//   }, [activeSlide]);

//   return (
//     <div className="container mx-auto my-16">
//       <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-[100px]">
//         {/* Text Section */}
//         <div
//           className="md:w-1/2 text-center md:text-left space-y-6 px-4 md:px-10 lg:mt-0 mt-10"
//           data-aos="fade-right"
//         >
//           <h1 className="text-4xl md:text-6xl lg:text-[64px] font-bold leading-tight tracking-tight">
//             <span className="block">{carousel.firstText}</span>
//             <span className="block">{carousel.secondText}</span>
//             <span className="block">{carousel.thirdText}</span>
//           </h1>
//           <p className="text-[16px] text-[#6B6F76] tracking-tight">
//             {carousel.subTitle}
//           </p>
//           {/* Carousel Indicators */}
//           <div className="flex justify-center md:justify-start space-x-2 mt-4">
//             {slider.map((_, index) => (
//               <span
//                 key={index}
//                 className={`rounded-full w-3 h-3 ${
//                   activeSlide === index ? "bg-[#C81E23]" : "bg-gray-300"
//                 }`}
//               ></span>
//             ))}
//           </div>
//         </div>

//         <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
//           <div className="w-full max-w-[500px] h-[470px]">
//             {" "}
//             {/* Adjust height here */}
//             <Image
//               src={carousel.image}
//               alt="carousel image"
//               width={420}
//               height={280}
//               className="object-cover rounded-md h-full w-full"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;





"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slider = [
    {
      firstText: "We united the",
      secondText: "community",
      thirdText: "through soccer",
      subTitle:
        "Victhawofficial Unity Cup 1.0 was more than just a tournament - it was a movement! We brought players together to compete and fans to cheer them on, celebrating the love of football.",
      image: "/img1.jpg",
    },
    {
      firstText: "Talents",
      secondText: "were showcased",
      thirdText: "",
      subTitle:
        "Aspiring football stars shined on the pitch, displayed their skills, and earned the recognition they deserved in this unforgettable tournament.",
      image: "/use1.jpeg",
    },
    {
      firstText: "The thrill",
      secondText: "of Victory",
      thirdText: "was experienced",
      subTitle:
        "Teams battled it out in our professionally organized tournament, where glory and exciting prizes were claimed by the champions.",
      image: "/thrill.jpeg",
    },
  ];

  const carousel = slider[activeSlide];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slider.length - 1 ? 0 : prev + 1));
    }, 7500);

    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <div className="container mx-auto my-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-[100px]">
        {/* Text Section */}
        <div
          className="md:w-[55%] text-center md:text-left space-y-5 px-4 md:px-10 lg:mt-0 mt-10"
          data-aos="fade-right"
        >
          <h1 className="text-4xl lg:text-[58px] font-bold leading-tight tracking-tight">
            <span className="block">{carousel.firstText}</span>
            <span className="block">{carousel.secondText}</span>
            <span className="block">{carousel.thirdText}</span>
          </h1>
          <p className="text-[16px] text-[#6B6F76] tracking-tight">
            {carousel.subTitle}
          </p>
          {/* Carousel Indicators */}
          <div className="flex justify-center md:justify-start space-x-2 mt-4">
            {slider.map((_, index) => (
              <span
                key={index}
                className={`rounded-full w-3 h-3 ${
                  activeSlide === index ? "bg-[#C81E23]" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
          <div className="w-full max-w-[500px] h-[470px]">
            {" "}
            {/* Adjust height here */}
            <Image
              src={carousel.image}
              alt="carousel image"
              width={420}
              height={280}
              className="object-cover rounded-md h-full w-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;