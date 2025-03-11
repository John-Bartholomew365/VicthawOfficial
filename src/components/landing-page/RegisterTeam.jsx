import Image from "next/image";
import Link from "next/link";
import React from "react";

const RegisterTeam = () => {
  return (
    <div className="my-[100px] lg:ml-[90px] ml-[10px]">
      <div className="lg:flex lg:flex-row flex-col gap-[70px] items-center">
        <div>
          <Image
            src="/img3.jpg"
            alt="logo"
            height={280}
            width={420}
            className="rounded-md"
          />
        </div>

        <div>
          <h1 className="lg:text-[40px] lg:w-[400px] w-auto leading-tight tracking-tight text-[30px] lg:text-start text-center lg:mt-0 mt-6">
            Register Your Team Today!
          </h1>
          <p className="lg:w-[410px] w-auto text-[#6B6F76] mt-3 mb-8">
            Be part of the action! Register your team for the Unity Cup 1.0 and
            seize the opportunity to showcase your talent, compete against the
            best, and make your mark on the pitch.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link href="/register">
              <button className="bg-[#C81E23] text-white py-2 px-6 text-lg rounded-md hover:bg-black hover:text-white hover:border-[#C81E23] hover:border">
                Register now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterTeam;
