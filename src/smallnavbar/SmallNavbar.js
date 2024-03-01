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
      </a>
      <a href="#about" className="eachDiv">
        <BiSolidUserDetail />
      </a>
      <a href="#service" className="eachDiv">
        <MdDesignServices />
      </a>
      <a href="#skills" className="eachDiv">
        <HiDesktopComputer />
      </a>
      <a href="#portfolio" className="eachDiv">
        <GoProject />
      </a>
      <a href="#contact" className="eachDiv">
        <MdContacts />
      </a>
    </div>
  );
};

export default SmallNavbar;
