"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { edition } from "@/data/unity-cup-2";

const rulesSections = [
  {
    title: "Tournament Format (2.0)",
    items: [
      "Unity Cup 2.0 features 8 teams split into Group A and Group B, with 4 teams in each group.",
      "Every team plays the other three teams in its group once during the group stage.",
      "The top 2 teams from each group advance to the semi-finals.",
      "The winners of the two semi-finals meet in the Grand Final to decide the champion.",
    ],
  },
  {
    title: "Team Composition & Match Rules",
    items: [
      "Each team will have 11 players, consisting of 10 outfield players and 1 goalkeeper.",
      "Teams are allowed a maximum of 9 substitutes, with only 5 permitted to enter during play. An additional concussion substitution is allowed if needed after the 5th substitution.",
      "All teams must arrive at the match venue at least 40 minutes before kick-off.",
      "A match will commence as long as a team has a minimum of 7 players at kick-off. Late arrivals will not delay the game.",
      "If a team fails to present at least 7 players within 15 minutes after the scheduled kick-off, the opposing team will be awarded the match.",
    ],
  },
  {
    title: "Match Duration & Tie Resolution",
    items: [
      "Each half will be 30 minutes long, with no additional injury time.",
      "During the group stage, matches that end level are recorded as draws.",
      "In the semi-finals and final, if the score is level after full time, an extra 15 minutes will be played.",
      "If the match remains tied after extra time, the winner will be determined through a penalty shootout.",
    ],
  },
  {
    title: "Player Eligibility",
    items: [
      "To maintain the community spirit of the tournament, no active professional footballers or players currently participating in officially sanctioned tournaments are eligible to participate.",
      "Penalty: Any team found to have fielded an ineligible player will immediately forfeit the match points to their opponent, regardless of the match outcome. The tournament organizers reserve the right to impose further sanctions if deemed necessary.",
    ],
  },
  {
    title: "Player Registration & Safety",
    items: [
      "Each team must register all players before the tournament. Unregistered players and officials will not be allowed to participate.",
      "The tournament organizers are not responsible for player injuries. Teams are required to bring their medical personnel, although first aid will be available.",
      "The referee's decision is final. Any complaints must be addressed to the organizers respectfully.",
    ],
  },
  {
    title: "Player Requirements",
    items: [
      "All players must wear the appropriate equipment, including football boots, shin guards, team uniforms, and uniform socks.",
      "Before each match day, players are required to trim their fingernails short to ensure safety during play.",
      "Accessories such as bracelets, chains, beads, and any other jewellery are strictly prohibited on the field.",
      "Players must remain in full team uniform at all times throughout the tournament.",
    ],
  },
  {
    title: "Disciplinary Rules",
    items: [
      "Yellow Card: A fine of 500 Naira will be imposed for each yellow card.",
      "Red Card: A fine of 1000 Naira will be imposed for each red card.",
    ],
    red: [false, true],
  },
];

const Rules = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="my-[140px]">
      <div
        className="lg:flex lg:flex-row flex-col items-center justify-center gap-[100px]"
        data-aos="fade-up"
      >
        <div data-aos="fade-right">
          <h1 className="lg:text-[50px] text-[30px] text-black leading-tight tracking-tight">
            Tournament Rules <br /> and Guidelines
          </h1>
          <p className="text-[#6B6F76] lg:w-[380px] w-auto mt-4">
            Clear and fair rules are in place to ensure a safe, competitive, and
            well-organized tournament while promoting sportsmanship and
            teamwork.
          </p>
        </div>
        <div className="lg:mt-0 mt-10" data-aos="fade-left">
          <Image
            src="/refs.jpeg"
            alt="Referees"
            height={520}
            width={490}
            className="rounded-md"
          />
        </div>
      </div>

      <div className="my-[50px]">
        <div className="space-y-8">
          {rulesSections.map((section) => (
            <div key={section.title} className="lg:p-6 p-4">
              <h2 className="text-xl font-semibold text-black mb-4">
                {section.title}
              </h2>
              <ul className="space-y-4 ml-4 lg:ml-10 lg:w-[600px] w-auto tracking-tight">
                {section.items.map((item, i) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className={
                        section.red && section.red[i]
                          ? "text-red-500"
                          : "text-[#C90A1D]"
                      }
                    >
                      •
                    </span>
                    <p className="text-[#6B6F76]">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[90px]">
        <div>
          <h1 className="lg:text-[40px] text-[28px] text-center leading-tight tracking-tight">
            Ready for {edition.shortTitle}? <br /> Stay Sharp, Stay Ready!
          </h1>
          <p className="text-center lg:w-[460px] tracking-tight mt-3 m-auto w-auto text-[#6B6F76]">
            Remember - discipline, respect and fair play make champions both on
            and off the field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
