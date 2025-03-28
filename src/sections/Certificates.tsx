import "../styles/Certificates.css";

const certificates = [
  { id: 1, title: "Certificado 1", image: "/cert1.jpg", description: "Lorem ipsum dolor sit amet." },
  { id: 2, title: "Certificado 2", image: "/cert2.jpg", description: "Consectetur adipiscing elit." }
];

function Certificates() {
  return (
    <div className="page">
      <h2>Meus Certificados</h2>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <img src={cert.image} alt={cert.title} />
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
