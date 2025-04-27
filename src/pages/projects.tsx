import React from 'react';
import Layout from '../components/layout';
import Projects from '../components/projects';
import Hero from '../components/hero';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const ProjectsPage = ({ location }) => (
  <Layout location={location}>
    <Hero
      title={['My Projects', 'Portfolio']}
      tagline="Showcasing My Work"
      description="Explore my portfolio of web development and AI integration projects, highlighting my technical skills and creative solutions."
      gradient="bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-700 dark:via-gray-900 dark:to-black"
      icon={<CodeBracketIcon className="h-6 w-6 text-slate-800 dark:text-slate-50" />}
    />
    <Projects />
  </Layout>
);

export const Head = () => (
  <>
    <title>Projects | Andrii's Website</title>
    <meta name="description" content="View my recent development work and projects." />
  </>
);

export default ProjectsPage;
