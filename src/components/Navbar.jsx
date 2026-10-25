import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experiences", href: "#experiences" },
    { name: "Projects", href: "#projects" },
    { name: "Freelance", href: "#freelance" },
    { name: "Publications", href: "#publications" },
    { name: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-dark-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="text-sm font-mono font-bold tracking-tight text-darkText-primary hover:text-primary transition-colors flex items-center gap-2"
          >
            <span className="px-1.5 py-0.5 rounded bg-primary/15 text-primary text-xs font-mono border border-primary/25">
              &gt;
            </span>
            <span>sudharshan<span className="text-accent">.py</span></span>
          </a>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="hidden md:flex items-center space-x-6 text-xs font-mono"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-darkText-secondary hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              className="text-darkText-primary p-2 rounded-lg bg-dark-lighter border border-slate-800 focus:outline-none"
            >
              {isOpen ? (
                <FiX className="h-5 w-5" />
              ) : (
                <FiMenu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className="md:hidden overflow-hidden bg-dark-lighter/95 backdrop-blur-md rounded-xl mt-3 border border-slate-800/90 shadow-2xl"
        >
          <div className="flex flex-col space-y-1 p-4 font-mono text-xs">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={link.href}
                className="text-darkText-secondary hover:text-white hover:bg-dark-lightest/70 px-3 py-2.5 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;

