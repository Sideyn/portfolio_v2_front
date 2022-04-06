import React from "react";
import { NavLink } from "react-router-dom";

function Main_title_home() {
  return (
    <div className="titleHome">
      <NavLink exact="true" to="/">
        <h1 className="glitch">PORTFOLIO</h1>
      </NavLink>

      <hr className="hr_home" />
    </div>
  );
}

export default Main_title_home;