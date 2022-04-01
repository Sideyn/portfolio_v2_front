import React from "react";

function Form_login() {
  return (
    <div className="form_log">
      <section className="login_container">
        <h2>CONNEXION</h2>

        <form className="login_form" onSubmit="">
          <div className="block_login">
            <h4>IDENTIFIANT :</h4>
            <label htmlFor="mail">
              <input type="email" placeholder="MAIL" value="" onChange="" />
            </label>
          </div>

          <div className="block_login">
            <h4>MOT DE PASSE :</h4>
            <label htmlFor="password">
              <input
                type="password"
                placeholder="MOT DE PASSE"
                value=""
                onChange=""
              />
            </label>
          </div>

          <button type="submit" className="login_button">
            CONNECTEZ-VOUS
          </button>
        </form>
      </section>
    </div>
  );
}

export default Form_login;
