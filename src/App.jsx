import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
