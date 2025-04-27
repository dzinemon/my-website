import { motion } from 'framer-motion';
import React from 'react';

// Define types for the simplified Hero component props
interface HeroProps {
  title: string | string[];
  tagline: string;
  description: string;
  gradient?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  title,
  tagline,
  description,
  gradient = 'from-gray-100 to-gray-300 dark:from-gray-700 dark:via-gray-900 dark:to-black/10',
  icon,
  children,
}) => {
  // Convert title to array format if it's a string
  const titleLines = Array.isArray(title) ? title : [title];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 12,
      },
    },
  };

  return (
    <div className="bg-cell-dark dark:bg-cell-light bg-cell bg-cell bg-center">
      <div
        className={`min-h-80 flex items-center justify-center ${gradient} px-4 transition-colors duration-500 pt-36 pb-24`}
      >
        <div className="container max-w-6xl mx-auto">
          <motion.div
            className="relative z-10 max-w-screen-lg"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tagline with icon */}
            <motion.h4
              variants={itemVariants}
              className="text-sm md:text-base font-medium text-slate-700 dark:text-slate-100 mb-3 flex items-center"
            >
              {icon && <span className="mr-2">{icon}</span>}
              {tagline}
            </motion.h4>
            {/* Main title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 dark:text-slate-50 mb-6 leading-tight"
            >
              {titleLines.map((line, i) => (
                <React.Fragment key={i}>
                  {line && line.includes('Andrii') ? (
                    <>
                      {line.split('Andrii')[0]}
                      <motion.span
                        className="text-emerald-800 dark:text-emerald-200"
                        whileHover={{
                          scale: 1.05,
                          transition: { type: 'spring', stiffness: 300 },
                        }}
                      >
                        Andrii
                      </motion.span>
                      {line.split('Andrii')[1]}
                    </>
                  ) : (
                    line
                  )}
                  {i < titleLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </motion.h1>
            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-700 dark:text-slate-100 max-w-2xl"
            >
              {description}
            </motion.p>
            {/* Children - for social links etc. */}
            {children && (
              <motion.div variants={itemVariants} className="mt-6">
                {children}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
