import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const FreelanceWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Freelance work data
  const freelanceWorks = [
    {
      id: 1,
      title: "Icon Embedded Controls Website Development",
      description:
        "Built a responsive e-commerce site for a business using React, TailwindCSS and Node.js.",
      image: "/project_images/ecommerce.png",
      tech: ["React", "Tailwind CSS", "Node.js"],
      liveLink: "https://iconembeddedcontrolsdev.netlify.app/",
      longDescription: `Developed a full-featured e-commerce website for a client, including product catalog, shopping cart, and payment integration. The site is fully responsive and optimized for performance.`,
      highlights: [
        "Responsive Design",
        "Secure Payment Integration",
        "Fast Loading Times",
        "User-Friendly Interface",
      ],
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

  return (
    <section id="freelance" className="py-20 bg-dark relative overflow-hidden">
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
            Freelance <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.div
            className="underline"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
          <motion.p
            className="text-darkText-secondary mt-6 max-w-2xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Showcasing my freelance projects and professional collaborations.
          </motion.p>
        </div>

        {/* Projects List */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-10"
        >
          {freelanceWorks.map((work) => (
            <motion.div
              key={work.id}
              variants={itemVariants}
              className="bg-dark-lightest border border-primary/30 rounded-xl p-6 md:p-8 shadow-dark-md flex flex-col md:flex-row items-stretch max-w-4xl mx-auto relative overflow-hidden"
            >
              {/* Left: Project Image */}
              <div className="md:w-1/2 w-full flex justify-center items-center mb-6 md:mb-0 md:mr-8 overflow-hidden rounded-md border border-dark">
                <motion.img
                  src={work.image}
                  alt={work.title}
                  className="object-cover w-full h-full min-h-[200px]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              {/* Right: Project Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {work.title}
                  </h3>
                  <p className="text-darkText-secondary text-base mb-4 whitespace-pre-line">
                    {work.description}
                  </p>
                  <h4 className="text-lg font-semibold mb-2 text-darkText-primary">
                    Project Highlights:
                  </h4>
                  <ul className="list-disc list-inside text-darkText-secondary space-y-1 mb-6">
                    {work.highlights.map((highlight, index) => (
                      <li key={index} className="text-base">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {work.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-dark-lightest border border-gray-700 text-darkText-secondary rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 justify-end mt-4">
                  {work.liveLink && (
                    <a
                      href={work.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary hover:bg-accent text-white px-5 py-2 rounded font-medium transition-colors text-sm flex items-center gap-2"
                    >
                      View Live <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FreelanceWorks;
