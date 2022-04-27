import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/project"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Projets</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navigation;
