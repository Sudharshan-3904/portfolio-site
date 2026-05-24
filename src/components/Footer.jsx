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
    <footer className="bg-gray-900 text-white relative pb-10">
      {/* Semi-circle background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] bg-gray-900 rounded-full z-0 pointer-events-none"></div>

      {/* Scroll to top button */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
        <motion.button
          onClick={scrollToTop}
          className="bg-primary text-white w-[50px] h-[50px] rounded-full shadow-lg hover:bg-primary-dark transition-colors flex items-center justify-center"
          aria-label="Scroll to top"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUp className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Main Footer Content
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          Logo and Description
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
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
