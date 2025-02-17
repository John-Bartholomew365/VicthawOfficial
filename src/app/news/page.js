import NewsUpdates from "@/components/news/NewsUpdates";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#0F0F0F] text-white tracking-tight">
      <div className="container lg:px-[30px] px-2 tracking-tight">
        <NewsUpdates />
      </div>
    </div>
  );
};

export default page;
