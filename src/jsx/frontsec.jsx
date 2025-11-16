import { useState, useEffect } from "react";
import "../style/frontsec.css";
import "../style/fsleft.css";
import logoImg from "../assets/logo.png";

function FrontSec() {
  return (
    <section className="frontsec">
      <div className="fs-left">
        <div className="fs-left-content">
          <h1>Greetings! I'm Krish Srivastava</h1>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
        </div>
        <img src={logoImg} className="logo" alt="Website logo" />
      </div>
      <div className="fs-right">
        <h2>File System</h2>
        <input type="text" placeholder="Search this webpage..." />
        <ul>
          <li><a href="#home">main.html</a></li>
          <li><a href="#about">aboutme.md</a></li>
          <li><a href="#projects">projects.json</a></li>
        </ul>
      </div>
    </section>
  );
}
export default FrontSec;