function CertificationsSection() {
  const certifications = [
    {
      title: "Google Data Analytics",
      from: "Google",
      link: "https://coursera.org/cert/google-data-analytics",
    },
    {
      title: "Business Analysis Foundations",
      from: "LinkedIn Learning",
      link: "https://linkedin.com/learning/business-analysis-foundations",
    },
    {
      title: "Tableau for Beginners",
      from: "Udemy",
      link: "https://udemy.com/course/tableau-for-beginners",
    },
  ];

  return (
    <section id="certifications" style={sectionStyle}>
      <div className="cyber-container">
        <h2 className="cyber-section-title">
          <span className="cyber-accent">[</span>
          Certifications
          <span className="cyber-accent">]</span>
        </h2>
        <div className="cyber-certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cyber-cert-card">
              <div className="cyber-cert-content">
                <h3 className="cyber-cert-title">{cert.title}</h3>
                <p className="cyber-cert-from">
                  <span className="cyber-accent"></span> {cert.from}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-cert-link"
                >
                  <span className="cyber-link-text">View Certificate</span>
                  <span className="cyber-link-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectionStyle = {
  backdropFilter: "blur(10px)",
  background: "transparent",
  padding: "40px",
  borderRadius: "12px",
  margin: "20px 0",
  boxShadow: "var(--cyber-glow)",
  position: "relative",
  overflow: "hidden",
};

export default CertificationsSection;
