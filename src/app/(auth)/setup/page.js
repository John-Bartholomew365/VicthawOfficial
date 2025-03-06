import TermsAgreement from "@/components/dashboard/FirstPage";
import SetupTeam from "@/components/dashboard/setup/SetupTeam";
import React from "react";

const page = () => {
  return (
    <div className=" bg-[#0F0F0F] text-white tracking-tight">
      <div className="container lg:px-[30px] px-2 tracking-tight mt-24">
        {/* <SetupTeam /> */}
        <TermsAgreement />
      </div>
    </div>
  );
};

export default page;
