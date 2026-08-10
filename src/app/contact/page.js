import ContactUs from "@/components/contact/ContactUs";
import Footer from "@/components/landing-page/Footer";
import PageLoader from "@/components/PageLoader";
import React from "react";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Victhaw Official — reach out for enquiries, partnerships, sponsorship and the Unity Cup.",
  alternates: {
    canonical: "/contact",
  },
};

const page = () => {
  return (
    <PageLoader>
    <div className="bg-[#FFFFFF] text-black">
      <div className="container lg:px-[30px] px-2">
        <ContactUs />
      </div>
      <Footer />
    </div>
    </PageLoader>
  );
};

export default page;
