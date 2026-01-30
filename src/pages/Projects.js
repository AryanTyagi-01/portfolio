import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            A responsive personal portfolio built using React, showcasing
            skills, projects, and contact information.
          </p>

          <div className="project-links">
            <a href="#" target="_blank" rel="noreferrer">
              <FaGithub /> Code
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FaExternalLinkAlt /> Live
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>Dashboard UI</h3>
          <p>
            A modern dashboard interface built with React and CSS, focusing on
            clean layout and responsiveness.
          </p>

          <div className="project-links">
            <a href="https://github.com/AryanTyagi-01/Dashboard.git" target="_blank" rel="noreferrer">
              <FaGithub /> Code
            </a>
            <a href="#">
              <FaExternalLinkAlt /> Live
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>Myntra Clone</h3>
          <p>
            A frontend clone of Myntra using HTML, CSS, JavaScript and jQuery
            with product listing UI.
          </p>

          <div className="project-links">
            <a href="https://github.com/AryanTyagi-01/Myntra-clone.git"
            target="_blank" rel="noreferrer">
              <FaGithub /> Code
            </a>
            <a href="#">
              <FaExternalLinkAlt /> Live
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
