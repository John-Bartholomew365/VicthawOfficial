"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { edition } from "@/data/unity-cup-2";

const aboutSections = [
  {
    title: "The Victhaw Official Unity Cup 2.0",
    body: "Unity Cup 2.0 is the next chapter of the high-stakes football tournament that unites teams from different backgrounds in a celebration of competitive spirit and sportsmanship. It builds on the success of Unity Cup 1.0, featuring 8 teams, bigger groups, and the same passion for the beautiful game.",
  },
  {
    title: "Our Mission",
    body: "We create a platform where talented players compete at their best, showcase their abilities, and strengthen community bonds through their shared love of the game.",
  },
  {
    title: "Tournament Format",
    body: "The competition features a group stage with Groups A and B, followed by the semi-finals, a third place match and a grand final. The top 2 teams from each group advance to the knockout phase, where the best teams battle for the championship.",
  },
  {
    title: "The Teams",
    body: "Defending champions Bankers All Stars return alongside 7 ambitious squads ready to write their own history. Check the Teams page to meet every side competing in Unity Cup 2.0.",
  },
  {
    title: "Our Partners",
    body: "This tournament is made possible through the support of our valued sponsors and partners who share our passion for sports and community development. Sponsorship details will be announced on the Sponsors page.",
  },
  {
    title: "Community Impact",
    body: "Beyond the matches, Unity Cup 2.0 brings people together through fan engagement activities, live updates, and interactive events that create lasting memories.",
  },
  {
    title: "Get Involved",
    body: "Whether you're a player, a fan, or a sponsor, there's a place for you in Unity Cup 2.0. Follow the tournament on social media, cheer for your favourite team, and be part of the excitement.",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div>
      <div className="lg:flex lg:flex-row flex-col items-center gap-[100px] my-[100px] lg:pl-[50px] pl-0">
        <div data-aos="fade-right">
          <h1 className="lg:text-[45px] lg:w-[471px] w-auto tracking-tight font-bold text-[30px] leading-tight">
            About the {edition.shortTitle}
          </h1>
          <p className="text-[#6B6F76] tracking-tight lg:w-[420px] w-auto mt-4">
            Get all the essential details about this thrilling tournament, its
            purpose, structure, and what makes it an unmissable event!
          </p>
        </div>

        <div className="lg:mt-0 mt-10" data-aos="fade-left">
          <Image
            src="/victhaw-logo.svg"
            alt="logo"
            height={230}
            width={420}
            className="rounded-md"
          />
        </div>
      </div>

      <div className="my-[100px] lg:px-[80px] px-[3px]">
        <main className="container mx-auto p-4">
          <div className="space-y-8">
            {aboutSections.map((section) => (
              <article
                key={section.title}
                className="bg-[#FAFAFA] shadow-md rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                <p className="text-[#6B6F76] mb-4">{section.body}</p>
              </article>
            ))}
          </div>
        </main>

        <div className="my-[60px]">
          <p className="text-[#6B6F76] text-center m-auto mb-4 lg:w-[500px] w-auto">
            Want to follow the journey of Unity Cup 2.0? Check the schedule and
            results to stay on top of every match.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/tournament/schedule"
              className="bg-[#C81E23] text-white py-2 px-4 rounded-md hover:bg-[#a8191d] transition duration-300 ease-in-out"
            >
              View Schedule
            </Link>
            <Link
              href="/tournament/team"
              className="border border-[#C81E23] text-[#C81E23] py-2 px-4 rounded-md hover:bg-[#C81E23] hover:text-white transition duration-300 ease-in-out"
            >
              Meet the Teams
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
