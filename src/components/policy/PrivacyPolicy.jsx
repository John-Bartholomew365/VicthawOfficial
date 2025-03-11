import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="my-[100px] lg:px-[50px] px-[3px]">
      <main className="container mx-auto p-4">
        <section className="">
          <h2 className="lg:text-[45px] text-[30px] font-bold mb-4 text-center">
            Privacy Policy
          </h2>
          <p className="text-[#6B6F76] mt-3 mb-10 text-center lg:w-[430px] m-auto w-auto">
            We value your privacy at Victhaw Official Unity Cup 1.0. This policy
            explains how we collect, use, and safeguard your data.
          </p>
          <h3 className="text-xl font-bold mb-2 mt-16">1. Information Collection</h3>
          <p className="text-[#000000] mb-4 lg:w-[470px] w-auto">
            We collect information from you when you register for the
            tournament, contact us, or participate in any of our events. The
            information we collect may include:
          </p>
          <ul className="list-none text-gray-700 mb-4 ml-5">
            <li className="before:content-['•'] before:text-[#C81E23] before:mr-2 text-[#6B6F76]">
              Your name
            </li>
            <li className="before:content-['•'] before:text-[#C81E23] before:mr-2 text-[#6B6F76]">
              Your email address
            </li>
            <li className="before:content-['•'] before:text-[#C81E23] before:mr-2 text-[#6B6F76]">
              Your phone number
            </li>
            <li className="before:content-['•'] before:text-[#C81E23] before:mr-2 text-[#6B6F76]">
              Any other information you voluntarily provide
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-16 mb-2">
            2. Use of Information
          </h3>
          <p className="text-black mb-4">
            We use the information we collect to:
          </p>

          <ul className="list-none text-gray-700 mb-4 ml-5">
            <li className="before:content-['•'] before:text-[#C81E23] before:mr-2 text-[#6B6F76]">
              Process your registration for the tournament
            </li>
            <li className="before:content-['•'] before:text-[#C81E23] before:mr-2 text-[#6B6F76]">
              Send you important updates and notifications
            </li>
            <li className="before:content-['•'] before:text-[#C81E23] before:mr-2 text-[#6B6F76]">
              Respond to your inquiries and requests
            </li>
            <li className="before:content-['•'] before:text-[#C81E23] before:mr-2 text-[#6B6F76]">
              Improve our services and user experience
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-16 mb-2">
            3. Disclosure of Information
          </h3>
          <p className="text-[#6B6F76] mb-4 lg:w-[600px] w-auto">
            We do not share your personal information with third parties without
            your consent, except as necessary to provide our services or as
            required by law.
          </p>
          <h3 className="text-xl font-bold mb-2 mt-16">4. Security</h3>
          <p className="text-[#6B6F76] mb-4 lg:w-[500px] w-auto">
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, alteration, or destruction. We use
            industry-standard security practices to safeguard your data.
          </p>
          <h3 className="text-xl font-bold mb-2 mt-16">5. Children's Privacy</h3>
          <p className="text-[#6B6F76] mb-4 lg:w-[500px] w-auto">
            Our website and services are not intended for children under the age
            of 13. We do not knowingly collect personal information from
            children under 13.
          </p>
          <h3 className="text-xl font-bold mb-2 mt-16">
            6. Changes to This Privacy Policy
          </h3>
          <p className="text-[#6B6F76] mb-4 lg:w-[500px] w-auto">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. Any changes will be posted on this page, and the
            date of the last update will be indicated at the bottom of the page.
          </p>
          <h3 className="text-xl font-bold mb-2 mt-16">7. Contact Us</h3>
          <p className="text-[#6B6F76] mb-4 lg:w-[550px] w-auto">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at{" "}
            <a
              href="mailto:victhawofficial@gmail.com"
              className="text-[#C81E23] hover:text-red-600"
            >
              victhawofficial@gmail.com
            </a>{" "}
            or call us at{" "}
            <a
              href="tel:08106163804"
              className="text-[#C81E23] hover:text-red-600"
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

export default PrivacyPolicy;
