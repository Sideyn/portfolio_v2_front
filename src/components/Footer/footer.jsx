import React from "react";
import link from "../../assets/linkedin.png";
import git from "../../assets/git.png";
import "./footer.css";

function footer() {
  return (
    <div className="footer">
      <hr className="hr_footer_outline" />

      <div className="footer_container">
        <section className="elements_footer">
          <div className="circle_container_footer">
            <div className="circle_footer" />
          </div>
          <div className="hr_footer" />
        </section>

        <section className="elements_footer_2">
          <a
            href="https://www.linkedin.com/in/sidney-croset-375b18223"
            target="_blank"
            rel="noopener noreferrer"
            className="anim_social_icons"
          >
            <img src={link} alt="linkedin" className="social_icons" />
          </a>

          {/* <div className="circle_container_footer">
            <div className="circle_footer" />
          </div> */}

          <div className="hr_footer_vertical" />

          <a
            href="https://github.com/Sideyn"
            target="_blank"
            rel="noopener noreferrer"
            className="anim_social_icons"
          >
            <img src={git} alt="linkedin" className="social_icons" />
          </a>
        </section>

        <section className="elements_footer_3">
          <div className="hr_footer" />
          <div className="circle_container_footer">
            <div className="circle_footer" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default footer;
