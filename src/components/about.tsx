import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50/90 dark:bg-gray-900/90 relative">
      <SectionHeading title="About Me" alignment="left" />

      <div className="container max-w-6xl mx-auto px-4 mb-12 text-left">
        <motion.div
          className=" grid lg:grid-cols-2 lg:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="space-y-6 text-slate-700 dark:text-slate-100">
            <p className="text-base lg:text-lg leading-relaxed">
              I'm Andrii, a Full-Stack Developer with over 8 years of experience crafting
              high-quality, user-focused web applications.
            </p>{' '}
            <p className="text-base lg:text-lg leading-relaxed">
              My expertise spans modern JavaScript frameworks like React and Next.js, as well as
              robust back-end solutions with PostgreSQL and various CMS platforms.
            </p>{' '}
            <p className="text-base lg:text-lg leading-relaxed">
              I have a strong passion for artificial intelligence, regularly integrating advanced AI
              tools and APIs-such as OpenAI and Anthropic-into my projects to create innovative,
              impactful solutions.
            </p>{' '}
          </div>
          <div className="space-y-6 text-slate-700 dark:text-slate-100">
            <p className="text-base lg:text-lg leading-relaxed">
              Driven by curiosity and a commitment to excellence, I thrive on solving complex
              challenges and turning ideas into seamless digital experiences.
            </p>{' '}
            <p className="text-base lg:text-lg leading-relaxed">
              Whether collaborating with teams or leading projects, I bring a detail-oriented
              approach and a dedication to continuous learning in the ever-evolving tech landscape.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
