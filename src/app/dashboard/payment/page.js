import PaymentPage from "@/components/dashboard/payment/PaymentPage";
import React from "react";

const page = () => {
  return (
    <div className="mt-24 bg-[#0F0F0F] text-white tracking-tight lg:ml-[70px] ml-0">
      <div className="container lg:px-[30px] px-2 tracking-tight">
        <PaymentPage />
      </div>
    </div>
  );
};

export default page;
