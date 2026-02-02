import { FaGraduationCap, FaUniversity } from "react-icons/fa";

function Education() {
  return (
    <section className="education-section">
      <h2 className="section-title">Education</h2>

      <div className="education-container">

        <div className="card">
          <FaGraduationCap className="card-icon" />
          <h3>Post Graduation</h3>
          <p><strong><a  className="edu-link"
                href="https://srmuniversity.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
              SRM University, Chennai
              </a></strong></p>
          <p>Currently pursuing my post-graduation with a focus on modern technologies and software development.</p>
        </div>

        <div className="card">
          <FaUniversity className="card-icon" />
          <h3>Graduation</h3>
          <p><strong><a  className="edu-link"
                href="https://www.admissionwala.in/service/35/309/mit-meerut"
                target="_blank"
                rel="noopener noreferrer"
              >
                MIT Meerut
              </a></strong></p>
          <p>Completed graduation and built a strong foundation in programming and frontend development.</p>
        </div>

      </div>
    </section>
  );
}

export default Education;
