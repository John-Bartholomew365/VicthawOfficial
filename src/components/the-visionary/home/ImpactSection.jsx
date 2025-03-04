"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ImpactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl tracking-tight font-bold mb-4">
            The Impact of the Victhaw <br /> Official Unity Cup
          </h2>
          <p className="text-[16px] tracking-tight text-[#B0B3B8] m-auto lg:w-[590px] w-auto">
            Sports have the power to transform lives, build character, and unite
            people from all walks of life. My goal is to create a platform where
            athletes can showcase their talents, embrace discipline, and inspire
            the next generation. This is more than just competition, it’s about
            fostering resilience, teamwork, and a lasting impact on the
            community.
            <br />– <strong>Adeniji Gbolabo Victor, Founder</strong>
          </p>
        </div>

        {/* Victor's Photo
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg mb-12" data-aos="fade-up">
          <Image
            src="/victor-tournament.jpg" // Replace with your image path
            alt="Victor at the Tournament"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div> */}

        {/* Content Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-4 gap-8 tracking-tight lg:px-[50px] px-[5px]"
          data-aos="fade-up"
        >
          {/* Impact Card 1: Community Engagement */}
          <div className="bg-[#000000] p-6 rounded-lg shadow-md text-center">
            <div className="text-[#C81E23] text-4xl font-bold mb-4">16+</div>
            <h3 className="text-xl font-semibold mb-2">Teams</h3>
            <p className="text-[#B0B3B8]">
              Uniting talented football teams from different backgrounds,
              fostering competition, teamwork, and a shared passion for the
              game.
            </p>
          </div>

          {/* Impact Card 2: Talent Development */}
          <div className="bg-[#000000] p-6 rounded-lg shadow-md text-center">
            <div className="text-[#C81E23] text-4xl font-bold mb-4">250+</div>
            <h3 className="text-xl font-semibold mb-2">Players</h3>
            <p className="text-[#B0B3B8]">
              Offering a platform for athletes to shine, develop their skills,
              and take their football careers to the next level.
            </p>
          </div>

          {/* Impact Card 3: Health and Fitness */}
          <div className="bg-[#000000] p-6 rounded-lg shadow-md text-center">
            <div className="text-[#C81E23] text-4xl font-bold mb-4">1K+</div>
            <h3 className="text-xl font-semibold mb-2">Spectators</h3>
            <p className="text-[#B0B3B8]">
              Bringing the community together to experience the thrill of the
              game while promoting fitness, engagement, and a love for sports.
            </p>
          </div>

          {/* Impact Card 4: Economic Benefits */}
          <div className="bg-[#000000] p-6 rounded-lg shadow-md text-center">
            <div className="text-[#C81E23] text-4xl font-bold mb-4">10+</div>
            <h3 className="text-xl font-semibold mb-2">Sponsors</h3>
            <p className="text-[#B0B3B8]">
              Providing businesses with valuable exposure, brand visibility, and
              a chance to support grassroots sports development.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-[#C81E23] text-center mb-8">
            What People Are Expecting
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:px-[50px] px-[5px]">
            {/* Anticipation 1 */}
            <div className="bg-[#000000] p-6 rounded-lg shadow-md">
              <p className="text-[#B0B3B8] italic">
                "I can't wait for the Victhaw Official Unity Cup! It's going to
                be an amazing opportunity to showcase our skills and connect
                with other talented players."
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold ">Kolapo James</p>
                  <p className="text-sm text-gray-500">Player, Storm FC</p>
                </div>
              </div>
            </div>

            {/* Anticipation 2 */}
            <div className="bg-[#000000] p-6 rounded-lg shadow-md">
              <p className="text-[#B0B3B8] italic">
                "Sponsoring this event is an exciting opportunity! We are
                looking forward to being part of something that will bring the
                community together in a meaningful way."
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">Abubakar Sheikh</p>
                  <p className="text-sm text-gray-500">
                    Sponsor Representative
                  </p>
                </div>
              </div>
            </div>

            {/* Anticipation 3 */}
            <div className="bg-[#000000] p-6 rounded-lg shadow-md">
              <p className="text-[#B0B3B8] italic">
                "I'm so excited for the first edition of the tournament! It’s
                going to be an unforgettable experience, and I can't wait to
                witness the energy and passion on the field."
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold ">Isaiah Johnson</p>
                  <p className="text-sm text-gray-500">Spectator</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up">
          <a
            href="/register" // Replace with your registration link
            className="bg-[#C81E23] text-white px-8 py-4 rounded-lg hover:bg-red-900 transition duration-300"
          >
            Be Part of the Impact
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
