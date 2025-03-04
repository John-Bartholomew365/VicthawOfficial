import Image from "next/image";
import React from "react";

const ListOfPrizes = () => {
  return (
    <div className="">
      <div className="my-[50px]">
        <h1 className="lg:text-[40px] text-[30px] tracking-tight text-center">
          Tournament Prizes & Awards
        </h1>
        <p className="text-[#B0B3B8] lg:w-[480px] w-auto text-center m-auto mt-4">
          Top-performing teams and standout players will be rewarded with
          exciting prizes, recognizing their hard work, skill, and achievements
          throughout the competition.
        </p>
      </div>

      <div className="my-[50px] lg:flex lg:flex-row flex-col justify-center gap-[150px]">
        <div className="lg:mb-0 mb-10 flex lg:justify-end justify-center">
          <Image
            src="/gold-winner.jpg"
            alt="Winner"
            height={320}
            width={390}
            className="rounded-md"
          />
        </div>
        <div>
          <h1 className="lg:text-[30px] tracking-tight text-[20px]">
            What champions take home
          </h1>
          <ul className="mt-4 space-y-4 ml-7">
            <li className="flex items-start gap-3">
              <img
                src="/checkmark.svg"
                alt="Checkmark"
                className="w-5 h-5 mt-1"
              />
              <div>
                <h2 className="font-bold">Gold Medal:</h2>
                <p className="text-[#B0B3B8]">
                  A symbol of victory and excellence.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <img
                src="/checkmark.svg"
                alt="Checkmark"
                className="w-5 h-5 mt-1"
              />
              <div>
                <h2 className="font-bold">Trophy:</h2>
                <p className="text-[#B0B3B8] lg:w-[280px] leading-tight">
                  A prestigious award to commemorate your team’s success.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <img
                src="/checkmark.svg"
                alt="Checkmark"
                className="w-5 h-5 mt-1"
              />
              <div>
                <h2 className="font-bold">Cash Prize:</h2>
                <p className="text-[#B0B3B8] lg:w-[250px] leading-tight">
                  A generous cash reward for the winning team.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-[80px] lg:flex lg:flex-row flex-col justify-center gap-[150px]">
        <div className="lg:hidden lg:mb-0 mb-10 flex justify-center">
          <Image
            src="/second-win.jpg"
            alt="Winner"
            height={320}
            width={390}
            className="rounded-md"
          />
        </div>

        <div>
          <h1 className="lg:text-[30px] tracking-tight text-[20px]">
            What runner-up take home
          </h1>
          <ul className="mt-4 space-y-4 ml-7">
            <li className="flex items-start gap-3">
              <img
                src="/checkmark.svg"
                alt="Checkmark"
                className="w-5 h-5 mt-1"
              />
              <div>
                <h2 className="font-bold">Silver Medals</h2>
                <p className="text-[#B0B3B8] lg:w-[300px] w-auto leading-tight">
                  The runner-up team will receive silver medals for their strong
                  performance.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <img
                src="/checkmark.svg"
                alt="Checkmark"
                className="w-5 h-5 mt-1"
              />
              <div>
                <h2 className="font-bold">Sporting Equipment:</h2>
                <p className="text-[#B0B3B8] lg:w-[280px] w-auto leading-tight">
                  Runners-up also receive high-quality sporting equipment.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <img
                src="/checkmark.svg"
                alt="Checkmark"
                className="w-5 h-5 mt-1"
              />
              <div>
                <h2 className="font-bold">Cash Prize:</h2>
                <p className="text-[#B0B3B8] lg:w-[280px] w-auto leading-tight">
                  A generous cash reward for the runner-up team.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="lg:block hidden">
          <Image
            src="/second-win.jpg"
            alt="Winner"
            height={320}
            width={390}
            className="rounded-md"
          />
        </div>
      </div>

      <div className="my-[50px] lg:flex lg:flex-row flex-col justify-center gap-[150px]">
        <div className="lg:mb-0 mb-10 flex lg:justify-start justify-center">
          <Image
            src="/all-mvp.jpg"
            alt="Winner"
            height={350}
            width={410}
            className="rounded-md"
          />
        </div>
        <div>
          <h1 className="lg:text-[30px] tracking-tight text-[20px]">
            Individual player awards
          </h1>
          <ul className="mt-4 space-y-4 ml-7">
            <li className="flex items-start gap-3">
              <img
                src="/checkmark.svg"
                alt="Checkmark"
                className="w-5 h-5 mt-1"
              />
              <div>
                <h2 className="font-bold">Best Player (MVP):</h2>
                <p className="text-[#B0B3B8] lg:w-[280px] w-auto leading-tight">
                  Awarded to the Most Valuable Player of the tournament.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <img
                src="/checkmark.svg"
                alt="Checkmark"
                className="w-5 h-5 mt-1"
              />
              <div>
                <h2 className="font-bold">Best Goalkeeper:</h2>
                <p className="text-[#B0B3B8] lg:w-[280px] w-auto leading-tight">
                  Awarded to the goalkeeper with the most outstanding
                  performance.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <img
                src="/checkmark.svg"
                alt="Checkmark"
                className="w-5 h-5 mt-1"
              />
              <div>
                <h2 className="font-bold">Top Scorer:</h2>
                <p className="text-[#B0B3B8] lg:w-[250px] w-auto leading-tight">
                  Awarded to the player with the highest number of goals
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <img
                src="/checkmark.svg"
                alt="Checkmark"
                className="w-5 h-5 mt-1"
              />
              <div>
                <h2 className="font-bold">Fair Play Award:</h2>
                <p className="text-[#B0B3B8] lg:w-[345px] w-auto leading-tight">
                  Awarded to the team or player demonstrating the best
                  sportsmanship and fair play.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListOfPrizes;
