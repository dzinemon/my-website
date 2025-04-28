import React from 'react';
import { WrenchIcon } from '@heroicons/react/24/outline';
import Separator from '../components/common/Separator';
import Hero from '../components/hero';
import Layout from '../components/layout';
import OtherServices from '../components/other-services';
import Services from '../components/services';

const ServicesPage = ({ location }) => (
  <Layout location={location}>
    <Hero
      title={['My Services', 'Offerings']}
      tagline="What I Can Do For You"
      description="I offer a range of web development services tailored to your needs, from responsive websites to complex web applications."
      gradient="bg-gradient-to-br from-gray-100/90 via-gray-300 to-gray-300 dark:from-gray-700/90 dark:via-gray-900 dark:via-gray-900 dark:to-black"
      icon={<WrenchIcon className="h-6 w-6 text-slate-800 dark:text-slate-50" />}
    />
    <Separator />
    <Services />
    {/* <OtherServices /> */}
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
