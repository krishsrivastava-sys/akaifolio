import { useState } from "react";
import "../style/frontsec.css";
import "../style/fsleft.css";
import logoImg from "../assets/logo.png";
import data from "../data.json";
const ongoingProject = data.ongoingProject;
function FrontSec() {
  const [animateLogo, setAnimateLogo] = useState(false);
  const [showChangelog, setShowChangelog ] = useState(false);
  return (
    <section className="frontsec">
      <div className="fs-left">
        <div className="fs-left-content">
          <h1>Greetings! I'm Krish Srivastava</h1>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
          <div className="btn-group">
            <a className="fs-btn" href="https://discord.gg/gdKKGYMZXJ">
              <button><i className="fa-brands fa-discord"></i> Discord</button>
            </a>
            <a className="fs-btn" href="https://github.com/krishsrivastava-sys">
              <button><i className="fa-brands fa-github"></i> GitHub</button>
            </a>
          </div>
          <div className="fs-text-box">
            <p className="dim">See what is going on:</p>
            <p className="bright"><i className="fa-solid fa-code"></i> Ongoing Project: {ongoingProject.name}<br />{ongoingProject.comment}</p>
          </div>
        </div>
        <img src={logoImg}className={`logo ${animateLogo ? "logo-animate" : ""}`} alt="Website logo" onClick={() => { setShowChangelog(previous => !previous);setAnimateLogo(true); setTimeout(() => setAnimateLogo(false), 600);}}/>
        {showChangelog &&(
          <div className="changelog">
            <h3>Changelog v1.2.0</h3>
            <ul>
              <li>Added Discord button for community engagement.</li>
              <li>Updated ongoing project details.</li>
            </ul>
          </div>
        )}
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