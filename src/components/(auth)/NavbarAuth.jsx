import Image from "next/image";
import React from "react";

const NavbarAuth = () => {
  return (
    <div>
      <div className="py-4 lg:px-[70px] px-[30px] w-full z-50 bg-[#FFFFFF] border-b border-black-10 fixed gap-2 font-navbar flex items-center">
        <Image
          src="/victhaw-logo.svg"
          alt="Logo"
          width={0}
          height={0}
          className="w-[60px] h-[60px] rounded-[100%]"
        /> 
        <h1 className="text-black text-[22px]">Victhaw Official</h1>
      </div>
    </div>
  );
};

export default NavbarAuth;
