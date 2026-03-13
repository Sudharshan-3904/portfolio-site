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
      title: "React Quiz App",
      description:
        "A simple quiz application built with React to test knowledge on various topics.",
      image: "/project_images/react_quiz_app.png",
      category: "Project",
      tech: ["React", "CSS/SCSS", "JSON", "Node.js"],
      githubLink: "https://github.com/Sudharshan-3904/React-QuizApp",
      longDescription: `This is a simple quiz application built with React that allows users to test their knowledge on various topics. The application fetches quiz questions from a JSON file and provides an interactive interface for users to answer the questions.

      The React Quiz App features a clean and modern design, making it easy for users to navigate through the quiz. It includes functionalities such as displaying questions, tracking user answers, and providing feedback on the user's performance at the end of the quiz.`,
      highlights: [
        "JSON based quiz questions",
        "Dynamic question rendering",
        "User-friendly interface",
        "User authentication and authorization",
        "Google OAuth integration",
        "Responsive design for all devices",
      ],
    },
    {
      id: 2,
      title: "Library Management System",
      description:
        "A lightweight library management system to manage books, members, and transactions.",
      image: "/project_images/library_system.png",
      category: "Project",
      tech: ["Python", "SQLite", "bcrypt", "Custom Tkinter"],
      githubLink: "https://github.com/Sudharshan-3904/LibrarySystem",
      longDescription: `This project is a graphical user interface (GUI) application built using Python and the CTk library for creating modern and visually appealing interfaces. The code provides functionality for users to log in, view home section content, and update book data.

      The Library Management System allows users to manage books, members, and transactions efficiently. It provides features for adding, updating, and deleting books, managing member information, and tracking book loans and returns. The application is designed to be user-friendly and intuitive, making it easy for librarians to manage their library operations.`,
      highlights: [
        "ISBN based online searching",
        "Password hashing for secure authentication",
        "Detailed logging and error handling",
        "User-friendly interface with CTk",
        "Different user roles (Admin, Librarian, Member)",
        "Data persistence using SQLite files",
      ],
    },
    {
      id: 3,
      title: "Full Stack Blog Website",
      description:
        "A modern, responsive blog website with a React frontend and a Python/Flask backend.",
      image: "/project_images/fs_blog_site.png",
      category: "Full Stack",
      tech: [
        "Python",
        "Flask",
        "React",
        "CSS/SCSS",
        "SQLAlchemy",
        "JWT",
        "REST API",
      ],
      githubLink: "https://github.com/Sudharshan-3904/BlogWebsiteFullStack",
      longDescription: `This is a full-stack blog website built with a React frontend and a Python/Flask backend. The application allows users to create, read, update, and delete blog posts, as well as manage user authentication and authorization.

      The frontend is built with React, providing a modern and responsive user interface. The backend is implemented using Flask, which handles API requests, user authentication, and database interactions. The application uses SQLAlchemy for ORM and JWT for secure user authentication.`,
      highlights: [
        "User authentication and authorization",
        "Comment system for blog posts",
        "Rich text editor for blog posts",
        "Responsive design for all devices",
        "Search functionality for blog posts",
      ],
    },
    {
      id: 4,
      title: "Do It Later App",
      description:
        "A simple task management application to help users manage their tasks and reminders.",
      image: "/project_images/do_it_later_app.png",
      category: "Project",
      tech: ["Flutter", "Dart", "JSON Storage", "Mobile App"],
      githubLink: "https://github.com/Sudharshan-3904/DoItLater",
      longDescription: `DoItLater is a simple yet powerful to-do list manager built with Flutter. It allows you to keep track of your tasks, categorize them, prioritize them, and set deadlines. This project demonstrates how to use state management in Flutter, interact with JSON files for data persistence, and handle user inputs effectively.

      The application features a clean and intuitive user interface, making it easy to add, edit, and delete tasks. It also supports task categorization and prioritization, allowing users to focus on what matters most.`,
      highlights: [
        "Easy task management",
        "Categorization and prioritization of tasks",
        "User-friendly interface",
        "Data persistence using JSON files",
        "Dark and Light themes",
      ],
    },
    {
      id: 5,
      title: "Neural Style Transfer",
      description:
        "A practical implementation of Neural Style Transfer using Deep Learning Techniques.",
      image: "/project_images/nst_application.png",
      category: "AI",
      tech: ["Python", "Streamlit", "CUDA", "PyTorch", "OpenCV", "Numpy"],
      githubLink: "https://github.com/Sudharshan-3904/NeuralStyleTransfer",
      longDescription: `This is a Streamlit web application that implements Neural Style Transfer, allowing users to combine the content of one image with the artistic style of another.

      This application uses deep learning techniques to transfer the style of one image (like a famous painting) onto the content of another image (like a photograph). The implementation is based on the original Neural Style Transfer paper by Gatys et al. and uses pre-trained VGG networks (VGG16 and VGG19) to extract content and style features.`,
      highlights: [
        "User-friendly Streamlit interface",
        "Customizable parameters for style transfer",
        "Multiple image formats supported",
        "Real-time processing with GPU acceleration",
        "High-quality output images",
      ],
    },
    {
      id: 6,
      title: "Echo State Network Research",
      description:
        "A hands-on research and testing into development of Echo State Networks (ESN).",
      image: "/project_images/echo_state_network.png",
      category: "Research",
      tech: ["Python", "Numpy", "CUDA", "nltk", "tensorflow", "scikit-learn"],
      githubLink:
        "https://github.com/Sudharshan-3904/EchoStateNetwork-Research",
      longDescription: `This was a hands-on research project focused on the development and testing of Echo State Networks (ESN), a type of recurrent neural network known for its efficiency in processing time-series data. The project involved implementing ESN from scratch, experimenting with various configurations, and evaluating its performance on different datasets.

      The main goal was to explore the capabilities of ESN in tasks such as time-series prediction, classification, and signal processing. The project also included a comprehensive analysis of the ESN's performance compared to traditional neural networks and other machine learning models.`,
      highlights: [
        "Pickle file based model saving",
        "Numpy based implementation",
        "CPU, GPU and NPU support",
        "Extensive testing and benchmarking",
        "Documentation and detailed logs",
      ],
    },
    {
      id: 7,
      title: "IoT-Based Hydroponics System",
      description:
        "An automated hydroponics monitoring system with real-time data collection and cloud integration.",
      image: "/project_images/hydroponics.png",
      category: "Prototype",
      tech: ["Arduino", "ESP32", "IoT", "Python", "Flask", "Firebase"],
      githubLink: "https://github.com/Sudharshan-3904/SmartHydropnics",
      longDescription: `This is an IoT-based hydroponics monitoring system designed to improve agricultural productivity through automated real-time monitoring. The system utilizes microcontroller boards like Arduino Uno and ESP32 with cloud integration to provide comprehensive plant growth management. It features a robust backend system with local model hosting capabilities, allowing for dynamic system adjustments and optimizations.
      
      The project demonstrates the practical application of IoT technology in agriculture, offering farmers and researchers an efficient way to monitor and control hydroponic environments remotely while ensuring optimal growing conditions.`,
      highlights: [
        "Real-time Environmental Monitoring",
        "Multi-platform Microcontroller Support",
        "Cloud Integration with Firebase",
        "Local Model Hosting with Dynamic Updates",
      ],
    },
    {
      id: 8,
      title: "Smart Lab Copilot",
      description: "An IoT enabled smart solution for resource wastage.",
      image: "/project_images/slc.png",
      category: "Prototype",
      tech: ["Arduino IDE", "IoT", "Arduino Uno", "ESP32"],
      githubLink: "https://github.com/Sudharshan-3904/SmartLabCopilot",
      longDescription: `This is an automated smart lab power management system, built with IoT sensors and automation technology. It addresses the growing power consumption challenges in institutional computer laboratories where students learn modern technical skills like coding, blockchain, and IoT. The system is designed to be scalable and easy to implement, providing optimal power regulation without cumbersome manual oversight.
    
      The project features sensor-based monitoring and automated power control, significantly reducing energy waste in hierarchical computer networks. It includes comprehensive design documentation, implementation guidelines, and performance results, offering institutions a reliable solution for sustainable laboratory operations while maintaining effective hands-on learning environments.`,
      highlights: [
        "Ability to be an embedded system",
        "Simple and effective design",
        "Streamline process and data flow",
        "Scalable and Plug and play",
      ],
    },
    {
      id: 9,
      title: "Local Agents",
      description:
        "A exploration of local LLM based agents for productivity tools.",
      image: "/project_images/local_agents.png",
      category: "AI",
      tech: ["Python", "Streamlit", "Ollama", "uv", "LangChain"],
      githubLink: "https://github.com/Sudharshan-3904/LocalAgent",
      longDescription: `This repository hosts a local AI agent system, providing a versatile platform for code generation, analysis, and email management through an intuitive Streamlit-based user interface. All agents run locally on your system, ensuring data privacy and control.

      This project was implemented using LangChain to implement basics of agentic AI for simple productivity tasks. The agents are designed to be modular and extensible, allowing for easy integration of new functionalities and improvements.`,
      highlights: [
        "Github Copilot like basic code agent",
        "Email management Agent ",
        "Blog writing Agent",
        "RAG agent for document analysis",
      ],
    },
    {
      id: 10,
      title: "PyVerse",
      description:
        "An Interactive python based application to simulate celestial systems with basic parameters.",
      image: "/project_images/pyverse.png",
      category: "Project",
      tech: ["Python", "PyGame", "CUDA", "PyTorch", "Vispy", "OpenGL"],
      githubLink: "https://github.com/Sudharshan-3904/PyVerse",
      longDescription: `PyVerse is a Python-based, interactive, and extensible galaxy-scale simulation platform. It supports real-time visualization, advanced physics models, and performance monitoring, making it ideal for both scientific exploration and educational demos.
      
      This is built by integrating PyGame and Vispy to enable realistic physics simulation of celestial systems. The application allows users to simulate and visualize the motion of celestial bodies in a galaxy, providing an interactive experience for understanding complex astronomical phenomena.`,
      highlights: [
        "Realistic Physics Simulation",
        "Preloaded with a sample presets",
        "Realtime rendering",
        "Performance monitoring",
        "Benchmarking and Stress testing",
      ],
    },
    {
      id: 11,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my top projects and skills.",
      image: "/project_images/portfolio.png",
      category: "Project",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Frontend"],
      githubLink: "https://github.com/Sudharshan-3904/portfolio-site",
      longDescription: `This is my personal portfolio website, built with React and Tailwind CSS. It showcases my projects, skills, and experience in a visually appealing and interactive manner. The site is designed to be responsive and user-friendly, providing a seamless experience across devices.
      
      The website features smooth animations using Framer Motion, enhancing the user experience. It includes sections for my projects, skills, and a contact form, allowing visitors to easily get in touch with me.`,
      highlights: [
        "Responsive Design",
        "Modern Simplistic Design",
        "Animated transition with Framer Motion",
        "Easily Customizable and Extensible",
      ],
    },
    {
      id: 12,
      title: "PyCursor",
      description: "A Python based AI IDE for Python application development.",
      image: "/project_images/pycursor.png",
      category: "IDE",
      tech: ["Python", "PyQt6", "LLM", "AI Agents"],
      githubLink: "https://github.com/Sudharshan-3904/PyCursor",
      longDescription: `This is a Python based PyQt6 desktop application that incorporates Cursor like capabilities through completely local models hosted via Ollama or on the local network enabling secure and rapid development.
      
      It features a Microsoft Visual Studio Code like interface with responsive interface. This app is currently in pre-alpha testing. `,
      highlights: [
        "Completely offline capable",
        "Dynamic Venv management",
        "Built-In git integration",
        "API based model integration",
        "Multiple project management",
        "Sleek modern interface",
      ],
    },
    {
      id: 13,
      title: "AStarRoadmaps",
      description: "LLM based structured topic learner.",
      image: "/project_images/astarroadmaps.png",
      category: "AI",
      tech: ["Python", "FastAPI", "AI Agents"],
      githubLink: "https://github.com/Sudharshan-3904/AStarRoadMaps",
      longDescription: `This is a simple quiz application built with React that allows users to test their knowledge on various topics. The application fetches quiz questions from a JSON file and provides an interactive interface for users to answer the questions.

      The React Quiz App features a clean and modern design, making it easy for users to navigate through the quiz. It includes functionalities such as displaying questions, tracking user answers, and providing feedback on the user's performance at the end of the quiz.`,
      highlights: [
        "JSON based quiz questions",
        "Dynamic question rendering",
        "User-friendly interface",
        "User authentication and authorization",
        "Google OAuth integration",
        "Responsive design for all devices",
      ],
    },
    {
      id: 14,
      title: "Multi Model Researcher",
      description:
        "A simple quiz application built with React to test knowledge on various topics.",
      image: "/project_images/mmr.png",
      category: "AI",
      tech: ["React", "CSS/SCSS", "JSON", "Node.js"],
      githubLink: "https://github.com/Sudharshan-3904/React-QuizApp",
      longDescription: `This is a simple quiz application built with React that allows users to test their knowledge on various topics. The application fetches quiz questions from a JSON file and provides an interactive interface for users to answer the questions.

      The React Quiz App features a clean and modern design, making it easy for users to navigate through the quiz. It includes functionalities such as displaying questions, tracking user answers, and providing feedback on the user's performance at the end of the quiz.`,
      highlights: [
        "JSON based quiz questions",
        "Dynamic question rendering",
        "User-friendly interface",
        "User authentication and authorization",
        "Google OAuth integration",
        "Responsive design for all devices",
      ],
    },
  ];

  // Get unique categories
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter projects by category and reverse the order
  const filteredProjects = [
    ...(selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory)),
  ].reverse();

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
            Featured <span className="text-primary">Projects</span>
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
              className="bg-dark/50 backdrop-blur-sm border-[0.5px] border-gray-800/50 rounded-xl shadow-dark-md p-6 hover:shadow-dark-lg transition-all duration-300 relative"
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
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center modal-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="bg-dark-lightest border border-dark-lightest rounded-xl w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto shadow-dark-lg"
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
