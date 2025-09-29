"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQPage = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // State for controlling active accordion item
  const [activeItem, setActiveItem] = useState(null);

  const toggleAccordion = (value) => {
    setActiveItem(activeItem === value ? null : value);
  };

  const faqs = [
    {
      id: "what-is-tradfit",
      question: "What is TRADFIT RHYTHMS?",
      answer:
        "TRADFIT RHYTHMS is an indigenous dance aerobics experience that merges high-energy fitness with rich African/indigenous cultural traditions. It's a cultural revival, celebration of heritage, and wellness movement that promotes health while preserving traditional dance, music, and cultural practices.",
    },
    {
      id: "who-can-participate",
      question: "Who can participate in TRADFIT RHYTHMS?",
      answer:
        "TRADFIT RHYTHMS is open to everyone! Whether you're a fitness lover, a cultural enthusiast, health-conscious, a tourist, an expat, part of the Afrocentric diaspora, or even a corporate group, you're welcome to join in. No prior dance experience is required — just come with your energy, excitement, and readiness to move to the beat of your heritage.",
    },
    {
      id: "who-will-attend",
      question: "Who will be attending the event?",
      answer:
        "TRADFIT RHYTHMS attracts a diverse and prestigious audience including top government dignitaries, cultural ambassadors, fitness enthusiasts, corporate leaders, and members of the diplomatic community. Our events are attended by influential figures who support cultural preservation and wellness initiatives, creating excellent networking opportunities for all participants.",
    },
    {
      id: "what-to-expect",
      question: "What can I expect at a TRADFIT RHYTHMS event?",
      answer:
        "You'll experience cultural dance aerobics sessions, live music and drumming circles, wellness booths with indigenous herbs and massage, traditional food and drink stalls, fashion showcases featuring indigenous athletic wear, and storytelling or spoken word interludes. The venue is decorated with indigenous art, fabrics, and motifs to create an immersive cultural experience.",
    },
    {
      id: "ticket-options",
      question: "What ticket options are available?",
      answer:
        "We offer three ticket types: Regular Ticket (₦3,000) for basic access, Regular with Cloth (₦8,000) which includes a custom TRADFIT outfit plus all regular benefits, and VIP Experience (₦12,000) for premium access with exclusive perks and surprises. Each option provides different levels of experience and benefits.",
    },
    {
      id: "regular-with-cloth",
      question: "What's included in the Regular with Cloth ticket?",
      answer:
        "The Regular with Cloth ticket (₦8,000) includes a premium customized TRADFIT outfit specially designed for the event, plus all Regular ticket benefits: access to all dance sessions, community activities, basic refreshments, free WiFi, general parking, and photo opportunities. It's our most popular option for those who want the complete cultural fitness experience.",
    },
    {
      id: "cloth-details",
      question: "Can you tell me more about the custom TRADFIT clothing?",
      answer:
        "The custom TRADFIT clothing is a premium outfit specially designed for our dance aerobics sessions. It's made from quality, breathable fabric perfect for movement, features unique cultural designs, and serves as a memorable souvenir from the event. You'll receive information about sizing and collection after registration. It's designed to be both functional for fitness and representative of our cultural heritage.",
    },
    {
      id: "dress-code",
      question: "What should I wear to the event?",
      answer:
        "We encourage cultural fitness-inspired attire such as Ankara shorts, kente wraps, beads, and other traditional African/indigenous clothing. However, comfortable workout clothes are also perfectly acceptable. The key is to wear something you can move freely in while celebrating cultural heritage. If you purchase the Regular with Cloth ticket, you'll have your custom outfit for the event!",
    },
    {
      id: "fitness-level",
      question: "Do I need to be fit to participate?",
      answer:
        "Not at all! TRADFIT RHYTHMS is designed for all fitness levels. Our trained instructors provide modifications for different abilities, and you can participate at your own pace. The focus is on enjoying the cultural experience, moving your body, and connecting with the community rather than intense fitness performance.",
    },
    {
      id: "registration",
      question: "How do I register for events?",
      answer:
        "You can register easily through our official website. All event updates, pricing options, and registration details will be available there. We also share announcements on our social media channels, and corporate groups can reach out directly for team packages or CSR opportunities.",
    },
    {
      id: "frequency",
      question: "How often do you hold events?",
      answer:
        "TRADFIT RHYTHMS is part of a growing series of cultural and wellness experiences. We've already hosted events such as our football tournament, with more editions on the way. For TRADFIT RHYTHMS and other programs, we begin with flagship one-day events and plan to expand into recurring series, monthly experiences, and even a national tour. Stay connected through our website and social media for announcements on upcoming events.",
    },
    {
      id: "sponsorship",
      question: "How can my business become a sponsor?",
      answer:
        "We offer various sponsorship packages including Headline Sponsors, Supporting Sponsors, and Vendor Partnerships. Each package provides different levels of brand visibility, media coverage, and community engagement opportunities. Visit our Sponsors page for detailed information about investment levels and benefits, or contact us directly to discuss custom partnership opportunities.",
    },
    {
      id: "safety",
      question: "What safety measures are in place?",
      answer:
        "We prioritize participant safety with trained security personnel, first aid stations, and proper crowd management. Our instructors are certified and experienced in leading group fitness activities. We also maintain appropriate insurance coverage and follow all local health and safety regulations.",
    },
    {
      id: "food-allergies",
      question: "Are there options for people with dietary restrictions?",
      answer:
        "Yes! Our traditional food vendors are informed about common dietary restrictions and allergies. We encourage participants to inform us of any specific dietary needs during registration so we can ensure appropriate options are available. Many of our traditional foods are naturally vegetarian and gluten-free.",
    },
    {
      id: "weather",
      question: "What happens if there's bad weather?",
      answer:
        "Our events are designed for open-air garden settings, but we have contingency plans for weather concerns. We monitor weather forecasts closely and will communicate any venue changes or rescheduling through our official channels. Indoor backup venues are secured when necessary.",
    },
    {
      id: "contact",
      question: "How can I get more information or contact you?",
      answer:
        "You can reach us through our website contact form, follow us on social media platforms (Instagram, WhatsApp & X), or attend our community outreach events. For partnership inquiries, media requests, or specific questions, please use our dedicated contact channels listed on our website.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white pt-24" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-4"
            data-aos="fade-in"
            data-aos-delay="100"
          >
            Frequently Asked Questions
          </span>
          <h1
            className="lg:text-[44px] text-[34px] font-bold text-gray-900 mb-6 leading-tight"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Everything You Need to Know
          </h1>
          <p
            className="text-gray-600 lg:w-[450px] w-auto mx-auto leading-tight"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Find answers to common questions about TRADFIT RHYTHMS, our events,
            ticket options, and how to get involved in our community.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-all duration-300"
                  onClick={() => toggleAccordion(faq.id)}
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      activeItem === faq.id ? "rotate-180" : ""
                    } text-gray-600`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeItem === faq.id
                      ? "max-h-[500px] opacity-100 scale-y-100 py-4"
                      : "max-h-0 opacity-0 scale-y-95 py-0"
                  } transform origin-top`}
                >
                  <div className="px-6 text-gray-600">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section
        className="bg-gradient-to-b from-gray-50 to-white py-16"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="lg:text-[32px] text-[28px] font-extrabold text-gray-900 mb-4 tracking-tight leading-snug"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            Get in Touch
          </h2>
          <p
            className="text-gray-600 mb-8 lg:w-[490px] w-auto mx-auto leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We're excited to hear from you! Whether you have questions about
            TRADFIT RHYTHMS or want to explore partnership opportunities, reach
            out and we'll respond as soon as possible.
          </p>
          <div
            className="flex flex-col sm:flex-row justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href="mailto:victhawofficial@gmail.com"
              className="inline-block bg-[#C90A1D] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#C90A1D]/80 transition duration-300"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/+2348106163804"
              className="inline-block bg-gray-200 text-gray-900 font-semibold py-2 px-6 rounded-full hover:bg-gray-300 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </div>
          <p
            className="text-sm text-gray-500 mt-6 italic"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Stay updated with the latest news and upcoming events from <b>TRADFIT
            RHYTHMS.</b>
          </p>
        </div>
      </section>

      <style jsx>{`
        .transform-origin-top {
          transform-origin: top;
        }
      `}</style>
    </div>
  );
};

export default FAQPage;