import React, { useState, useContext } from "react";
import GlobalContext from "../../context/context";
import Status from "../status/Status";
import axios from "axios";

function Form_contact() {
  const { status, setStatus } = useContext(GlobalContext);

  const [mail, setMail] = useState({
    name: "",
    object: "",
    message: "",
  });

  const sendMail = () => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/mails`, mail)
      .then(() => {
        setStatus("Email envoyé");
      })
      .catch((err) => {
        setStatus("Erreur lors de la création du projet");
      });
  };

  return (
    <div className="Form_cont">
      {status ? <Status /> : null}
      <section className="contact_container">
        <h2>CONTACT</h2>
        <form className="form_contact">
          <section className="contact_section">
            <div className="fields_contact">
              <label htmlFor="name">
                <input
                  type="text"
                  placeholder="Nom"
                  value={mail.name}
                  onChange={(e) => {
                    setMail({ ...mail, name: e.target.value });
                  }}
                />
              </label>

              <label htmlFor="object">
                <input
                  type="text"
                  placeholder="Objet"
                  value={mail.object}
                  onChange={(e) => {
                    setMail({ ...mail, object: e.target.value });
                  }}
                />
              </label>

              <label htmlFor="message">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={mail.message}
                  onChange={(e) => {
                    setMail({ ...mail, message: e.target.value });
                  }}
                ></textarea>
              </label>
            </div>

            <button type="button" className="button_contact" onClick={sendMail}>
              ENVOYER
            </button>
          </section>
        </form>
      </section>
    </div>
  );
}

export default Form_contact;
