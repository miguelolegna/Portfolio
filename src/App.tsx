import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Carousel from "./sections/Carousel";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import ToggleSwitch from "./components/ToggleSwitch";
import "./styles/global.css";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);

      // Adiciona uma classe temporária para destacar a seção
      element.classList.add("highlight");
      setTimeout(() => element.classList.remove("highlight"), 1000);
    }
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <section id="switch" style={{ right: "20px" }}>
        <ToggleSwitch />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="carousel">
        <Carousel />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certificates">
        <Certificates />
      </section>
    </div>
  );
}

export default App;