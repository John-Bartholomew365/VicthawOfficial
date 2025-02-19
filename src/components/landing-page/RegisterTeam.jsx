import Image from "next/image";
import Link from "next/link";
import React from "react";

const RegisterTeam = () => {
  return (
    <div className="my-[100px] lg:ml-[90px] ml-[10px]">
      <div className="lg:flex lg:flex-row flex-col gap-[70px] items-center">
        <div>
          <Image
            src="/hero-img3.svg"
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
          <p className="lg:w-[410px] w-auto text-[#B0B3B8] mt-3 mb-8">
            Don’t miss your chance to compete in the Victhaw Official Unity Cup.
            Register your team now and showcase your skills on the field.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link href="/register">
              <button className="bg-[#C81E23] text-white py-3 px-6 text-lg rounded-md hover:bg-black hover:text-white hover:border-[#C81E23] hover:border">
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
