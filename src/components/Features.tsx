import React from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LockIcon from "@mui/icons-material/Lock";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

const Features: React.FC = () => {
  return (
    <div className="mt-20 py-4 px-2">
      <div id="container" className="flex flex-col gap-4">
        <div id="head" className="font-semibold text-xl">
          Our Features
        </div>
        <div
          id="cards-container"
          className="
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-2 
    lg:grid-cols-3 
    xl:grid-cols-4 
    gap-6 
    w-full 
    max-w-[1440px] 
    mx-auto 
    mt-2
  "
        >
          <div className="border border-stone-300 p-4 flex flex-col gap-2 rounded-lg w-full">
            <span className="p-2 flex">
              <RocketLaunchIcon />
            </span>
            <b>Lightning Fast</b>
            <p className="text-sm text-stone-600">
              Shorten links in milliseconds. No delays, no slow redirects.
            </p>
          </div>

          <div className="border border-stone-300 p-4 flex flex-col gap-2 rounded-lg w-full">
            <span className="p-2 flex">
              <AutoAwesomeIcon />
            </span>
            <b>Custom URLs</b>
            <p className="text-sm text-stone-600">
              Use your own brand or alias. Make every link memorable.
            </p>
          </div>

          <div className="border border-stone-300 p-4 flex flex-col gap-2 rounded-lg w-full">
            <span className="p-2 flex">
              <LockIcon />
            </span>
            <b>Secure & Reliable</b>
            <p className="text-sm text-stone-600">
              Built-in link safety, SSL, and spam checks keep users safe.
            </p>
          </div>

          <div className="border border-stone-300 p-4 flex flex-col gap-2 rounded-lg w-full">
            <span className="p-2 flex">
              <LeaderboardIcon />
            </span>
            <b>Real-Time Stats</b>
            <p className="text-sm text-stone-600">
              See clicks, referrers, and locations as they happen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
