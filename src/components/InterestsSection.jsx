function InterestsSection() {
  const interests = [
    { icon: "🎨", text: "Web Design" },
    { icon: "🚗", text: "Driving" },
    { icon: "📚", text: "Reading" },
    { icon: "🧩", text: "Rubik's Cubing" },
    { icon: "🎤", text: "Event Management" },
  ];

  return (
    <section id="interests" style={sectionStyle}>
      <div className="cyber-container">
        <h2 className="cyber-section-title">
          <span className="cyber-accent">[</span>
          Interests
          <span className="cyber-accent">]</span>
        </h2>
        <div className="cyber-interests-grid">
          {interests.map((interest, index) => (
            <div key={index} className="cyber-interest-card">
              <div className="cyber-interest-icon">{interest.icon}</div>
              <div className="cyber-interest-text">{interest.text}</div>
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

export default InterestsSection;
