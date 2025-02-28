// "use client";
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Certifications = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration
//       once: true, // Trigger animations only once
//     });
//   }, []);

//   const certifications = [
//     {
//       id: 1,
//       title: "Certified Fitness Coach",
//       organization: "International Sports Sciences Association (ISSA)",
//       year: "2020",
//       image: "/certification1.jpg", // Replace with your image
//     },
//     {
//       id: 2,
//       title: "Football Coaching License",
//       organization: "Nigerian Football Federation (NFF)",
//       year: "2019",
//       image: "/certification2.jpg", // Replace with your image
//     },
//     {
//       id: 3,
//       title: "Advanced Nutrition Certification",
//       organization: "National Academy of Sports Medicine (NASM)",
//       year: "2021",
//       image: "/certification3.jpg", // Replace with your image
//     },
//     {
//       id: 4,
//       title: "Strength and Conditioning Specialist",
//       organization: "American Council on Exercise (ACE)",
//       year: "2022",
//       image: "/certification4.jpg", // Replace with your image
//     },
//   ];

//   return (
//     <section className="py-16 bg-[#000000]" id="certifications">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-12" data-aos="fade-up">
//           <h2 className="text-4xl tracking-tight font-bold mb-4 text-white">
//             Certifications
//           </h2>
//           <p className="text-lg tracking-tight text-[#B0B3B8] m-auto lg:w-[470px] w-auto">
//             Victor’s certifications reflect his commitment to excellence and
//             continuous learning in fitness and sports coaching.
//           </p>
//         </div>

//         {/* Certifications Grid */}
//         <div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//           data-aos="fade-up"
//         >
//           {certifications.map((certification) => (
//             <div
//               key={certification.id}
//               className="bg-[#1C1C1E] p-6 rounded-lg shadow-md text-center"
//             >
//               <img
//                 src={certification.image}
//                 alt={certification.title}
//                 className="w-32 h-32 mx-auto mb-4 object-contain"
//               />
//               <h3 className="text-xl font-semibold mb-2 text-white">
//                 {certification.title}
//               </h3>
//               <p className="text-[#B0B3B8] mb-2">{certification.organization}</p>
//               <p className="text-[#B0B3B8]">{certification.year}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;

"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Certifications = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animations only once
    });
  }, []);

  const certifications = [
    {
      id: 1,
      title: "FITNESS / EXERCISE THERAPY INSTRUCTOR",
      organization: "Akorede Fitness and Exercise Therapy Center",
      year: "16th August, 2024",
      image: "/certification1.jpg",
      description:
        "This certification validates Victor's expertise in fitness and exercise therapy, equipping him with the skills to guide clients through safe and effective rehabilitation and training programs.",
    },
    {
      id: 2,
      title: "DIPLOMA IN FITNESS",
      organization: "Fab Academy",
      year: "22nd August, 2023",
      image: "/certification2.jpg",
      description:
        "Victor's Diploma in Fitness demonstrates his deep understanding of physical training, exercise science, and personalized fitness programming.",
    },
    {
      id: 3,
      title: "DIPLOMA IN ADVANCED FITNESS",
      organization: "Institute of Exercise Professionals",
      year: "27th August, 2023",
      image: "/certification3.jpg",
      description:
        "This advanced fitness diploma showcases Victor’s expertise in high-performance training, strength development, and injury prevention strategies.",
    },
    {
      id: 4,
      title: "FIRST AID & CPR/AED CERTIFICATE",
      organization: "American Council on Exercise (ACE)",
      year: "28th February, 2025",
      image: "/certification4.jpg",
      description:
        "With this First Aid & CPR/AED certification, Victor is equipped to handle emergency situations, ensuring the safety and well-being of clients during training sessions.",
    },
  ];

  return (
    <section className="py-16" id="certifications">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl tracking-tight font-bold mb-4 text-white">
            List of Certifications
          </h2>
          <p className="text-lg tracking-tight text-[#B0B3B8] m-auto lg:w-[470px] w-auto">
            Victor’s certifications reflect his commitment to excellence and
            continuous learning in fitness and sports coaching.
          </p>
        </div>

        <div className="space-y-8">
          {certifications.map((certification, index) => (
            <div
              key={certification.id}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8  lg:p-6 p-2 rounded-lg shadow-md`}
              data-aos="fade-up"
            >
              <img
                src={certification.image}
                alt={certification.title}
                className="w-[100%] h-64 lg:w-[566px] lg:h-[430px] object-contain rounded-lg"
              />

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {certification.title}
                </h3>
                <p className="text-[#B0B3B8] mb-2">
                  {certification.organization}
                </p>
                <p className="text-[#B0B3B8] mb-4">{certification.year}</p>
                <p className="text-[#B0B3B8] lg:w-[470px] w-auto">
                  {certification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
