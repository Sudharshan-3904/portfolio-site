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

    // Categorized skills reflecting engineering role
    const skillCategories = [
        {
            title: "Core Development",
            badge: "Foundation",
            icon: <FaPython className="w-5 h-5 text-primary" />,
            description: "Languages and engineering practices demonstrated across codebase implementations.",
            items: [
                { name: "Python", status: "Primary" },
                { name: "Modular System Design", status: "Primary" },
                { name: "APIs & Web Services (FastAPI)", status: "Primary" },
                { name: "SQL & Relational Schemas", status: "Working knowledge" },
                { name: "Data Structures & Algorithms", status: "Working knowledge" },
                { name: "Testing & Debugging", status: "Working knowledge" },
            ],
        },
        {
            title: "AI & LLM Systems",
            badge: "Applied Systems",
            icon: <LuBrainCircuit className="w-5 h-5 text-accent" />,
            description: "Production concepts implemented in multi-part agents and local pipelines.",
            items: [
                { name: "Agent Workflows", status: "Primary" },
                { name: "Retrieval-Augmented Gen (RAG)", status: "Primary" },
                { name: "Local Inference (Ollama)", status: "Primary" },
                { name: "Structured Output Enforcement", status: "Primary" },
                { name: "Prompt Design & Grounding", status: "Primary" },
                { name: "Model Integration", status: "Working knowledge" },
            ],
        },
        {
            title: "AI System Architecture",
            badge: "System Design",
            icon: <LuLayers className="w-5 h-5 text-indigo-400" />,
            description: "Architectural patterns distinguishing robust systems from toy applications.",
            items: [
                { name: "Multi-Agent Orchestration", status: "Primary" },
                { name: "Stateful Memory Systems", status: "Primary" },
                { name: "Agent Communication & Routing", status: "Primary" },
                { name: "Dynamic Context Updating", status: "Working knowledge" },
                { name: "System Evaluation", status: "Working knowledge" },
                { name: "Observability & Tracing", status: "Exploring" },
            ],
        },
    ];

    const supportingToolGroups = [
        {
            category: "AI & Agent Frameworks",
            tools: ["LangGraph", "LangChain", "Ollama", "PyTorch", "ChromaDB", "LM Studio"],
        },
        {
            category: "Backend & Data",
            tools: ["FastAPI", "Flask", "MongoDB", "SQLite", "NumPy", "Pandas"],
        },
        {
            category: "Infrastructure & Tooling",
            tools: ["Linux", "Docker", "Git & GitHub", "Postman", "N8N"],
        },
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case "Primary":
                return "bg-primary/10 text-primary border-primary/25";
            case "Working knowledge":
                return "bg-accent/10 text-accent border-accent/25";
            case "Exploring":
                return "bg-slate-800 text-darkText-muted border-slate-700";
            default:
                return "bg-slate-800/80 text-darkText-secondary border-slate-700/80";
        }
    };

    return (
        <section id="skills" className="py-24 bg-dark relative overflow-hidden">
            {/* Ambient lighting */}
            <div className="absolute -right-20 top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute -left-10 bottom-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                {/* Section Title */}
                <div className="section-title mb-16 text-center">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
                        initial={{ opacity: 0, y: -16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
                        transition={{ duration: 0.5 }}
                    >
                        Technical <span className="text-primary">Focus</span>
                    </motion.h2>
                    <motion.div
                        className="underline h-1 w-16 bg-primary mx-auto rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 64 } : { width: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                    <p className="text-xs font-mono uppercase tracking-widest text-accent mt-4">
                        Capabilities Grouped By Engineering Role
                    </p>
                </div>

                {/* 3 Core Engineering Pillars */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            className="bg-dark-lighter/70 rounded-2xl border border-slate-800/80 p-6 flex flex-col justify-between hover:border-primary/40 transition-all duration-300 shadow-dark-md"
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
                                            className="flex items-center justify-between p-2 rounded-lg bg-dark/50 border border-slate-800/60"
                                        >
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
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Supporting Tools and Technologies */}
                <motion.div
                    className="mt-12 bg-dark-lighter/50 rounded-2xl border border-slate-800/80 p-8 shadow-dark-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="flex items-center gap-2 mb-6">
                        <LuTerminal className="w-4 h-4 text-accent" />
                        <h3 className="text-base font-bold text-darkText-primary font-mono tracking-tight">
                            Supporting Tools & Technologies
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {supportingToolGroups.map((group, gIdx) => (
                            <div key={gIdx} className="space-y-3">
                                <h4 className="text-xs font-mono text-darkText-muted uppercase tracking-wider">
                                    {group.category}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {group.tools.map((tool, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="px-3 py-1 rounded-md text-xs font-mono bg-dark-lightest/60 text-darkText-secondary border border-slate-800 hover:border-slate-700 transition-colors"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
