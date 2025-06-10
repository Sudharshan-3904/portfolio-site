import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload, FiMail } from "react-icons/fi";

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
    {
      icon: <FiGithub />,
      url: "https://github.com/Sudharshan-3904",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/sudharshan-m-prabhu-384a421b9",
      label: "LinkedIn",
    },
    {
      icon: <FiMail />,
      url: "mailto:sudharshanvalar@gmail.com",
      label: "Mail",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-dark"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient background effect */}
        <div className="absolute inset-0 bg-dark-gradient opacity-80"></div>

        {/* Animated blobs and shapes */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-accent opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="hidden md:block absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-primary opacity-5 blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            y: [0, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnptLTI0IDBoNnY2aC02di02em0wLTEyaDZ2NmgtNnYtNnptMTIgMGg2djZoLTZ2LTZ6bTEyIDBoNnY2aC02di02em0tMjQtMTJoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnptMTIgMGg2djZoLTZ2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <motion.div
          className="grid md:grid-cols-5 gap-3 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Content */}
          <div className="md:col-span-3 space-y-6 gap-8">
            <motion.div
              variants={itemVariants}
              className="inline-block mb-2 gap-3 flex flex-wrap items-center"
            >
              <span className="bg-primary bg-opacity-10 text-primary px-4 py-1 rounded-full text-sm font-medium border border-primary border-opacity-20">
                Data Engineer
              </span>
              <span className="bg-primary bg-opacity-10 text-primary px-4 py-1 rounded-full text-sm font-medium border border-primary border-opacity-20">
                ML/DL Engineer
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkText-primary leading-tight"
            >
              Hi, I'm <span className="gradient-text">Sudharshan</span>
              <div className="block mt-2">
                <span className="relative">
                  I build
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-1 bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  />
                </span>{" "}
                <span className="text-accent">Software tools</span>
              </div>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-darkText-secondary text-lg md:text-xl max-w-2xl"
            >
              I'm a Software Developer specializing in building exceptional
              tools and projects. Currently, I'm focused on creating useful,
              interesting and small projects for experimental learning.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.a
                href="/resume.pdf"
                className="btn btn-outline flex items-center gap-2 px-6 py-3 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="w-5 h-5" />
                Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-5 pt-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-darkText-secondary hover:text-primary transition-all duration-300 text-xl"
                  whileHover={{
                    y: -4,
                    scale: 1.1,
                    color: "#7c4dff",
                    textShadow: "0 0 8px rgba(124, 77, 255, 0.5)",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Image/Avatar Area */}
          <motion.div
            className="md:col-span-2 flex justify-center md:justify-end"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Glowing effect around image */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-xl"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center relative z-10">
                <div className="absolute inset-2 bg-dark-darker rounded-full flex items-center justify-center">
                  <img
                    src="/photos/avatar.jpg"
                    alt="Developer"
                    className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-dark-lighter rounded-lg flex items-center justify-center shadow-dark-md z-20"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 5 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <span className="text-2xl text-primary">⚛️</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-dark-lighter rounded-lg flex items-center justify-center shadow-dark-md z-20"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: -10 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <span className="text-3xl text-accent">💻</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-darkText-muted rounded-full flex justify-center"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
          <motion.div className="w-1 h-2 bg-primary rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
