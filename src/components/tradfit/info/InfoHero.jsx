"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";

const InfoHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <React.Fragment>
      {/* Vision Section */}
      <section className="py-16">
        <div className="lg:w-[520px] w-auto mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
          >
            Our Vision
          </h2>
          <p 
            className="text-[16px] leading-tight text-gray-600"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            To ignite cultural pride and promote healthy living through a
            one-of-a-kind indigenous dance aerobics experience that celebrates
            tradition, unity, and vitality.
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section className="bg-[#FAFAFA] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            data-aos="fade-up"
          >
            Event Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div 
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Image src={"/one-day.jpg"} alt="One Day Event" width={100} height={100} className="rounded-full w-[150px] h-[150px] mb-2" />
              <h3 className="text-lg font-semibold text-gray-900">Duration</h3>
              <p className="text-gray-600">
                1-day flagship event + future recurring series
              </p>
            </div>

            <div 
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
               <Image src={"/venue-day.jpg"} alt="Venue Day Event" width={100} height={100} className="rounded-full w-[150px] h-[150px] mb-2" />
              <h3 className="text-lg font-semibold text-gray-900">Venue</h3>
              <p className="text-gray-600">
                Open-air garden decorated with indigenous art, fabrics, and
                motifs
              </p>
            </div>

            <div 
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Image src={"/kente.jpg"} alt="Kente Event" width={100} height={100} className="rounded-full w-[150px] h-[150px] mb-2" />
              <h3 className="text-lg font-semibold text-gray-900">
                Dress Code
              </h3>
              <p className="text-gray-600">
                Cultural fitness-inspired attire (Ankara shorts, kente wraps,
                beads)
              </p>
            </div>

            <div 
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Image src={"/music.jpg"} alt="Music Event" width={100} height={100} className="rounded-full w-[150px] h-[150px] mb-2" />
              <h3 className="text-lg font-semibold text-gray-900">Music</h3>
              <p className="text-gray-600">
                Live drummers, traditional instruments, DJs remixing indigenous
                tunes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-gradient-to-b from-[#fef8f2] to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-5 w-24 h-24 bg-[#C90A1D]/10 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-8 w-16 h-16 bg-[#C90A1D]/10 rounded-full opacity-30"></div>
        <div className="absolute top-1/3 right-12 w-10 h-10 bg-[#C90A1D]/10 rounded-full opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            data-aos="fade-up"
          >
            Event Activities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#C90A1D] hover:shadow-xl transition-all group"
              data-aos="flip-left"
              data-aos-delay="100"
            >
              <div className="mb-4 h-2 w-12 bg-[#C90A1D] rounded-full group-hover:w-16 transition-all"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C90A1D] to-orange-600">
                  Cultural Dance Aerobics
                </span>
              </h3>
              <p className="text-gray-600">
                High-energy fitness sessions led by trained instructors,
                combining traditional dance with modern aerobics
              </p>
              <div className="mt-4 text-sm text-[#C90A1D] font-medium">→ Move to ancestral rhythms</div>
            </div>

            <div 
              className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#C90A1D] hover:shadow-xl transition-all group"
              data-aos="flip-left"
              data-aos-delay="200"
            >
              <div className="mb-4 h-2 w-12 bg-[#C90A1D] rounded-full group-hover:w-16 transition-all"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C90A1D] to-orange-600">
                  Live Music & Drumming
                </span>
              </h3>
              <p className="text-gray-600">
                Immersive musical experiences with live drummers and traditional
                instruments creating authentic rhythms
              </p>
              <div className="mt-4 text-sm text-[#C90A1D] font-medium">→ Feel the ancestral heartbeat</div>
            </div>

            <div 
              className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#C90A1D] hover:shadow-xl transition-all group"
              data-aos="flip-left"
              data-aos-delay="300"
            >
              <div className="mb-4 h-2 w-12 bg-[#C90A1D] rounded-full group-hover:w-16 transition-all"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C90A1D] to-orange-600">
                  Wellness Booths
                </span>
              </h3>
              <p className="text-gray-600">
                Indigenous herbs, massage therapy, yoga sessions, and holistic
                wellness experiences
              </p>
              <div className="mt-4 text-sm text-[#C90A1D] font-medium">→ Heal with traditional wisdom</div>
            </div>

            <div 
              className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#C90A1D] hover:shadow-xl transition-all group"
              data-aos="flip-left"
              data-aos-delay="400"
            >
              <div className="mb-4 h-2 w-12 bg-[#C90A1D] rounded-full group-hover:w-16 transition-all"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C90A1D] to-orange-600">
                  Traditional Food & Drinks
                </span>
              </h3>
              <p className="text-gray-600">
                Authentic cuisine including Zobo, palm wine, millet snacks, and
                other traditional delicacies
              </p>
              <div className="mt-4 text-sm text-[#C90A1D] font-medium">→ Taste ancestral flavors</div>
            </div>

            <div 
              className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#C90A1D] hover:shadow-xl transition-all group"
              data-aos="flip-left"
              data-aos-delay="500"
            >
              <div className="mb-4 h-2 w-12 bg-[#C90A1D] rounded-full group-hover:w-16 transition-all"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C90A1D] to-orange-600">
                  Fashion Showcase
                </span>
              </h3>
              <p className="text-gray-600">
                Display of indigenous athletic wear and cultural fashion
                celebrating traditional aesthetics
              </p>
              <div className="mt-4 text-sm text-[#C90A1D] font-medium">→ Wear your heritage proudly</div>
            </div>

            <div 
              className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#C90A1D] hover:shadow-xl transition-all group"
              data-aos="flip-left"
              data-aos-delay="600"
            >
              <div className="mb-4 h-2 w-12 bg-[#C90A1D] rounded-full group-hover:w-16 transition-all"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C90A1D] to-orange-600">
                  Storytelling & Spoken Word
                </span>
              </h3>
              <p className="text-gray-600">
                Cultural narratives and artistic expressions connecting
                participants to their heritage
              </p>
              <div className="mt-4 text-sm text-[#C90A1D] font-medium">→ Connect through ancestral stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-gradient-to-b from-white to-[#fef8f2] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute bottom-10 left-8 w-20 h-20 bg-[#C90A1D]/10 rounded-full opacity-40"></div>
        <div className="absolute top-20 right-5 w-14 h-14 bg-[#C90A1D]/10 rounded-full opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            data-aos="fade-up"
          >
            Who Should Join
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#C90A1D]/20 to-orange-100 flex items-center justify-center group-hover:from-[#C90A1D]/30 group-hover:to-orange-200 transition-all">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#C90A1D] to-orange-600">F</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Fitness Enthusiasts
              </h3>
              <p className="text-gray-600">
                Seeking unique and culturally rich fitness experiences
              </p>
            </div>

            <div 
              className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#C90A1D]/20 to-orange-100 flex items-center justify-center group-hover:from-[#C90A1D]/30 group-hover:to-orange-200 transition-all">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#C90A1D] to-orange-600">C</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Cultural Enthusiasts
              </h3>
              <p className="text-gray-600">
                Creatives and individuals passionate about heritage preservation
              </p>
            </div>

            <div 
              className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#C90A1D]/20 to-orange-100 flex items-center justify-center group-hover:from-[#C90A1D]/30 group-hover:to-orange-200 transition-all">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#C90A1D] to-orange-600">H</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Health-Conscious Individuals
              </h3>
              <p className="text-gray-600">
                Ages 18-45 focused on wellness and mental well-being
              </p>
            </div>

            <div 
              className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#C90A1D]/20 to-orange-100 flex items-center justify-center group-hover:from-[#C90A1D]/30 group-hover:to-orange-200 transition-all">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#C90A1D] to-orange-600">T</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Tourists & Expats
              </h3>
              <p className="text-gray-600">
                Visitors seeking authentic cultural experiences
              </p>
            </div>

            <div 
              className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#C90A1D]/20 to-orange-100 flex items-center justify-center group-hover:from-[#C90A1D]/30 group-hover:to-orange-200 transition-all">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#C90A1D] to-orange-600">A</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Afrocentric Diaspora
              </h3>
              <p className="text-gray-600">
                Individuals connecting with their African roots
              </p>
            </div>

            <div 
              className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#C90A1D]/20 to-orange-100 flex items-center justify-center group-hover:from-[#C90A1D]/30 group-hover:to-orange-200 transition-all">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#C90A1D] to-orange-600">B</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Corporate Groups
              </h3>
              <p className="text-gray-600">
                Companies seeking CSR and employee wellness events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            data-aos="fade-up"
          >
            Why TRADFIT RHYTHMS Matters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3 className="flex items-center gap-3 text-xl font-semibold text-gray-900">
                <div className="w-8 h-8 bg-[#C90A1D] rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                Cultural Preservation
              </h3>
              <p className="text-gray-600 mt-2">
                Showcases and sustains indigenous dance, music, and attire in a
                contemporary format, ensuring cultural heritage is passed to
                future generations.
              </p>
            </div>

            <div 
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h3 className="flex items-center gap-3 text-xl font-semibold text-gray-900">
                <div className="w-8 h-8 bg-[#C90A1D] rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                Health & Wellness
              </h3>
              <p className="text-gray-600 mt-2">
                Promotes cardiovascular fitness, flexibility, and mental
                well-being through engaging, culturally-rooted physical
                activities.
              </p>
            </div>

            <div 
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h3 className="flex items-center gap-3 text-xl font-semibold text-gray-900">
                <div className="w-8 h-8 bg-[#C90A1D] rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                Community Building
              </h3>
              <p className="text-gray-600 mt-2">
                Connects people through shared culture and positive energy,
                fostering lasting relationships and community bonds.
              </p>
            </div>

            <div 
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h3 className="flex items-center gap-3 text-xl font-semibold text-gray-900">
                <div className="w-8 h-8 bg-[#C90A1D] rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                Economic Impact
              </h3>
              <p className="text-gray-600 mt-2">
                Empowers local vendors, artists, and small businesses by
                providing platforms for showcasing their products and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projected Outcomes */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            data-aos="fade-up"
          >
            Expected Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              className="text-center"
              data-aos="flip-up"
              data-aos-delay="100"
            >
              <div className="text-4xl font-bold text-[#C90A1D] mb-2">500+</div>
              <p className="text-gray-600">Attendees in first event</p>
            </div>

            <div 
              className="text-center"
              data-aos="flip-up"
              data-aos-delay="200"
            >
              <div className="text-4xl font-bold text-[#C90A1D] mb-2">50K+</div>
              <p className="text-gray-600">Online impressions</p>
            </div>

            <div 
              className="text-center"
              data-aos="flip-up"
              data-aos-delay="300"
            >
              <div className="text-4xl font-bold text-[#C90A1D] mb-2">20+</div>
              <p className="text-gray-600">Vendors engaged</p>
            </div>

            <div 
              className="text-center"
              data-aos="flip-up"
              data-aos-delay="400"
            >
              <div className="text-4xl font-bold text-[#C90A1D] mb-2">∞</div>
              <p className="text-gray-600">Cultural goodwill</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
          >
            Join the Movement
          </h2>
          <p 
            className="text-gray-600 mb-8 lg:w-[480px] w-auto mx-auto leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            TRADFIT RHYTHMS is more than movement; it is a heartbeat, a
            celebration of who we are, and a call to embrace our bodies,
            culture, and community.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Link
              href="/tradfit/sponsors"
              className="inline-block bg-[#C90A1D] text-white px-6 py-2 rounded-[10px] font-semibold hover:bg-red-700 transition-colors"
            >
              Become a Sponsor
            </Link>
            <Link
              href="/tradfit/about"
              className="inline-block border border-[#C90A1D] text-[#C90A1D] px-6 py-2 rounded-[10px] font-semibold hover:bg-[#C90A1D]/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default InfoHero;