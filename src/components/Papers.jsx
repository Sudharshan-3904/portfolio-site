import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiPaperclip } from "react-icons/fi";

const Papers = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Papers data
  const papers = [
    {
      id: 1,
      title: "IoT For Smrt Hydrophonics",
      description: `In this research, we propose an IoT-enabled hydroponic system for maximizing plant growth and resource utilization. Our system yielded a 30% increase in crop yield and a 40% decrease in water usage, indicating its viability for sustainable farming.`,
      image: "/paper_photos/hydroponics.jpg",
      highlights: [
        "Autonomous Light Control: Using photoresistors and LEDs to provide the best lighting conditions.",
        "Water Level Detection: Providing constant nutrient supply through real-time sensors.",
        "Cloud Integration: Using Firebase and a Flask-based web interface to provide easy monitoring and control.",
      ],
      pdfLink: "https://iieta.org/journals/i2m/paper/10.18280/i2m.240209",
    },
  ];

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

  return (
    <section id="papers" className="py-20 bg-dark relative overflow-hidden">
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
            Paper <span className="text-primary">Publications</span>
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
            A dive into my academic papers publications and research
            contributions.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {papers.map((paper) => (
            <motion.div
              key={paper.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="flex bg-dark/50 backdrop-blur-sm border-[0.5px] border-gray-800/50 rounded-xl shadow-dark-md p-6 hover:shadow-dark-lg transition-all duration-300 relative"
            >
              {/* Left Side: Paper Image */}
              <div className="flex-shrink-8 w-2/5 flex align-center justify-center items-center relative">
                <div className="relative w-full h-full">
                  <img
                    src={paper.image}
                    alt={paper.title}
                    className="w-full h-auto object-cover rounded-md transition-transform duration-500 hover:scale-110"
                  />

                  {/* Paper PDF Link */}
                  {/* <a
                    href={paper.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 left-4 px-3 py-1 bg-primary bg-opacity-90 text-white text-xs rounded-full flex items-center hover:bg-opacity-100 transition"
                  >
                    <FiPaperclip className="mr-1" /> View PDF
                  </a> */}

                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <span className="px-3 py-1 bg-primary bg-opacity-90 text-white text-xs rounded-full">
                      {/* {paper.pdfLink} */}
                      <a
                        href={paper.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-4 left-4 px-3 py-1 bg-primary bg-opacity-90 text-white text-xs rounded-full flex items-center hover:bg-opacity-100 transition"
                      >
                        <FiPaperclip className="mr-1" /> View PDF
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side: Paper Description */}
              <div className="flex-grow w-3/5 p-3">
                <h3 className="text-2xl font-bold text-darkText-primary mb-2">
                  {paper.title}
                </h3>
                <p className="text-darkText-secondary text-sm mb-3 whitespace-pre-line">
                  {paper.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-1 text-darkText-primary">
                    Key Highlights
                  </h4>
                  <ul className="list-disc list-inside text-darkText-secondary space-y-1">
                    {paper.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Papers;
