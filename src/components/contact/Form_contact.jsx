import React, { useState } from "react";
import axios from "axios";

function Form_contact() {
  const [mail, setMail] = useState({
    name: "",
    object: "",
    message: "",
  });

  const sendMail = () => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/mails`, mail)
      .then(() => {
        alert("ok");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="Form_cont">
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
