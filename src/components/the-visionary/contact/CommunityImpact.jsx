"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CommunityImpact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <section className="py-16 bg-[#FAFAFA] lg:mx-[55px] mx-[5px]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl tracking-tight font-bold mb-4 text-black">
            Community Impact
          </h2>
          <p className="text-lg tracking-tight text-[#6B6F76] m-auto lg:w-[470px] w-auto">
            Victor’s initiatives have made a lasting impact on the community,
            bringing people together through sports and fitness.
          </p>
        </div>

        {/* Impact Stats */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:px-[30px] px-0"
          data-aos="fade-up"
        >   
          {/* Stat 1 */}
          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-sm">
            <h3 className="text-4xl font-bold text-[#C81E23] mb-4">500+</h3>
            <p className="text-[#6B6F76]">Participants in Fitness Programs</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-sm">
            <h3 className="text-4xl font-bold text-[#C81E23] mb-4">16</h3>
            <p className="text-[#6B6F76]">Teams in the Unity Cup</p>
          </div>

          {/* Stat 3 */}
          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-sm">
            <h3 className="text-4xl font-bold text-[#C81E23] mb-4">1K+</h3>
            <p className="text-[#6B6F76]">Community Members Impacted</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;