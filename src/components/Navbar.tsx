import "../styles/Navbar.css";

type NavbarProps = {
  scrollToSection: (section: string) => void;
  activeSection: string;
};

function Navbar({ scrollToSection, activeSection }: NavbarProps) {
  return (
    <nav className="navbar" aria-label="Navegação principal">
      <h1>Miguel Correia</h1>
      <ul>
        <li
          className={activeSection === "about" ? "active" : ""}
          onClick={() => scrollToSection("about")}
          aria-label="Ir para a seção Sobre Mim"
        >
          Sobre Mim
        </li>
        <li
          className={activeSection === "carousel" ? "active" : ""}
          onClick={() => scrollToSection("carousel")}
          aria-label="Ir para a seção Linguagens"
        >
          Linguagens
        </li>
        <li
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => scrollToSection("projects")}
          aria-label="Ir para a seção Projetos"
        >
          Projetos
        </li>
        <li
          className={activeSection === "certificates" ? "active" : ""}
          onClick={() => scrollToSection("certificates")}
          aria-label="Ir para a seção Certificados"
        >
          Certificados
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;