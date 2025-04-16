function EducationSection() {
  return (
    <section id="education">
      <h2>Education</h2>
      <p>
        <strong>Bachelor's Degree in [Your Major]</strong> - [Your Institution],
        [Year]
      </p>
      <p>
        Relevant Coursework: Data Analysis, Business Intelligence, Database
        Management
      </p>
    </section>
  );
}

const sectionStyle = {
  backdropFilter: "blur(10px)",
  background: "rgba(255, 255, 255, 0.1)",
  border: "2px solid #0ff",
  padding: "20px",
  borderRadius: "12px",
  margin: "20px 0",
};

export default EducationSection;
