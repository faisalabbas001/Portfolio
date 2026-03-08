import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const experiences = [
  {
    title: "Full Stack Developer",
    company: "weiBlocks",
    company_url: "https://www.linkedin.com/company/wei-blocks/posts/?feedView=all",
    type: "Freelance",
    period: "June 2024 — Present",
    highlight: "Shipped 3 production apps in 6 months",
    points: [
      "Architected and shipped a multi-chain crypto escrow platform with 11 NestJS microservices, Kafka event pipeline, and real-time dispute resolution — handling secure P2P transactions across 5 blockchains",
      "Built an AI-powered floor plan generator using GPT-4o that converts text descriptions into professional architectural drawings with 2D/3D views and DXF export",
      "Designed event-driven microservices architecture with Docker containerization, JWT auth, and role-based access control — ensuring zero downtime deployments",
      "Integrated Agentic AI workflows using MCP servers and OpenAI SDK for intelligent automation across client projects",
    ],
    technologies: ["React", "Next.js", "NestJS", "TypeScript", "Kafka", "Docker", "PostgreSQL", "OpenAI", "Agentic AI"],
  },
  {
    title: "Full Stack Developer",
    company: "TechNetCloud",
    company_url: "https://www.linkedin.com/company/technetcloud/posts/?feedView=all",
    type: "Contract",
    period: "June 2024 — Present",
    highlight: "14 DB models · 12 backend services",
    points: [
      "Solo-built SAFE-Bridge — an AI Academic Intelligence Platform with 14 database models, 12 Express.js services, and 30+ React components from scratch",
      "Implemented GPT-4o-mini powered real-time feedback classification with custom Psychological Safety Index (PSI) algorithm and predictive analytics",
      "Engineered 3-language support (English, Urdu, Arabic RTL) with statistical outlier detection using IQR method for department-level analytics",
      "Delivered production-ready codebase with Prisma ORM, Zustand state management, and comprehensive audit trail logging",
    ],
    technologies: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma", "OpenAI", "Zustand", "Tailwind CSS"]
  },
  {
    title: "Frontend Developer",
    company: "Freelance",
    company_url: "#",
    type: "Remote",
    period: "October 2023 — Present",
    highlight: "100% client satisfaction rate",
    points: [
      "Delivered pixel-perfect, mobile-first web applications for startups and agencies — consistently exceeding client expectations on quality and timeline",
      "Built interactive gaming platforms and donation platforms using Next.js with server-side rendering, achieving sub-2s load times",
      "Implemented complex UI systems including real-time data dashboards, interactive charts with Recharts, and smooth Framer Motion animations",
      "Established reusable component libraries and design systems that reduced development time by 40% across subsequent projects",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Responsive Design"]
  }
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Real projects, real impact</p>
        <h2 className={`${styles.sectionHeadText}`}>Experience.</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-sm sm:text-base md:text-[17px] max-w-3xl leading-relaxed"
        >
          From 11-microservice crypto platforms to AI-powered analytics systems — every role
          has been an opportunity to ship production-grade software that solves real problems.
          I don’t just write code; I architect scalable systems, integrate cutting-edge AI,
          and deliver results that move the needle.
        </motion.p>
      </div>

      <div className="mt-10 sm:mt-16 md:mt-20 w-full flex justify-center">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-stretch gap-4 sm:gap-8 lg:gap-16">
          {/* Left Sidebar - Company Selection (slides in from left on scroll) */}
          <motion.div
            className="w-full lg:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Horizontal tabs on mobile, vertical list on lg+ */}
            <div className="relative w-full lg:max-w-xs">
              {/* Horizontal tab bar on mobile */}
              <div className="flex lg:hidden gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {experiences.map((experience, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${
                      activeIndex === index
                        ? 'bg-purple-500/15 border-purple-500/40 text-purple-400'
                        : 'bg-transparent border-gray-700/50 text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    {experience.company}
                  </button>
                ))}
              </div>

              {/* Vertical list on lg+ */}
              <div className="hidden lg:block">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-purple-500/60"></div>
                <div className="space-y-4 pl-6">
                  {experiences.map((experience, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`relative w-full text-left transition-all duration-300 ${
                        activeIndex === index
                          ? 'text-purple-400'
                          : 'text-gray-400 hover:text-gray-300'
                      }`}
                      whileHover={{ x: 6 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {activeIndex === index && (
                        <motion.div
                          className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-[#915eff]"
                          initial={{ width: 0 }}
                          animate={{ width: "1rem" }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      <div>
                        <span className="text-base font-medium block">
                          {experience.company}
                        </span>
                        <span className="text-[11px] text-gray-500 font-normal">
                          {experience.type}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
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
              className="w-full bg-tertiary/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50"
            >
              {/* Highlight badge */}
              {experiences[activeIndex].highlight && (
                <motion.div
                  className="flex justify-center lg:justify-start mb-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05, duration: 0.4 }}
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#915eff]/10 border border-purple-500/25 text-purple-400 text-[11px] sm:text-xs font-semibold">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                    {experiences[activeIndex].highlight}
                  </span>
                </motion.div>
              )}

              {/* Job Title */}
              <motion.h3
                className="text-center lg:text-left text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {experiences[activeIndex].title} @{' '}
                {experiences[activeIndex].company_url && experiences[activeIndex].company_url !== "#" ? (
                  <a
                    href={experiences[activeIndex].company_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors underline decoration-purple-400/30 hover:decoration-purple-400/60"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {experiences[activeIndex].company}
                  </a>
                ) : (
                  <span className="text-purple-400">
                    {experiences[activeIndex].company}
                  </span>
                )}
              </motion.h3>

              {/* Duration + Type */}
              <motion.div
                className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="text-gray-400 text-sm sm:text-base">{experiences[activeIndex].period}</span>
                <span className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-secondary text-[11px] sm:text-xs font-medium">
                  {experiences[activeIndex].type}
                </span>
              </motion.div>

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
                    <div className="flex-shrink-0 mt-2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-purple-400"></div>
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
                <h4 className="text-center lg:text-left text-purple-400 font-semibold text-sm sm:text-base mb-3">
                  Tech Stack Used
                </h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {experiences[activeIndex].technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-[#915eff]/10 text-purple-400 text-xs rounded-full border border-purple-500/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + techIndex * 0.1, duration: 0.3 }}
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "rgba(139, 92, 246, 0.2)",
                        borderColor: "#915eff"
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