import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="text">
        <h2>Sobre Mim</h2>
        <p>
          Sou desenvolvedor com experiência em várias tecnologias. Tenho paixão por criar soluções
          inovadoras e eficientes. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="image">
        <img src="/my-image.jpg" alt="Foto" />
      </div>
    </div>
  );
}

export default About;
