import React, { useContext } from "react";
import GlobalContext from "../../context/context";

function Form_project() {
  const { project, setProject } = useContext(GlobalContext);

  return (
    <div className="form_proj">
      <section className="fields">
        <label htmlFor="title">
          <input
            type="text"
            placeholder="TITRE"
            value={project.title}
            onChange={(e) => setProject({ ...project, title: e.target.value })}
          />
        </label>

        <label htmlFor="link">
          <input
            type="text"
            placeholder="LIEN"
            value={project.link}
            onChange={(e) => setProject({ ...project, link: e.target.value })}
          />
        </label>

        <label htmlFor="description">
          <textarea
            name="description"
            placeholder="DESCRIPTION"
            value={project.description}
            onChange={(e) =>
              setProject({ ...project, description: e.target.value })
            }
          ></textarea>
        </label>
      </section>
    </div>
  );
}

export default Form_project;
