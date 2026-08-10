import Link from "next/link";
import React, { useState, useEffect } from "react";

const Sponsors = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="my-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-100 rounded-full opacity-20 mix-blend-multiply animate-pulse"></div>
      {/* <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-200 rounded-full opacity-20 mix-blend-multiply animate-pulse delay-1000"></div> */}
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="lg:text-4xl text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            Our <span className="text-red-600">Valued</span> Sponsors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Sponsors made Unity Cup 1.0 an unforgettable experience. 
            Join us for Unity Cup 2.0 to connect with passionate fans and elevate your brand presence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          <div className={`bg-white rounded-xl shadow-lg p-8 border border-gray-100 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } hover:shadow-xl hover:-translate-y-1`}>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-orange-500 mb-6 rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Brand Visibility</h3>
            <p className="text-gray-600 leading-relaxed">
              Sponsors gain prominent exposure through strategic placement on banners, 
              team uniforms, and across our social media channels reaching thousands of engaged fans.
            </p>
          </div>
          
          <div className={`bg-white rounded-xl shadow-lg p-8 border border-gray-100 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } delay-150 hover:shadow-xl hover:-translate-y-1`}>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-orange-500 mb-6 rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Impact</h3>
            <p className="text-gray-600 leading-relaxed">
              Connect forward-thinking brands with hundreds of passionate fans 
              and players who value corporate support of local sports initiatives.
            </p>
          </div>
          
          <div className={`bg-white rounded-xl shadow-lg p-8 border border-gray-100 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } delay-300 hover:shadow-xl hover:-translate-y-1 md:col-span-2 lg:col-span-1`}>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-orange-500 mb-6 rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lasting Connections</h3>
            <p className="text-gray-600 leading-relaxed">
              Build valuable, long-term relationships with local businesses and community 
              organizations that extend far beyond the tournament.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl shadow-inner border border-gray-100 max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in Sponsoring Unity Cup 2.0?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our growing list of partners and connect with an engaged community of sports enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/tournament/sponsors">
                <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow hover:shadow-lg">
                  See Current Sponsors
                </button>
              </Link>
              {/* <Link href="/become-a-sponsor">
                <button className="bg-white text-red-600 border border-red-600 hover:bg-red-600 hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow hover:shadow-lg">
                  Express Interest for 2.0
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;