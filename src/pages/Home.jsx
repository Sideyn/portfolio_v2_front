import React from "react";
import TitleHome from "../components/header/Title_home";
import CvBttn from "../components/home/Cv_bttn";

function Home() {
  return (
    <div className="home">
      <CvBttn />
      <TitleHome />
    </div>
  );
}

export default Home;
