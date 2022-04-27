import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CarousselProject from "../components/project/Caroussel_project";
import Navigation from "../components/navigation/Navigation";

function Project() {
  return (
    <div>
      <Header />
      <Navigation />
      <CarousselProject />
      <Footer />
    </div>
  );
}

export default Project;
