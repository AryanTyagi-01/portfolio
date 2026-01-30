import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";

function Skills() {
  return (
    <section className="skills-section">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">

        {/* LEFT – SKILL CARDS */}
        <div className="skills-cards">

          <div className="skill-card">
            <FaHtml5 className="card-icon"/>
            <span>HTML</span>
          </div>

          <div className="skill-card">
            <FaCss3Alt className="card-icon"/>
            <span>CSS</span>
          </div>

          <div className="skill-card">
            <FaJs className="card-icon"/>
            <span>JavaScript</span>
          </div>

          <div className="skill-card">
            <FaReact className="card-icon"/>
            <span>React</span>
          </div>

          {/* GitHub clickable card */}
          <a
            href="https://github.com/AryanTyagi-01"
            target="_blank"
            rel="noreferrer"
            className="skill-card skill-link"
          >
            <FaGithub className="card-icon"/>
            <span>Git / GitHub</span>
          </a>

        </div>

        {/* RIGHT – PROGRESS BARS */}
        <div className="skills-bars">

          <div className="bar">
            <p>HTML</p>
            <div className="progress">
              <span style={{ width: "90%" }}></span>
            </div>
          </div>

          <div className="bar">
            <p>CSS</p>
            <div className="progress">
              <span style={{ width: "85%" }}></span>
            </div>
          </div>

          <div className="bar">
            <p>JavaScript</p>
            <div className="progress">
              <span style={{ width: "75%" }}></span>
            </div>
          </div>

          <div className="bar">
            <p>React</p>
            <div className="progress">
              <span style={{ width: "70%" }}></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;
