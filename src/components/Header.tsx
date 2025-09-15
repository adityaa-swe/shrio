import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ModeNightIcon from "@mui/icons-material/DarkMode";

const Header: React.FC = () => {
  return (
    <div className="flex flex-row justify-between px-2 items-center py-2 border border-b-stone-200 border-l-transparent border-r-transparent border-t-transparent">
      <div id="left-side-logo" className="font-semibold text-xl">
        Shrio
      </div>
      <div id="links" className="flex gap-4 max-[770px]:hidden">
        <Link to="">Get Started</Link>
        <Link to="">Feedback</Link>
        <Link to="">How it works</Link>
      </div>
      <div id="btns" className="flex gap-2">
        <button className="border border-stone-300 p-1 rounded-lg hover:bg-stone-200 cursor-pointer flex">
          <ModeNightIcon />
        </button>
        <button className="border border-stone-300 p-1 rounded-lg hover:bg-stone-200 cursor-pointer flex lg:hidden">
          <MenuIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
