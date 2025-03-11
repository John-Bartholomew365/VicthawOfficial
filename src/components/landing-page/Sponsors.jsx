import Link from "next/link";
import React from "react";

const Sponsors = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="lg:text-[45px] text-[30px] tracking-tight font-bold text-black mb-3">
          Become a Sponsor
        </h2>
        <p className="text-[16px] text-[#6B6F76] tracking-tight mb-12 lg:w-[440px] w-auto m-auto">
          Partner with us to make the <strong>Unity Cup 1.0</strong>a resounding
          success! Sponsoring this event is more than just branding, it’s a
          chance to amplify your visibility, engage with a passionate community,
          and create meaningful connections.
        </p>
      </div>

      <div className="lg:flex lg:flex-row flex-col gap-7 justify-center">
        <div className="bg-gradient-to-br from-[#000000] justify-center h-[200px] to-[#C81E23] text-[#FFFFFF] rounded-md p-4 lg:w-[30%] w-auto">
          <h1 className="text-xl font-bold tracking-tight">Brand Visibility</h1>
          <p className="lg:w-[300px] w-auto mt-3 leading-tight tracking-tight text-[#6B6F76]">
            Your logo on banners, uniforms, and social media platforms for
            maximum exposure.
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#000000] to-[#C81E23] h-[200px] text-[#FFFFFF] rounded-md p-4 lg:w-[30%] w-auto lg:my-0 my-5">
          <h1 className="text-xl font-bold tracking-tight">
            Community Engagement
          </h1>
          <p className="lg:w-[300px] w-auto mt-3 leading-tight tracking-tight text-[#6B6F76]">
            Connect with hundreds of fans and participants while supporting
            local sports.
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#000000] to-[#C81E23] text-[#FFFFFF] h-[200px] rounded-md p-4 lg:w-[30%] w-auto ">
          <h1 className="text-xl font-bold tracking-tight">
            Networking Opportunities
          </h1>
          <p className="lg:w-[300px] w-auto mt-3 leading-tight tracking-tight text-[#6B6F76]">
            Build strong relationships with local businesses and organizations.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href={"/about/sponsors"}>
          <button className="bg-[#C81E23] hover:text-black text-white py-3 px-6 text-lg rounded-md hover:bg-white  hover:border-[#C81E23] hover:border">
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sponsors;
