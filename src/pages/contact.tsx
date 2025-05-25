import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Separator from '../components/common/Separator';
import SocialLinks from '../components/common/SocialLinks';
import Contact from '../components/contact';
import Hero from '../components/hero';
import Layout from '../components/layout';

const ContactPage = ({ location }) => (
  <Layout location={location}>
    <Hero
      title={["Let's", 'Connect']}
      tagline="Ready to Start a Project?"
      description="Have a project in mind or questions about my services? I'd love to hear from you. Let's discuss how I can help bring your ideas to life."
      gradient="bg-gradient-to-br from-gray-100/90 via-gray-300 to-gray-300 dark:from-gray-700/90 dark:via-gray-900 dark:via-gray-900 dark:to-black"
      icon={<EnvelopeIcon className="h-6 w-6 text-slate-800 dark:text-slate-50" />}
    >
      <SocialLinks />
    </Hero>
    <Separator />

    <Contact />
  </Layout>
);

export const Head = () => (
  <>
    <title>Contact | Andrii's Website</title>
    <meta
      name="description"
      content="Get in touch with Andrii for your web development and AI integration needs."
    />
  </>
);

export default ContactPage;
