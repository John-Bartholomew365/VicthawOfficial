"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animations only once
    });
  }, []);

  const testimonials = [
    {
      id: 1,
      quote:
        "Victor’s fitness coaching has completely transformed my life. I’ve never felt stronger or more confident!",
      name: "AbdulGafar Muniru",
      role: "Fitness Client",
    },
    {
      id: 2,
      quote:
        "Thanks to Victor’s football mentoring, my game has improved dramatically. He’s an incredible coach!",
      name: "Francis Uche",
      role: "Football Player",
    },
    {
      id: 3,
      quote:
        "Victor’s community programs have brought our neighborhood together. He’s a true leader and inspiration.",
      name: "Sarah Adebayo",
      role: "Community Member",
    },
  ];

  return (
    <section className="py-16 bg-[#FAFAFA] lg:px-7 px-3 lg:mx-[50px] mx-2 mb-[70px]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="lg:text-4xl text-[30px] leading-tight tracking-tight font-bold mb-4 text-black">
            What People Are Saying
          </h2>
          <p className="text-lg tracking-tight text-[#6B6F76] m-auto lg:w-[470px] w-auto">
            Hear from those who have experienced Victor’s coaching and
            mentorship firsthand.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-aos="fade-up"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#FAFAFA]  p-6 rounded-lg shadow-md"
            >
              <p className="text-[#6B6F76] italic mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-sm text-[#6B6F76]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
