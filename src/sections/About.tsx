import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="text">
        <h2>Sobre Mim</h2>
        <p>
          Olá! Sou um desenvolvedor focado em <b>Frontend</b> e <b>Design</b>, apaixonado por <b>UI/UX</b> e sempre em busca de novas formas de tornar interfaces mais <b>intuitivas</b> e <b>eficientes</b>.
        </p>
        <p>
          Atualmente, estou a estudar no curso de <b>Programador de Informática</b> na Escola Profissional do Fundão e todos os dias aprendo algo novo para aprimorar minhas habilidades.
        </p>
        <p>
          Falo português e inglês (e conto com a ajuda do <em>Google Tradutor</em> quando necessário). Sinta-se à vontade para entrar em contacto para criar algo <b>incrível</b> juntos!
        </p>
      </div>
      <div className="image">
        <img src="/23069ca2-38d5-4e65-8bc6-2444d9c8ee5c.jpg" alt="Foto" />
      </div>
    </div>
  );
}

export default About;
