import React from "react";

function Form_contact() {
  return (
    <div className="Form_cont">
      <section className="contact_container">
        <h2>CONTACT</h2>
        <form className="form_contact">
          <section className="contact_section">
            <div className="fields_contact">
              <label htmlFor="title">
                <input
                  type="text"
                  placeholder="Nom"
                  // value=
                  // onChange=
                />
              </label>

              <label htmlFor="link">
                <input
                  type="text"
                  placeholder="Objet"
                  // value=
                  // onChange=
                />
              </label>

              <label htmlFor="description">
                <textarea
                  name="description"
                  placeholder="Message"
                  // value=
                  // onChange=
                ></textarea>
              </label>
            </div>

            <button
              type="button"
              className="button_contact"
              // onClick=
            >
              ENVOYER
            </button>
          </section>
        </form>
      </section>
    </div>
  );
}

export default Form_contact;
