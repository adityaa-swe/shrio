import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
      <div
        id="main-container"
        className="flex flex-row justify-between items-center py-4 px-2 border border-b-stone-200 border-t-transparent border-r-transparent border-l-transparent"
      >
        <div id="logo" className="text-xl font-semibold">
          Shrio
        </div>
        <div id="desktop-links" className="flex gap-8 max-md:hidden">
          <Link to="#" className="hover:opacity-70">
            Features
          </Link>
          <Link to="#" className="hover:opacity-70">
            About Us
          </Link>
          <Link to="#" className="hover:opacity-70">
            Feedback
          </Link>
          <Link to="#" className="hover:opacity-70">
            How to Use ?
          </Link>
        </div>
        <div id="btns" className="flex gap-4">
          <button
            className="border border-stone-200 p-1.5 rounded-lg hover:bg-stone-200 cursor-pointer"
            id="dark-mode-btn"
          >
            <DarkModeIcon />
          </button>
          <button
            className="md:hidden border border-stone-200 p-1.5 rounded-lg hover:bg-stone-200 cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          id="sidebar"
          className={`fixed top-0 left-0 h-full w-full backdrop:blur-2xl bg-white transform transition-transform duration-300 p-2 md:hidden mt-20 ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div id="links" className="flex flex-col items-start justify-center">
            <Link
              to="#"
              className="px-4 py-2 w-full hover:bg-stone-200 rounded-lg flex flex-row justify-between"
            >
              Features
              <span>
                <ArrowOutwardIcon />
              </span>
            </Link>
            <Link
              to="#"
              className="px-4 py-2 w-full hover:bg-stone-200 rounded-lg flex flex-row justify-between"
            >
              About Us
              <span>
                <ArrowOutwardIcon />
              </span>
            </Link>
            <Link
              to="#"
              className="px-4 py-2 w-full hover:bg-stone-200 rounded-lg flex flex-row justify-between"
            >
              Feedback
              <span>
                <ArrowOutwardIcon />
              </span>
            </Link>
            <Link
              to="#"
              className="px-4 py-2 w-full hover:bg-stone-200 rounded-lg flex flex-row justify-between"
            >
              How to Use ?
              <span>
                <ArrowOutwardIcon />
              </span>
            </Link>
            <Link
              to="#"
              className="px-4 py-2 w-full hover:bg-stone-200 rounded-lg flex flex-row justify-between"
            >
              Profile
              <span>
                <ArrowOutwardIcon />
              </span>
            </Link>
            <Link
              to="#"
              className="px-4 py-2 w-full hover:bg-stone-200 rounded-lg flex flex-row justify-between"
            >
              Login/SignUp
              <span>
                <ArrowOutwardIcon />
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
