import {
  FaUser,
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaCogs,
  FaBookReader,
  FaBug,
  FaBullseye
} from "react-icons/fa";
// import { Link } from "react-router-dom";
// import Intro from "./Intro";

function Hlw() {
  return (
    <section className="cards-container">

      <div className="card">
        <FaUser className="card-icon" />
        <h3>Introduction</h3>
        <p>
          Hi, I am Aryan Tyagi, a passionate Frontend Developer focused on
          creating clean, modern, and responsive user interfaces.
        </p>
      </div>

      <div className="card">
        <FaGraduationCap className="card-icon" />
        <h3>Education</h3>
        <p>
          Graduation from MIT Meerut and currently pursuing post-graduation
          from SRM University, Chennai.
        </p>
      </div>

      <div className="card">
        <FaCode className="card-icon" />
        <h3>Technical Skills</h3>
        <p>
          HTML, CSS, JavaScript, and React to build interactive web apps.
        </p>
      </div>

      <div className="card">
        <FaLaptopCode className="card-icon" />
        <h3>What I Do</h3>
        <p>
          Responsive web design and converting UI into functional pages.
        </p>
      </div>

      <div className="card">
        <FaCogs className="card-icon" />
        <h3>Development Approach</h3>
        <p>
          Clean, reusable, and optimized code with performance focus.
        </p>
      </div>

      <div className="card">
        <FaBookReader className="card-icon" />
        <h3>Learning & Growth</h3>
        <p>
          Always learning new technologies and improving skills.
        </p>
      </div>

      <div className="card">
        <FaBug className="card-icon" />
        <h3>Problem Solving</h3>
        <p>
          Enjoy solving UI challenges, bugs, and UX improvements.
        </p>
      </div>

      <div className="card">
        <FaBullseye className="card-icon" />
        <h3>Career Objective</h3>
        <p>
          Build real-world projects that create meaningful impact.
        </p>
      </div>

    </section>
  );
}

export default Hlw;
