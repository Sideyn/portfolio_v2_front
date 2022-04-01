import React from "react";
import Header from "../components/header/Header";
import FormLogin from "../components/admin/Form_admin";

function Admin() {
  return (
    <div className="admin">
      <Header />
      <FormLogin />
    </div>
  );
}

export default Admin;
