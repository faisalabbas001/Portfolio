import React from 'react'
import Tilt from 'react-tilt'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45, 
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
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
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
I am a proficient Full-Stack Developer dedicated to creating scalable, high-performance web applications. Skilled in frontend and backend technologies, I deliver user-centric digital solutions that balance functionality, performance, and elegant design.

I specialize in Agentic AI, developing intelligent agents and automation solutions to address complex challenges. My expertise in blockchain technology enables me to integrate secure, decentralized systems into innovative applications.

A proactive problem-solver, I thrive in collaborative, innovative settings and am eager to apply my skills in full-stack development, AI, and blockchain to deliver impactful solutions for forward-thinking organizations.       </motion.p>

      <div className="mt-20 gap-10 flex flex-wrap">
        {services.map((service, index) => (  
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about")