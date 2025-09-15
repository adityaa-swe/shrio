import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const NewsBar: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(true);
  return (
    <>
      {isOpen && (
        <div className="flex flex-row justify-center items-center bg-black py-1.5 text-white">
          <p>v2.2 is have been relased!</p>
          <button
            className="fixed top-0 right-0 cursor-pointer p-1"
            onClick={() => setOpen((prev) => !prev)}
          >
            <CloseIcon fontSize="small"/>
          </button>
        </div>
      )}
    </>
  );
};

export default NewsBar;
