import React from "react";
import git from "../../assets/git.png";
import link from "../../assets/linkedin.png";

function Footer() {
  return (
    <div className="footer">
      <hr className="hr_footer" />

      <section className="elements">
        <span className="circle" id="circle_footer" />

        <hr className="line_footer" />

        <a
          href="https://github.com/Sideyn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={git} alt="Git" className="logos" />
        </a>

        <span className="circle" id="circle_footer" />

        <a
          href="https://www.linkedin.com/in/sidney-croset-375b18223/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={link} alt="Linkedin" className="logos" />
        </a>

        <hr className="line_footer" />

        <span className="circle" id="circle_footer" />
      </section>
    </div>
  );
}

export default Footer;
