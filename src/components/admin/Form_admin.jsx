import React from "react";
import FormProject from "./Form_project";

function Form_admin() {
  return (
    <div className="form_adm">
      <section className="admin_container">
        <h2>ADMINISTRATEUR</h2>

        <form className="form_admin" onSubmit="">
          <section className="selectors">
            <label htmlFor="select_action">
              <div className="tst">
                <select name="action">
                  <option value="" onClick="">
                    Ajouter
                  </option>

                  <option value="" onClick="">
                    Modifier
                  </option>

                  <option value="" onClick="">
                    Supprimer
                  </option>
                </select>
              </div>
            </label>

            <label htmlFor="select_update">
              <select name="update">
                <option>--Projets--</option>

                <option value="" onClick=""></option>
              </select>
            </label>
          </section>

          <FormProject />

          <section className="add_assets">
            <label htmlFor="asset">
              <input type="file" name="assets_file" onChange="" />
            </label>

            <label htmlFor="select_asset">
              <select name="asset">
                <option>Choisir une image</option>
                <option value="" onClick=""></option>
              </select>
            </label>
          </section>

          <section className="buttons">
            <button className="button_admin" type="button" onClick="">
              TÉLÉCHARGER
            </button>

            <button type="submit" className="button_admin" onClick="">
              VALIDER
            </button>
          </section>
        </form>
      </section>
    </div>
  );
}

export default Form_admin;
