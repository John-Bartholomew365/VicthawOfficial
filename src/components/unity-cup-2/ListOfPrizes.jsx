"use client";
import { prizes, awards } from "@/data/unity-cup-2";

const ListOfPrizes = () => {
  return (
    <div className="my-[50px]">
      <div className="my-[50px]">
        <h1 className="lg:text-[40px] text-[30px] tracking-tight text-center">
          Tournament Prizes & Awards
        </h1>
        <p className="text-[#6B6F76] lg:w-[480px] w-auto text-center m-auto mt-4">
          Top-performing teams and standout players will be rewarded with
          exciting prizes, recognizing their hard work, skill, and achievements
          throughout the competition.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-5xl mx-auto px-4">
        {prizes.map((prize) => (
          <div
            key={prize.key}
            className={`bg-[#FAFAFA] rounded-xl shadow-md p-6 border-t-4 ${prize.accent} hover:shadow-lg transition-shadow`}
          >
            <div
              className={`w-16 h-16 ${prize.iconBg} rounded-full flex items-center justify-center text-3xl mx-auto`}
            >
              <span>{prize.icon}</span>
            </div>
            <h2 className="text-[22px] font-bold text-center mt-4">
              {prize.title}
            </h2>
            <ul className="mt-5 space-y-3">
              {prize.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <img
                    src="/checkmark.svg"
                    alt="Checkmark"
                    className="w-5 h-5 mt-1"
                  />
                  <p className="text-[#6B6F76] text-[14px]">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {awards.length > 0 && (
        <div className="max-w-3xl mx-auto mt-16 px-4">
          <h2 className="text-[24px] font-bold text-center">
            Award Winners
          </h2>
          <div className="space-y-4 mt-6">
            {awards.map((award) => (
              <div
                key={award.title}
                className="bg-[#FAFAFA] rounded-lg p-4 flex justify-between items-center border border-gray-100"
              >
                <div>
                  <p className="font-bold">{award.title}</p>
                  <p className="text-[#6B6F76] text-sm">{award.player}</p>
                </div>
                <span className="text-[#C81E23] font-bold">
                  {award.team}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="my-[60px] text-center px-4">
        <h2 className="text-[22px] font-bold">
          Award Amounts To Be Announced
        </h2>
        <p className="text-[#6B6F76] max-w-md mx-auto mt-3">
          Final cash prizes and award amounts for Unity Cup 2.0 will be
          confirmed and updated here before the tournament begins.
        </p>
      </div>
    </div>
  );
};

export default ListOfPrizes;
