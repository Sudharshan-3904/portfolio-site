import { useState, useEffect } from "react";

function Header() {
  return (
    <header style={sectionStyle}>
      <div className="cyber-container">
        <div className="cyber-profile">
          <div className="cyber-profile-photo">
            <img src="./src/assets/otherImages/profile_photo.jpg" alt="Profile" />
          </div>
          <div className="cyber-profile-content">
            <h1 className="cyber-text" style={cyber_text_main_header}>
              Hi, I'm Sudharshan M Prabhu
            </h1>
            <p className="cyber-subtitle">
              <span className="cyber-highlight">Aspiring Business Analyst</span>{" "}
              with a passion for data, technology, and storytelling through
              insights.
            </p>
          </div>
        </div>
        <div className="cyber-buttons">
          <button className="cyber-button">
            <span className="cyber-button-text">View My Work</span>
            <span className="cyber-button-glow"></span>
          </button>
          <button className="cyber-button">
            <span className="cyber-button-text">Download Resume</span>
            <span className="cyber-button-glow"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

const sectionStyle = {
  backdropFilter: "blur(10px)",
  background: "transparent",
  padding: "40px",
  borderRadius: "12px",
  margin: "20px 0",
  boxShadow: "var(--cyber-glow)",
  position: "relative",
  overflow: "hidden",
};

const cyber_text_main_header = {
  "font-size": "3rem",
  margin: "1.5em 0",
  color: "var(--cyber-text)",
  "line-height": "1.6",
};

export default Header;
