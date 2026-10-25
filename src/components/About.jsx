import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LuBrainCircuit, LuCpu } from "react-icons/lu";
import { FiServer } from "react-icons/fi";

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const engineeringPrinciples = [
        {
            icon: <LuCpu className="w-5 h-5 text-accent" />,
            title: "Curiosity & First Principles",
            description:
                "Driven by understanding how systems operate beneath abstractions - testing hypotheses, inspecting behavior, and learning by building working prototypes.",
        },
        {
            icon: <LuBrainCircuit className="w-5 h-5 text-primary" />,
            title: "Python & Intelligent Systems",
            description:
                "My primary technical direction: developing LLM-assisted workflows, multi-agent coordination, retrieval-augmented pipelines, and local inference models.",
        },
        {
            icon: <FiServer className="w-5 h-5 text-indigo-400" />,
            title: "Software Engineering & Systems Breadth",
            description:
                "Building beyond a single domain: web service backends (FastAPI/Flask), data modeling, embedded hardware (IoT), and developer tooling.",
        },
    ];

    return (
        <section id="about" className="py-24 bg-dark-lighter relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute right-0 top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute left-10 bottom-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                {/* Section Title */}
                <div className="section-title mb-14 text-center">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
                        initial={{ opacity: 0, y: -16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
                        transition={{ duration: 0.5 }}
                    >
                        About <span className="text-primary">Me</span>
                    </motion.h2>
                    <motion.div
                        className="underline h-1 w-16 bg-primary mx-auto rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 64 } : { width: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                    <p className="text-xs font-mono uppercase tracking-widest text-accent mt-4">
                        Curiosity, Approach & Technical Philosophy
                    </p>
                </div>

                <div ref={ref} className="max-w-4xl mx-auto">
                    {/* Main Narrative */}
                    <motion.div
                        className="space-y-6 text-darkText-secondary text-base md:text-lg leading-relaxed bg-dark/60 p-5 sm:p-8 md:p-10 rounded-2xl border border-slate-800/80 shadow-dark-md"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.p variants={itemVariants} className="text-darkText-primary font-medium">
                            I’m a software developer motivated by genuine curiosity about how computing systems work -
                            from the logic running in a local script to the distributed components behind an
                            application.
                        </motion.p>

                        <motion.p variants={itemVariants}>
                            My primary technical focus is in{" "}
                            <span className="text-white font-medium">Python and intelligent systems</span>. I build
                            LLM-assisted applications, multi-agent workflows, and retrieval-augmented systems, exploring
                            how models can interact with tools, manage state, and assist human workflows reliably. I
                            treat this as an applied engineering craft rather than magic: understanding the constraints,
                            evaluating outputs, and keeping architectures grounded.
                        </motion.p>

                        <motion.p variants={itemVariants}>
                            At the same time, I intentionally maintain breadth across software engineering. I enjoy
                            developing backend services, working with relational and document databases, and
                            experimenting with embedded microcontrollers (IoT) and system utilities. Exploring different
                            technical domains helps me write more resilient code and pick the right abstraction for each
                            problem.
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="border-t border-slate-800/80 pt-5 text-darkText-secondary"
                        >
                            I value working implementations over inflated claims. I'm looking for opportunities where I
                            can contribute to Python and software engineering, build practical AI-powered systems, and
                            collaborate with teams that appreciate thoughtful problem-solving and clean code.
                        </motion.p>
                    </motion.div>

                    {/* Core Technical Pillars: 2-column layout with odd 3rd card ~50% wider and centered */}
                    <motion.div
                        className="grid sm:grid-cols-2 gap-6 mt-10"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {engineeringPrinciples.map((item, index) => {
                            const isLastAndOdd =
                                engineeringPrinciples.length % 2 !== 0 && index === engineeringPrinciples.length - 1;

                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    className={`bg-dark/80 p-5 sm:p-8 rounded-xl border border-slate-800/80 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between ${
                                        isLastAndOdd
                                            ? "sm:col-span-2 sm:w-[75%] sm:mx-auto sm:justify-self-center shadow-dark-md"
                                            : "w-full"
                                    }`}
                                    whileHover={{ y: -3 }}
                                >
                                    <div>
                                        <div className="w-10 h-10 rounded-lg bg-dark-lighter border border-slate-800 flex items-center justify-center mb-4">
                                            {item.icon}
                                        </div>
                                        <h3 className="font-semibold text-darkText-primary text-base sm:text-lg mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-darkText-secondary text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
