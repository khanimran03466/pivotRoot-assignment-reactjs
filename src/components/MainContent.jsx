import React from "react";
import MainAd from "./MainAd";
import SortLabel from "./SortLabel";
import Watches from "./Watches";

const MainContent = () => {
  return (
    <div className="main-content">
      <MainAd />
      <SortLabel />
      <Watches />
    </div>
  );
};

export default MainContent;
