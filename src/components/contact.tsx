import { motion } from 'framer-motion';
import React from 'react';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      backgroundColor: '#1F2937',
      color: '#fff',
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div
      id="contact"
      className="bg-gradient-to-tr from-gray-50 via-gray-100/30 to-gray-100 dark:from-gray-900 dark:via-gray-900/30 dark:via-gray-900 dark:to-black py-16 lg:py-24"
    >
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a question or want to work together? Fill out the form below!"
        alignment="left"
      />

      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          className="w-full md:w-2/3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <form
            id="contact-form"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
            className="space-y-6"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <motion.div variants={itemVariants}>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-slate-800 dark:text-slate-100 mb-2 transition-colors duration-300"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="h-12 bg-gray-100 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 focus:border-emerald-600 dark:focus:border-emerald-400 border-2 border-gray-300 dark:border-gray-600 p-3 form-input block w-full rounded-md text-slate-800 dark:text-slate-100 transition duration-200 ease-in-out"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-slate-800 dark:text-slate-100 mb-2 transition-colors duration-300"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="h-12 bg-gray-100 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 focus:border-emerald-600 dark:focus:border-emerald-400 border-2 border-gray-300 dark:border-gray-600 p-3 form-input block w-full rounded-md text-slate-800 dark:text-slate-100 transition duration-200 ease-in-out"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-slate-800 dark:text-slate-100 mb-2 transition-colors duration-300"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                className="bg-gray-100 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 focus:border-emerald-600 dark:focus:border-emerald-400 border-2 border-gray-300 dark:border-gray-600 p-3 form-input block w-full rounded-md text-slate-800 dark:text-slate-100 transition duration-200 ease-in-out"
              ></textarea>
            </motion.div>
            <motion.div variants={itemVariants} className="pt-2">
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="py-3 px-8 rounded-md font-bold transition-all duration-300 bg-gradient-to-br from-emerald-800 to-emerald-700 text-emerald-50 hover:from-emerald-700 hover:to-emerald-600 dark:from-emerald-50 dark:to-emerald-100 dark:text-emerald-800 dark:hover:from-emerald-100 dark:hover:to-emerald-200 shadow-md hover:shadow-lg"
                type="submit"
              >
                Send Message
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
