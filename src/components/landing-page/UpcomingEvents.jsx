import Image from "next/image";
import Link from "next/link";
import React from "react";

const UpcomingEvents = () => {
  return (
    <div>
      <div className="my-[100px] lg:flex lg:flex-row flex-col-reverse gap-[100px] lg:pl-[100px] pl-[10px]">
        <div className="lg:mb-0 mb-10 lg:hidden flex">
          <Image
            src="/stadium.svg"
            alt="logo"
            height={372}
            width={410}
            className="rounded-md"
          />
        </div>
        <div>
          <h1 className="lg:text-[45px] lg:text-start text-center text-[30px] tracking-tight">
            Upcoming Event
          </h1>
          <p className="lg:w-[430px] tracking-tight w-auto my-3 m-auto text-[#6B6F76]">
            The <strong>Victhaw Official Unity Cup 1.0</strong> will commence on
            <strong> April 12th to June 22nd, 2025!</strong> This highly
            anticipated tournament will take place at Basin, Ilorin, Kwara
            State, bringing together top talents, passionate fans, and the
            electrifying energy of the game we all love.
          </p>
          <div className="mt-8 flex lg:justify-start justify-center">
            <Link href={"/about/tournament"}>
              <button className="bg-[#C81E23] py-[10px] px-[20px] text-white rounded-[6px] hover:bg-[#ffffff] hover:text-black hover:border-[#C81E23] hover:border">
                Learn more
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:mt-0 mt-10 lg:flex hidden">
          <Image
            src="/stadium.svg"
            alt="logo"
            height={372}
            width={410}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
