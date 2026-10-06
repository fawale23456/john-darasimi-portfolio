import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import "./App.css";


function App() {
  const [darkMode, setDarkMode] = useState(true);


  useEffect(() => {
    document.body.classList.toggle(
      "dark",
      darkMode
    );
  }, [darkMode]);


  return (
    <div className={darkMode ? "app dark" : "app"}>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />


      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />

      </main>


      <footer className="site-footer">

        <div className="footer-container">

          <div className="footer-brand">
            John<span>.</span>
          </div>


          <p>
            Building modern digital experiences.
          </p>


          <div className="footer-copy">

            © {new Date().getFullYear()} John Fawale.
            All rights reserved.

          </div>

        </div>

      </footer>

    </div>
  );
}


export default App;