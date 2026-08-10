"use client";
import React from "react";
import {
  Heart,
  Users,
  Music,
  Sparkles,
  Target,
  Calendar,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Mission & Vision */}
      <section className="py-20 bg-[#FDF2F3] relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNDOTBBMUQiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L3N2Zz4=')] opacity-50"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white shadow-xl rounded-2xl p-8 border border-[#F9C6CC]">
              <div className="flex items-center mb-6">
                <div className="bg-[#FDF2F3] p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-[#C90A1D]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To ignite cultural pride and promote healthy living through a
                one-of-a-kind indigenous dance aerobics experience that
                celebrates tradition, unity, and vitality. We merge high-energy
                aerobics with the rich traditions of African/indigenous dance,
                music, attire, and cuisine.
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-8 border border-[#F9C6CC]">
              <div className="flex items-center mb-6">
                <div className="bg-[#FDF2F3] p-3 rounded-full mr-4">
                  <Sparkles className="h-8 w-8 text-[#C90A1D]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To create a movement where fitness and cultural heritage coexist
                harmoniously, building communities that are physically healthy,
                culturally connected, and spiritually uplifted. We envision a
                world where everyone can celebrate their roots while embracing
                wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Experience */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-3 lg:px-8">
          <div>
            <h2 className="lg:text-[28px] text-[24px] font-bold text-center text-gray-909 mb-4 leading-tight">
              The TRADFIT RHYTHMS Experience
            </h2>

            <p className="text-gray-600 text-center lg:w-[420px] w-auto mx-auto mb-16 leading-tight">
              Immerse yourself in a day of cultural celebration, fitness, and
              community connection
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Dance Aerobics */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="h-48 relative">
                  <Image
                    src="/cultural.jpg"
                    alt="Cultural Dance Aerobics"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Cultural Dance Aerobics
                  </h3>
                  <p className="text-gray-600">
                    High-energy sessions led by trained instructors, blending
                    traditional dance movements with modern aerobic exercises.
                  </p>
                </div>
              </div>

              {/* Live Music */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="h-48 relative">
                  <Image
                    src="/talking-drum.jpg"
                    alt="Live Music & Drumming"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Live Music & Drumming
                  </h3>
                  <p className="text-gray-600">
                    Experience the power of live drummers, traditional
                    instruments, and DJs remixing indigenous tunes with
                    contemporary beats.
                  </p>
                </div>
              </div>

              {/* Cultural Cuisine */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="h-48 relative">
                  <Image
                    src="/cuisine.jpg"
                    alt="Traditional Cuisine"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Traditional Cuisine
                  </h3>
                  <p className="text-gray-600">
                    Savor authentic flavors with traditional food and drink
                    stalls featuring Zobo, palm wine, millet snacks, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why It Matters */}
      <section className="py-20 bg-gradient-to-br from-[#C90A1D] to-[#8A0614] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="lg:text-[28px] text-[24px] font-bold text-center mb-4">
              Why TRADFIT RHYTHMS Matters
            </h2>

            <p className="text-center text-white/90 max-w-3xl mx-auto mb-16 lg:w-[400px] w-auto leading-tight">
              Our program creates impact across multiple dimensions of community
              and culture
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-white/20 p-2 rounded-full mr-3">
                    <Sparkles size={20} />
                  </span>
                  Cultural Preservation
                </h3>
                <p className="text-white/90">
                  Showcases and sustains indigenous dance, music, and attire in
                  a contemporary format that resonates with younger generations.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-white/20 p-2 rounded-full mr-3">
                    <Heart size={20} />
                  </span>
                  Health & Wellness
                </h3>
                <p className="text-white/90">
                  Promotes cardiovascular fitness, flexibility, and mental
                  well-being through joyful movement and community connection.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-white/20 p-2 rounded-full mr-3">
                    <Users size={20} />
                  </span>
                  Community Building
                </h3>
                <p className="text-white/90">
                  Connects people through shared culture and positive energy,
                  creating lasting bonds across generations and backgrounds.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="bg-white/20 p-2 rounded-full mr-3">
                    <Target size={20} />
                  </span>
                  Economic Impact
                </h3>
                <p className="text-white/90">
                  Empowers local vendors, artists, and small businesses by
                  providing a platform to showcase their products and talents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Event Details */}
      <section className="lg:py-20 py-14 bg-[#FDF2F3] rounded-[10px]">
        <div className="max-w-6xl mx-auto px-3 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-[#C90A1D] to-[#8A0614] lg:p-12 p-8 text-white flex flex-col justify-center">
                <h2 className="lg:text-3xl text-[24px] font-bold mb-6">
                  Event Details
                </h2>

                <div className="flex items-start mb-6">
                  <Calendar className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Date & Time</h3>
                    <p>1-day flagship event + future recurring series</p>
                    <p className="text-sm opacity-90">
                      Stay tuned for the release of our upcoming event dates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <MapPin className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Venue Ambience</h3>
                    <p>
                      Open-air garden decorated with indigenous art, fabrics,
                      and motifs
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Dress Code</h3>
                    <p>
                      Cultural fitness-inspired attire (e.g., Ankara shorts,
                      kente wraps, beads)
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 lg:p-12 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Who Should Attend
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-[#FDF2F3] rounded-full p-2 mr-4 flex-shrink-0">
                      <Heart className="h-5 w-5 text-[#C90A1D]" />
                    </div>
                    <span>Fitness lovers seeking unique experiences</span>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-[#FDF2F3] rounded-full p-2 mr-4 flex-shrink-0">
                      <Music className="h-5 w-5 text-[#C90A1D]" />
                    </div>
                    <span>Cultural enthusiasts and creatives</span>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-[#FDF2F3] rounded-full p-2 mr-4 flex-shrink-0">
                      <Target className="h-5 w-5 text-[#C90A1D]" />
                    </div>
                    <span>Health-conscious individuals of all ages</span>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-[#FDF2F3] rounded-full p-2 mr-4 flex-shrink-0">
                      <Users className="h-5 w-5 text-[#C90A1D]" />
                    </div>
                    <span>Tourists, expats, and the Afrocentric diaspora</span>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-[#FDF2F3] rounded-full p-2 mr-4 flex-shrink-0">
                      <Sparkles className="h-5 w-5 text-[#C90A1D]" />
                    </div>
                    <span>
                      Corporations seeking CSR/employee wellness events
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20  text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Join the Movement
            </h2>

            <p className="mb-10 text-gray-600 lg:w-[470px] w-auto mx-auto leading-tight">
              TRADFIT RHYTHMS is more than movement; it is a heartbeat, a
              celebration of who we are, and a call to embrace our bodies,
              culture, and community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"/auth/register"}>
                <button className="bg-[#C90A1D] text-white px-8 py-2 rounded-full font-semibold hover:bg-[#A30818] lg:text-[16px] text-[18px] transition-colors lg:w-fit w-full">
                  Register Now
                </button>
              </Link>

              <Link href={"/tradfit/terms"}>
                <button className="border border-[#C90A1D] text-[#C90A1D] px-8 py-2 rounded-full lg:text-[16px] text-[18px] font-semibold hover:bg-[#C90A1D] hover:text-white transition-colors lg:w-fit w-full">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-12px) rotate(3deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }
  @keyframes float-reverse {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(12px) rotate(-3deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }
  @keyframes float-slow {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(2deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }
  @keyframes float-reverse-slow {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(8px) rotate(-2deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }
  @keyframes float-slower {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-6px) rotate(1deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-float-reverse {
    animation: float-reverse 7s ease-in-out infinite;
  }
  .animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
  }
  .animate-float-reverse-slow {
    animation: float-reverse-slow 9s ease-in-out infinite;
  }
  .animate-float-slower {
    animation: float-slower 10s ease-in-out infinite;
  }
`}</style>
    </div>
  );
};

export default About;