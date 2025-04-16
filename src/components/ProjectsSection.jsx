import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ status, title, description, imageUrl, github }) => (
  <div className="cyber-project-card">
    <div
      className="cyber-project-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="cyber-project-overlay">
        <span
          className={`cyber-status-tag ${status
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {status}
        </span>
      </div>
    </div>
    <div className="cyber-project-content">
      <h3 className="cyber-project-title">{title}</h3>
      <p className="cyber-project-desc">{description}</p>
      <div className="cyber-project-links">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-project-link"
          >
            <FaGithub className="cyber-icon" />
            <span>View Code</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      status: "in-progress",
      title: "Library Management System",
      description:
        "A local library management system built with python and custom tkinter.",
      imageUrl: "../assets/projectsImages/library.png",
      github: "https://github.com/Sudharshan-3904/LibrarySystem",
    },
    {
      status: "in-progress",
      title: "Library Management System",
      description:
        "A local library management system built with python and custom tkinter.",
      imageUrl: "../assets/projectsImages/library.png",
      github: "https://github.com/Sudharshan-3904/LibrarySystem",
    },
    {
      status: "in-progress",
      title: "Library Management System",
      description:
        "A local library management system built with python and custom tkinter.",
      imageUrl: "../assets/projectsImages/library.png",
      github: "https://github.com/Sudharshan-3904/LibrarySystem",
    },
  ];

  return (
    <section id="Projects" style={sectionStyle}>
      <div className="cyber-container">
        <h2 className="cyber-section-title">
          <span className="cyber-accent">[</span>
          Projects
          <span className="cyber-accent">]</span>
        </h2>
        <div className="cyber-projects-grid">
          {projects.map((proj, index) => (
            <ProjectCard key={index} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

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

export default ProjectsSection;
