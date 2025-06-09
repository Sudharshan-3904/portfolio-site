import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiCode } from "react-icons/fi";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Project data
  const projects = [
    {
      id: 1,
      title: "Modern E-commerce Platform",
      description:
        "A fully responsive e-commerce platform with advanced product filtering, user authentication, and payment integration.",
      image: "https://via.placeholder.com/600x400?text=E-commerce+App",
      category: "Web App",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      demoLink: "https://demo-ecommerce.example.com",
      githubLink: "https://github.com/username/ecommerce-project",
      longDescription: `This project is a fully-featured e-commerce platform built with the MERN stack. 
      Features include product search and filtering, user authentication, shopping cart functionality, 
      checkout process with Stripe integration, order history, and an admin dashboard for product management.
      
      The frontend is built with React and utilizes Redux for state management. The UI is styled with 
      Tailwind CSS for a responsive design that works across all device sizes. The backend is powered 
      by Node.js and Express, with MongoDB as the database.`,
      highlights: [
        "Responsive design optimized for all devices",
        "User authentication with JWT",
        "Shopping cart with persistent storage",
        "Payment processing with Stripe",
        "Admin dashboard for product management",
      ],
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description:
        "A collaborative task management system with real-time updates, drag-and-drop interface, and team collaboration features.",
      image: "https://via.placeholder.com/600x400?text=Task+Manager",
      category: "Web App",
      tech: ["React", "Firebase", "Redux", "Tailwind CSS"],
      demoLink: "https://task-manager.example.com",
      githubLink: "https://github.com/username/task-manager",
      longDescription: `This task management dashboard allows teams to organize and track their projects efficiently. 
      The application features a drag-and-drop interface for task management, real-time updates using Firebase, 
      team collaboration tools, and detailed analytics.
      
      Users can create projects, assign tasks to team members, set deadlines, and track progress through 
      an intuitive interface. The app also includes a notification system to keep team members updated on task changes.`,
      highlights: [
        "Drag-and-drop interface for intuitive task management",
        "Real-time updates with Firebase",
        "Team collaboration features",
        "Task assignment and deadline tracking",
        "Project analytics and reporting",
      ],
    },
    {
      id: 3,
      title: "Personal Finance Tracker",
      description:
        "An application for tracking personal finances, including expense categorization, budget planning, and interactive reports.",
      image: "https://via.placeholder.com/600x400?text=Finance+Tracker",
      category: "Mobile App",
      tech: ["React Native", "Firebase", "Chart.js", "Expo"],
      demoLink: "https://finance-app.example.com",
      githubLink: "https://github.com/username/finance-tracker",
      longDescription: `This personal finance tracker helps users manage their finances effectively by tracking 
      income and expenses, categorizing transactions, and providing visual reports of spending habits.
      
      Built with React Native, the application works seamlessly on both iOS and Android devices. 
      Data is securely stored in Firebase, and the app features offline capabilities to ensure users can 
      access their financial information anytime, anywhere.`,
      highlights: [
        "Income and expense tracking",
        "Transaction categorization",
        "Budget planning tools",
        "Interactive charts and reports",
        "Recurring transaction management",
      ],
    },
    {
      id: 4,
      title: "AI-Powered Content Generator",
      description:
        "A tool that leverages AI to generate various types of content including blog posts, social media captions, and product descriptions.",
      image: "https://via.placeholder.com/600x400?text=AI+Content+Generator",
      category: "AI Tool",
      tech: ["Python", "TensorFlow", "React", "Flask", "OpenAI API"],
      demoLink: "https://ai-writer.example.com",
      githubLink: "https://github.com/username/ai-content-generator",
      longDescription: `This AI-powered content generation tool helps marketers, bloggers, and business owners create 
      high-quality content quickly. The application uses advanced natural language processing to generate 
      blog posts, social media captions, product descriptions, and more.
      
      The backend is built with Python and Flask, and leverages the OpenAI API for content generation. 
      The frontend is a React application that provides an intuitive interface for users to specify their 
      content requirements and review the generated content.`,
      highlights: [
        "Advanced NLP for content generation",
        "Multiple content types (blogs, social media, product descriptions)",
        "Customizable tone and style",
        "SEO optimization suggestions",
        "Content editing and refinement tools",
      ],
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description:
        "A comprehensive weather application with forecasts, interactive maps, and severe weather alerts for locations worldwide.",
      image: "https://via.placeholder.com/600x400?text=Weather+App",
      category: "Web App",
      tech: ["JavaScript", "React", "OpenWeatherMap API", "Leaflet.js"],
      demoLink: "https://weather-app.example.com",
      githubLink: "https://github.com/username/weather-dashboard",
      longDescription: `This weather dashboard provides users with accurate weather information for locations worldwide. 
      The application includes current conditions, hourly forecasts, 7-day forecasts, and severe weather alerts.
      
      The app is built with React and uses the OpenWeatherMap API for weather data. Interactive maps powered by 
      Leaflet.js allow users to visualize weather patterns and conditions across different regions.`,
      highlights: [
        "Real-time weather data",
        "Interactive weather maps",
        "Hourly and 7-day forecasts",
        "Severe weather alerts",
        "Location search and favorites",
      ],
    },
    {
      id: 6,
      title: "Portfolio Website Template",
      description:
        "A customizable portfolio website template designed for developers and designers to showcase their work and skills.",
      image: "https://via.placeholder.com/600x400?text=Portfolio+Template",
      category: "Website",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      demoLink: "https://portfolio-template.example.com",
      githubLink: "https://github.com/username/portfolio-template",
      longDescription: `This portfolio template is designed for developers and designers who want to showcase their 
      work and skills in a professional and visually appealing way. The template is fully customizable and 
      features smooth animations, responsive design, and optimized performance.
      
      Built with React and Tailwind CSS, the template is easy to customize and deploy. Framer Motion is used for 
      animations, providing a polished user experience.`,
      highlights: [
        "Fully responsive design",
        "Customizable sections and themes",
        "Smooth page transitions and animations",
        "Optimized for performance",
        "SEO-friendly structure",
      ],
    },
  ];

  // Get unique categories
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter projects by category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Function to open modal with project details
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset"; // Re-enable scrolling
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isModalOpen && e.target.classList.contains("modal-backdrop")) {
        closeModal();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (isModalOpen && e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isModalOpen]);

  return (
    <section id="projects" className="py-20 bg-dark relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute right-0 top-20 w-96 h-96 bg-primary opacity-5 blur-3xl -z-10" />
      <div className="absolute -left-10 bottom-10 w-64 h-64 bg-accent opacity-5 blur-2xl -z-10" />
      <div className="absolute left-1/3 top-1/2 w-20 h-20 bg-primary opacity-5 blur-xl -z-10" />
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnptLTI0IDBoNnY2aC02di02em0wLTEyaDZ2NmgtNnYtNnptMTIgMGg2djZoLTZ2LTZ6bTEyIDBoNnY2aC02di02em0tMjQtMTJoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnptMTIgMGg2djZoLTZ2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5 -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="section-title">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.div
            className="underline"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
          <motion.p
            className="text-darkText-secondary mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Explore my recent projects and discover the solutions I've built
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 
                ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-dark-lightest text-darkText-secondary hover:bg-dark-lighter"
                }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-surface border border-dark-lightest rounded-xl shadow-dark-md hover:shadow-dark-lg transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <span className="px-3 py-1 bg-primary bg-opacity-90 text-white text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-darkText-primary">
                  {project.title}
                </h3>
                <p className="text-darkText-secondary text-sm mb-4 h-12 overflow-hidden">
                  {project.description}
                </p>
                {/* Tech Stack */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-dark-lightest text-darkText-secondary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs px-2 py-1 bg-dark-lightest text-darkText-secondary rounded-md">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
                {/* Project Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-darkText-secondary hover:text-primary transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-darkText-secondary hover:text-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <button
                    onClick={() => openModal(project)}
                    className="flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    View Details <FiCode className="ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Project Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center modal-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="bg-surface border border-dark-lightest rounded-xl w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto shadow-dark-lg"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-dark-lightest text-darkText-primary p-2 rounded-full shadow-dark-md hover:bg-dark-lighter transition-colors"
                  aria-label="Close modal"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
              {/* Modal Content */}
              <div className="p-6">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-darkText-primary mb-2">
                      {selectedProject.title}
                    </h3>
                    <span className="px-3 py-1 bg-primary text-white text-xs rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                  <div className="flex space-x-4 mt-2 sm:mt-0">
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-dark-lightest text-darkText-primary rounded-md text-sm hover:bg-dark-lighter transition-colors"
                    >
                      <FiGithub /> GitHub
                    </a>
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md text-sm hover:bg-primary-dark transition-colors"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-darkText-primary">
                    Description
                  </h4>
                  <p className="text-darkText-secondary whitespace-pre-line">
                    {selectedProject.longDescription}
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-darkText-primary">
                    Key Features
                  </h4>
                  <ul className="list-disc list-inside text-darkText-secondary space-y-1">
                    {selectedProject.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-darkText-primary">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-dark-lightest text-darkText-secondary rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
