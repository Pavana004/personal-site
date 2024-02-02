import React, { useState } from "react";
import logo from "../assests/logo.png";
import { Link } from "react-scroll";
import "../header/navbar.css";

const Navabar = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 15) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "navbar  navbar-bg" : "navbar "}>
      <div className="imgdiv">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="list">
        <ul>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </ul>
        <ul>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            to="about"
          >
            About
          </Link>
        </ul>
        <ul>
          <Link
            to="service"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Service
          </Link>
        </ul>
        <ul>
          <Link
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </ul>
        <ul>
          <Link
            to="portfolio"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Portfolio
          </Link>
        </ul>

        <ul>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navabar;
