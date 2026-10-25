import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaPython } from "react-icons/fa";
import { LuBrainCircuit, LuLayers, LuTerminal } from "react-icons/lu";
import {
    SiLangchain,
    SiFastapi,
    SiPytorch,
    SiMongodb,
    SiDocker,
    SiLinux,
    SiSqlite,
    SiN8N,
    SiPostman,
} from "react-icons/si";

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.15 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    // 4 categorized skill cards in a 2x2 cube with demonstrated concrete tools & technologies
    const skillCategories = [
        {
            title: "Python & Intelligent Systems",
            badge: "Core Direction",
            icon: <FaPython className="w-5 h-5 text-primary" />,
            description: "Core technical direction: language depth, agent orchestration, and retrieval workflows.",
            items: [
                { name: "Python", status: "Core Stack", evidence: "AsyncIO · OOP · NumPy · Typing · Multiprocessing" },
                { name: "Agent Workflows & LangGraph", status: "Core Stack", evidence: "LangGraph · StateGraph · Tool Calling · Pydantic" },
                { name: "Retrieval-Augmented Gen (RAG)", status: "Core Stack", evidence: "Embeddings · Chunking · Semantic Search · Reranking" },
                { name: "Local Inference (Ollama, LM Studio)", status: "Core Stack", evidence: "Ollama · LM Studio · GGUF Runtimes · Hugging Face" },
                { name: "Structured Outputs & Prompt Design", status: "Core Stack", evidence: "Pydantic Schemas · JSON Schema · System Prompts" },
                { name: "Deep Learning (PyTorch, TensorFlow)", status: "Proficient", evidence: "PyTorch · Torchvision · CNNs · Model Inference" },
            ],
        },
        {
            title: "Software Engineering & Backends",
            badge: "Backends & Architecture",
            icon: <LuBrainCircuit className="w-5 h-5 text-accent" />,
            description: "Applied software practices: API services, clean modular design, and data stores.",
            items: [
                { name: "Web APIs (FastAPI & Flask)", status: "Core Stack", evidence: "FastAPI · Flask · Uvicorn · REST · WebSockets" },
                { name: "Modular Architecture & Systems Design", status: "Core Stack", evidence: "Clean Architecture · Service Layers · Dependency Injection" },
                { name: "Relational & Document DBs (SQL, MongoDB)", status: "Proficient", evidence: "PostgreSQL · SQLite · MongoDB · SQLAlchemy · PyMongo" },
                { name: "Data Structures & Core Algorithms", status: "Proficient", evidence: "Graphs · Trees · Hash Maps · Time/Space Complexity" },
                { name: "Testing, Debugging & Code Quality", status: "Proficient", evidence: "PyTest · Unittest · PDB Debugger · Flake8/Black" },
                { name: "Client-side Web (React, Vite)", status: "Proficient", evidence: "React 18 · Vite · Tailwind CSS · Responsive UI" },
            ],
        },
        {
            title: "Systems, Hardware & Prototyping",
            badge: "Systems & Hardware",
            icon: <LuLayers className="w-5 h-5 text-indigo-400" />,
            description: "Hands-on computing: embedded microcontrollers, sensor telemetry, and low-level code.",
            items: [
                { name: "Embedded Hardware (ESP32, Arduino)", status: "Proficient", evidence: "ESP32 · Arduino Uno · MicroPython · C++ Firmware" },
                { name: "Sensor Telemetry & Cloud Logging", status: "Proficient", evidence: "MQTT · HTTP Streaming · Firebase Realtime DB · Sensors" },
                { name: "Linux Environment & Shell Tooling", status: "Proficient", evidence: "Bash · Zsh · SSH · Systemd Services · Grep/Awk" },
                { name: "Low-Level Foundations (C / C++)", status: "Proficient", evidence: "Pointers · Memory Layouts · Structs · GCC Compiler" },
                { name: "On-Device Services (Java, Android)", status: "Proficient", evidence: "Java · Android SDK · Gradle · JNI · APK Inspection" },
                { name: "Hardware Interfacing & Serial Buses", status: "Exploring", evidence: "I2C · SPI · UART Protocols · GPIO Pinouts · ADC" },
            ],
        },
        {
            title: "Tooling, Infra & Active Exploration",
            badge: "Tools & Exploration",
            icon: <LuTerminal className="w-5 h-5 text-emerald-400" />,
            description: "Developer workflows, container environments, vector stores, and active research.",
            items: [
                { name: "Version Control (Git, GitHub, CI)", status: "Core Stack", evidence: "Git CLI · GitHub Actions · CI/CD Pipelines · PR Workflow" },
                { name: "Containerization (Docker)", status: "Proficient", evidence: "Dockerfiles · Docker Compose · Multi-stage Builds · Volumes" },
                { name: "Vector Databases (ChromaDB)", status: "Proficient", evidence: "ChromaDB · FAISS · Cosine Similarity · Embeddings Index" },
                { name: "API Testing & Tooling (Postman)", status: "Proficient", evidence: "Postman Collections · Newman CLI · Environment Presets" },
                { name: "Workflow Automation (N8N)", status: "Proficient", evidence: "N8N Workflows · Webhooks · API Integrations · Data Nodes" },
                { name: "Observability, Tracing & Profiling", status: "Exploring", evidence: "OpenTelemetry · cProfile · Structured Logs · Latency Metrics" },
            ],
        },
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case "Core Stack":
                return "bg-primary/10 text-primary border-primary/30";
            case "Proficient":
                return "bg-accent/10 text-accent border-accent/30";
            case "Exploring":
                return "bg-amber-400/10 text-amber-300 border-amber-400/30";
            default:
                return "bg-slate-800/80 text-darkText-secondary border-slate-700/80";
        }
    };

    return (
        <section id="skills" className="py-24 bg-dark relative overflow-hidden">
            {/* Ambient lighting */}
            <div className="absolute -right-20 top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute -left-10 bottom-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
                {/* Section Title */}
                <div className="section-title mb-16 text-center">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
                        initial={{ opacity: 0, y: -16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
                        transition={{ duration: 0.5 }}
                    >
                        Technical <span className="text-primary">Focus</span> & Breadth
                    </motion.h2>
                    <motion.div
                        className="underline h-1 w-16 bg-primary mx-auto rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 64 } : { width: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                    <p className="text-xs font-mono uppercase tracking-widest text-accent mt-4">
                        Core Stack · Proficient Foundations · Active Exploration
                    </p>
                </div>

                {/* 2x2 Cube Grid */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            className="bg-dark-lighter/70 rounded-2xl border border-slate-800/80 p-6 sm:p-7 flex flex-col justify-between hover:border-primary/40 transition-all duration-300 shadow-dark-md"
                            whileHover={{ y: -4 }}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-dark-lightest/80 border border-slate-800 flex items-center justify-center">
                                        {category.icon}
                                    </div>
                                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-dark-lightest border border-slate-800 text-darkText-muted">
                                        {category.badge}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-darkText-primary mb-1">
                                    {category.title}
                                </h3>
                                <p className="text-xs text-darkText-muted mb-6 leading-relaxed">
                                    {category.description}
                                </p>

                                <div className="space-y-2.5">
                                    {category.items.map((item, itemIdx) => (
                                        <div
                                            key={itemIdx}
                                            className="p-2.5 rounded-lg bg-dark/50 border border-slate-800/60 hover:border-slate-700/80 transition-colors"
                                        >
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm text-darkText-primary font-medium">
                                                    {item.name}
                                                </span>
                                                <span
                                                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getStatusStyle(
                                                        item.status
                                                    )}`}
                                                >
                                                    {item.status}
                                                </span>
                                            </div>
                                            {item.evidence && (
                                                <div className="text-[11px] font-mono text-darkText-muted flex items-center gap-1.5 pt-0.5">
                                                    <span className="text-primary/70">↳</span>
                                                    <span>{item.evidence}</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
