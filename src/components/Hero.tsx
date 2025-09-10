import React from "react";
import LinkIcon from "@mui/icons-material/Link";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const Hero: React.FC = () => {
  return (
    <div className="py-4 mt-20">
      <div
        id="main-head"
        className="flex flex-col gap-2 justify-center items-center py-4 "
      >
        <h1 className="font-semibold text-6xl max-[770px]:text-5xl  max-[440px]:text-4xl text-center">
          Fast, Smart and Secure
        </h1>
        <h2 className="font-medium text-3xl text-stone-500 max-[770px]:text-2xl  max-[440px]:text-xl">
          Shrink URLs in seconds.
        </h2>
      </div>
      <div
        id="input-redirect"
        className="flex flex-row justify-center items-center gap-2 max-[440px]:flex-col max-[440px]:w-full"
      >
        <div
          id="wrapper"
          className="border border-stone-300 px-4 rounded-lg flex flex-row items-center gap-1 max-[440px]:w-full"
        >
          <span>
            <LinkIcon />
          </span>
          <input
            type="text"
            placeholder="Paste Here..."
            className="py-2 rounded-lg px-2 outline-none font-medium max-[440px]:w-full"
          />
        </div>
        <button className="bg-black text-white px-4 rounded-lg py-2 cursor-pointer max-[440px]:w-full text-nowrap hover:bg-stone-700 flex flex-row items-center justify-center gap-2">
          Generate URL
        <AutoAwesomeIcon />
        </button>
      </div>
    </div>
  );
};

export default Hero;
