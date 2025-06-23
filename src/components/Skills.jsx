import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaFlask,
  FaRobot,
  FaChartBar,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiCplusplus,
  SiC,
  SiSqlite,
  SiFlutter,
  SiStreamlit,
  SiSourceforge,
  SiAnaconda,
  SiArduino,
  SiVirustotal,
} from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  // Skill data
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: <FaPython />, level: 90 },
        { name: "C++", icon: <SiCplusplus />, level: 85 },
        { name: "C Programming", icon: <SiC />, level: 80 },
        { name: "SQL", icon: <SiSqlite />, level: 80 },
        { name: "JavaScript", icon: <FaJs />, level: 85 },
        { name: "HTML5", icon: <FaHtml5 />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
        { name: "Flutter", icon: <SiFlutter />, level: 65 },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Mongo DB", icon: <SiMongodb />, level: 85 },
        { name: "Flask", icon: <FaFlask />, level: 75 },
        { name: "Streamlit", icon: <SiStreamlit />, level: 80 },
        { name: "React", icon: <FaReact />, level: 85 },
        { name: "Firebase", icon: <SiFirebase />, level: 80 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 75 },
      ],
    },
    {
      title: "Fields of Expertise",
      skills: [
        { name: "Data Science", icon: <SiVirustotal />, level: 90 },
        { name: "LLM's", icon: <FaRobot />, level: 80 },
        { name: "Machine Learning", icon: <SiSourceforge />, level: 80 },
        { name: "Deep Learning", icon: <SiAnaconda />, level: 85 },
        {
          name: "Internet of Things",
          icon: <SiArduino />,
          level: 90,
        },
        { name: "Data Visualization", icon: <FaChartBar />, level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-dark relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute -right-20 top-20 w-96 h-96 bg-primary opacity-5 blur-3xl -z-10" />
      <div className="absolute -left-10 bottom-10 w-64 h-64 bg-accent opacity-5 blur-2xl -z-10" />
      <div className="absolute left-1/3 top-1/2 w-20 h-20 bg-primary opacity-5 blur-xl -z-10" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnptLTI0IDBoNnY2aC02di02em0wLTEyaDZ2NmgtNnYtNnptMTIgMGg2djZoLTZ2LTZ6bTEyIDBoNnY2aC02di02em0tMjQtMTJoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnptMTIgMGg2djZoLTZ2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5 -z-10"></div>

      <div className="container mx-auto px-4 md:px-6 bg-dark">
        {/* Section Title */}
        <div className="section-title">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-primary">Skills</span>
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
            I've accumulated experience in various technologies and frameworks
            across the stack. Here are the skills I've been focussing on
            recently.
          </motion.p>
        </div>

        {/* Skills Container */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              className="bg-dark/50 backdrop-blur-sm border-[0.5px] border-gray-800/50 rounded-xl shadow-dark-md p-6 hover:shadow-dark-lg transition-all duration-300 relative"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                borderColor: "rgba(124, 77, 255, 0.2)",
              }}
            >
              {/* Add subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-transparent rounded-xl" />

              <h3 className="text-xl font-bold mb-5 text-darkText-primary relative z-10">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillItemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-primary text-xl mr-2">
                          {skill.icon}
                        </span>
                        <span className="font-medium text-darkText-primary">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-darkText-secondary">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-dark rounded-full h-2.5">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full relative"
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: 0.2 + skillIndex * 0.1,
                        }}
                      >
                        {/* Glow effect for progress bar */}
                        <div className="absolute inset-0 rounded-full bg-primary opacity-30 blur-sm"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional tools tags */}
        <motion.div
          className="mt-12 relative bg-dark/50 backdrop-blur-sm border-[0.5px] border-gray-800/50 rounded-xl shadow-dark-md px-6 py-8 flex flex-col items-center overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-transparent rounded-xl pointer-events-none" />
          <h3 className="text-xl font-semibold mb-6 text-center text-darkText-primary relative z-10">
            Other Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 relative z-10">
            {[
              "Git",
              "GitHub",
              "FastAPI",
              "LangChain",
              "Next.js",
              "Postman",
              "Responsive Web Design",
              "Netlify",
            ].map((tool, index) => (
              <motion.span
                key={index}
                className="bg-primary bg-opacity-10 text-primary px-4 py-1 rounded-full text-sm font-medium border border-primary border-opacity-20"
                whileHover={{
                  y: -4,
                  scale: 1.05,
                  boxShadow: "0 4px 10px rgba(124, 77, 255, 0.2)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
