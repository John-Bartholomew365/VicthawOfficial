// pages/about-us.jsx
import React from "react";

const AboutUs = () => {
  return (
    <div className="my-[100px] lg:px-[80px] px-[3px]">
      <main className="container mx-auto p-4">
        <section className="">
          <div className="space-y-8">
            <article className="bg-[#FAFAFA] shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">
                What is the Victhaw Official Unity Cup 1.0?
              </h3>
              <p className="text-[#6B6F76] mb-4">
                The Victhaw Official Unity Cup 1.0 is a high-stakes football
                tournament designed to unite teams from different backgrounds in
                a competitive and thrilling sporting event. It celebrates
                teamwork, skill, and the spirit of unity through football.
              </p>
            </article>
            <article className="bg-[#FAFAFA] shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Mission and Vision</h3>
              <p className="text-[#6B6F76] mb-4">
                Our goal is to create a platform where talented players can
                compete at their best, showcase their abilities, and foster
                strong community bonds through the love of the game.
              </p>
            </article>
            <article className="bg-[#FAFAFA] shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Tournament Structure</h3>
              <p className="text-[#6B6F76] mb-4">
                The competition will feature intense knockout matches, leading
                to a grand final where the best teams will battle for the
                championship. Each game is designed to test strategy, teamwork,
                and resilience.
              </p>
            </article>
            <article className="bg-[#FAFAFA] shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Prize & Rewards</h3>
              <p className="text-[#6B6F76] mb-4">
                The Unity Cup 1.0 offers exciting rewards, including trophies,
                medals, and cash prizes for top-performing teams and outstanding
                players. Full prize details will be announced soon.
              </p>
            </article>
            <article className="bg-[#FAFAFA] shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Partners and Sponsors</h3>
              <p className="text-[#6B6F76] mb-4">
                This tournament is made possible through the support of our
                valued sponsors and partners. We are proud to collaborate with
                brands that share our passion for sports and community
                development.
              </p>
            </article>
            <article className="bg-[#FAFAFA] shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
              <p className="text-[#6B6F76] mb-4">
                Beyond the matches, the Unity Cup 1.0 is about bringing people
                together. Expect fan engagement activities, live updates, and
                interactive events to keep the excitement alive.
              </p>
            </article>
            <article className="bg-[#FAFAFA] shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Get Involved</h3>
              <p className="text-[#6B6F76] mb-4">
                Whether you're a player, a fan, or a sponsor, there's a place
                for you in the Unity Cup 1.0. Team registration is open, and we
                welcome volunteers and sponsors to join us in making this event
                a remarkable success.
              </p>
            </article>
          </div>
        </section>
      </main>

      <div className="my-[60px]">
        <p className="text-[#6B6F76] text-center m-auto mb-4 lg:w-[500px] w-auto">
          Ready to join the excitement of the Victhaw Official Unity Cup 1.0?
          Don't miss out on this incredible opportunity.
        </p>
        <div className="flex justify-center">
          <a
            href="/register"
            className="bg-[#C81E23] text-white py-2 px-4 rounded-md hover:bg-[#a8191d] transition duration-300 ease-in-out"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
