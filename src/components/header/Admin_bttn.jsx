import React from "react";
import { NavLink } from "react-router-dom";

function Admin_bttn() {
  return (
    <div className="adminBttn">
      <NavLink exact="true" to="/admin" className="admin_bttn">
        ADMIN
      </NavLink>
    </div>
  );
}

export default Admin_bttn;
