import { useState } from "react";
import "../styles/Certificates.css";

type Certificate = {
  id: number;
  title: string;
  image: string;
  description: string;
};

const certificates: Certificate[] = [
  { id: 1, title: "Certificado SCRUM", image: "/Certificate_SCRUM.png", description: "Certificação em metodologias ágeis." },
  { id: 2, title: "Certificado AWS", image: "/aws-educate-introduction-to-cloud-101-certificate.png", description: "Introdução à computação em nuvem pela AWS." }
];

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="page" aria-label="Seção de Certificados">
      <h2>Meus Certificados</h2>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="certificate-card"
            aria-label={`Certificado: ${cert.title}`}
            onClick={() => openModal(cert)}
          >
            <img src={cert.image} alt={`Imagem do ${cert.title}`} loading="lazy" />
            <h3>{cert.title}</h3>
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image">
              <img src={selectedCertificate.image} alt={`Imagem do ${selectedCertificate.title}`} />
            </div>
            <div className="modal-content">
              <h3>{selectedCertificate.title}</h3>
              <p>{selectedCertificate.description}</p>
              <button className="modal-close" onClick={closeModal}>
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificates;
