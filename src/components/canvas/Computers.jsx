import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Computers = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    "Frontend Development",
    "Backend Development", 
    "Full Stack Development",
    "Mobile Development",
    "AI Agents Development"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden px-2 sm:px-4">
      <div className="relative w-full max-w-full">
        {texts.map((text, index) => (
          <motion.div
            key={text}
            className="absolute w-full text-center px-2"
            initial={{ 
              x: "100%", 
              opacity: 0,
              scale: 0.8
            }}
            animate={{ 
              x: index === currentTextIndex ? "0%" : index < currentTextIndex ? "-100%" : "100%",
              opacity: index === currentTextIndex ? 1 : 0,
              scale: index === currentTextIndex ? 1 : 0.8
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeInOut",
              type: "spring",
              stiffness: 100
            }}
          >
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-900 to-[#915eff] bg-clip-text text-transparent leading-relaxed break-words hyphens-auto">
              {text}
            </h1>

          </motion.div>
        ))}
      </div>
      
    </div>
  );
};

export default Computers;