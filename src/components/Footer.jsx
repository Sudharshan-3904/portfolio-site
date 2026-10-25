import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // Social links
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
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-dark-darker text-white relative pt-12 pb-12 border-t border-slate-800/80">
      {/* Scroll to top button */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
        <motion.button
          onClick={scrollToTop}
          className="bg-dark-lighter border border-slate-700 text-darkText-secondary hover:text-white w-10 h-10 rounded-full shadow-lg hover:border-primary transition-all flex items-center justify-center"
          aria-label="Scroll to top"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowUp className="w-4 h-4" />
        </motion.button>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-darkText-muted">
          <div className="flex items-center gap-2">
            <span className="text-darkText-primary font-bold">Sudharshan M Prabhu</span>
            <span>—</span>
            <span>Software Developer · Python & Intelligent Systems</span>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-darkText-muted hover:text-primary transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
