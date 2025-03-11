import AdminHero from "@/components/dashboard/admin/AdminHero";
import ManageFixtures from "@/components/dashboard/admin/ManageFixture";
import React from "react";

const page = () => {
  return (
    <div className="mt-24 bg-[#FFFFFF] text-black tracking-tight lg:ml-[70px] ml-0">
      <div className="container lg:px-[10px] px-2 tracking-tight">
        <AdminHero />
        {/* <ManageFixtures /> */}
      </div>
    </div>
  );
};

export default page;
