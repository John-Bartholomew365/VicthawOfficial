"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const JourneySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-12 lg:px-[50px] px-4 bg-[#000000] lg:mx-[60px] mx-3 flex justify-center">
      <div className="container max-w-4xl tracking-tight text-center">
        {/* Section Header */}
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 text-white">
            The Journey So Far
          </h2>
          <p className="text-[16px] text-[#B0B3B8] mx-auto max-w-md">
            From a dream to reality, the Victhaw Official Unity Cup has been a
            journey of passion, dedication, and community. Here's how it all
            began and where we're headed.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col items-center">
          {/* Timeline Line */}
          <div
            className="absolute w-1 h-full bg-[#C81E23]"
            data-aos="fade-up"
          ></div>

          {/* Timeline Items */}
          <div className="space-y-10 w-full">
            {[
              {
                year: "2021",
                text: "Victor envisioned a tournament that would bring people together through football, promoting health, unity, and talent development.",
              },
              {
                year: "2022",
                text: "The first community football event was organized, laying the groundwork for what would become the Victhaw Official Unity Cup.",
              },
              {
                year: "2023",
                text: "The tournament grew to include 10 teams and attracted local sponsors, gaining recognition as a premier community event.",
              },
              {
                year: "2024",
                text: "With 16 teams and over 1,000 spectators, the tournament became a highlight of the year, showcasing the power of sports to unite people.",
              },
              {
                year: "2025",
                text: "The Victhaw Official Unity Cup 1.0 is set to be the biggest and most exciting edition yet, with plans to make it an annual tradition.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center text-center lg:text-${index % 2 === 0 ? "left" : "right"} w-full`}
                data-aos="fade-up"
              >
                <div className={`lg:w-1/2 px-6 ${index % 2 === 0 ? "order-1" : "order-2"}`}>
                  <h3 className="text-2xl font-bold text-white">{item.year}</h3>
                  <p className="text-[#B0B3B8]">{item.text}</p>
                </div>
                <div className="lg:w-1/2 flex justify-center py-4 order-2 lg:order-1">
                  <div className="w-6 h-6 bg-[#C81E23] rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;


// "use client";
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const JourneySection = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return (
//     <section className="py-12 lg:px-[50px] px-4 bg-[#000000] lg:mx-[60px] mx-3 flex justify-center">
//       <div className="container max-w-4xl tracking-tight text-center">
//         {/* Section Header */}
//         <div className="mb-12" data-aos="fade-up">
//           <h2 className="text-4xl font-bold mb-4 text-white">
//             The Journey So Far
//           </h2>
//           <p className="text-[16px] text-[#B0B3B8] mx-auto max-w-md">
//             From a dream to reality, the Victhaw Official Unity Cup has been a
//             journey of passion, dedication, and community. Here's how it all
//             began and where we're headed.
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="flex flex-col items-center">
//           {[
//             {
//               year: "2021",
//               text: "Victor envisioned a tournament that would bring people together through football, promoting health, unity, and talent development.",
//             },
//             {
//               year: "2022",
//               text: "The first community football event was organized, laying the groundwork for what would become the Victhaw Official Unity Cup.",
//             },
//             {
//               year: "2023",
//               text: "The tournament grew to include 10 teams and attracted local sponsors, gaining recognition as a premier community event.",
//             },
//             {
//               year: "2024",
//               text: "With 16 teams and over 1,000 spectators, the tournament became a highlight of the year, showcasing the power of sports to unite people.",
//             },
//             {
//               year: "2025",
//               text: "The Victhaw Official Unity Cup 1.0 is set to be the biggest and most exciting edition yet, with plans to make it an annual tradition.",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center text-center mb-8"
//               data-aos="fade-up"
//             >
//               <div className="w-6 h-6 bg-[#C81E23] rounded-full mb-4"></div>
//               <h3 className="text-2xl font-bold text-white">{item.year}</h3>
//               <p className="text-[#B0B3B8]">{item.text}</p>
//               {index < 4 && <div className="w-1 h-8 bg-[#C81E23] my-4"></div>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JourneySection;


