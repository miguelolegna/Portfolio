import "../styles/Navbar.css";

type NavbarProps = {
  scrollToSection: (section: string) => void;
  activeSection: string;
};

function Navbar({ scrollToSection, activeSection }: NavbarProps) {
  return (
    <nav className="navbar">
      <h1>Meu Portfólio</h1>
      <ul>
        <li
          className={activeSection === "about" ? "active" : ""}
          onClick={() => scrollToSection("about")}
        >
          Sobre Mim
        </li>
        <li
          className={activeSection === "carousel" ? "active" : ""}
          onClick={() => scrollToSection("carousel")}
        >
          Linguagens
        </li>
        <li
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => scrollToSection("projects")}
        >
          Projetos
        </li>
        <li
          className={activeSection === "certificates" ? "active" : ""}
          onClick={() => scrollToSection("certificates")}
        >
          Certificados
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
