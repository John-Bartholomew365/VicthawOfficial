// "use client";
// import React, { useEffect, useState } from "react";

// const NewsAndUpdates = () => {
//   const [breakingNews, setBreakingNews] = useState([
//     "🚀 Registration is now open!",
//     "🏆 Tournament starts April 12, 2025!",
//     "📢 Sponsorships coming soon!",
//     "🌟 New teams are signing up fast!",
//     "💰 Prize pool details to be announced soon!",
//     "🎉 Fan engagement activities planned!",
//   ]);
//   const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentNewsIndex((prevIndex) =>
//         prevIndex === breakingNews.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [breakingNews]);

//   return (
//     <div className="my-[100px] lg:px-[80px] px-[3px] bg-black rounded-md text-white">
//       <main className="container mx-auto p-4">
//         {/* Breaking News */}
//         <div className="bg-[#ff0000] text-white text-center py-2 font-semibold animate-pulse rounded-md mb-10">
//           {breakingNews[currentNewsIndex]}
//         </div>

//         <section className="fade-in">
//           <h2 className="lg:text-[45px] text-[30px] font-bold mb-4 text-center">
//             News and Updates
//           </h2>
//           <p className="text-[#6B6F76] mt-3 mb-10 text-center lg:w-[430px] m-auto w-auto">
//             Stay updated with the latest news and updates about the Victhaw
//             Official Unity Cup 1.0.
//           </p>

//           <div className="space-y-8">
//             {[
//               {
//                 title: "Tournament Kickoff",
//                 text: "🏆 The tournament starts on April 12, 2025! Get ready for an exciting competition!",
//               },
//               {
//                 title: "Registration Open",
//                 text: "📝 Registration is now open! Visit our website to sign up and compete.",
//               },
//               {
//                 title: "Sponsorship Opportunities",
//                 text: "🤝 We're securing sponsors! Stay tuned for announcements on our incredible partners.",
//               },
//               {
//                 title: "New Team Sign-Ups",
//                 text: "⚽ New teams are signing up fast! Don't miss your chance to be part of history.",
//               },
//               {
//                 title: "Special Guest Announcements",
//                 text: "🎤 Stay tuned for exciting special guest announcements!",
//               },
//               {
//                 title: "Prize Pool Details",
//                 text: "💰 The prize pool is growing! We’ll announce total winnings soon.",
//               },
//               {
//                 title: "Community Support",
//                 text: "❤️ Thank you for your incredible support! This event is possible because of you.",
//               },
//               {
//                 title: "Live Streaming Info",
//                 text: "📺 Watch the event live! Details on streaming platforms coming soon.",
//               },
//               {
//                 title: "Fan Engagement",
//                 text: "🎉 Participate in fan contests and fun activities during the event!",
//               },
//               {
//                 title: "Volunteer Opportunities",
//                 text: "🙌 Want to help? Join our volunteer team and be part of the action!",
//               },
//               {
//                 title: "Health and Safety Protocols",
//                 text: "🛡️ We are implementing strict health and safety protocols to ensure a safe environment for all participants and spectators.",
//               },
//               {
//                 title: "Community Outreach Program",
//                 text: "🌟 Learn about our community outreach program aimed at promoting football and healthy living among local youth.",
//               },
//               {
//                 title: "Partnership with Local Schools",
//                 text: "🏫 Discover our partnership with local schools to provide football training and development programs for students.",
//               },
//               {
//                 title: "Talent Scouting Program",
//                 text: "👀 Find out about our talent scouting program designed to identify and nurture young football talents.",
//               },
//               {
//                 title: "Spectator Information",
//                 text: "🎟️ Important information for spectators attending the Victhaw Official Unity Cup 1.0, including ticket prices, venue details, and more.",
//               },
//               {
//                 title: "Team Registration Guidelines",
//                 text: "📝 Detailed guidelines for teams registering for the Victhaw Official Unity Cup 1.0, including eligibility criteria and submission requirements.",
//               },
//               {
//                 title: "Official Launch Announcement",
//                 text: "🎉 The official announcement of the Victhaw Official Unity Cup 1.0, highlighting the goals and objectives of the tournament.",
//               },
//             ].map((news, index) => (
//               <article
//                 key={index}
//                 className="bg-[#121212] shadow-lg rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:bg-[#1a1a1a] border border-gray-700"
//               >
//                 <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
//                   {news.text.split(" ")[0]} {news.title}
//                 </h3>
//                 <p className="text-[#B0B3B8] mb-4">
//                   {news.text.substring(news.text.indexOf(" ") + 1)}
//                 </p>
//               </article>
//             ))}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default NewsAndUpdates;


