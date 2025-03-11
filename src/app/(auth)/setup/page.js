import TermsAgreement from "@/components/dashboard/FirstPage";
import SetupTeam from "@/components/dashboard/setup/SetupTeam";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#FFFFFF] text-black tracking-tight">
      <div className="container lg:px-[30px] px-2 tracking-tight">
        {/* <SetupTeam /> */}
        <TermsAgreement />
      </div>
    </div>
  );
};

export default page;
