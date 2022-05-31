import React from "react";
import { NavLink } from "react-router-dom";

function Main_title_home() {
  return (
    <div className="titleHome">
      <h1 className="glitch">
        <NavLink exact="true" to="/">
          PORTFOLIO
        </NavLink>
      </h1>

      <hr className="hr_home" />
    </div>
  );
}

export default Main_title_home;
