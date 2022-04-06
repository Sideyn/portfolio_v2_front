import React from "react";
import AdminBttn from "./Admin_bttn";
import MainTitleHome from "./Main_title_home";

function Header() {
  return (
    <div className="header">
      <MainTitleHome />
      <AdminBttn />
    </div>
  );
}

export default Header;
