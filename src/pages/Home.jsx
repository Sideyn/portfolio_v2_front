import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import CvBttn from "../components/home/Cv_bttn";
import DescriptionHome from "../components/home/Description_home";
import TitleDescription from "../components/home/Title_description";

function Home() {
  return (
    <div className="home">
      <Header />
      <TitleDescription />
      <DescriptionHome />
      <CvBttn />
      <Footer />
    </div>
  );
}

export default Home;
