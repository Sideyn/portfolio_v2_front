import React from "react";
import AdminBttn from "./Admin_bttn";
import TitleHome from "./Title_home";

function Header() {
  return (
    <div className="header">
      <TitleHome />
      <AdminBttn />
    </div>
  );
}

export default Header;
