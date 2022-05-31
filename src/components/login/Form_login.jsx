import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GlobalContext from "../../context/context";
import Alert from "../alert/Alert";

function Form_login() {
  const { alert, setAdminId, setAlert, setAlertMsg } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    mail: "",
    password: "",
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!login.mail) {
      setAlertMsg("Entre ton email !");
      setAlert(true);
    } else if (!login.password) {
      setAlertMsg("Entre ton mot de passe !");
      setAlert(true);
    } else {
      try {
        await axios
          .post(`${process.env.REACT_APP_BACKEND_URL}/api/login`, login, {
            withCredentials: true,
          })
          .then((res) => {
            setAdminId(res.data.id);
          })
          .then(() => {
            navigate("../admin", { replace: true });
          });
      } catch (err) {
        setAlertMsg(`Erreur : ${err.response.data}`);
        setAlert(true);
      }
    }
  };

  return (
    <div className="form_log">
      {alert ? <Alert /> : null}
      <section className="login_container">
        <h2>CONNEXION</h2>

        <form className="login_form" onSubmit={handleLoginSubmit}>
          <div className="block_login">
            <h4>IDENTIFIANT :</h4>
            <label htmlFor="mail">
              <input
                type="email"
                placeholder="MAIL"
                value={login.mail}
                onChange={(e) => setLogin({ ...login, mail: e.target.value })}
              />
            </label>
          </div>

          <div className="block_login">
            <h4>MOT DE PASSE :</h4>
            <label htmlFor="password">
              <input
                type="password"
                placeholder="MOT DE PASSE"
                value={login.password}
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
              />
            </label>
          </div>

          <div className="bttn_login_box">
            <button type="submit" className="login_button">
              CONNECTE-TOI
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Form_login;
