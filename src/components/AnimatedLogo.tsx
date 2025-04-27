import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedLogoProps {
  className?: string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ className = '' }) => {
  // Animation variant for the polyline path
  const pathVariant = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          type: 'spring',
          duration: 2,
          bounce: 0,
        },
        opacity: { duration: 0.1 },
      },
    },
  };

  // Animation for the fill (progress bar from bottom)
  const fillVariant = {
    hidden: { scaleY: 0, originY: 1, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 1.7, // Start after the path is drawn
        ease: 'easeInOut',
      },
    },
  };

  // Animation for the entire SVG
  const svgVariants = {
    hidden: { opacity: 0, backgroundColor: 'transparent', borderRadius: '0%' },
    visible: {
      opacity: 1,
      backgroundColor: 'transparent',
      borderRadius: '50%',
      transition: {
        duration: 0.3,
        delay: 0.1,
        backgroundColor: {
          delay: 2.6, // Wait for fill animation to complete (1.7 delay + 0.8 duration + 0.1 buffer)
          duration: 0.5,
        },
        borderRadius: {
          delay: 2.6, // Wait for fill animation to complete (1.7 delay + 0.8 duration + 0.1 buffer)
          duration: 0.5,
          ease: 'easeInOut',
        },
      },
    },
  };

  // Background color animation that appears after fill
  const backgroundVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 2.6, // Start after fill animation completes (1.7 delay + 0.8 duration + 0.1 buffer)
      },
    },
  };

  // Animation for the 'A' letter that appears at the end of all animations
  const letterVariant = {
    hidden: {
      opacity: 0,
      scale: 0.7,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 3.1, // Start after border radius completes (2.6 + 0.5)
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      className={`${className} transition-colors`}
      initial="hidden"
      animate="visible"
      variants={svgVariants}
      style={{ overflow: 'hidden' }} // Ensures the border-radius works properly
    >
      {/* Background that animates after fill completes */}
      <motion.rect
        x="0"
        y="0"
        width="36"
        height="36"
        initial="hidden"
        animate="visible"
        variants={backgroundVariant}
        className="fill-emerald-50/20 dark:fill-emerald-900/20"
      />

      {/* Progress bar fill that animates from bottom to top */}
      <motion.rect
        x="0"
        y="0"
        width="36"
        height="36"
        initial="hidden"
        animate="visible"
        variants={fillVariant}
        className="fill-emerald-700 dark:fill-emerald-50"
      />

      {/* Square drawn as a single polyline */}
      <motion.polyline
        points="0,0 36,0 36,36 0,36 0,0"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="1"
        initial="hidden"
        animate="visible"
        variants={pathVariant}
        className="stroke-emerald-700 dark:stroke-emerald-50"
      />

      {/* 'A' letter in the center that appears at the end of the animation */}
      <motion.text
        x="18"
        y="18"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="22"
        fontWeight="bold"
        initial="hidden"
        animate="visible"
        variants={letterVariant}
        className="f dark:fill-emerald-700 fill-emerald-50"
      >
        A
      </motion.text>
    </motion.svg>
  );
};

export default AnimatedLogo;
