import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, alignment = 'left' }) => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 12,
      },
    },
  };

  const alignmentClasses = alignment === 'center' ? 'text-center' : 'text-left';

  return (
    <motion.div
      className={`container max-w-6xl mx-auto px-4 mb-12 ${alignmentClasses}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-50 mb-4"
        variants={itemVariants}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="text-lg md:text-xl text-slate-700 dark:text-slate-100 max-w-2xl"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
