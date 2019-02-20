import React from "react";
import { Link } from "react-router-dom";

const logo = require("./../../assets/logo-dark.png");

export default function NavBar() {
  let menuRef = React.createRef();
  window.onscroll = () => {
    if (menuRef.current) {
      if (window.scrollY > 0) {
        menuRef.current.style.background = "#fff";
        menuRef.current.style.boxShadow = "0px 2px 5px 0px rgba(0, 0, 0, 0.75)";
      } else if (window.scrollY === 0) {
        menuRef.current.style.background = "transparent";
        menuRef.current.style.boxShadow = "none";
      }
    }
  };
  return (
    <div id="navbar" ref={menuRef}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="menu">
        <li>
          <a href="#landing">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#gallery">GALLERY</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
        <li>
          <Link to="/demo">DEMO</Link>
        </li>
      </ul>
    </div>
  );
}
