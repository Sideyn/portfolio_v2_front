import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function header() {
  return (
    <div className="header">
      <section className="title_admin_button">
        <h1 className="glitch" id="h1_header">
          <span aria-hidden="true">PORTFOLIO</span>
          PORTFOLIO
          <span aria-hidden="true">PORTFOLIO</span>
        </h1>

        <div className="button_admin_container">
          <div className="hr_header_admin" />
          <NavLink to="/admin">
            <button type="button" className="button_admin">
              ADMIN
            </button>
          </NavLink>
        </div>
      </section>

      <section className="elements_header">
        <div className="hr_header" />
        <div className="circle_container_header">
          <span className="circle_header" />
        </div>
      </section>
    </div>
  );
}

export default header;
