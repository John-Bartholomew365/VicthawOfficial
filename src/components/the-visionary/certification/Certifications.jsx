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
      title: "Fitness & Exercise Therapy Instructor",
      organization: "Akorede Fitness and Exercise Therapy Center",
      year: "16th August, 2024",
      image: "/certification1.jpg",
      description:
        "This certification recognises Victor’s expertise in fitness and exercise therapy, equipping him with the knowledge and skills to design safe, effective rehabilitation and training programs. It qualifies him to help individuals recover from injuries, improve mobility, and enhance overall physical well-being.",
    },
    {
      id: 2,
      title: "DIPLOMA IN FITNESS",
      organization: "Fab Academy",
      year: "22nd August, 2023",
      image: "/certification2.jpg",
      description:
        "This diploma highlights Victor’s expertise in physical training, exercise science, and personalized fitness programming. It equips him with the knowledge to design effective workout plans tailored to individual fitness levels and goals.",
    },
    {
      id: 3,
      title: "DIPLOMA IN ADVANCED FITNESS",
      organization: "Institute of Exercise Professionals",
      year: "27th August, 2023",
      image: "/certification3.jpg",
      description:
        "This advanced diploma demonstrates Victor’s proficiency in high-performance training, strength conditioning, and injury prevention techniques. It qualifies him to train athletes and individuals seeking to enhance their physical performance safely and effectively.",
    },
    {
      id: 4,
      title: "FIRST AID & CPR/AED CERTIFICATE",
      organization: "American Council on Exercise (ACE)",
      year: "28th February, 2025",
      image: "/certification4.jpg",
      description:
        "This certification ensures that Victor is fully trained to handle emergencies, including CPR and AED use. With this qualification, he prioritises client safety during training sessions and can respond effectively to medical emergencies.",
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
          Victor's certifications demonstrate his dedication to excellence and ongoing growth in fitness and sports coaching.
          </p>
        </div>

        <div className="space-y-8">
          {certifications.map((certification, index) => (
            <div
              key={certification.id}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8  lg:p-6 p-0 rounded-lg shadow-md`}
              data-aos="fade-up"
            >
              <img
                src={certification.image}
                alt={certification.title}
                className="w-[100%] h-64 lg:w-[536px] lg:h-[430px] object-contain rounded-lg"
              />

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {certification.title}
                </h3>
                <p className="text-[#B0B3B8] mb-2 italic">
                  {certification.organization}
                </p>
                <p className="text-[#B0B3B8] mb-4 italic">Certified on: {certification.year}</p>
                <p className="text-[#B0B3B8] lg:w-[430px] w-auto">
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
