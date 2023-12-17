import React from "react";
import './App.css';
import Navabar from "./header/Navabar";
import Main from "./main/Main";
import About from "./about/About";
import Service from "./service/Service";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";
import Contacts from "./contacts/Contacts";
import Cursor from "./cursor/Cursor";



function App() {

  return (
    <>
      <Cursor />
      <Navabar />
      <Main />
      <About />
      <Service />
      <Skills />
      <Portfolio />
      <Contacts />
    </>
  );
}

export default App;
