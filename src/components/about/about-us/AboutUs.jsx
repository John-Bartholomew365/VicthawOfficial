// pages/about-us.jsx
import React from "react";

const AboutUs = () => {
  return (
    <div className="my-[100px] lg:px-[80px] px-[3px]">
      <main className="container mx-auto p-4">
        <section className="">
          <div className="space-y-8">
            <article className="bg-[#000000] shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">
                What is the Victhaw Official Unity Cup 1.0?
              </h3>
              <p className="text-[#B0B3B8] mb-4">
                The Victhaw Official Unity Cup 1.0 is a premier esports
                tournament designed to bring together the best teams from across
                the region. This event aims to celebrate the spirit of
                competition, teamwork, and unity in the esports community.
              </p>
            </article>
            <article className="bg-[#000000] shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Mission and Vision</h3>
              <p className="text-[#B0B3B8] mb-4">
                Our mission is to create a platform where talented gamers can
                showcase their skills and compete at the highest level. We aim
                to foster a sense of community and unity among participants and
                fans alike.
              </p>
            </article>
            <article className="bg-[#000000] shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Tournament Structure</h3>
              <p className="text-[#B0B3B8] mb-4">
                The tournament will feature a series of intense matches,
                culminating in a grand final. Teams will compete in a
                double-elimination format, ensuring that every match counts.
              </p>
            </article>
            <article className="bg-[#000000] shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Prize Pool</h3>
              <p className="text-[#B0B3B8] mb-4">
                The Victhaw Official Unity Cup 1.0 boasts a substantial prize
                pool, with cash prizes and exclusive rewards for the top teams.
                We will announce the total prize pool and individual prizes
                soon.
              </p>
            </article>
            <article className="bg-[#000000] shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Partners and Sponsors</h3>
              <p className="text-[#B0B3B8] mb-4">
                We are excited to partner with leading brands and sponsors who
                share our vision. Stay tuned for updates on our fantastic
                partners who will be supporting this incredible event.
              </p>
            </article>
            <article className="bg-[#000000] shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
              <p className="text-[#B0B3B8] mb-4">
                We believe in the power of community. Throughout the tournament,
                we will host various fan engagement activities, live streams,
                and interactive events to keep the excitement high.
              </p>
            </article>
            <article className="bg-[#000000] shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Get Involved</h3>
              <p className="text-[#B0B3B8] mb-4">
                Whether you're a player, a fan, or a potential sponsor, there's
                a place for you in the Victhaw Official Unity Cup 1.0.
                Registration is open, and we are always looking for volunteers
                and partners to help make this event a success.
              </p>
            </article>
          </div>
        </section>
      </main>

      <div className="my-[60px]">
        <p className="text-[#B0B3B8] text-center m-auto mb-4 lg:w-[500px] w-auto">
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
