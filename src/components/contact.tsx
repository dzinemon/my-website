import { motion } from 'framer-motion'
import React from 'react'

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  }

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      backgroundColor: "#1F2937",
      color: "#fff",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  }

  return (
    <div id="contact" className="container max-w-5xl mx-auto rounded-lg shadow-lg bg-white dark:bg-neutral-800 px-6 py-24 my-12 transition-colors duration-300">
      <motion.div 
        className="w-full md:w-2/3 mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="font-bold text-gray-900 dark:text-neutral-100 text-3xl sm:text-4xl mb-4 transition-colors duration-300">Get In Touch</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 dark:text-neutral-300 transition-colors duration-300">
            Have a question or want to work together? Fill out the form below!
          </p>
        </motion.div>
        
        <motion.form 
          id="contact" 
          method="post" 
          netlify-honeypot="bot-field" 
          data-netlify="true" 
          name="contact"
          className="space-y-6"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
        
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-2 transition-colors duration-300">
              Your Name
            </label>
            <motion.input 
              whileFocus={{ scale: 1.01 }}
              type="text" 
              name="name" 
              id="name"
              className="h-12 bg-gray-100 dark:bg-neutral-700 focus:bg-white dark:focus:bg-neutral-600 focus:border-indigo-600 dark:focus:border-indigo-500 border-2 border-gray-300 dark:border-neutral-500 p-3 form-input block w-full rounded-md text-neutral-800 dark:text-neutral-200 transition duration-200 ease-in-out"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-2 transition-colors duration-300">
              Your Email
            </label>
            <motion.input 
              whileFocus={{ scale: 1.01 }}
              type="email" 
              name="email" 
              id="email"
              required
              className="h-12 bg-gray-100 dark:bg-neutral-700 focus:bg-white dark:focus:bg-neutral-600 focus:border-indigo-600 dark:focus:border-indigo-500 border-2 border-gray-300 dark:border-neutral-500 p-3 form-input block w-full rounded-md text-neutral-800 dark:text-neutral-200 transition duration-200 ease-in-out"
            />
          </motion.div>
        
          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="block text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-2 transition-colors duration-300">
              Message
            </label>
            <motion.textarea 
              whileFocus={{ scale: 1.01 }}
              name="message" 
              id="message"
              rows={5}
              className="bg-gray-100 dark:bg-neutral-700 focus:bg-white dark:focus:bg-neutral-600 focus:border-indigo-600 dark:focus:border-indigo-500 border-2 border-gray-300 dark:border-neutral-500 p-3 form-input block w-full rounded-md text-neutral-800 dark:text-neutral-200 transition duration-200 ease-in-out"
            ></motion.textarea>
          </motion.div>
          
          <motion.div variants={itemVariants} className="pt-2">
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="py-3 px-8 rounded-md font-bold border-2 border-gray-800 dark:border-neutral-500 bg-white dark:bg-neutral-700 text-gray-800 dark:text-neutral-200 transition-all duration-300 shadow-md"
              type="submit"
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  )
}

export default Contact