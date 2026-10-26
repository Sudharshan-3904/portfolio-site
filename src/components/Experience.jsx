import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink, FiMapPin, FiCalendar } from "react-icons/fi";

const experiences = [
    {
        id: 5,
        position: "Intern",
        organization: "Oracle",
        location: "Hyderabad, India",
        start_date: "2026",
        certificate_link:
            "https://www.dropbox.com/scl/fi/cimb1ezcxifmgx016t78t/Oracle-Internship-Completion-Letter.pdf?rlkey=bzhex3oxdxsnk8gb4ukdp8rug&st=v38vbl38&dl=0",
        highlights: [
            "Designed and experimented with multi-agent workflows for enterprise applications providing interactive, multi-faceted assistance.",
            "Engineered hot-swappable system instruction sets and modular components for mid-conversation context updates without overwriting session state.",
            "Implemented multi-step failure detection and dynamic re-routing with structured output enforcement using LangGraph and custom orchestration components.",
        ],
        tools: ["Python", "LangGraph", "RAG", "SQL Developer", "NLP", "LLMs", "Ollama"],
    },
    {
        id: 4,
        position: "Student Developer",
        organization: "iCliniq",
        location: "Coimbatore, India",
        start_date: "2024",
        end_date: "2025",
        certificate_link:
            "https://www.dropbox.com/scl/fi/47fuej7himy46ys9j34of/icliniq-internship-certificate.pdf?rlkey=tomjytpycezmmw60h0btcu5tv&st=5bhzkf40&dl=0",
        highlights: [
            "Implemented an end-to-end processing system to transform traditional medical reports into structured interactive data for conversational query interfaces.",
            "Modeled a multi-stage pipeline enabling non-linear data flow across OCR, data structuring, and retrieval-augmented generation (RAG) modules.",
            "Developed backend services configured for local model hosting (LM Studio) to support rapid prompt iteration and dynamic parameter tuning.",
        ],
        tools: ["Python", "MongoDB", "OCR", "RAG", "NLP", "LM Studio"],
    },
    {
        id: 3,
        position: "Student Researcher",
        organization: "Telkom University",
        location: "Bandung, Indonesia",
        start_date: "2025",
        end_date: "2025",
        certificate_link:
            "https://www.dropbox.com/scl/fi/4wvev4ncf8hlkjd38t7sr/Telkom-University-Internship-Certificate.pdf?rlkey=npu52vxpp33smgjbtom1xcldg&st=wj4khic8&dl=0",
        highlights: [
            "Researched and prototyped an IoT-based hydroponics monitoring architecture to evaluate real-time telemetry across sensor networks.",
            "Tested firmware and system viability across multiple microcontrollers (Arduino Uno, ESP32) with cloud integration.",
            "Engineered Python and Flask backend components with Firebase to ingest telemetry streams and log environmental metrics.",
        ],
        tools: ["Python", "Flask", "Firebase", "ESP32", "Arduino IDE", "IoT"],
    },
    {
        id: 2,
        position: "Student Developer",
        organization: "Samsung PRISM",
        location: "Coimbatore, India",
        start_date: "2024",
        end_date: "2025",
        certificate_link:
            "https://www.dropbox.com/scl/fi/el8z30c47sohl0c9fluvt/Samsung-PRISM-Completion-Cetificate.pdf?rlkey=ta55rz3lkow04vedu2jcbzvho&st=zyhwl0s8&dl=0",
        highlights: [
            "Developed backend components for on-device machine learning malware detection on Android to validate downloaded files.",
            "Trained and evaluated feature-classification models in Python, creating Java interfaces to invoke the model on-device.",
            "Engineered metadata extraction pipelines supporting documents (.docx, .pdf, .ppt) and application packages (.apk).",
        ],
        tools: ["Python", "TensorFlow", "Java", "Android", "Machine Learning"],
    },
    {
        id: 1,
        position: "Student Intern",
        organization: "MagnusVista Labs",
        location: "Coimbatore, India",
        start_date: "2024",
        end_date: "2024",
        certificate_link:
            "https://www.dropbox.com/scl/fi/l91bud42kytw3rc6k0bph/MagnusVista-Internship-Certificate.pdf?rlkey=zkwpuua4nk8kyi4pe1pdqfg8d&st=y2r4qscn&dl=0",
        highlights: [
            "Contributed to front-end and client-side logic for dynamic web applications using React and Vite.",
            "Implemented structured JSON schema retrieval and state management for responsive data presentation.",
        ],
        tools: ["React", "JavaScript", "Vite", "REST APIs", "JSON"],
    },
];

const ExperienceCard = ({ exp }) => (
    <motion.div
        className="w-full bg-dark-lighter/75 border border-slate-800/70 rounded-2xl p-5 sm:p-6 md:p-8 hover:border-primary/40 shadow-dark-md transition-all duration-300 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
    >
        {/* Header: Role & Organization (Primary) with Date & Location (Secondary) */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-2 mb-4 pb-4 border-b border-slate-800/60">
            <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-darkText-primary">{exp.position}</h3>
                    <span className="text-darkText-muted font-mono text-xs">•</span>
                    <span className="text-primary font-semibold text-base">{exp.organization}</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-darkText-muted">
                    <span className="flex items-center gap-1">
                        <FiMapPin className="w-3.5 h-3.5" />
                        {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                        <FiCalendar className="w-3.5 h-3.5" />
                        {exp.start_date && exp.end_date && exp.start_date !== exp.end_date
                            ? `${exp.start_date} – ${exp.end_date}`
                            : exp.start_date || exp.end_date}
                    </span>
                </div>
            </div>

            {/* Certificate link */}
            {exp.certificate_link && (
                <a
                    href={exp.certificate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-darkText-secondary hover:text-primary transition-colors px-3 py-1.5 rounded-md bg-dark border border-slate-800 self-start mt-1 sm:mt-0"
                >
                    <span>Certificate</span>
                    <FiExternalLink className="w-3 h-3" />
                </a>
            )}
        </div>

        {/* Structured Bullets */}
        <ul className="space-y-2.5 text-darkText-secondary text-sm leading-relaxed mb-6">
            {exp.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-primary mt-1.5 font-mono text-xs">▹</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>

        {/* Technical Context Tags */}
        <div className="flex flex-wrap gap-1.5 items-center pt-2">
            <span className="text-[11px] font-mono text-darkText-muted mr-1.5">Context:</span>
            {exp.tools.map((tool, ind) => (
                <span
                    key={ind}
                    className="text-[11px] font-mono px-2.5 py-0.5 bg-dark-lightest/60 text-darkText-secondary rounded border border-slate-800"
                >
                    {tool}
                </span>
            ))}
        </div>
    </motion.div>
);

const Experiences = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section className="py-24 bg-dark-lighter/20 relative overflow-hidden" id="experiences">
            <div className="container mx-auto px-4 md:px-6">
                <div className="section-title mb-16 text-center">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
                        initial={{ opacity: 0, y: -16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
                        transition={{ duration: 0.5 }}
                    >
                        Professional <span className="text-primary">Experience</span>
                    </motion.h2>
                    <motion.div
                        className="underline h-1 w-16 bg-primary mx-auto rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 64 } : { width: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                    <p className="text-xs font-mono uppercase tracking-widest text-accent mt-4">
                        Applied Engineering & Technical Contributions
                    </p>
                </div>

                <div ref={ref} className="max-w-4xl mx-auto w-full flex flex-col gap-6 items-stretch">
                    {experiences.map((exp) => (
                        <ExperienceCard key={exp.id} exp={exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
