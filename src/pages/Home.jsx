import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import CarousselHome from "../components/home/Caroussel_home";
import CvBttn from "../components/home/Cv_bttn";
import DescriptionHome from "../components/home/Description_home";
import DescriptionProject from "../components/home/Description_project";
import Me from "../components/home/Me";
import TitleDescription from "../components/home/Title_description";
import TitleHome from "../components/home/Title_home";
import TitleProject from "../components/home/Title_project";
import Skills from "../components/home/Skills";

function Home() {
  return (
    <div className="home">
      <Header />
      <TitleHome />
      <TitleDescription />
      <DescriptionHome />
      <CvBttn />
      <Me />
      <TitleProject />
      <DescriptionProject />
      <CarousselHome />
      <Skills />
      <Footer />
    </div>
  );
}

export default Home;
