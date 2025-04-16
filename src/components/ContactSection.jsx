function ContactSection() {
  return (
    <section id="contact" style={sectionStyle}>
      <div className="cyber-container">
        <h2 className="cyber-section-title">
          <span className="cyber-accent">[</span>
          Contact Me
          <span className="cyber-accent">]</span>
        </h2>
        <div className="cyber-contact-grid">
          <div className="cyber-contact-card">
            <div className="cyber-contact-icon">📧</div>
            <div className="cyber-contact-content">
              <h3 className="cyber-contact-title">Email</h3>
              <a
                href="mailto:your.email@example.com"
                className="cyber-contact-link"
              >
                your.email@example.com
              </a>
            </div>
          </div>
          <div className="cyber-contact-card">
            <div className="cyber-contact-icon">💼</div>
            <div className="cyber-contact-content">
              <h3 className="cyber-contact-title">LinkedIn</h3>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-contact-link"
              >
                linkedin.com/in/your-profile
              </a>
            </div>
          </div>
          <div className="cyber-contact-card">
            <div className="cyber-contact-icon">👨‍💻</div>
            <div className="cyber-contact-content">
              <h3 className="cyber-contact-title">GitHub</h3>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-contact-link"
              >
                github.com/your-username
              </a>
            </div>
          </div>
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

export default ContactSection;
