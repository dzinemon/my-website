import React from 'react';
import Layout from '../components/layout';
import Services from '../components/services';
import OtherServices from '../components/other-services';
import Hero from '../components/hero';
import { WrenchIcon } from '@heroicons/react/24/outline';

const ServicesPage = ({ location }) => (
  <Layout location={location}>
    <Hero
      title={['My Services', 'Offerings']}
      tagline="What I Can Do For You"
      description="I offer a range of web development services tailored to your needs, from responsive websites to complex web applications."
      gradient="bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-700 dark:via-gray-900 dark:to-black"
      icon={<WrenchIcon className="h-6 w-6 text-slate-800 dark:text-slate-50" />}
    />
    <Services />
    <OtherServices />
  </Layout>
);

export const Head = () => (
  <>
    <title>Services | Andrii's Website</title>
    <meta
      name="description"
      content="Web development and AI integration services offered by Andrii."
    />
  </>
);

export default ServicesPage;
