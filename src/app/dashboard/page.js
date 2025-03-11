import FirstPage from "@/components/dashboard/FirstPage";
import SetupTeam from "@/components/dashboard/setup/SetupTeam";
import React from "react";

const page = () => {
  return (
    <div className="mt-24 bg-[#FFFFFF] text-black tracking-tight lg:ml-[70px] ml-3">
      <div className="container lg:px-[30px] px-2 tracking-tight">
        {/* <FirstPage /> */}
        <SetupTeam />
      </div>
    </div>
  );
};

export default page;
