import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Navigation() {
  return (
    <div className="navigation">
      <motion.div
        animate={{ x: 0, scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
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
      </motion.div>
    </div>
  );
}

export default Navigation;
