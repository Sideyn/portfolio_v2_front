import React from "react";

function Form_project() {
  return (
    <div className="form_proj">
      <section className="fields">
        <label htmlFor="title">
          <input type="text" placeholder="TITRE" value="" onChange="" />
        </label>

        <label htmlFor="link">
          <input type="text" placeholder="LIEN" value="" onChange="" />
        </label>

        <label htmlFor="description">
          <textarea
            name="description"
            placeholder="DESCRIPTION"
            value=""
            onChange=""
          ></textarea>
        </label>
      </section>
    </div>
  );
}

export default Form_project;
