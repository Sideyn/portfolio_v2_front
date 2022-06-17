import React from "react";

function Cv_bttn() {
  return (
    <>
      <a
        href="https://sideyn.github.io/cv/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="cv_bttn">
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
          <span className="line-4"></span>
          <span className="line-5"></span>
          <span className="line-6"></span>

          <button className="cv_bttn_box" type="button">
            CV
          </button>
        </div>
      </a>
    </>
  );
}

export default Cv_bttn;
