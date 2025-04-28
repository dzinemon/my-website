import React from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import Separator from '../components/common/Separator';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Projects from '../components/projects';

const ProjectsPage = ({ location }) => (
  <Layout location={location}>
    <Hero
      title={['My Projects', 'Portfolio']}
      tagline="Showcasing My Work"
      description="Explore my portfolio of web development and AI integration projects, highlighting my technical skills and creative solutions."
      gradient="bg-gradient-to-br from-gray-100/90 via-gray-300 to-gray-300 dark:from-gray-700/90 dark:via-gray-900 dark:via-gray-900 dark:to-black"
      icon={<CodeBracketIcon className="h-6 w-6 text-slate-800 dark:text-slate-50" />}
    />
    <Separator />
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
