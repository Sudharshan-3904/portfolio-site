import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowRight, FiFileText } from "react-icons/fi";
import { SiPython } from "react-icons/si";
import OptimizedImage from "./OptimizedImage";


const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.15,
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 16, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const technicalLabels = ["Python", "LLMs", "Multi-agent systems", "Applied research"];

    const socialLinks = [
        {
            icon: <FiGithub className="w-5 h-5" />,
            url: "https://github.com/Sudharshan-3904",
            label: "GitHub",
        },
        {
            icon: <FiLinkedin className="w-5 h-5" />,
            url: "https://www.linkedin.com/in/sudharshan-m-prabhu-384a421b9",
            label: "LinkedIn",
        },
    ];

    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-transparent pt-20 pb-16">
            {/* Static ambient gradient */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.09),rgba(0,0,0,0))]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    className="grid lg:grid-cols-12 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Left Column: Narrative & Technical Identity */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* Technical Domain Badges */}
                        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/25">
                                <SiPython className="w-3.5 h-3.5" />
                                Python & Software Developer
                            </span>
                            <span className="px-3 py-1 rounded-md text-xs font-mono text-accent bg-dark-lightest/70 border border-slate-800">
                                Intelligent Systems
                            </span>
                            <span className="px-3 py-1 rounded-md text-xs font-mono text-darkText-secondary bg-dark-lightest/70 border border-slate-800">
                                Systems Exploration
                            </span>
                        </motion.div>

                        {/* Primary Headline: Curiosity-led & broader */}
                        <motion.div variants={itemVariants} className="space-y-2">
                            <p className="text-sm font-mono text-accent tracking-wider uppercase">
                                Sudharshan M Prabhu
                            </p>
                            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-darkText-primary tracking-tight leading-[1.25]">
                                I build things, explore ideas, <br className="hidden sm:inline" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-darkText-primary">
                                    and figure out how they work.
                                </span>
                            </h1>
                        </motion.div>

                        {/* Supporting Narrative Copy */}
                        <motion.p
                            variants={itemVariants}
                            className="text-darkText-secondary text-base sm:text-lg leading-relaxed max-w-2xl"
                        >
                            I'm a software developer with a strong technical direction in{" "}
                            <span className="text-darkText-primary font-medium">Python and intelligent systems</span>. I
                            enjoy understanding how technologies function under the hood, building practical tools, and
                            turning concepts into working implementations across software engineering, AI applications,
                            and modern computing systems.
                        </motion.p>

                        {/* Direction Overview Pills */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-darkText-muted"
                        >
                            <span className="text-darkText-secondary font-semibold">Current Focus:</span>
                            <span className="px-2 py-0.5 rounded bg-dark-lighter border border-slate-800 text-slate-300">
                                Python
                            </span>
                            <span className="px-2 py-0.5 rounded bg-dark-lighter border border-slate-800 text-slate-300">
                                AI Agents & LLMs
                            </span>
                            <span className="px-2 py-0.5 rounded bg-dark-lighter border border-slate-800 text-slate-300">
                                Web Backends
                            </span>
                            <span className="px-2 py-0.5 rounded bg-dark-lighter border border-slate-800 text-slate-300">
                                IoT & Systems
                            </span>
                        </motion.div>

                        {/* Calls to Action */}
                        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm font-medium text-darkText-primary bg-primary hover:bg-primary-dark transition-all duration-200 shadow-sm shadow-primary/30"
                            >
                                Explore my work
                                <FiArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="https://github.com/Sudharshan-3904"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-lg text-sm font-medium text-darkText-primary bg-dark-lightest/80 hover:bg-dark-lightest border border-slate-700/80 transition-all duration-200"
                            >
                                <FiGithub className="w-4 h-4" />
                                GitHub
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-lg text-sm font-medium text-darkText-secondary hover:text-darkText-primary transition-colors"
                            >
                                Contact
                            </a>
                        </motion.div>

                        {/* Subtle Social Links */}
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-4 pt-4 border-t border-slate-800/60 max-w-md"
                        >
                            <span className="text-xs font-mono text-darkText-muted">Connect:</span>
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    aria-label={link.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-darkText-secondary hover:text-primary transition-colors p-1"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Profile & Terminal Accent */}
                    <motion.div className="lg:col-span-5 flex justify-center lg:justify-end" variants={itemVariants}>
                        <div className="relative w-full max-w-sm sm:max-w-md">
                            {/* Subtle frame glow */}
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-md opacity-60" />

                            {/* Card container */}
                            <div className="relative rounded-2xl bg-dark-lighter/90 border border-slate-800/70 overflow-hidden shadow-2xl">
                                {/* Understated terminal header bar */}
                                <div className="flex items-center justify-between px-4 py-2.5 bg-dark-darker/90 border-b border-slate-800/70 text-xs font-mono text-darkText-muted">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-sky-400/80" />
                                    </div>
                                    <span className="text-[11px] text-slate-400">__init__.py</span>
                                </div>

                                {/* Portrait image */}
                                <div className="p-4 bg-gradient-to-b from-dark-lighter/30 to-dark/30">
                                    <OptimizedImage
                                        src="/photos/ProfileNoBG.png"
                                        alt="Sudharshan - Software Developer"
                                        priority={true}
                                        className="w-full h-auto object-cover rounded-xl"
                                        wrapperClassName="w-full h-auto rounded-xl"
                                    />
                                </div>

                                {/* Understated engineering details badge */}
                                <div className="px-4 py-3 bg-dark-darker/90 border-t border-slate-800/70 text-xs font-mono flex items-center justify-between">
                                    <span className="text-darkText-secondary flex items-center gap-2">
                                        <span className="inline-block w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)] animate-pulse" />
                                        <span>Python & Intelligent Systems</span>
                                    </span>
                                    <span className="text-darkText-muted">Dev & Systems</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="hidden md:flex absolute bottom-6 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span className="text-[10px] font-mono tracking-widest uppercase text-darkText-muted">Scroll</span>
                <div className="w-5 h-8 border border-slate-700 rounded-full flex justify-center p-1">
                    <motion.div
                        className="w-1 h-2 bg-primary rounded-full"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
