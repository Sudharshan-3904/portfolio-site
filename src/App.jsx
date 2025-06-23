import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Papers from "./components/Papers";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experiences from "./components/Experience";
import "./main.css";

function App() {
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
    <div className="min-h-screen bg-dark text-darkText-primary">
      <Navbar />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Background elements */}
      <div className="fixed inset-0 bg-dark-radial -z-20 opacity-40"></div>
      <div className="fixed top-0 right-0 w-1/3 h-screen bg-primary opacity-5 blur-3xl -z-10"></div>
      <div className="fixed bottom-0 left-0 w-1/4 h-1/2 bg-accent opacity-5 blur-3xl -z-10"></div>

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experiences />
        <Projects />
        <Papers />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
