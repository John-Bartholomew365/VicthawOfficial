import React from "react";

const ReadyPrize = () => {
  return (
    <div className="my-[120px]">
      <div className="my-[50px]">
        <h1 className="lg:text-[40px] text-[30px] tracking-tight text-center">
          Ready to Compete for Glory?
        </h1>
        <p className="text-[#B0B3B8] lg:w-[400px] w-auto text-center m-auto mt-4">
          Don’t miss your chance to win these incredible prizes! Gather your
          team, sharpen your skills, and register for the Victhaw Official Unity
          Cup 1.0 today!
        </p>
      </div>{" "}
      <div className="mt-[50px] text-center">
        <a
          href="/register"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#C81E23]  text-white px-8 py-3 rounded-md text-[18px] font-bold hover:bg-[#a8191d] transition duration-300"
        >
          Regsiter now
        </a>
      </div>
    </div>
  );
};

export default ReadyPrize;
