import React from 'react';
import { motion } from 'framer-motion';

const Separator: React.FC = () => {
  return (
    <motion.div
      className="h-px bg-gradient-to-r from-gray-300 via-emerald-600 via-emerald-500 via-emerald-400 via-emerald-300 via-emerald-100 via-emerald-300 via-gray-100 to-gray-100 dark:from-gray-800 dark:via-emerald-200 dark:via-emerald-300 dark:via-gray-900 dark:to-gray-900/90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default Separator;
