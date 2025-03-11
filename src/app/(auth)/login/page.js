import Login from "@/components/(auth)/login/Login";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#FFFFFF] text-black tracking-tight">
      <div className="container lg:px-[30px] px-2 tracking-tight">
        <Login />
      </div>
    </div>
  );
};

export default page;
