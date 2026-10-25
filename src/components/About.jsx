import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
      icon: <LuBrainCircuit className="w-5 h-5 text-primary" />,
      title: "Agent & System Architecture",
      description:
        "Designing multi-agent workflows, stateful memory systems, and hot-swappable context mechanisms for structured reasoning.",
    },
    {
      icon: <LuCpu className="w-5 h-5 text-accent" />,
      title: "Empirical Experiments",
      description:
        "Prototyping working implementations, stress-testing edge cases, and evaluating behavior with local and cloud models.",
    },
    {
      icon: <FiServer className="w-5 h-5 text-indigo-400" />,
      title: "Backend & Data Pipelines",
      description:
        "Developing Python services (FastAPI/Flask), document retrieval systems, and structured data stores that ground AI outputs.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-dark-lighter relative overflow-hidden"
    >
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
            Engineering Interests & Approach
          </p>
        </div>

        <div
          ref={ref}
          className="max-w-4xl mx-auto"
        >
          {/* Main Narrative */}
          <motion.div
            className="space-y-6 text-darkText-secondary text-base md:text-lg leading-relaxed bg-dark/60 p-8 md:p-10 rounded-2xl border border-slate-800/80 shadow-dark-md"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p variants={itemVariants} className="text-darkText-primary font-medium">
              I'm a Python developer focused on building AI-powered applications and
              exploring how intelligent systems can work beyond a single model or prompt.
            </motion.p>

            <motion.p variants={itemVariants}>
              My work spans LLM applications, multi-agent systems, retrieval-based
              workflows, and local model experimentation. I'm particularly interested
              in how agents coordinate, how memory influences their decisions, and how
              system design affects reliability and performance.
            </motion.p>

            <motion.p variants={itemVariants}>
              I approach projects as engineering experiments: understand the problem,
              build a working implementation, evaluate its behavior, and investigate
              what can be improved. Alongside AI, I work with backend development and
              data processing to turn ideas into usable systems.
            </motion.p>

            <motion.p variants={itemVariants} className="border-t border-slate-800/80 pt-5 text-darkText-secondary">
              I'm interested in opportunities where I can contribute to Python
              engineering, AI application development, and applied research while
              continuing to deepen my understanding of the systems I build.
            </motion.p>
          </motion.div>

          {/* Core Technical Pillars */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {engineeringPrinciples.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-dark/80 p-6 rounded-xl border border-slate-800/80 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
                whileHover={{ y: -3 }}
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-dark-lighter border border-slate-800 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-darkText-primary text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-darkText-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

