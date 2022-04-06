import React from "react";
import FormLogin from "../components/admin/Form_admin";
import Footer from "../components/footer/Footer";
import MainTitleHome from "../components/header/Main_title_home";

function Admin() {
  return (
    <div className="admin">
      <MainTitleHome />
      <FormLogin />
      <Footer />
    </div>
  );
}

export default Admin;
