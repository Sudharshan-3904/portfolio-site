import React, { useEffect, Suspense, lazy } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BackgroundElements from "./components/BackgroundElements";
import SectionSkeleton from "./components/SectionSkeleton";
import "./main.css";

// Lazily load below-the-fold modules to streamline initial load pipeline
const Skills = lazy(() => import("./components/Skills"));
const Experiences = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const FreelanceWorks = lazy(() => import("./components/FreelanceWorks"));
const Publications = lazy(() => import("./components/Publications"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));


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

  // Idle background preloading for downstream chunks after initial render
  useEffect(() => {
    const preloadModules = () => {
      import("./components/Skills");
      import("./components/Experience");
      import("./components/Projects");
      import("./components/FreelanceWorks");
      import("./components/Publications");
      import("./components/Contact");
      import("./components/Footer");
    };

    if ("requestIdleCallback" in window) {
      const handle = window.requestIdleCallback(preloadModules, { timeout: 2500 });
      return () => window.cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(preloadModules, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen text-darkText-primary relative selection:bg-primary/30 selection:text-white">
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
        <Suspense fallback={<SectionSkeleton id="skills" title="Skills" minHeight="min-h-[400px]" />}>
          <Skills />
        </Suspense>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <Suspense fallback={<SectionSkeleton id="experience" title="Experience" minHeight="min-h-[400px]" />}>
          <Experiences />
        </Suspense>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <Suspense fallback={<SectionSkeleton id="projects" title="Projects" minHeight="min-h-[500px]" />}>
          <Projects />
        </Suspense>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <Suspense fallback={<SectionSkeleton id="freelance" title="Freelance Works" minHeight="min-h-[400px]" />}>
          <FreelanceWorks />
        </Suspense>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <Suspense fallback={<SectionSkeleton id="publications" title="Publications" minHeight="min-h-[450px]" />}>
          <Publications />
        </Suspense>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <Suspense fallback={<SectionSkeleton id="contact" title="Contact" minHeight="min-h-[500px]" />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-20 w-full bg-dark" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
