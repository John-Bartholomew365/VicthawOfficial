// app/event-report/page.tsx
"use client";

import { useState } from "react";

export default function EventReportPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const reportData = {
    overview: {
      title: "TRADFIT RHYTHMS 2025",
      subtitle: "A Cultural Fitness Experience - Post Event Report",
      organizer: "Victhawofficial (Adeniji Gbolabo Victor)",
      date: "29th November 2025",
      time: "5:30 PM – 8:50 PM",
      venue:
        "Starwood Hotels, 02 Arena, Ajase Ipo Road, Opp Gaakanbi Junction, Ilorin, Kwara State",
      participants: "300+",
      status: "RESOUNDING SUCCESS",
    },

    highlights: [
      "Àmòkéolóríkì's cultural chanting performance",
      "10+ fitness coaches leading sessions with tribal songs",
      "Live performance by Chi sufficient & the Trophy Band",
      "300+ participants actively engaged",
      "Cultural-themed venue decoration",
      "Custom African-designed apparel for participants",
    ],

    trainers: [
      { name: "Coach Korede", tribe: "Fulani & Hausa" },
      { name: "Victhawofficial", tribe: "Yoruba" },
      { name: "Fitness Ambassador", tribe: "Igbo" },
      { name: "Akay Fitness", tribe: "Igbo" },
      { name: "Dorlipi", tribe: "Yoruba" },
      { name: "Redefined Fitness", tribe: "Hausa" },
      { name: "Coach Felix", tribe: "Fulani" },
      { name: "Coach Fola", tribe: "Hausa & Yoruba" },
      { name: "Legendary Coach Bext", tribe: "Yoruba" },
      { name: "Daniel F11", tribe: "Yoruba" },
    ],

    dignitaries: [
      "Kwara State Commissioner of Police, CP ADEKIMI OJO",
      "Nigeria Bar Association, Ilorin Chapter Chairman, SULYMAN MUHAMMED HASSAN KOSEMANI ESQ",
      "HAJIYA HABIBAT SALMAN SAIDU, RTD PERMANENT SECRETARY",
      "SHEIKH SHAFI SHUAIB ALAYE",
      "BARR. DAIBU ABDULRAHMAN",
      "Members of Ilorin Golf Club",
      "Ilorin Rotary Representative",
      "Representative from Kwara State Ministry of Art & Culture",
      "Mr. Salati Ahmadrufai Abolaji",
    ],

    financials: [
      { category: "Stage, location & lighting", amount: "₦700,000" },
      { category: "MC's fee", amount: "₦100,000" },
      { category: "DJ's fee", amount: "₦100,000" },
      { category: "Decoration & Aesthetics", amount: "₦300,000" },
      { category: "Publicity (flyers & banner)", amount: "₦100,000" },
      { category: "Website & Graphics design", amount: "₦200,000" },
      { category: "Food", amount: "₦90,000" },
      { category: "VIP incentives", amount: "₦100,000" },
      { category: "Custom clothes & towels", amount: "₦180,000" },
      { category: "Materials & Sewing", amount: "₦700,000" },
      { category: "Security charges", amount: "₦100,000" },
      { category: "Logistics", amount: "₦150,000" },
      { category: "Trainers & committee refreshments", amount: "₦70,000" },
      { category: "Live band fee", amount: "₦220,000" },
      { category: "Local chanter fee", amount: "₦120,000" },
      { category: "Photography", amount: "₦50,000" },
      { category: "Cinematography", amount: "₦130,000" },
      { category: "Others", amount: "₦50,000" },
    ],

    impacts: [
      "300+ participants engaged in culturally immersive fitness",
      "Successfully demonstrated fusion of fitness and African culture",
      "Enhanced brand visibility for sponsors and VIPs",
      "Generated high-quality media content for promotion",
      "Created memorable experiences for dignitaries and participants",
    ],

    recommendations: [
      "Increase sponsorship visibility through brand activations",
      "Expand venue to accommodate larger audience",
      "Enhance pre-event marketing to maximize registrations",
      "Introduce additional interactive cultural performances",
      "Invite top fitness trainers from across Nigeria",
      "Invite popular actors and renowned musicians",
      "Consider live streaming for extended reach",
      "Expand to other locations across Nigeria and internationally",
    ],
  };

  const sections = [
    { id: "overview", label: "Event Overview", icon: "📋" },
    { id: "highlights", label: "Program Highlights", icon: "🌟" },
    { id: "trainers", label: "Trainers", icon: "💪" },
    { id: "dignitaries", label: "Dignitaries", icon: "👥" },
    { id: "financials", label: "Financial Report", icon: "💰" },
    { id: "impacts", label: "Event Impact", icon: "📈" },
    { id: "recommendations", label: "Next Steps", icon: "🚀" },
  ];

  const activeSectionIndex = sections.findIndex((s) => s.id === activeSection);

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateX(-10px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>

      {/* Progress Indicator */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="text-sm font-bold text-[#C81E23]">
              READING SECTION {activeSectionIndex + 1} OF {sections.length}
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C81E23] rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      ((activeSectionIndex + 1) / sections.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
              <span className="text-sm font-bold text-gray-600">
                {Math.round(((activeSectionIndex + 1) / sections.length) * 100)}
                %
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#C81E23]/10 rounded-full mb-4">
              <div className="w-2 h-2 rounded-full bg-[#C81E23] animate-pulse mr-2"></div>
              <span className="text-sm font-bold text-[#C81E23] uppercase">
                OFFICIAL EVENT REPORT
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              TradFit Rhythms 2025
            </h1>
            <p className="text-[16px] text-gray-600 mb-8">
              The Complete Story of Our Cultural Fitness Movement
            </p>

            {/* Success Banner */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#C81E23] to-[#8B0000] rounded-full mb-8 shadow-lg">
              <div className="w-3 h-3 rounded-full bg-white mr-3 animate-pulse"></div>
              <span className="text-white font-bold lg:text-[16px] text-[14px]">
                EVENT SUCCESSFULLY COMPLETED
              </span>
            </div>
          </div>

          {/* Quick Stats - Always Visible */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "PARTICIPANTS", value: "300+", color: "text-[#C81E23]" },
              { label: "DATE", value: "29 NOV", color: "text-gray-900" },
              { label: "DURATION", value: "3+ HOURS", color: "text-gray-900" },
              { label: "VENUE", value: "STARWOOD", color: "text-gray-900" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow border text-center"
              >
                <div className={`text-2xl font-black ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CLEAR NAVIGATION SECTION - VERY VISIBLE */}
          <div className="mb-12">
            <div className="lg:flex block items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Explore the Report
              </h2>
              <div className="text-sm text-gray-500 lg:mt-0 mt-4">
                Click any section below 👇
              </div>
            </div>

            {/* Visual Navigation Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 ${
                    activeSection === section.id
                      ? "border-[#C81E23] bg-[#C81E23] text-white shadow-lg transform scale-105"
                      : "border-gray-200 bg-white hover:border-[#C81E23]/50 hover:bg-gray-50"
                  }`}
                >
                  <div className="text-2xl mb-2">{section.icon}</div>
                  <div className="text-xs font-bold text-center leading-tight">
                    {section.label}
                  </div>
                  {activeSection === section.id && (
                    <div className="mt-2 w-3 h-3 rounded-full bg-white"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Active Section Indicator */}
            <div className="mt-6 p-4 bg-[#C81E23]/5 rounded-xl border border-[#C81E23]/20">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#C81E23] animate-pulse mr-3"></div>
                <div className="font-bold text-gray-900">
                  NOW VIEWING:{" "}
                  <span className="text-[#C81E23]">
                    {sections
                      .find((s) => s.id === activeSection)
                      ?.label.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area with Clear Section Display */}
      <section className="py-8 px-4 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-8">
            <div className="lg:flex block items-center justify-between mb-4">
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">
                    {sections.find((s) => s.id === activeSection)?.icon}
                  </span>
                  <h2 className="text-3xl font-black text-gray-900">
                    {sections.find((s) => s.id === activeSection)?.label}
                  </h2>
                </div>
                <div className="h-1 w-24 bg-[#C81E23] rounded-full"></div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex space-x-2 lg:mt-0 mt-4">
                <button
                  onClick={() => {
                    const currentIndex = sections.findIndex(
                      (s) => s.id === activeSection
                    );
                    if (currentIndex > 0) {
                      setActiveSection(sections[currentIndex - 1].id);
                    }
                  }}
                  disabled={activeSectionIndex === 0}
                  className={`p-3 rounded-full ${
                    activeSectionIndex === 0
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed lg:w-auto w-full"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 lg:w-auto w-full"
                  }`}
                >
                  ← Previous
                </button>
                <button
                  onClick={() => {
                    const currentIndex = sections.findIndex(
                      (s) => s.id === activeSection
                    );
                    if (currentIndex < sections.length - 1) {
                      setActiveSection(sections[currentIndex + 1].id);
                    }
                  }}
                  disabled={activeSectionIndex === sections.length - 1}
                  className={`p-3 rounded-full ${
                    activeSectionIndex === sections.length - 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed lg:w-auto w-full"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 lg:w-auto w-full"
                  }`}
                >
                  Next →
                </button>
              </div>
            </div>

            <div className="text-sm text-gray-500 flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#C81E23] mr-2 animate-pulse"></div>
              Section {activeSectionIndex + 1} of {sections.length} • Use arrows
              or click sections above
            </div>
          </div>

          {/* CONTENT AREA - Different for each section */}
          <div className="animate-slide-in">
            {/* OVERVIEW */}
            {activeSection === "overview" && (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl lg:p-8 p-3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Event Summary
                  </h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="font-bold text-gray-700 mb-1">
                          Organizer
                        </div>
                        <div className="text-lg">
                          {reportData.overview.organizer}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-gray-700 mb-1">
                          Event Duration
                        </div>
                        <div className="text-lg">
                          {reportData.overview.time}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-gray-700 mb-1">
                          Venue
                        </div>
                        <div className="text-lg">
                          {reportData.overview.venue}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-gray-700 mb-1">
                          Status
                        </div>
                        <div className="text-lg font-bold text-[#C81E23]">
                          {reportData.overview.status}
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-3">
                        Event Description
                      </h4>
                      <div className="space-y-3 text-gray-700">
                        <p>
                          TradFit Rhythms is a cultural fitness initiative
                          designed to fuse fitness, music, and African culture,
                          creating a vibrant, interactive experience for
                          participants.
                        </p>
                        <p>
                          Originally scheduled for 4:00 PM, the event commenced
                          at 5:30 PM due to unexpected rainfall but proceeded
                          seamlessly, attracting{" "}
                          {reportData.overview.participants} registered
                          participants.
                        </p>
                        <p>
                          The venue was decorated with rich cultural aesthetics,
                          and participants wore official African-designed tops
                          in multiple colors, creating a visually striking
                          celebration of heritage and fitness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* HIGHLIGHTS */}
            {activeSection === "highlights" && (
              <div>
                <div className="mb-8">
                  <p className="text-gray-600">
                    The event featured powerful cultural performances and
                    dynamic fitness sessions that kept participants engaged
                    throughout.
                  </p>
                </div>

                <div className="space-y-4">
                  {reportData.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C81E23] flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-xl">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-grow">
                        <p className="text-gray-700">{highlight}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-[#C81E23]/5 rounded-xl border border-[#C81E23]/20">
                  <p className="text-gray-700 italic">
                    &quot;Participants engaged actively, danced along, and enjoyed
                    the rich cultural infusion. The live performance by Chi
                    sufficient & the Trophy Band thrilled attendees and
                    reinforced the fusion of fitness and culture.&quot;
                  </p>
                </div>
              </div>
            )}

            {/* TRAINERS */}
            {activeSection === "trainers" && (
              <div>
                <div className="mb-8">
                  <p className="text-gray-600">
                    10 talented trainers brought energy from different tribes,
                    creating a diverse cultural fitness experience.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reportData.trainers.map((trainer, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-xl font-bold text-gray-900">
                          {trainer.name}
                        </div>
                        <div className="text-sm font-bold text-[#C81E23]">
                          #{index + 1}
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="text-sm text-gray-500 mb-1">
                          Cultural Focus
                        </div>
                        <div className="font-medium text-gray-900">
                          {trainer.tribe} Songs
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        Led participants through fitness sessions using
                        traditional tribal rhythms
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DIGNITARIES */}
            {activeSection === "dignitaries" && (
              <div>
                <div className="mb-8">
                  <p className="text-gray-600">
                    Distinguished guests from government, law, and community
                    leadership honored us with their presence.
                  </p>
                </div>

                <div className="space-y-4">
                  {reportData.dignitaries.map((dignitary, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                        <span className="text-gray-700 font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-grow">
                        <div className="text-gray-700">{dignitary}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FINANCIALS */}
            {activeSection === "financials" && (
              <div>
                <div className="text-center mb-8">
                  <div className="text-5xl font-black text-[#C81E23] mb-2">
                    ₦3,670,000
                  </div>
                  <div className="text-gray-600">Total Event Budget</div>
                </div>

                <div className="space-y-4 mb-8 max-h-[400px] overflow-y-auto pr-4">
                  {reportData.financials.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-4 border-b border-gray-200"
                    >
                      <div className="text-gray-700">{item.category}</div>
                      <div className="font-bold text-gray-900">
                        {item.amount}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#C81E23]/5 p-6 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">
                      ₦2,950,000
                    </div>
                    <div className="text-gray-600">Production & Logistics</div>
                  </div>
                  <div className="bg-[#C81E23]/5 p-6 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">
                      ₦520,000
                    </div>
                    <div className="text-gray-600">Talent & Performers</div>
                  </div>
                  <div className="bg-[#C81E23]/5 p-6 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">
                      ₦200,000
                    </div>
                    <div className="text-gray-600">Marketing & Media</div>
                  </div>
                </div>
              </div>
            )}

            {/* IMPACTS */}
            {activeSection === "impacts" && (
              <div>
                <div className="mb-8">
                  <p className="text-gray-600">
                    The event achieved significant milestones in cultural
                    promotion and community engagement.
                  </p>
                </div>

                <div className="space-y-6">
                  {reportData.impacts.map((impact, index) => (
                    <div
                      key={index}
                      className="bg-white border-l-4 border-[#C81E23] rounded-r-xl p-6 shadow-lg"
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 rounded-full bg-[#C81E23] flex items-center justify-center mr-3">
                          <span className="text-white font-bold">✓</span>
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          Achievement #{index + 1}
                        </div>
                      </div>
                      <p className="text-gray-700 pl-11">{impact}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-gradient-to-r from-[#C81E23] to-[#8B0000] rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Foundation for Growth
                  </h3>
                  <p className="opacity-95">
                    The event has set a strong foundation for future editions,
                    promising even greater engagement, visibility, and impact in
                    promoting cultural fitness.
                  </p>
                </div>
              </div>
            )}

            {/* RECOMMENDATIONS */}
            {activeSection === "recommendations" && (
              <div>
                <div className="mb-8">
                  <p className="text-gray-600">
                    Based on the success of this edition, here are
                    recommendations for future improvements and expansion.
                  </p>
                </div>

                <div className="space-y-4">
                  {reportData.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C81E23]/20 flex items-center justify-center mr-4 mt-1">
                        <span className="text-[#C81E23] font-bold text-xl">
                          {index + 1}
                        </span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-xl p-6 flex-grow shadow-sm">
                        <div className="font-bold text-gray-900 mb-2">
                          Recommendation #{index + 1}
                        </div>
                        <p className="text-gray-700">{rec}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Expansion Vision
                  </h3>
                  <p className="text-gray-700">
                    TradFit Rhythms aims to expand across Nigeria and
                    internationally, promoting cultural fitness tourism and
                    connecting with wider audiences while showcasing African
                    heritage.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="lg:flex block items-center justify-between">
              <div className="text-sm text-gray-500 lg:mb-0 mb-4">
                Click any section card above to navigate
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => {
                    const currentIndex = sections.findIndex(
                      (s) => s.id === activeSection
                    );
                    if (currentIndex > 0) {
                      setActiveSection(sections[currentIndex - 1].id);
                    }
                  }}
                  disabled={activeSectionIndex === 0}
                  className={`px-4 py-3 rounded-full text-[14px] font-bold lg:w-auto w-full ${
                    activeSectionIndex === 0
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  ← Previous Section
                </button>
                <button
                  onClick={() => {
                    const currentIndex = sections.findIndex(
                      (s) => s.id === activeSection
                    );
                    if (currentIndex < sections.length - 1) {
                      setActiveSection(sections[currentIndex + 1].id);
                    }
                  }}
                  disabled={activeSectionIndex === sections.length - 1}
                  className={`px-4 py-3 text-[14px] rounded-full font-bold lg:w-auto w-full ${
                    activeSectionIndex === sections.length - 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Next Section →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Bar */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="lg:flex block items-center justify-between">
            <div className="text-sm font-bold text-gray-900 lg:mb-0 mb-2">
              Quick Jump:
            </div>
            <div className="flex space-x-2 overflow-x-auto py-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap ${
                    activeSection === section.id
                      ? "bg-[#C81E23] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {section.icon} {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-2xl font-bold mb-4 text-center mt-14">
        TRADFIT RHYTHMS
      </div>
      <div className="text-gray-400 mb-8 text-center italic">
        Official Event Report • 2025 Edition
      </div>
    </div>
  );
}
