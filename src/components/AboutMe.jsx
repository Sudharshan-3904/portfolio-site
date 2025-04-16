function AboutMe() {
  return (
    <section id="about" style={sectionStyle}>
      <div className="cyber-container">
        <h2 className="cyber-section-title">
          <span className="cyber-accent">[</span>
          About Me
          <span className="cyber-accent">]</span>
        </h2>
        <div className="cyber-content">
          <p className="cyber-text">
            I'm on a journey to become a Business Analyst, blending my technical
            background with a love for solving real-world problems. I enjoy
            uncovering insights from data and using them to guide smart
            decisions. I'm passionate about tech and storytelling through data,
            and I bring a unique mix of analytical skills and creativity.
          </p>
          <div className="cyber-divider"></div>
          <p className="cyber-text">
            Outside of work, I love solving Rubik's Cubes, designing websites,
            and organizing events — all of which reflect my logical and
            people-oriented mindset.
          </p>
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

export default AboutMe;
