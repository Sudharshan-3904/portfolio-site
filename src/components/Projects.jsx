import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiGithub, FiX, FiCode } from "react-icons/fi";

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
            title: "Neural Style Transfer",
            description: "A practical implementation of Neural Style Transfer using Deep Learning Techniques.",
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
            id: 2,
            title: "Echo State Network Research",
            description: "A hands-on research and testing into development of Echo State Networks (ESN).",
            image: "/project_images/echo_state_network.png",
            category: "Research",
            tech: ["Python", "Numpy", "CUDA", "nltk", "tensorflow", "scikit-learn"],
            githubLink: "https://github.com/Sudharshan-3904/EchoStateNetwork-Research",
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
            id: 3,
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
            id: 4,
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
            id: 5,
            title: "Multi Model Researcher",
            description: "A simple quiz application built with React to test knowledge on various topics.",
            image: "/project_images/mmr.png",
            category: "AI",
            tech: ["React", "CSS/SCSS", "JSON", "Node.js"],
            githubLink: "https://github.com/Sudharshan-3904/Multi-Model-Researcher",
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
            id: 6,
            title: "StudioForge",
            description: "A simple quiz application built with React to test knowledge on various topics.",
            image: "/project_images/studio_forge.png",
            category: "Full Stack",
            tech: ["React", "Python", "Supabase", "FastAPI"],
            githubLink: "https://github.com/Sujit-0207/studioforge",
            longDescription: `StudioForge is a collaborative production workspace built for indie game teams to manage internal documentation, task planning, and bug tracking in one place.

      It combines a team wiki, Kanban board, and lightweight issue tracker into a unified SaaS-style platform tailored for game development workflows.`,
            highlights: [
                "Multi User Collboration",
                "Project Document management",
                "Kanban boards for task tracking",
                "User Authentication",
                "Issue tracking",
                "Responsive design for all devices",
            ],
        },
        {
            id: 7,
            title: "Diabetes Care AI",
            description:
                "A multi-agent AI healthcare assistant built with LangGraph and React for triage and clinical support.",
            image: "/project_images/dmChatbot.png",
            category: "Research",
            tech: ["React", "Python", "Supabase", "Docker", "FIHR", "RAG"],
            githubLink: "https://github.com/Sudharshan-3904/dmChatbot",
            longDescription: `The multi-agent system features a responsive and modern design, making it seamless for both patients and clinicians to navigate. It includes powerful functionalities such as role-based intent classification, real-time response streaming, and vector-backed research retrieval to provide accurate clinical support.`,
            highlights: [
                "Role-based intent classification for tailored medical triage",
                "Multi-agent LangGraph architecture for specialized clinical support",
                "VectorDB-backed RAG for accurate medical research retrieval",
                "FHIR data persistence for secure health record management",
                "Real-time token streaming for seamless conversational UI",
                "Automated CI/CD deployment pipelines using GitHub Actions",
            ],
        },
        {
            id: 8,
            title: "Travel Booking Multi-Agent System",
            description:
                "A multi-agent AI travel booking system built as a simple benchmark to compare impact of various parameters on performance.",
            image: "/project_images/travelBooking.png",
            category: "AI",
            tech: ["Streamlit", "Python", "LangGraph", "Ollama", "AI Agents"],
            githubLink: "https://github.com/Sudharshan-3904/travelBooking",
            longDescription: `A peer-to-peer multi-agent system where agents delegate tasks to each other to collaboratively simulate planning and booking a trip. Built with the intention to various system and model configurations on output quality and overhead. It also serves as a standardized implementation to test configurations across models.`,
            highlights: [
                "Multi-agent LangGraph architecture for collaborative task delegation",
                "Standardized benchmark to compare system and model configurations",
                "Customizable tool set for various travel planning and booking tasks",
                "Comprehensize automated testing results and summary of sustained testing",
                "Randommized testing scenarios to test robustness of the model and system configurations",
            ],
        },
        {
            id: 9,
            title: "AgentLab",
            description:
                "A local-first platform for running, monitoring, and benchmarking AI-assisted coding tasks across local models, tools, and dynamically switched skill suites.",
            image: "/project_images/agentLab.png",
            category: "AI",
            tech: ["Python", "FastAPI", "LangGraph", "Ollama", "LM Studio", "React", "SQLite", "Docker"],
            githubLink: "https://github.com/Sudharshan-3904/AgentLab",
            longDescription: `A local-first AI execution harness designed to manage the full lifecycle of coding tasks: from intake and planning through model routing, tool use, verification, recovery, and evaluation. It aims to let one logical execution switch between specialized skill suites and local models while preserving task continuity. The architecture also emphasizes controlled tool access, workspace rollback, execution telemetry, system resource monitoring, and reproducible experiments. The roadmaps describe planned capabilities, so this entry reflects the project's documented direction rather than confirming that every feature is implemented.`,
            highlights: [
                "Routes a single logical execution across local models and specialized skill suites",
                "Designed for Ollama and LM Studio, with optional external providers planned",
                "Records execution events, model and tool activity, and system resource metrics",
                "Includes planned workspace checkpoints, Git-based rollback, and controlled tool execution",
                "Supports reproducible experiments and benchmark comparisons for agent configurations",
            ],
        },
    ];

    // Get unique categories
    const categories = ["All", ...new Set(projects.map((project) => project.category))];

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

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Title */}
                <div className="section-title">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        Featured <span className="text-primary">Projects</span> & Experiments
                    </motion.h2>
                    <motion.div
                        className="underline"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 80 } : { width: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    />
                    <motion.p
                        className="text-darkText-secondary mt-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        A collection spanning intelligent systems, machine learning research, IoT automation, and
                        software tools - built to test ideas, solve practical challenges, and explore computing systems.
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
                        ? "bg-primary text-darkText-primary shadow-md shadow-primary/25"
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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center justify-items-center w-full"
                >
                    {filteredProjects.map((project, index) => {
                        const isLastAndOdd2Col =
                            filteredProjects.length % 2 !== 0 &&
                            index === filteredProjects.length - 1;
                        const isLastAnd1Leftover3Col =
                            filteredProjects.length % 3 === 1 &&
                            index === filteredProjects.length - 1;

                        return (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className={`w-full max-w-md sm:max-w-none mx-auto bg-dark/50 backdrop-blur-sm border-[0.5px] border-gray-800/50 rounded-xl shadow-dark-md p-6 hover:shadow-dark-lg transition-all duration-300 relative flex flex-col justify-between ${
                                    isLastAndOdd2Col
                                        ? "sm:col-span-2 sm:w-[75%] sm:mx-auto sm:justify-self-center"
                                        : ""
                                } ${
                                    isLastAnd1Leftover3Col
                                        ? "lg:col-span-3 lg:w-[50%] lg:mx-auto lg:justify-self-center"
                                        : isLastAndOdd2Col
                                        ? "lg:col-span-1 lg:w-full"
                                        : ""
                                }`}
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
                                    <span className="px-3 py-1 bg-primary/90 text-darkText-primary text-xs rounded-full">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-5">
                                <h3 className="text-xl font-bold mb-2 text-darkText-primary">{project.title}</h3>
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
                        );
                    })}
                </motion.div>
            </div>
            {/* Project Details Modal */}
            <AnimatePresence>
                {isModalOpen && selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto modal-backdrop"
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <motion.div
                            className="bg-dark-lightest border border-slate-800 rounded-2xl w-full max-w-3xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl m-auto relative"
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
                                        <span className="px-3 py-1 bg-primary text-darkText-primary text-xs rounded-full">
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
                                    <h4 className="text-lg font-semibold mb-2 text-darkText-primary">Description</h4>
                                    <p className="text-darkText-secondary whitespace-pre-line">
                                        {selectedProject.longDescription}
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold mb-2 text-darkText-primary">Key Features</h4>
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
