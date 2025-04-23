import { motion } from 'framer-motion';
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();
  
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
      });
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 60,
        damping: 12
      }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        delay: 0.6
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.95 }
  };
  
  const scrollArrowVariants = {
    initial: { y: 0, opacity: 0.7 },
    animate: {
      y: [0, 10, 0],
      opacity: [0.7, 1, 0.7],
      transition: {
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        },
        opacity: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }
      }
    },
    hover: { 
      scale: 1.2, 
      opacity: 1,
      y: 5,
      transition: { type: "spring", stiffness: 300 }
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-700 to-secondary-800 dark:from-neutral-900 dark:to-primary-900 px-4 transition-colors duration-500">
      <div className="container max-w-5xl mx-auto">
        <motion.div 
          className="text-center py-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Hi! I am <motion.span 
              className={`text-primary-300 ${isDark ? 'dark:text-primary-400' : ''}`}
              whileHover={{ 
                scale: 1.05, 
                color: isDark ? "#93c5fd" : "#60a5fa",
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              Andrii
            </motion.span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="mt-4 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            I provide innovative solutions for your web presence
          </motion.p>
          
          <motion.div 
            className="mt-8"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.a 
              className="inline-block text-white py-3 px-8 font-semibold bg-primary-600 hover:bg-primary-500 dark:bg-primary-700 dark:hover:bg-primary-600 rounded-lg transition-all duration-300"
              href="#contact"
              onClick={handleSmoothScroll}
            >
              Get in touch
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block"
            variants={scrollArrowVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <motion.a 
              href="#services" 
              className="text-white/70 hover:text-white transition-colors duration-300"
              onClick={handleSmoothScroll}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero