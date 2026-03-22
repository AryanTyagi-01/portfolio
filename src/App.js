import { Routes, Route, HashRouter as Router, Navigate, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import Navbar from "./componenet/Navbar";

import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact"
import Education from "./pages/Education"
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

import { useEffect } from "react";

import './App.css';
function RedirectToHomeOnRefresh() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  return null;
}

function App() {
  return (
    <>
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Education" element={<Education />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
       </Router>
    </>
  );
}

export default App;