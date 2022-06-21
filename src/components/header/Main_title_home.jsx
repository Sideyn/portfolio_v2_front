import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Main_title_home() {
  return (
    <div className="titleHome">
      <div className="glitch">
        <NavLink exact="true" to="/">
          <motion.div
            animate={{ y: [-1000, 0] }}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 1.2,
            }}
          >
            <h1>PORTFOLIO</h1>
          </motion.div>
        </NavLink>
      </div>

      <motion.div
        animate={{ x: [-2000, 0] }}
        transition={{
          type: "spring",
          stiffness: 50,
          duration: 1,
        }}
      >
        <hr className="hr_home" />
      </motion.div>
    </div>
  );
}

export default Main_title_home;
