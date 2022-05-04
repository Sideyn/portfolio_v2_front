import React from "react";
import FormLogin from "../components/admin/Form_admin";
import Footer from "../components/footer/Footer";
import MainTitleHome from "../components/header/Main_title_home";
import Navigation from "../components/navigation/Navigation";

function Admin() {
  return (
    <div className="admin">
      <MainTitleHome />
      <Navigation />
      <FormLogin />
      <Footer />
    </div>
  );
}

export default Admin;
