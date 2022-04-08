import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import TitleProject from "../components/project/Title_project";
import CarousselProject from "../components/project/Caroussel_project";

function Project() {
  return (
    <div>
      <Header />
      <TitleProject />
      <CarousselProject />
      <Footer />
    </div>
  );
}

export default Project;
