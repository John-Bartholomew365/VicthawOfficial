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
    body: "Unity Cup 2.0 was the next chapter of the high-stakes football tournament that unites teams from different backgrounds in a celebration of competitive spirit and sportsmanship. It built on the success of Unity Cup 1.0, with 8 teams, bigger groups, and the same passion for the beautiful game.",
  },
  {
    title: `Our Theme: "${edition.theme}"`,
    body: "Unity Cup 2.0 was designed to unite people through sport while promoting awareness about high blood pressure and the importance of an active lifestyle — blending competitive football with real health advocacy.",
  },
  {
    title: "40+ Legends Division",
    body: "In keeping with the health theme, the tournament featured a dedicated 40+ age category — putting the spotlight on the very demographic most at risk of hypertension, and proving the game has no age limit.",
  },
  {
    title: "Our Mission",
    body: "We create a platform where talented players compete at their best, showcase their abilities, and strengthen community bonds through their shared love of the game — while encouraging everyone to stay active and informed about their health.",
  },
  {
    title: "Tournament Format",
    body: `The competition was an 11-a-side group stage with Groups A and B, followed by the semi-finals, a third place match and a grand final. The top 2 teams from each group advanced to the knockout phase, where Kwaita United ultimately came out on top, in front of an audience of ${edition.expectedAudience} fans.`,
  },
  {
    title: "The Teams",
    body: "Defending champions Bankers All Stars were joined by 7 ambitious squads, all looking to write their own history. Check the Teams page to meet every side that competed in Unity Cup 2.0.",
  },
  {
    title: "Beyond the Scoreline",
    body: "Every matchday paired the football with light fitness & stretching sessions and a health-awareness campaign — reinforcing the tournament's message that staying active starts with small, consistent steps.",
  },
  {
    title: "Community Impact",
    body: "Beyond the matches, Unity Cup 2.0 brought people together through fan engagement activities, live updates, and closing-ceremony celebrations that created lasting memories.",
  },
  {
    title: "Get Involved",
    body: "Whether you're a player, a fan, or a sponsor, there's a place for you at the next Unity Cup. Follow us on social media to be the first to hear about the next edition.",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div>
      <div className="lg:flex lg:flex-row flex-col items-center gap-[100px] my-[100px] lg:pl-[50px] pl-0">
        <div data-aos="fade-up">
          <h1 className="lg:text-[45px] lg:w-[471px] w-auto tracking-tight font-bold text-[30px] leading-tight">
            About the {edition.shortTitle}
          </h1>
          <p className="text-[#6B6F76] tracking-tight lg:w-[420px] w-auto mt-4">
            Get all the essential details about this thrilling tournament, its
            purpose, structure, and what makes it an unmissable event!
          </p>
        </div>

        <div className="lg:mt-0 mt-10" data-aos="fade-up">
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
            Want to relive the journey of Unity Cup 2.0? Check the full results
            and see how every match played out.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/tournament/results"
              className="bg-[#C81E23] text-white py-2 px-4 rounded-md hover:bg-[#a8191d] transition duration-300 ease-in-out"
            >
              View Results
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
