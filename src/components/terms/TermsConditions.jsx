// pages/terms-and-conditions.jsx
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="my-[100px] lg:px-[50px] px-[3px]">
      <main className="container mx-auto p-4">
        <section className="">
          <h2 className="lg:text-[45px] text-[30px] font-bold mb-4 text-center">
            Terms and Conditions
          </h2>
          <p className="text-[#B0B3B8] mt-3 mb-10 text-center lg:w-[480px] m-auto w-auto">
            Welcome to the Victhaw Official Unity Cup 1.0. By accessing or using our website, you agree to be bound by these Terms and Conditions. Please read them carefully.
          </p>
          <h3 className="text-xl font-bold mb-2 mt-16">1. Acceptance of Terms</h3>
          <p className="text-[#B0B3B8] mb-4 lg:w-[470px] w-auto">
            By using our website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, you must not use our website.
          </p>
          <h3 className="text-xl font-bold mt-16 mb-2">2. Changes to Terms</h3>
          <p className="text-[#B0B3B8] mb-4 lg:w-[470px] w-auto">
            We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of our website after any such changes constitutes your acceptance of the new Terms and Conditions.
          </p>
          <h3 className="text-xl font-bold mt-16 mb-2">3. Use of Website</h3>
          <p className="text-[#B0B3B8] mb-4 lg:w-[470px] w-auto">
            You agree to use our website only for lawful purposes and in accordance with these Terms and Conditions. You agree not to use our website:
          </p>
          <ul className="list-none text-gray-700 mb-4 ml-5">
            <li className="before:content-['•'] before:text-[#C81E23] before:mr-2 text-[#B0B3B8]">
              In any way that violates any applicable federal, state, local, or international law or regulation
            </li>
            <li className="before:content-['•'] before:text-[#C81E23] before:mr-2 text-[#B0B3B8]">
              To transmit, or procure the sending of, any advertising or promotions without our prior written consent
            </li>
            <li className="before:content-['•'] before:text-[#C81E23] before:mr-2 text-[#B0B3B8]">
              To impersonate or attempt to impersonate us, another user, or any other person or entity
            </li>
            <li className="before:content-['•'] before:text-[#C81E23] before:mr-2 text-[#B0B3B8]">
              To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website
            </li>
          </ul>
          <h3 className="text-xl font-bold mt-16 mb-2">4. Intellectual Property Rights</h3>
          <p className="text-[#B0B3B8] mb-4 lg:w-[470px] w-auto">
            The content on our website, including text, graphics, logos, images, and software, is our property or the property of our licensors and is protected by international copyright laws.
          </p>
          <h3 className="text-xl font-bold mt-16 mb-2">5. User Accounts</h3>
          <p className="text-[#B0B3B8] mb-4 lg:w-[470px] w-auto">
            If you create an account on our website, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
          </p>
          <h3 className="text-xl font-bold mt-16 mb-2">6. Disclaimer of Warranties</h3>
          <p className="text-[#B0B3B8] mb-4 lg:w-[470px] w-auto">
            Our website and its content are provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, as to the operation of our website or the information, content, materials, or products included on our website.
          </p>
          <h3 className="text-xl font-bold mt-16 mb-2">7. Limitation of Liability</h3>
          <p className="text-[#B0B3B8] mb-4 lg:w-[470px] w-auto">
            In no event will we be liable for any damages, including without limitation, direct, indirect, incidental, special, consequential, or punitive damages, arising out of or in connection with the use of our website.
          </p>
          <h3 className="text-xl font-bold mt-16 mb-2">8. Indemnification</h3>
          <p className="text-[#B0B3B8] mb-4 lg:w-[470px] w-auto">
            You agree to indemnify and hold us harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your breach of these Terms and Conditions or your violation of any law or the rights of a third party.
          </p>
          <h3 className="text-xl font-bold mt-16 mb-2">9. Governing Law</h3>
          <p className="text-[#B0B3B8] mb-4 lg:w-[470px] w-auto">
            These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
          </p>
          <h3 className="text-xl font-bold mt-16 mb-2">10. Contact Us</h3>
          <p className="text-[#B0B3B8] mb-4 lg:w-[550px] w-auto">
            If you have any questions or concerns about these Terms and Conditions, please contact us at{" "}
            <a
              href="mailto:victhawofficial@gmail.com"
              className="text-[#C81E23] hover:text-[#a8191d] transition duration-300"
            >
              victhawofficial@gmail.com
            </a>{" "}
            or call us at{" "}
            <a
              href="tel:08106163804"
              className="text-[#C81E23] hover:text-[#a8191d] transition duration-300"
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