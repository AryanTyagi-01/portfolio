import { Link } from "react-router-dom";
import {
  FaUser,
  FaProjectDiagram,
  FaCode,
  FaEnvelope,
  FaGraduationCap,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">Hi, I am Aryan Tyagi</Link>
      </div>

      {/* HAMBURGER ICON */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* NAV LINKS */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>
          <FaUser className="ca"/> About Me
        </Link>

        <Link to="/skills" onClick={() => setOpen(false)}>
          <FaCode className="ca"/> Skills
        </Link>

        <Link to="/education" onClick={() => setOpen(false)}>
          <FaGraduationCap className="ca"/>Education
        </Link>

        <Link to="/projects" onClick={() => setOpen(false)}>
          <FaProjectDiagram className="ca"/> Projects
        </Link>

        <Link to="/contact" onClick={() => setOpen(false)}>
          <FaEnvelope className="ca"/> Contact
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;