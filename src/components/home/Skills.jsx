import React from "react";

function Skills() {
  return (
    <>
      <section className="tab_skills">
        <table className="t1">
          <thead>
            <tr>
              <th colSpan="2">ENVIRONNEMENT DE TRAVAIL</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>FRONT-END</th>
              <th>BACK-END</th>
            </tr>

            <tr>
              <td>
                <div className="content_td">
                  HTML{" "}
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="icones"
                    className="icons_dev"
                  />
                </div>
              </td>
              <td>
                <div className="content_td">
                  NODE
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="icones"
                    className="icons_dev"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="content_td">
                  CSS{" "}
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="icones"
                    className="icons_dev"
                  />
                </div>
              </td>
              <td>
                <div className="content_td">
                  MYSQL
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                    alt="icones"
                    className="icons_dev"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="content_td">
                  SASS{" "}
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                    alt="icones"
                    className="icons_dev"
                  />
                </div>
              </td>
              <td>
                <div className="content_td">
                  GIT <br /> GITHUB
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    alt="icones"
                    className="icons_dev"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="content_td">
                  JS{" "}
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                    alt="icones"
                    className="icons_dev"
                  />
                </div>
              </td>
              <td rowSpan="2" id="empty_td" className=""></td>
            </tr>

            <tr>
              <td>
                <div className="content_td">
                  REACT{" "}
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="icones"
                    className="icons_dev"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td colSpan="2">
                <div className="content_td">
                  WORDPRESS{" "}
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
                    alt="icones"
                    className="icons_dev"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Skills;
