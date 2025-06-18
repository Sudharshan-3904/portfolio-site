import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Navigation links
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

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
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to top button */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center -mt-5">
          <motion.button
            onClick={scrollToTop}
            className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
            aria-label="Scroll to top"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 mb-6"
            >
              A passionate tool developer specializing in creating beautiful,
              functional, and accessible software tools.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex space-x-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  whileHover={{ y: -3 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg font-semibold mb-4"
            >
              Quick Links
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2"
            >
              {navLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-semibold mb-4"
            >
              Services
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-2"
            >
              <motion.li whileHover={{ x: 5 }}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Web Development
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  App Development
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Tool Development
                </a>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