"use client";
import React, { useEffect, useState } from "react";

const NewsAndUpdates = () => {
  const [breakingNews, setBreakingNews] = useState([
    "🚀 Registration is now open!",
    "🏆 Tournament starts April 12, 2025!",
    "📢 Sponsorships coming soon!",
    "🌟 New teams are signing up fast!",
    "💰 Prize pool details to be announced soon!",
    "🎉 Fan engagement activities planned!",
  ]);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) =>
        prevIndex === breakingNews.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [breakingNews]);

  return (
    <div className="my-[100px] lg:px-[80px] px-[3px] bg-[#FAFAFA] rounded-md text-black relative">
      <main className="container mx-auto p-4">
        {/* Breaking News - Sticky Section */}
        <div className="sticky top-20 bg-[#ff0000] text-black text-center py-2 font-semibold animate-pulse rounded-md mb-10 z-10">
          {breakingNews[currentNewsIndex]}
        </div>

        {/* News Section */}
        <section className="fade-in">
          <h2 className="lg:text-[45px] text-[30px] font-bold mb-4 text-center">
            News and Updates
          </h2>
          <p className="text-[#6B6F76] mt-3 mb-10 text-center lg:w-[430px] m-auto w-auto">
            Stay updated with the latest news and updates about the Victhaw
            Official Unity Cup 1.0.
          </p>

          <div className="space-y-8">
            {[
              {
                title: "Tournament Kickoff",
                text: "🏆 The tournament starts on April 12, 2025! Get ready for an exciting competition!",
              },
              {
                title: "Registration Open",
                text: "📝 Registration is now open! Visit our website to sign up and compete.",
              },
              {
                title: "Sponsorship Opportunities",
                text: "🤝 We're securing sponsors! Stay tuned for announcements on our incredible partners.",
              },
              {
                title: "New Team Sign-Ups",
                text: "⚽ New teams are signing up fast! Don't miss your chance to be part of history.",
              },
              {
                title: "Special Guest Announcements",
                text: "🎤 Stay tuned for exciting special guest announcements!",
              },
              {
                title: "Prize Pool Details",
                text: "💰 The prize pool is growing! We’ll announce total winnings soon.",
              },
              {
                title: "Community Support",
                text: "❤️ Thank you for your incredible support! This event is possible because of you.",
              },
              {
                title: "Live Streaming Info",
                text: "📺 Watch the event live! Details on streaming platforms coming soon.",
              },
              {
                title: "Fan Engagement",
                text: "🎉 Participate in fan contests and fun activities during the event!",
              },
              {
                title: "Volunteer Opportunities",
                text: "🙌 Want to help? Join our volunteer team and be part of the action!",
              },
              {
                title: "Health and Safety Protocols",
                text: "🛡️ We are implementing strict health and safety protocols to ensure a safe environment for all participants and spectators.",
              },
              {
                title: "Community Outreach Program",
                text: "🌟 Learn about our community outreach program aimed at promoting football and healthy living among local youth.",
              },
              {
                title: "Partnership with Local Schools",
                text: "🏫 Discover our partnership with local schools to provide football training and development programs for students.",
              },
              {
                title: "Talent Scouting Program",
                text: "👀 Find out about our talent scouting program designed to identify and nurture young football talents.",
              },
              {
                title: "Spectator Information",
                text: "🎟️ Important information for spectators attending the Victhaw Official Unity Cup 1.0, including ticket prices, venue details, and more.",
              },
              {
                title: "Team Registration Guidelines",
                text: "📝 Detailed guidelines for teams registering for the Victhaw Official Unity Cup 1.0, including eligibility criteria and submission requirements.",
              },
              {
                title: "Official Launch Announcement",
                text: "🎉 The official announcement of the Victhaw Official Unity Cup 1.0, highlighting the goals and objectives of the tournament.",
              },
            ].map((news, index) => (
              <article
                key={index}
                className="bg-[#FFFFFF] shadow-lg rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:bg-[#F5F5F5] border border-gray-700"
              >
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  {news.text.split(" ")[0]} {news.title}
                </h3>
                <p className="text-[#6B6F76] mb-4">
                  {news.text.substring(news.text.indexOf(" ") + 1)}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default NewsAndUpdates;
