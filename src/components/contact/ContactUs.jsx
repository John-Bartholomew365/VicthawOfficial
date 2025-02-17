"use client"
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Here you can add your form submission logic, e.g., sending data to an API
    setSuccessMessage(true);
    setFormData({ name: '', email: '', phone: '', message: '' });

    // Reset the success message after 5 seconds
    setTimeout(() => {
      setSuccessMessage(false);
    }, 5000);
  };

  return (
    <div className="my-[100px] lg:px-[80px] px-[10px]">
      <header className="">
        <h1 className="text-3xl font-bold text-center">Victhaw Official Unity Cup 1.0</h1>
      </header>
      <main className="container mx-auto p-4">
        <section className="">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-[#B0B3B8] mb-6">
            Contact us today for inquiries about the tournament, team registration, or sponsorship opportunities.
          </p>
          {successMessage && (
            <div className="bg-green-500 text-white p-4 rounded-md mb-4 text-center">
              <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Thank you for your message! We will get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-[#B0B3B8] font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-[#0F0F0F] rounded-md py-3 px-5"
                required
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[#B0B3B8] font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-[#0F0F0F] rounded-md py-3 px-5"
                required
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-[#B0B3B8] font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-[#0F0F0F] rounded-md py-3 px-5"
                placeholder="Your Phone Number"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[#B0B3B8] font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 bg-[#0F0F0F] rounded-md py-3 px-5"
                rows={4}
                required
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#C81E23] text-white py-2 px-8 rounded-md hover:bg-[#a8191d] transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;