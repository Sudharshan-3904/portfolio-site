import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUp,
  FiHeart,
  FiCode,
} from "react-icons/fi";

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
    { icon: <FiGithub />, url: "https://github.com", label: "GitHub" },
    { icon: <FiLinkedin />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FiTwitter />, url: "https://twitter.com", label: "Twitter" },
    { icon: <FiMail />, url: "mailto:your.email@example.com", label: "Email" },
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <a href="#home" className="text-2xl font-bold">
                <span className="text-gray-300">&lt;</span>
                <span className="text-primary">Portfolio</span>
                <span className="text-gray-300">/&gt;</span>
              </a>
            </motion.div>
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
            </motion.ul>
          </div>

          {/* Contact Info
          <div className="md:col-span-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg font-semibold mb-4"
            >
              Contact Info
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-3 text-gray-400"
            >
              <p>Coimbatore, India</p>
              <p>john.doe@example.com</p>
              <p>+1 (555) 123-4567</p>
            </motion.div>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-block mt-4 px-5 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div> */}
        </div>

        {/* Copyright & Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mt-2 md:mt-0 flex items-center justify-center">
              Made with <FiHeart className="mx-1 text-red-500" /> and{" "}
              <FiCode className="mx-1 text-primary" />
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
