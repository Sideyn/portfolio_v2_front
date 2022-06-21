import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalContext from "../../context/context";
import { motion } from "framer-motion";

function Admin_bttn() {
  const { adminId } = useContext(GlobalContext);
  return (
    <div className="adminBttn">
      <motion.div
        animate={{ y: [-1000, 0] }}
        transition={{
          type: "spring",
          stiffness: 50,
          duration: 1.2,
        }}
      >
        {adminId ? null : (
          <NavLink exact="true" to="/connexion" className="admin_bttn">
            LOGIN
          </NavLink>
        )}

        {adminId ? (
          <NavLink exact="true" to="/admin" className="admin_bttn">
            ADMIN
          </NavLink>
        ) : null}
      </motion.div>
    </div>
  );
}

export default Admin_bttn;
