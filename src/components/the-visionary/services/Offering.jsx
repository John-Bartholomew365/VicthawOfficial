"use client";
import React, { useEffect } from "react";

const Offering = () => {
  const services = [
    {
      id: 1,
      title: "Fitness Coaching",
      description:
        "Personalized training programs designed to help you build strength, endurance, and confidence.",
      image: "/fitness-coaching.jpg", // Replace with your image
    },
    {
      id: 2,
      title: "Football Mentoring",
      description:
        "Dynamic coaching to improve technical skills, tactical awareness, and athletic performance.",
      image: "/football-mentor.jpg", // Replace with your image
    },
    {
      id: 3,
      title: "Community Programs",
      description:
        "Initiatives that bring people together through sports, fitness, and wellness.",
      image: "/community-programs.jpg", // Replace with your image
    },
  ];
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl tracking-tight font-bold mb-4 text-white">
            What I Offer
          </h2>
          <p className="text-lg tracking-tight leading-tight text-[#B0B3B8] m-auto lg:w-[470px] w-auto">
            From personalized fitness programs to dynamic football coaching,
            Victor provides tailored services to help you achieve your goals.
          </p>
        </div>
      </div>

      <div className="container px-4">
        {/* Services Grid */}
        <div
          className="lg:mx-[40px] mx-[0px] grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#1C1C1E] p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-[#B0B3B8]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offering;
