import React from 'react';
import { HomeIcon } from '@heroicons/react/24/outline';
import Separator from '../components/common/Separator';
import About from '../components/about';
import SocialLinks from '../components/common/SocialLinks';
import Hero from '../components/hero';
import Layout from '../components/layout';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Hero
      title={['Hi! I am', 'Andrii']}
      tagline="Full Stack Web Developer"
      description="I build modern websites and applications with cutting-edge technologies, focusing on performance and user experience."
      gradient="bg-gradient-to-br from-gray-100/90 via-gray-300 to-gray-300 dark:from-gray-700/90 dark:via-gray-900 dark:via-gray-900 dark:to-black"
      icon={<HomeIcon className="h-6 w-6 text-slate-800 dark:text-slate-50" />}
    >
      <SocialLinks />
    </Hero>
    <Separator />
    <About />
  </Layout>
);

export const Head = () => (
  <>
    <title>Home | Andrii's Website</title>
    <meta
      name="description"
      content="Welcome to Andrii's personal website. Explore my background, projects, services, and more."
    />
  </>
);

export default IndexPage;
