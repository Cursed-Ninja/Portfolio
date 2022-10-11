import { useEffect, useRef, useState } from "react";
import React from "react";

import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import CodingProfile from "./components/CodingProfile";
import Projects from "./components/Projects";
import AboutMe from "./components/Aboutme";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";

const App = () => {
  const skillsRef = useRef(null);
  const CodingRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const achievementsRef = useRef(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "true");
  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme === null) {
      setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
      localStorage.setItem("theme", theme);
    } else {
      setTheme(localStorageTheme === "true");
    }
  }, []);
  return (
    <div className={`app ${theme ? "dark" : ""}`}>
      <Navbar
        refs={[skillsRef, CodingRef, projectsRef, achievementsRef, contactRef]}
        theme={theme}
        setTheme={setTheme}
      />
      <section className="home-container">
        <Home theme={theme} />
      </section>
      <section className="about-container">
        <AboutMe />
      </section>
      <section className="skills-wrapper" ref={skillsRef}>
        <Skills />
      </section>
      <hr />
      <section ref={CodingRef} className="coding-wrapper">
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
};
export default App;
