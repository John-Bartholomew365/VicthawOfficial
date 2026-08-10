"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Star, Trophy, Users, Camera, Handshake, Award } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SponsorsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span 
            className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
            data-aos="fade-down"
          >
            Partnership Opportunities
          </span>
          <h1 
            className="lg:text-[40px] text-[30px] font-bold text-gray-900 mb-6 lg:w-[490px] w-auto mx-auto leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Become a TRADFIT RHYTHMS Sponsor
          </h1>
          <p 
            className="text-gray-600 lg:w-[470px] w-auto mx-auto leading-tight lg:mb-6 mb-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            TRADFIT RHYTHM is not just a dance aerobics program—it is a cultural revival, a celebration of indigenous heritage, and a wellness movement rolled into one.
          </p>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            data-aos="fade-up"
          >
            Why Sponsor TRADFIT RHYTHMS?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Trophy className="h-12 w-12 text-[#C90A1D] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Cultural Revival</h3>
              <p className="text-gray-600 leading-tight mt-2">
                Support a movement that celebrates indigenous heritage through dance, music, attire, and cuisine
              </p>
            </div>

            <div 
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Users className="h-12 w-12 text-[#C90A1D] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Community Impact</h3>
              <p className="text-gray-600 leading-tight mt-2">
                Engage with a vibrant community passionate about wellness and cultural preservation
              </p>
            </div>

            <div 
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Camera className="h-12 w-12 text-[#C90A1D] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Brand Visibility</h3>
              <p className="text-gray-600 leading-tight mt-2">
                Gain exposure through our website, social media, event materials, and physical presence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="bg-[#FAFAFA] rounded-[10px] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="lg:text-3xl text-[26px] font-bold text-gray-900 text-center mb-12"
            data-aos="fade-up"
          >
            Sponsorship Packages
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Platinum Sponsor */}
            <div 
              className="bg-white rounded-lg shadow-md p-6 border-2 border-[#C90A1D]"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-8 w-8 text-[#C90A1D] lg:block hidden" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Platinum Sponsor</h3>
                  <p className="text-gray-600">₦1,000,000</p>
                </div>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C90A1D] rounded-full mt-2"></div>
                    <span>Advertisement on the official event website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C90A1D] rounded-full mt-2"></div>
                    <span>Branding all flyers, backdrops, and electronic displays</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C90A1D] rounded-full mt-2"></div>
                    <span>Mentions in all social media publicity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C90A1D] rounded-full mt-2"></div>
                    <span>Dedicated exhibition space/stand at the venue</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C90A1D] rounded-full mt-2"></div>
                    <span>5 minutes on stage to physically advertise product/service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#C90A1D] rounded-full mt-2"></div>
                    <span>Special recognition during the event</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Gold Sponsor */}
            <div 
              className="bg-white rounded-lg shadow-md p-6 border-2 border-yellow-500"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="flex items-center gap-3 mb-4">
                <Star className="h-8 w-8 text-yellow-500 lg:block hidden" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Gold Sponsor</h3>
                  <p className="text-gray-600">₦500,000</p>
                </div>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span>Advertisement on the official event website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span>Branding on fliers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span>Branding on backdrop</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span>Dedicated exhibition space/stand at the venue</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span>Electronic display visibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Silver Sponsor */}
            <div 
              className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-300"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="flex items-center gap-3 mb-4">
                <Handshake className="h-8 w-8 text-gray-500 lg:block hidden" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Silver Sponsor</h3>
                  <p className="text-gray-600">₦200,000</p>
                </div>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <span>Branding on backdrop</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <span>Dedicated exhibition space/stand at the venue</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vendor Package */}
            <div 
              className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-300"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-blue-500 lg:block hidden" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Vendor Package</h3>
                  <p className="text-gray-600">₦50,000</p>
                </div>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span>Right to showcase and sell products/services at the event</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span>Vendor booth space provided</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Description
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 
              className="text-3xl font-bold text-gray-900 text-center mb-8"
              data-aos="fade-up"
            >
              About TRADFIT RHYTHMS
            </h2>
            <p 
              className="text-gray-600 text-lg text-center mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              TRADFIT RHYTHM merges high-energy aerobics with the rich traditions of African/indigenous dance, music, attire, and cuisine, creating an immersive experience that uplifts body, soul, and culture.
            </p>
            <p 
              className="text-gray-600 text-lg text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We are inviting partners and investors to join us in launching a dynamic fitness and cultural wellness event that promotes health, heritage, and community connection—while delivering brand exposure and social impact.
            </p>
          </div>
        </div>
      </section> */}

      {/* Expected ROI */}
      <section className="bg-[#FAFAFA] rounded-[10px] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            data-aos="fade-up"
          >
            Expected Return on Investment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="flip-left"
              data-aos-delay="100"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C90A1D] mb-2">500+</div>
                <div className="text-sm">Direct Attendees</div>
              </div>
              <p className="text-gray-600 text-center text-sm mt-2">
                Face-to-face engagement with health-conscious community members
              </p>
            </div>

            <div 
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="flip-left"
              data-aos-delay="200"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C90A1D] mb-2">50K+</div>
                <div className="text-sm">Online Impressions</div>
              </div>
              <p className="text-gray-600 text-center text-sm mt-2">
                Social media reach across multiple platforms and demographics
              </p>
            </div>

            <div 
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="flip-left"
              data-aos-delay="300"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C90A1D] mb-2">20+</div>
                <div className="text-sm">Media Outlets</div>
              </div>
              <p className="text-gray-600 text-center text-sm mt-2">
                Coverage across websites and all major social media platforms
              </p>
            </div>

            <div 
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="flip-left"
              data-aos-delay="400"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C90A1D] mb-2">12+</div>
                <div className="text-sm">Months Impact</div>
              </div>
              <p className="text-gray-600 text-center text-sm mt-2">
                Long-term brand recall and community goodwill building
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="lg:text-[36px] text-[27px] font-bold text-gray-900 mb-6"
            data-aos="fade-up"
          >
            Partner With Us
          </h2>
          <p 
            className="text-gray-600 mb-8 lg:w-[500px] w-auto mx-auto leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Join us in creating impact and building authentic connections with our vibrant community. Let&apos;s bring this vision to life together
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <a
              href="mailto:victhawofficial@gmail.com"
              className="inline-block bg-[#C90A1D] text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition-colors"
            >
              Contact Us
            </a>
            <Link
              href="/tradfit/about"
              className="inline-block border border-[#C90A1D] text-[#C90A1D] px-6 py-2 rounded-md font-semibold hover:bg-[#C90A1D]/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SponsorsPage;