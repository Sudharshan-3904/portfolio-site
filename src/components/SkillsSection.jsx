function SkillsSection() {
  return (
    <section id="skills" style={sectionStyle}>
      <div className="cyber-container">
        <h2 className="cyber-section-title">
          <span className="cyber-accent">[</span>
          Skills
          <span className="cyber-accent">]</span>
        </h2>

        <div className="cyber-skills-grid">
          <div className="cyber-skill-category">
            <h3 className="cyber-category-title">
              <span className="cyber-accent"></span> Core Skills
            </h3>
            <ul className="cyber-skill-list">
              <li className="cyber-skill-item">
                <span className="cyber-skill-icon">⚡</span>
                Problem Solving
              </li>
              <li className="cyber-skill-item">
                <span className="cyber-skill-icon">⚡</span>
                Critical Thinking
              </li>
              <li className="cyber-skill-item">
                <span className="cyber-skill-icon">⚡</span>
                Data Analysis (Excel, SQL)
              </li>
            </ul>
          </div>

          <div className="cyber-skill-category">
            <h3 className="cyber-category-title">
              <span className="cyber-accent"></span> Technical Stack
            </h3>
            <ul className="cyber-skill-list">
              <li className="cyber-skill-item">
                <span className="cyber-skill-icon">⚡</span>
                Python (Pandas, Matplotlib)
              </li>
              <li className="cyber-skill-item">
                <span className="cyber-skill-icon">⚡</span>
                HTML, CSS, JavaScript
              </li>
              <li className="cyber-skill-item">
                <span className="cyber-skill-icon">⚡</span>
                Flutter
              </li>
              <li className="cyber-skill-item">
                <span className="cyber-skill-icon">⚡</span>
                MySQL, MongoDB
              </li>
              <li className="cyber-skill-item">
                <span className="cyber-skill-icon">⚡</span>C Programming
              </li>
            </ul>
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

export default SkillsSection;
