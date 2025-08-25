import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const experiences = [
  {
    title: "Full Stack Developer",
    company: "weiBlocks",
    company_url: "https://www.linkedin.com/company/wei-blocks/",
    type: "Freelance",
    period: "June 2024 - Present",
    points: [
      "As a skilled MERN Stack Developer at Weiblock, I leverage my expertise in designing and developing scalable, efficient, and visually appealing web applications . With a strong focus on both front-end and back-end development, I excel in crafting seamless user experiences and robust server-side functionality."
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "HTML/CSS","NextJS","Agentic AI"],
  },
  {
    title: "Full Stack Developer",
    company: "TechNetCloud",
    company_url: "https://www.linkedin.com/company/technetcloud/",
    type: "Contract",
    period: "June 2024 - Present",
    points: [
      "Specialized in MERN stack development for client projects",
      "Created full-stack applications with modern architecture",
      "Implemented authentication and authorization systems",
      "Optimized application performance and user experience",
      "Collaborated with design teams for seamless integration"
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "REST APIs","NextJS","JavaScript","HTML/CSS","TypeScript","HTML5","CSS3","Git"]
  },
  {
    title: "Frontend Developer",
    company: "Freelance Projects",
    company_url: "#",
    type: "Project-based",
    period: "October 2023 - Present",
    location: "Remote",
    points: [
      "Developed responsive web applications using React and modern CSS",
      "Implemented interactive user interfaces with smooth animations",
      "Optimized websites for performance and accessibility",
      "Worked with various clients across different industries",
      "Maintained and updated existing web applications"
    ],
    technologies: ["React", "JavaScript", "CSS3", "HTML5", "Responsive Design", "Git","NextJS","JavaScript","HTML/CSS","TypeScript","HTML5","CSS3","Git"]
  }
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}> Where I've Worked</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-sm sm:text-base md:text-lg max-w-4xl leading-relaxed text-center"
        >
          I’m a passionate Full-Stack Developer with strong expertise in the MERN stack and modern web technologies.
I specialize in building accurate and scalable AI agents using the OpenAI Agent SDK.
Skilled in designing n8n workflows, I deliver seamless automation and smart integrations.
My focus is on creating high-quality, reliable web applications with clean architecture.
I consistently deliver solutions that exceed expectations and drive innovation.
        </motion.p>
      </div>

      <div className="mt-16 sm:mt-20 w-full flex justify-center">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16">
          {/* Left Sidebar - Company Selection (slides in from left on scroll) */}
          <motion.div
            className="w-full lg:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-xs">
              {/* Vertical Line Indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-green-500/60"></div>
              
              {/* Company List */}
              <div className="space-y-4 pl-6">
                {experiences.map((experience, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-full text-left transition-all duration-300 ${
                      activeIndex === index 
                        ? 'text-green-400' 
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Active Indicator Line */}
                    {activeIndex === index && (
                      <motion.div
                        className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-green-500"
                        initial={{ width: 0 }}
                        animate={{ width: "1rem" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    <span className="text-sm sm:text-base font-medium">
                      {experience.company}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Experience Details (slides in from right on scroll) */}
          <motion.div
            className="w-full lg:w-2/3 flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full bg-tertiary/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              {/* Job Title */}
              <motion.h3 
                className="text-center lg:text-left text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {experiences[activeIndex].title} @{' '}
                <span className="text-green-400">
                  {experiences[activeIndex].company}
                </span>
              </motion.h3>

              {/* Duration */}
              <motion.p 
                className="text-center lg:text-left text-gray-400 text-sm sm:text-base mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {experiences[activeIndex].period}
              </motion.p>

              {/* Experience Points */}
              <motion.ul 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {experiences[activeIndex].points.map((point, pointIndex) => (
                  <motion.li 
                    key={pointIndex}
                    className="flex items-start gap-3 text-white-100 text-sm sm:text-base leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + pointIndex * 0.1, duration: 0.5 }}
                  >
                    {/* Green Triangle Bullet */}
                    <div className="flex-shrink-0 mt-2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-green-400"></div>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Technologies */}
              <motion.div 
                className="mt-6 pt-6 border-t border-gray-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <h4 className="text-center lg:text-left text-green-400 font-semibold text-sm sm:text-base mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {experiences[activeIndex].technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + techIndex * 0.1, duration: 0.3 }}
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "rgba(34, 197, 94, 0.2)",
                        borderColor: "#22c55e"
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experiences");