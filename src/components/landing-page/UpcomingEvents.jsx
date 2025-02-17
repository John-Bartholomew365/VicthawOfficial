import Image from "next/image";
import Link from "next/link";
import React from "react";

const UpcomingEvents = () => {
  return (
    <div>
      <div className="my-[100px] lg:flex lg:flex-row flex-col gap-[100px] lg:pl-[100px] pl-[10px]">
        <div>
          <h1 className="lg:text-[45px] text-[30px] tracking-tight">
            Upcoming Event
          </h1>
          <p className="lg:w-[450px] tracking-tight w-auto my-3 m-auto text-[#B0B3B8]">
            The Victhaw Official Unity Cup kicks off from{" "}
            <strong>12th April to 4th May 2025</strong> at{" "}
            <strong>Basin, Ilorin, Kwara State.</strong> Matches will be hosted
            at well-equipped local stadiums and sports complexes, ensuring a
            world-class experience for players and fans alike.
          </p>
          <div className="mt-8 flex lg:justify-start justify-center">
            <Link href={"/register"}>
              <button className="bg-[#C81E23] py-[10px] px-[20px] text-white rounded-[6px] hover:bg-[#0F0F0F] hover:text-white hover:border-[#C81E23] hover:border">
                Get started
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:mt-0 mt-10">
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
