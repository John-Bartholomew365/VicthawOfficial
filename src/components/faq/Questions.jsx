"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Questions = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const questions = [
    {
      question: "1. How do I register my team?",
      answer: `
          You can register your team by filling out the online registration form on our website. <br/>
          Visit the <a href="/register" target="_blank" style="color: #C81E23; text-decoration: underline;">Registration page</a>, provide the required details (team name, captain’s information, player names, etc.), and complete the payment process.
        `,
    },
    {
      question: "2. What is the registration fee?",
      answer: `
        Registration is now open. The confirmed registration fee is <b style="color: #C81E23;">₦80,000.</b> <br> Visit the <a href="/register" target="_blank" style="color: #C81E23; text-decoration: underline;">  Registration page</a> on our website for updates.
      `,
    },
    {
      question: "3. What are the age requirements for players?",
      answer: `
        The tournament is open to players aged 25 to 50 years.
      `,
    },
    {
      question: "4. What documents do I need to submit?",
      answer: `
          During registration, you’ll need to submit:
          <ul style="margin-top: 10px; list-style: none; padding-left: 20px;">
            <li>
              <span style="color: #C81E23; margin-right: 10px;">•</span>
              <span style="color: #FFFFFF;">A completed registration form.</span>
            </li>
            <li>
              <span style="color: #C81E23; margin-right: 10px;">•</span>
              <span style="color: #FFFFFF;">A valid ID for each player (e.g., Player name, player image and player role).</span>
            </li>
            <li>
              <span style="color: #C81E23; margin-right: 10px;">•</span>
              <span style="color: #FFFFFF;">Proof of payment for the registration fee.</span>
            </li>
          </ul>
        `,
    },
    {
      question: "5. What is the format of the tournament?",
      answer: `
          The tournament will follow a <b style="color: #C81E23;">knockout style.</b> Teams will compete in elimination rounds, with the winner of each match advancing to the next round until the final.
        `,
    },
    {
      question: "6. Where will the matches be played?",
      answer: `
          All matches will be played at <b style="color: #C81E23;">Basin Stadium, Ilorin, Kwara State,</b> from <b>April 12</b> to <b>May 4</b>
        `,
    },
    {
      question: "7. What are the prizes for the winners?",
      answer: `

          <ul style="margin-top: 10px; list-style: none; padding-left: 20px;">
            <li>
              <span style="color: #C81E23; margin-right: 10px;">•</span>
              <span style="color: #BOB3B8;"><b style="color: #FFFFFF;">Champion:</b>  Gold Medal, Trophy, and Cash Prize.</span>
            </li>
            <li>
              <span style="color: #C81E23; margin-right: 10px;">•</span>
              <span style="color: #BOB3B8;"><b style="color: #FFFFFF;">Runner-up:</b> Silver Medal and Sporting Equipment.</span>
            </li>
            <li>
              <span style="color: #C81E23; margin-right: 10px;">•</span>
              <span style="color: #BOB3B8;"><b style="color: #FFFFFF;">Individual Awards:</b> Best Player (MVP), Best Goalkeeper, Top Scorer, and Fair Play Award (each recipient will receive a plaque).</span>
            </li>
          </ul>
        `,
    },
    {
      question: "8. What happens if a match is canceled?",
      answer: `
            If a match is canceled due to unforeseen circumstances (e.g., weather), it will be rescheduled at the earliest possible date. Teams will be notified of the new schedule via email or the tournament website.
          `,
    },
    {
      question: "9. Is there parking available at the venue?",
      answer: `
           Yes, parking will be available for spectators and participants at the tournament venue. 
          `,
    },
    {
      question: "10. How many players can be on a team?",
      answer: `
          Each team must consist of <b style="color: #C81E23;">18 players</b>, including <b style="color: #C81E23;">5 substitutes</b>.
          `,
    },
    {
      question: "11. How long are the matches?",
      answer: `
          Each match will consist of <b style="color: #C81E23;">two 30-minute halves,</b> with a <b style="color: #C81E23;">10-minute</b> halftime break.
          `,
    },
    {
      question: "12. Can corporate teams participate?",
      answer: `
          Yes, the tournament is open to <b style="color: #C81E23;">corporate teams, semi-professionals, and amateur players.
          `,
    },
    {
      question: "13. How can I become a sponsor?",
      answer: `
          Visit the <a href="/about/sponsors" target="_blank" style="color: #C81E23; text-decoration: underline;">Sponsorship page</a> on our website to view available sponsorship packages. You can also contact us at <a href="mailto:victhawofficial@gmail.com" target="_blank" style="color: #C81E23; text-decoration: underline;">victhawofficial@gmail.com</a> or call <b style="color: #C81E23;">08106163804</b> for more details.
          `,
    },

    {
      question: "14. Will there be medical support at the venue?",
      answer: `
            Yes, <b style="color: #C81E23;">first aid stations</b> will be available at the venue to handle any medical emergencies.
            `,
    },
    {
      question: "15. Can I attend as a spectator?",
      answer: `
            Yes, spectators are welcome! Tickets will be available for purchase at the venue or online (details will be announced soon).
            `,
    },
    {
      question: "16. How can I stay updated on the tournament schedule?",
      answer: `
            The full schedule will be available on the <a href="/tournament/schedule" target="_blank" style="color: #C81E23; text-decoration: underline;">Schedule page</a> of our website. You can also follow us on social media for live updates.
            `,
    },
    {
      question: "17. Are there opportunities for media coverage?",
      answer: `
            Yes, media outlets are encouraged to cover the event. Please contact us at <a href="mailto:victhawofficial@gmail.com" target="_blank" style="color: #C81E23; text-decoration: underline;">victhawofficial@gmail.com</a> for press passes and further details.
            `,
    },
    {
      question: "18. What happens if a player gets injured during a match?",
      answer: `
            Injured players will receive immediate medical attention at the venue’s first aid station. In case of serious injuries, the player will be transported to the nearest hospital.
            `,
    },
    {
      question: "19. Can I volunteer for the tournament?",
      answer: `
            Yes, we welcome volunteers! Please contact us at <a href="mailto:victhawofficial@gmail.com" target="_blank" style="color: #C81E23; text-decoration: underline;">victhawofficial@gmail.com</a> for more information on how to get involved.
            `,
    },
    {
      question: "20. What is the deadline for registration?",
      answer: `
            The registration deadline will be announced soon. Please check the <a href="/register" target="_blank" style="color: #C81E23; text-decoration: underline;">Registration page</a> for updates.
            `,
    },
  ];

  return (
    <div className="my-[100px] text-white">
      <div className="mb-16">
        <h1 className="text-center lg:text-[50px] text-[30px] text-[#C81E23] font-bold">
          Frequently Asked Questions
        </h1>
        <p className="text-[#6B6F76] lg:w-[470px] w-auto text-center m-auto my-3">
          We've compiled a list of frequently asked questions to help you
          navigate the tournament with ease.
        </p>
      </div>

      {questions.map((item, index) => (
        <div
          key={index}
          className="bg-[#FAFAFA] my-5 p-5 lg:w-[80%] w-full m-auto rounded-md"
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleQuestion(index)}
          >
            <h1 className="text-[#C81E23] lg:text-[30px] text-[20px]">
              {item.question}
            </h1>
            {openQuestion === index ? (
              <FiChevronUp className="text-[#C81E23] text-[24px]" />
            ) : (
              <FiChevronDown className="text-[#C81E23] text-[24px]" />
            )}
          </div>
          {openQuestion === index && (
            <div
              className="mt-6 text-[18px] text-[#6B6F76]"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          )}
        </div>
      ))}
      <div className="mt-[100px] text-center">
        <h1 className="text-center text-black lg:text-[40px] text-[30px] mb-3">
          Still, Have Questions?
        </h1>
        <p className="lg:w-[350px] w-auto m-auto text-[#6B6F76] mb-7">
          We're here to help! Reach out to us for more information or any
          inquiries.
        </p>
        <a
          href="mailto:victhawofficial@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#C81E23]  text-white px-8 py-3 rounded-md text-[18px] font-bold hover:bg-[#a8191d] transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Questions;
