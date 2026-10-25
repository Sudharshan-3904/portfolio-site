import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import Projects from "./components/Projects";
import FreelanceWorks from "./components/FreelanceWorks";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experiences from "./components/Experience";
import BackgroundElements from "./components/BackgroundElements";
import "./main.css";

function App() {
  // Subdomain redirect logic
  useEffect(() => {
    const hostname = window.location.hostname;
    const githubUrl = "https://github.com/Sudharshan-3904";
    
    // Check if the hostname starts with 'git.' or is exactly 'git' (in case of local testing)
    if (hostname.startsWith("git.") || hostname === "git") {
      window.location.href = githubUrl;
    }
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const offsetTop =
            element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleAnchorClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark text-darkText-primary relative selection:bg-primary/30 selection:text-white">
      <Navbar />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Living passive background elements */}
      <BackgroundElements />

      <main className="relative z-10">
        <Hero />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <About />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <Skills />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <Experiences />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <Projects />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <FreelanceWorks />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <Publications />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
