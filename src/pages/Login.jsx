import React from "react";
import FormLogin from "../components/login/Form_login";
import MainTitleHome from "../components/header/Main_title_home";
import Footer from "../components/footer/Footer";

function Login() {
  return (
    <div className="login">
      <MainTitleHome />
      <FormLogin />
      <Footer />
    </div>
  );
}

export default Login;
