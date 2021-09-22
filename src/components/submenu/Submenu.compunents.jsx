import React from "react";
import Header from "../header/Header.components";
import "./submenu.styles.scss";
const Submenu = ({ showMenu }) => {
  return (
    <div hero="sub-menu">
      <Header>
        <div>
          <hr className="icon-cross" />
        </div>
        <span className="icon-text">Let's talk</span>
        <div className="ellipse">
          <i class="fas fa-arrow-right menu-icon"></i>
        </div>
      </Header>
    </div>
  );
};

export default Submenu;
