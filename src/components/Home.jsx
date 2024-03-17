import React from "react";
import SideNav from "./SideNav";
import MainContent from "./MainContent";
import MenuTracker from "./MenuTracker";

const Home = () => {
  return (
    <section className="container">
      <MenuTracker />
      <div className="home">
        <SideNav />
        <MainContent />
      </div>
    </section>
  );
};

export default Home;
