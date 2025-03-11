// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// const HeroSection = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const slider = [
//     {
//       firstText: "Uniting the",
//       secondText: "community",
//       thirdText: "through soccer",
//       subTitle:
//         "Victhaw Official Unity Cup 1.0 brings together players and fans from all backgrounds to celebrate the beautiful game.",
//       image: "/hero-img.svg",
//     },
//     {
//       firstText: "Showcase",
//       secondText: "your talent",
//       thirdText: "",
//       subTitle:
//         "A platform for aspiring soccer stars to shine and gain recognition.",
//       image: "/hero-img2.svg",
//     },
//     {
//       firstText: "Experience",
//       secondText: "the thrill",
//       thirdText: "of Victory",
//       subTitle:
//         "Compete against the best in a professionally organized tournament with exciting prizes.",
//       image: "/hero-img3.svg",
//     },
//   ];

//   const carousel = slider[activeSlide];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide((prev) => (prev === slider.length - 1 ? 0 : prev + 1));
//     }, 7500);
//     return () => clearInterval(interval);
//   }, [activeSlide]);

//   return (
//     <div className="container mx-auto my-16">
//       <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-[100px]">
//         {/* Text Section */}
//         <div className="md:w-1/2 text-center md:text-left space-y-6 px-4 md:px-10 lg:mt-0 mt-10">
//           <h1 className="text-4xl md:text-6xl lg:text-[64px] font-bold leading-tight tracking-tight">
//             <span className="block">{carousel.firstText}</span>
//             <span className="block">{carousel.secondText}</span>
//             <span className="block">{carousel.thirdText}</span>
//           </h1>
//           <p className="text-lg md:text-xl text-[#B0B3B8] tracking-tight">
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

//         <div className="md:w-1/2 flex justify-center">
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
      firstText: "Uniting the",
      secondText: "community",
      thirdText: "through soccer",
      subTitle:
        "Victhawofficial Unity Cup 1.0 isn’t just a tournament, it’s a movement! We bring players together to compete and fans to cheer them on, celebrating the love of football.",
      image: "/img1.jpg",
    },
    {
      firstText: "Showcase",
      secondText: "your talent",
      thirdText: "",
      subTitle:
        "Calling all aspiring football stars! This is your chance to shine, showcase your skills, and earn the recognition you deserve.",
      image: "/img2.jpg",
    },
    {
      firstText: "Experience",
      secondText: "the thrill",
      thirdText: "of Victory",
      subTitle:
        "Think you have what it takes to compete against the best? This is your chance to battle it out in a professionally organized tournament, where glory and exciting prizes await the champions.",
      image: "/img3.jpg",
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
          className="md:w-1/2 text-center md:text-left space-y-6 px-4 md:px-10 lg:mt-0 mt-10"
          data-aos="fade-right"
        >
          <h1 className="text-4xl md:text-6xl lg:text-[64px] font-bold leading-tight tracking-tight">
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
