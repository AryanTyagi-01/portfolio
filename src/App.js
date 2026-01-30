import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./componenet/Navbar";

import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact"
import Eduaction from "./pages/Eduaction"
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import './App.css';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/eduaction" element={<Eduaction />} />
          



        </Routes>
      </Router>
    </>
  );
}

export default App;