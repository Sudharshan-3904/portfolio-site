import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    id: 1,
    position: "Student Developer",
    organization: "iCliniq",
    location: "Coimbatore, India",
    start_date: "2024",
    end_date: "2025",
    certificate_link:
      "https://www.dropbox.com/scl/fi/47fuej7himy46ys9j34of/icliniq-internship-certificate.pdf?rlkey=tomjytpycezmmw60h0btcu5tv&st=5bhzkf40&dl=0",
    highlights: [
      "Implemented a ssytem to convert traditional medical reports into interactiable data and allow the user to interact with an chatbot based on it.",
      "This was done by modelleing a pipeline and allownig for a non-linear flow of data through multiple modules optimizing the user experience.",
      "This was developped as a backend system with the ability to host a model locally allowing dynamic changes.",
    ],
    tools: ["Python", "MongoDB", "OCR", "RAG", "NLP", "LLM", "LM Studio"],
  },
  {
    id: 2,
    position: "Student Researcher",
    organization: "Telkom University",
    location: "Bandung, Indonesia",
    end_date: "2025",
    certificate_link:
      "https://www.dropbox.com/scl/fi/4wvev4ncf8hlkjd38t7sr/Telkom-University-Internship-Certificate.pdf?rlkey=npu52vxpp33smgjbtom1xcldg&st=wj4khic8&dl=0",
    highlights: [
      "Wroked on prototyping an IoT based approach to hydroponics to imprtove productivity and provide additional motoring methods in real-time.",
      "Tested teh viability of the system on various microcontroller boards inluding Arduino Uno and ESP32 with could integration.",
      "This was developped as a backend system with the ability to host a model locally allowing dynamic changes.",
    ],
    tools: [
      "Firebase",
      "Arduino IDE",
      "BeautifulSoup",
      "Python",
      "IoT",
      "Flask",
    ],
  },
  {
    id: 3,
    position: "Student Developer",
    organization: "Samsung PRISM",
    location: "Coimbatore, India",
    end_date: "2025",
    certificate_link:
      "https://www.dropbox.com/scl/fi/el8z30c47sohl0c9fluvt/Samsung-PRISM-Completion-Cetificate.pdf?rlkey=ta55rz3lkow04vedu2jcbzvho&st=zyhwl0s8&dl=0",
    highlights: [
      "Developed a backed java based script for AI-based ondevice malware detection on Android for validating doanloaded files.",
      "Designed and trained the model on  python ad used the model using Java to test the file for malware base on the file's metadata.",
      "Thjis support multiple files types such as .docx, .pdf, .ppt, .apk, and other document file types.",
    ],
    tools: ["Java", "Tensorflow", "Gradle", "ML", "Android", "APK"],
  },
  {
    id: 4,
    position: "Student Intern",
    organization: "MagnusVista Labs",
    location: "Coimbatore, India",
    end_date: "2023",
    certificate_link:
      "https://www.dropbox.com/scl/fi/l91bud42kytw3rc6k0bph/MagnusVista-Internship-Certificate.pdf?rlkey=zkwpuua4nk8kyi4pe1pdqfg8d&st=y2r4qscn&dl=0",
    highlights: [
      "Wroked on agile development of a React-based Quiz app with JSON integration.",
      "Has the capability to dynamically laod and display data from a JSON file that can be retrived from an API for a fluid and intuitive system.",
    ],
    tools: ["React", "HTML", "CSS", "JS", "Vite", "Frontend", "JSON"],
  },
];

const ExperienceCard = ({ exp }) => (
  <motion.div
    className="bg-dark-lightest border-primary/30 rounded-xl p-6 md:p-8 shadow-dark-md relative max-w-4xl mx-auto"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
          {exp.position}
        </h3>
        <div className="text-primary font-semibold mb-1">
          {exp.organization}
        </div>
        <div className="text-darkText-secondary text-sm mb-1">
          {exp.location}
        </div>{" "}
      </div>
      <div className="md:absolute md:top-6 md:right-8 flex-shrink-0">
        <span className="bg-dark px-4 py-1 rounded-full text-darkText-secondary text-xs border border-primary/30">
          {exp.start_date}
          {exp.start_date && exp.end_date
            ? ` - ${exp.end_date}`
            : exp.end_date
            ? exp.end_date
            : ""}
        </span>
      </div>
    </div>
    <ul className="list-disc list-inside text-darkText-secondary space-y-2 mt-4 mb-6">
      {exp.highlights.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
    <div className="mb-4 flex flex-wrap gap-4 justify-center">
      {exp.tools.map((tool, ind) => (
        <span
          key={ind}
          className="text-xs px-2 py-1 bg-dark-lightest text-darkText-secondary rounded-md border border-primary border-opacity-20 rounded"
        >
          {tool}
        </span>
      ))}
    </div>
    <div className="flex justify-end">
      <a
        href={exp.certificate_link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary hover:bg-accent text-white px-5 py-2 rounded font-medium transition-colors text-sm"
      >
        View Certificate
      </a>
    </div>
  </motion.div>
);

const Experiences = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      className="py-20 bg-dark relative overflow-hidden"
      id="experiences"
    >
      <div className="absolute right-0 top-20 w-96 h-96 bg-primary opacity-5 blur-3xl -z-10" />
      <div className="absolute -left-10 bottom-10 w-64 h-64 bg-accent opacity-5 blur-2xl -z-10" />
      <div className="absolute left-1/3 top-1/2 w-20 h-20 bg-primary opacity-5 blur-xl -z-10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnptLTI0IDBoNnY2aC02di02em0wLTEyaDZ2NmgtNnYtNnptMTIgMGg2djZoLTZ2LTZ6bTEyIDBoNnY2aC02di02em0tMjQtMTJoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnptMTIgMGg2djZoLTZ2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5 -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-title mb-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Professional <span className="text-primary">Experiences</span>
          </motion.h2>
          <motion.div
            className="underline"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
        </div>
        <div ref={ref} className="flex flex-col gap-8">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
