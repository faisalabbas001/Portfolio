import React from 'react'
import Tilt from 'react-parallax-tilt'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ title, subtitle, icon, index }) => {
  return (
    <Tilt
      className="w-[calc(50%-10px)] sm:w-[200px] md:w-[220px] lg:w-[250px]"
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      scale={1}
      transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.4 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card group"
      >
        <div
          className="bg-tertiary rounded-[20px] py-4 sm:py-5 px-3 sm:px-5 lg:px-6 min-h-[160px] sm:min-h-[220px] lg:min-h-[270px] flex justify-evenly items-center flex-col relative overflow-hidden"
        >
          {/* Subtle hover glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/[0.06] group-hover:to-blue-500/[0.06] transition-all duration-500" />

          <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-3">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-purple-500/20 transition-colors duration-300">
              <img
                src={icon}
                alt={title}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-white text-[13px] sm:text-[15px] lg:text-[17px] font-bold text-center leading-tight mt-1">
              {title}
            </h3>
            {subtitle && (
              <p className="text-secondary/80 text-[10px] sm:text-[11px] lg:text-[12px] text-center -mt-1">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Why work with me
        </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[14px] sm:text-[16px] md:text-[17px] max-w-3xl leading-[24px] sm:leading-[28px] md:leading-[30px]"
      >
        I don't just write code — I engineer solutions that drive real business outcomes.
        Whether it's solo-building an AI analytics platform with 14 database models and 12 backend services,
        or architecting a multi-chain crypto escrow system with 11 NestJS microservices — I deliver
        production-grade software that scales from day one.
      </motion.p>

      {/* Expertise cards */}
      <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {[
          {
            label: "Enterprise Architecture",
            stat: "11+",
            statLabel: "Microservices Built",
            techs: ["NestJS", "Kafka", "Docker", "K8s"],
            gradient: "from-purple-500 to-violet-600",
            bgGlow: "bg-purple-500/[0.08]",
            icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
          },
          {
            label: "AI & Automation",
            stat: "3+",
            statLabel: "AI Platforms Shipped",
            techs: ["GPT-4o", "NLP", "Predictive Analytics", "MCP"],
            gradient: "from-blue-500 to-cyan-500",
            bgGlow: "bg-blue-500/[0.08]",
            icon: "M12 2a4 4 0 0 0-4 4c0 1.1.5 2.1 1.2 2.8L4 12l5.2 3.2C8.5 15.9 8 16.9 8 18a4 4 0 1 0 8 0c0-1.1-.5-2.1-1.2-2.8L20 12l-5.2-3.2C15.5 8.1 16 7.1 16 6a4 4 0 0 0-4-4z",
          },
          {
            label: "Full Stack Mastery",
            stat: "30+",
            statLabel: "Components Delivered",
            techs: ["React", "Next.js", "NestJS", "PostgreSQL"],
            gradient: "from-emerald-500 to-teal-500",
            bgGlow: "bg-emerald-500/[0.08]",
            icon: "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2M12 2v8m-3-4h6M7 10H3v4h4M21 10h-4v4h4M7 14v4M17 14v4",
          },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
            className={`relative overflow-hidden rounded-2xl border border-white/[0.06] ${item.bgGlow} p-4 sm:p-5 group hover:border-white/[0.12] transition-all duration-500 cursor-default`}
          >
            {/* Gradient accent line at top */}
            <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

            {/* Icon + Label */}
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon} />
                </svg>
              </div>
              <div>
                <h4 className="text-white text-[13px] sm:text-[15px] font-bold leading-tight">{item.label}</h4>
              </div>
            </div>

            {/* Stat */}
            <div className="flex items-baseline gap-2 mb-3">
              <span className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                {item.stat}
              </span>
              <span className="text-secondary text-[11px] sm:text-[13px] font-medium">{item.statLabel}</span>
            </div>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-1.5">
              {item.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.06] text-secondary text-[10px] sm:text-[11px] font-medium group-hover:border-white/[0.12] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Service cards */}
      <div className="mt-8 sm:mt-14 lg:mt-20 flex flex-wrap gap-4 xs:gap-5 sm:gap-6 lg:gap-8 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
