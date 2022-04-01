import React from "react";
import FormLogin from "../components/login/Form_login";
import TitleHome from "../components/header/Title_home";
import Footer from "../components/footer/Footer";

function Login() {
  return (
    <div className="login">
      <TitleHome />
      <FormLogin />
      <Footer />
    </div>
  );
}

export default Login;
