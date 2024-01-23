import React from "react";
import SideNav from "./SideNav"
import MainContent from "./MainContent"
import LeftContent from "./LeftContent"

const MainBody = () => {
  return (
    <div className="body_container">
          <SideNav />
          <MainContent />
          <LeftContent />
    </div>
  );
};

export default MainBody;
