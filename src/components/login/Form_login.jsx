import React from "react";
import { NavLink } from "react-router-dom";

function Form_login() {
  return (
    <div className="form_log">
      <section className="login_container">
        <h2>CONNEXION</h2>

        <form className="login_form" onSubmit="">
          <div className="block_login">
            <h5>IDENTIFIANT :</h5>
            <label htmlFor="mail">
              <input type="email" placeholder="MAIL" value="" onChange="" />
            </label>
          </div>

          <div className="block_login">
            <h5>MOT DE PASSE :</h5>
            <label htmlFor="password">
              <input
                type="password"
                placeholder="MOT DE PASSE"
                value=""
                onChange=""
              />
            </label>
          </div>

          <div className="test">
            {" "}
            <NavLink exact="true" to="/admin">
              <button type="submit" className="login_button">
                CONNECTEZ-VOUS
              </button>
            </NavLink>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Form_login;
