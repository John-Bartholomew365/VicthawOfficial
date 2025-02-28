"use client";
import React, { useEffect } from "react";

const TermsAndConditions = () => {
  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when the element is in view
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
          } else {
            // Remove animation classes when the element is out of view
            entry.target.classList.remove("opacity-100", "translate-y-0");
            entry.target.classList.add("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="my-[100px] lg:px-[50px] px-[3px]">
      <main className="container mx-auto p-4">
        {/* Title */}
        <h2 className="fade-in opacity-0 translate-y-6 transition-all duration-700 ease-out lg:text-[45px] text-[30px] font-bold mb-4 text-center">
          Terms and Conditions
        </h2>

        {/* Subtitle */}
        <p className="fade-in opacity-0 translate-y-6 transition-all duration-700 ease-out delay-200 text-[#B0B3B8] mt-3 mb-10 text-center lg:w-[480px] m-auto w-auto">
          Welcome to the Victhaw Official Unity Cup 1.0. By accessing or using
          our website, you agree to be bound by these Terms and Conditions.
          Please read them carefully.
        </p>

        {/* Eligibility & Registration */}
        <section className="fade-in opacity-0 translate-y-6 transition-all duration-700 ease-out delay-400">
          <h3 className="text-xl font-bold mb-2 mt-16">
            1. Eligibility & Registration
          </h3>
          <p className="text-[#B0B3B8] mb-4 lg:w-[470px] w-auto">
            Each team must complete the registration process through the
            official website. All players must meet the age and eligibility
            criteria set by the tournament organizers.
          </p>
          <ul className="list-none text-gray-700 mb-4 ml-5">
            <li className="before:content-['•'] before:text-[#C81E23] before:mr-2 text-[#B0B3B8]">
              A team must consist of a minimum of <strong>15</strong> players
              and a maximum of <strong>18</strong> players, including
              substitutes.
            </li>
            <li className="before:content-['•'] before:text-[#C81E23] before:mr-2 text-[#B0B3B8]">
              Registration fees (if applicable) must be paid in full before the
              deadline.
            </li>
          </ul>
        </section>

        {/* Code of Conduct */}
        <section className="fade-in opacity-0 translate-y-6 transition-all duration-700 ease-out delay-600">
          <h3 className="text-xl font-bold mt-16 mb-2">2. Code of Conduct</h3>
          <p className="text-[#B0B3B8] mb-4 lg:w-[470px] w-auto">
            Teams and players must demonstrate sportsmanship, fair play, and
            respect toward referees, opponents, and officials.
          </p>
          <ul className="list-none text-gray-700 mb-4 ml-5">
            <li className="before:content-['•'] before:text-[#C81E23] before:mr-2 text-[#B0B3B8]">
              Any form of violent conduct, abuse, discrimination, or
              unsportsmanlike behavior will result in immediate
              disqualification.
            </li>
          </ul>
        </section>

        {/* Match Rules & Regulations */}
        <section className="fade-in opacity-0 translate-y-6 transition-all duration-700 ease-out delay-800">
          <h3 className="text-xl font-bold mt-16 mb-2">
            3. Match Rules & Regulations
          </h3>
          <p className="text-[#B0B3B8] mb-4 lg:w-[470px] w-auto">
            All matches will be played according to the official{" "}
            <strong>Football Association/FIFA-approved</strong> rules unless
            otherwise stated by the organizers.
          </p>
          <ul className="list-none text-gray-700 mb-4 ml-5">
            <li className="before:content-['•'] before:text-[#C81E23] before:mr-2 text-[#B0B3B8]">
              Teams must arrive <strong>40 minutes</strong> before their
              scheduled match time. Failure to do so may result in a forfeit.
            </li>
            <li className="before:content-['•'] before:text-[#C81E23] before:mr-2 text-[#B0B3B8]">
              The referee’s decision is final, and no appeals will be
              entertained during or after the match.
            </li>
          </ul>
        </section>

        {/* Injuries & Liability */}
        <section className="fade-in opacity-0 translate-y-6 transition-all duration-700 ease-out delay-1000">
          <h3 className="text-xl font-bold mt-16 mb-2">
            4. Injuries & Liability
          </h3>
          <p className="text-[#B0B3B8] mb-4 lg:w-[470px] w-auto">
            The tournament organizers will not be held responsible for any
            serious injuries, accidents, or damages occurring during the event.
          </p>
          <ul className="list-none text-gray-700 mb-4 ml-5">
            <li className="before:content-['•'] before:text-[#C81E23] before:mr-2 text-[#B0B3B8]">
              Medical personnel will be present for minor injuries.
            </li>
            <li className="before:content-['•'] before:text-[#C81E23] before:mr-2 text-[#B0B3B8]">
              Players are advised to have personal or team insurance coverage.
            </li>
          </ul>
        </section>

        {/* Cancellations & Refunds */}
        <section className="fade-in opacity-0 translate-y-6 transition-all duration-700 ease-out delay-1200">
          <h3 className="text-xl font-bold mt-16 mb-2">
            5. Cancellations & Refunds
          </h3>
          <p className="text-[#B0B3B8] mb-4 lg:w-[470px] w-auto">
            Registration fees are non-refundable once a team has been confirmed.
          </p>
          <ul className="list-none text-gray-700 mb-4 ml-5">
            <li className="before:content-['•'] before:text-[#C81E23] before:mr-2 text-[#B0B3B8]">
              If the tournament is canceled due to unforeseen circumstances,
              teams will be informed, and a refund policy will be communicated.
            </li>
          </ul>
        </section>

        {/* Photography & Media Rights */}
        <section className="fade-in opacity-0 translate-y-6 transition-all duration-700 ease-out delay-1400">
          <h3 className="text-xl font-bold mt-16 mb-2">
            6. Photography & Media Rights
          </h3>
          <p className="text-[#B0B3B8] mb-4 lg:w-[470px] w-auto">
            By participating, teams and players grant the organizers the right
            to use photos, videos, and other media content for promotional
            purposes.
          </p>
        </section>

        {/* Disqualification & Rule Violations */}
        <section className="fade-in opacity-0 translate-y-6 transition-all duration-700 ease-out delay-1600">
          <h3 className="text-xl font-bold mt-16 mb-2">
            7. Disqualification & Rule Violations
          </h3>
          <p className="text-[#B0B3B8] mb-4 lg:w-[470px] w-auto">
            The organizers reserve the right to disqualify any team for rule
            violations, misconduct, or failure to comply with the tournament
            guidelines.
          </p>
        </section>

        {/* Agreement */}
        <section className="fade-in opacity-0 translate-y-6 transition-all duration-700 ease-out delay-1800">
          <h3 className="text-xl font-bold mt-16 mb-2">8. Agreement</h3>
          <p className="text-[#B0B3B8] mb-4 lg:w-[470px] w-auto">
            By completing the registration, all team members acknowledge and
            agree to these terms and conditions.
          </p>
        </section>

        {/* Contact Us */}
        <section className="fade-in opacity-0 translate-y-6 transition-all duration-700 ease-out delay-2000">
          <h3 className="text-xl font-bold mt-16 mb-2">9. Contact Us</h3>
          <p className="text-[#B0B3B8] mb-4 lg:w-[550px] w-auto">
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at{" "}
            <a
              href="mailto:victhawofficial@gmail.com"
              className="text-[#C81E23] hover:text-[#a8191d] transition duration-300 hover:underline"
            >
              victhawofficial@gmail.com
            </a>{" "}
            or call us at{" "}
            <a
              href="tel:08106163804"
              className="text-[#C81E23] hover:text-[#a8191d] transition duration-300 hover:underline"
            >
              08106163804
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
};

export default TermsAndConditions;
