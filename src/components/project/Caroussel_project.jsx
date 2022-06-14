import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import axios from "axios";

function Caroussel_project() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/projects`)
      .then((resp) => {
        console.log(resp.data);
        return setProjects(resp.data);
      });
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <>
      <div className="caroussel_project">
        <div className="slide-container_project">
          <Slide>
            {projects.map((project, index) => (
              <div className="each-slide" key={project.id}>
                <section className="elements_project">
                  <h5>{project.title}</h5>

                  <span className="circle" id="circle_project" />

                  <hr className="line_project" />
                </section>

                <div
                  className="slide_container_project_img"
                  style={{
                    backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}/${project.assets[0].source})`,
                  }}
                ></div>

                <div className="title_description_project">
                  <h5>URL</h5>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>{project.link}</p>
                  </a>
                </div>

                <div className="infos_description_project">
                  <h5>DESCRIPTION</h5>
                  <p className="description_project">
                    {project.description}
                  </p>{" "}
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </>
  );
}

export default Caroussel_project;
