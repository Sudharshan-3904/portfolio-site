import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiDownload,
} from "react-icons/fi";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com", label: "GitHub" },
    { icon: <FiLinkedin />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FiTwitter />, url: "https://twitter.com", label: "Twitter" },
    { icon: <FiMail />, url: "mailto:your.email@example.com", label: "Email" },
  ];

  return (
    <section id="hero" className="relative bg-dark py-24">
      <div className="container">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
            variants={itemVariants}
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p
            className="text-darkText-secondary text-lg md:text-xl mb-8"
            variants={itemVariants}
          >
            I create beautiful, functional, and accessible digital experiences.
          </motion.p>
          <motion.div
            className="flex justify-center gap-4"
            variants={itemVariants}
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
