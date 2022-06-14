import React from "react";
import FormContact from "../components/contact/Form_contact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";

function Contact() {
  return (
    <div className="contact">
      <Header />
      <Navigation />
      <FormContact />
      <Footer />
    </div>
  );
}

export default Contact;
