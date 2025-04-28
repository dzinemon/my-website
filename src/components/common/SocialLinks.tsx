import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center space-x-4 text-slate-700 dark:text-slate-200 ${className}`}>
      <span className="text-sm md:text-base">Find me on:</span>
      <motion.a
        href="https://twitter.com/andriisharapatov"
        target="_blank"
        rel="noreferrer"
        // whileHover={{ scale: 1.1 }}
        className="text-blue-500 hover:text-blue-600 dark:text-blue-200 dark:hover:text-blue-400 transition-colors flex items-center group"
      >
        <FaTwitter />
        <span className="max-w-0 group-hover:pl-0.5 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out">
          Twitter
        </span>
      </motion.a>
      <motion.a
        href="https://github.com/dzinemon"
        target="_blank"
        rel="noreferrer"
        // whileHover={{ scale: 1.1 }}
        className="text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white transition-colors flex items-center group"
      >
        <FaGithub />
        <span className="max-w-0 group-hover:pl-0.5 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out">
          Github
        </span>
      </motion.a>
      <motion.a
        href="https://linkedin.com/in/andrii-sharapatov"
        target="_blank"
        rel="noreferrer"
        // whileHover={{ scale: 1.1 }}
        className="text-blue-700 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-500 transition-colors flex items-center group"
      >
        <FaLinkedin />
        <span className="max-w-0 group-hover:pl-0.5 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out">
          LinkedIn
        </span>
      </motion.a>
    </div>
  );
};

export default SocialLinks;
