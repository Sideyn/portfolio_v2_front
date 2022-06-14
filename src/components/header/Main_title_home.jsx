import React from "react";
import { NavLink } from "react-router-dom";

function Main_title_home() {
  return (
    <div className="titleHome">
      <div className="glitch">
        <NavLink exact="true" to="/">
          <h1>PORTFOLIO</h1>
        </NavLink>
      </div>

      <hr className="hr_home" />
    </div>
  );
}

export default Main_title_home;
