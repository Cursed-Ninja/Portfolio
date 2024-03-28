import { useState, useRef, useEffect } from "react";
import "./App.css";
import Home from "./sections/Home";
import Navbar from "./components/Navbar";
import Skills from "./sections/Skills";
import CodingProfile from "./sections/CodingProfile";
import Projects from "./sections/Projects";
import AboutMe from "./sections/Aboutme";
import Footer from "./sections/Footer";
import Achievements from "./sections/Achievements";
import Experiences from "./sections/Experiences";

function App() {
  const skillsRef = useRef(null);
  const codingRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const achievementsRef = useRef(null);
  const experiencesRef = useRef(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "true");
  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme === null) {
      setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
      localStorage.setItem("theme", theme.toString());
    } else {
      setTheme(localStorageTheme === "true");
    }
  }, []);
  return (
    <div className={`app ${theme ? "dark" : ""}`}>
      <Navbar
        refs={[
          experiencesRef,
          skillsRef,
          codingRef,
          projectsRef,
          achievementsRef,
          contactRef,
        ]}
        theme={theme}
        setTheme={setTheme}
      />
      <section className="home-container">
        <Home theme={theme} />
      </section>
      <section className="about-container">
        <AboutMe />
      </section>
      <section ref={experiencesRef} className="experience-wrapper">
        <Experiences />
      </section>
      <section className="skills-wrapper" ref={skillsRef}>
        <Skills />
      </section>
      <section ref={codingRef} className="coding-wrapper">
        <CodingProfile />
      </section>
      <section ref={projectsRef} className="projects-wrapper">
        <Projects />
      </section>
      <section ref={achievementsRef} className="achievements-wrapper">
        <Achievements />
      </section>
      <section ref={contactRef} className="footer">
        <Footer theme={theme} />
      </section>
    </div>
  );
}

export default App;
