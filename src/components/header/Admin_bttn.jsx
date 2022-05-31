import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalContext from "../../context/context";

function Admin_bttn() {
  const { adminId } = useContext(GlobalContext);
  return (
    <div className="adminBttn">
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
    </div>
  );
}

export default Admin_bttn;
