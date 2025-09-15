import React from "react";
import Header from "../components/Header";
import NewsBar from "../components/NewsBar";

const LandingPage: React.FC = () => {
  return (
    <>
      <NewsBar />
      <div className="w-[80vw] mx-auto max-sm:w-[90vw]">
        <Header />
      </div>
    </>
  );
};

export default LandingPage;
