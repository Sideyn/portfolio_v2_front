import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/accueil"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/projet"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Projets</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navigation;
