import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-dark shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex justify-between items-center py-4">
        <a href="#home" className="text-primary font-bold text-xl">
          MyPortfolio
        </a>
        <button
          className="md:hidden btn btn-outline"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          Menu
        </button>
        <ul
          className={`md:flex gap-6 items-center hidden ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-darkText-primary hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

