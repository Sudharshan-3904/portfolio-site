import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiExternalLink, FiX, FiFileText } from "react-icons/fi";

const Publications = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedPublication, setSelectedPublication] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    // Publications data
    const publications = [
        {
            id: 1,
            title: "IoT For Smart Hydroponics",
            description:
                "In this research, we propose an IoT-enabled hydroponic system for maximizing plant growth and resource utilization.",
            image: "/publication_photos/hydroponics.jpg",
            category: "Paper",
            tech: ["IoT", "Sensors", "Firebase", "Flask"],
            link: "https://iieta.org/journals/i2m/paper/10.18280/i2m.240209",
            longDescription: `In this research, we propose an IoT-enabled hydroponic system for maximizing plant growth and resource utilization. Our system yielded a 30% increase in crop yield and a 40% decrease in water usage, indicating its viability for sustainable farming.`,
            highlights: [
                "Autonomous Light Control: Using photoresistors and LEDs to provide the best lighting conditions.",
                "Water Level Detection: Providing constant nutrient supply through real-time sensors.",
                "Cloud Integration: Using Firebase and a Flask-based web interface to provide easy monitoring and control.",
            ],
        },
        {
            id: 2,
            title: "Real-Time Indian Sign Language Translator",
            description:
                "An innovative system that bridges communication gaps by translating Indian Sign Language (ISL) to text and speech in real-time.",
            image: "/publication_photos/real_time_sign_language.jpeg",
            category: "Patent",
            tech: ["CV", "Python", "Streamlit", "Raspberry Pi"],
            link: "https://search.ipindia.gov.in/IPOJournal/Journal/Patent",
            longDescription: `Application Number: 202641063594 | This innovative system bridges communication gaps by translating Indian Sign Language (ISL) to text and speech in real-time. It features an intuitive user interface that allows users to interact with the system seamlessly. The application leverages advanced computer vision and machine learning techniques to accurately interpret sign language gestures and convert them into understandable text and speech.`,
            highlights: [
                "Real-time video processing for sign language recognition.",
                "Use of OpenCV and MediaPipe for gesture detection.",
                "Conversion of sign language to text and speech using ML models.",
                "Support for multiple sign languages.",
            ],
        },
    ];

    // Get unique categories
    const categories = ["All", ...new Set(publications.map((pub) => pub.category))];

    // Filter publications by category and reverse the order
    const filteredPublications = [
        ...(selectedCategory === "All"
            ? publications
            : publications.filter((pub) => pub.category === selectedCategory)),
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

    // Function to open modal with publication details
    const openModal = (pub) => {
        setSelectedPublication(pub);
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
        <section id="publications" className="py-20 bg-dark relative overflow-hidden">
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
                        Featured <span className="text-primary">Publications</span>
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
                        Explore my academic papers, patents, and other research contributions.
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

                {/* Publications Grid */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
                >
                    {filteredPublications.map((pub) => (
                        <motion.div
                            key={pub.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="bg-dark/50 backdrop-blur-sm border-[0.5px] border-gray-800/50 rounded-xl shadow-dark-md p-6 hover:shadow-dark-lg transition-all duration-300 relative"
                        >
                            {/* Publication Image */}
                            <div className="relative overflow-hidden h-56">
                                <img
                                    src={pub.image}
                                    alt={pub.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                                <div className="absolute bottom-0 left-0 p-4 w-full">
                                    <span className="px-3 py-1 bg-primary/90 text-white text-xs rounded-full">
                                        {pub.category}
                                    </span>
                                </div>
                            </div>

                            {/* Publication Content */}
                            <div className="p-5">
                                <h3 className="text-xl font-bold mb-2 text-darkText-primary">{pub.title}</h3>
                                <p className="text-darkText-secondary text-sm mb-4 h-12 overflow-hidden">
                                    {pub.description}
                                </p>
                                {/* Tech/Keywords */}
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {pub.tech.slice(0, 4).map((tech, index) => (
                                        <span
                                            key={index}
                                            className="text-xs px-2 py-1 bg-dark-lightest text-darkText-secondary rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {pub.tech.length > 4 && (
                                        <span className="text-xs px-2 py-1 bg-dark-lightest text-darkText-secondary rounded-md">
                                            +{pub.tech.length - 4} more
                                        </span>
                                    )}
                                </div>
                                {/* Publication Links */}
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {pub.link && (
                                            <a
                                                href={pub.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-darkText-secondary hover:text-primary transition-colors"
                                                aria-label="Publication Link"
                                            >
                                                <FiExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => openModal(pub)}
                                        className="flex items-center text-primary text-sm font-medium hover:underline"
                                    >
                                        Read More <FiFileText className="ml-1" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            {/* Publication Details Modal */}
            <AnimatePresence>
                {isModalOpen && selectedPublication && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center modal-backdrop"
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
                                    src={selectedPublication.image}
                                    alt={selectedPublication.title}
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
                                            {selectedPublication.title}
                                        </h3>
                                        <span className="px-3 py-1 bg-primary text-white text-xs rounded-full">
                                            {selectedPublication.category}
                                        </span>
                                    </div>
                                    <div className="flex space-x-4 mt-2 sm:mt-0">
                                        {selectedPublication.link && (
                                            <a
                                                href={selectedPublication.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-dark-lightest text-darkText-primary rounded-md text-sm hover:bg-dark-lighter transition-colors"
                                            >
                                                <FiExternalLink /> View Publication
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold mb-2 text-darkText-primary">Abstract</h4>
                                    <p className="text-darkText-secondary whitespace-pre-line">
                                        {selectedPublication.longDescription}
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold mb-2 text-darkText-primary">Key Highlights</h4>
                                    <ul className="list-disc list-inside text-darkText-secondary space-y-1">
                                        {selectedPublication.highlights.map((highlight, index) => (
                                            <li key={index}>{highlight}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-2 text-darkText-primary">
                                        Keywords / Tech
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedPublication.tech.map((tech, index) => (
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

export default Publications;
