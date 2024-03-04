import React from "react";
import { FaHome } from "react-icons/fa";
import { BiSolidUserDetail } from "react-icons/bi";
import { MdDesignServices, MdContacts } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { HiDesktopComputer } from "react-icons/hi";

import "../smallnavbar/smallNavbar.css";

const SmallNavbar = () => {
  return (
    <div className="SmallNavbar">
      <a href="#home" className="eachDiv">
        <FaHome />
        <p>Home</p>
      </a>
      <a href="#about" className="eachDiv">
        <BiSolidUserDetail />
        <p>About</p>
      </a>
      <a href="#service" className="eachDiv">
        <MdDesignServices />
        <p>Service</p>
      </a>
      <a href="#skills" className="eachDiv">
        <HiDesktopComputer />
        <p>Skills</p>
      </a>
      <a href="#portfolio" className="eachDiv">
        <GoProject />
        <p>Portfolio</p>
      </a>
      <a href="#contact" className="eachDiv">
        <MdContacts />
        <p>Contact</p>
      </a>
    </div>
  );
};

export default SmallNavbar;
