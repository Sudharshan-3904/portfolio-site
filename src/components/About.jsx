import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiHeart } from "react-icons/fi";
import { PiCertificateFill } from "react-icons/pi";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  // Removed Experience from highlights as requested
  const highlights = [
    {
      icon: <FiCode />,
      title: "Polyglot Programming",
      description:
        "Proficient in multiple programming languages, adapting to the best tool for each task.",
    },
    {
      icon: <PiCertificateFill />,
      title: "Certifications",
      description:
        "Certification in multiple online courses for proficiency and capability in various languages and skills.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-dark-lighter relative overflow-hidden"
    >
      {/* Background Design Elements */}
      <div className="absolute right-0 top-20 w-64 h-64 bg-primary opacity-5 blur-3xl -z-10" />
      <div className="absolute left-10 bottom-10 w-32 h-32 bg-accent opacity-5 blur-2xl -z-10" />
      <div className="absolute left-1/4 top-1/3 w-16 h-16 bg-dark-lightest rounded-full -z-10" />

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
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.div
            className="underline"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-1 gap-12 items-center justify-items-center"
        >
          {/* Content Column */}
          <motion.div
            className="order-2 justify-center items-center mx-auto max-w-2xl w-full text-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-medium text-primary mb-3"
            >
              Get to know me
            </motion.h3>

            <motion.h4
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold mb-6 text-darkText-primary"
            >
              Passionate{" "}
              <span className="gradient-text">Developer & Designer</span>
            </motion.h4>

            <motion.p
              variants={itemVariants}
              className="text-darkText-secondary mb-6"
            >
              I'm a creative developer with a passion for building beautiful,
              functional projects and applications. I love transforming ideas
              into reality through code, design, and innovation.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-darkText-secondary mb-8"
            >
              My journey began with a fascination for computer and coding,
              followed by curiosity based learning where I've honed my skills in
              primarily python based implementations. I'm passionate about clean
              code, intuitive design, and building applications that solve
              real-world problems.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-darkText-secondary mb-8"
            >
              I develop tools, recreate games and experiment with various tools,
              technologies, concepts and methodologies to gain knowledge and
              experience. I am keen on exploring fields like Cybersecurity,
              Natural Language Processing and Open LLM Architectures.
            </motion.p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 bg-dark">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-dark-lightest p-4 rounded-lg border border-dark-lightest flex flex-col items-center text-center space-y-3 hover:shadow-dark-md transition-all duration-300"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div className="text-primary text-2xl p-3 bg-dark rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-semibold text-darkText-primary mb-2">
                      {item.title}
                    </h5>
                    <p className="text-darkText-secondary text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

