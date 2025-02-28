import SetupTeam from "@/components/dashboard/setup/SetupTeam";
import React from "react";

const page = () => {
  return (
    <div className="mt-24 bg-[#0F0F0F] text-white tracking-tight lg:ml-[50px] ml-3">
      <div className="container lg:px-[30px] px-2 tracking-tight">
        <SetupTeam />
      </div>
    </div>
  );
};

export default page;
