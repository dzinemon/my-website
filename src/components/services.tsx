import React from 'react';
import ServiceCard from './ServiceCard';
import SectionHeading from './SectionHeading';
// Import React Icons
import {
  SiNextdotjs,
  SiGatsby,
  SiReact,
  SiContentful,
  SiGhost,
  SiTailwindcss,
  SiBootstrap,
  SiBulma,
} from 'react-icons/si';
import {
  AiOutlineRobot,
  AiOutlineComment,
  AiOutlineFileText,
  AiOutlineCloud,
} from 'react-icons/ai';
import { BiRefresh, BiShield, BiRocket, BiBuildingHouse } from 'react-icons/bi';

// Service data for consistency and easier maintenance
const servicesData = [
  {
    id: 'web-development',
    title: 'Web Development',
    description:
      'Custom, responsive web solutions with modern technologies. Specializing in fast, SEO-friendly websites and web applications that deliver exceptional user experiences and meet business objectives.',
    items: [
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Gatsby', icon: <SiGatsby /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Static Sites', icon: <BiBuildingHouse /> },
    ],
  },
  {
    id: 'ai-integration',
    title: 'AI Solutions',
    description:
      'Custom AI integrations to enhance your digital products. Leveraging OpenAI, Anthropic, and Perplexity APIs for intelligent applications that transform how your users interact with your business.',
    items: [
      { name: 'RAG Systems', icon: <AiOutlineFileText /> },
      { name: 'Chatbots', icon: <AiOutlineComment /> },
      { name: 'Content Generation', icon: <AiOutlineRobot /> },
    ],
  },
  {
    id: 'cms-integration',
    title: 'CMS Integration',
    description:
      'Seamless content management solutions for easy updates. Empower your team to manage content without technical knowledge, ensuring your website stays fresh and relevant with minimal overhead.',
    items: [
      { name: 'Contentful', icon: <SiContentful /> },
      { name: 'CloudCannon', icon: <AiOutlineCloud /> },
      { name: 'GhostCMS', icon: <SiGhost /> },
    ],
  },
  {
    id: 'ui-design',
    title: 'UI Implementation',
    description:
      'Modern, responsive interfaces with attention to detail. Pixel-perfect implementation of designs with modern CSS frameworks that look great on any device and provide an intuitive user experience.',
    items: [
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'Bootstrap', icon: <SiBootstrap /> },
      { name: 'Bulma', icon: <SiBulma /> },
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description:
      'Ongoing technical support and website improvements. Keep your website running smoothly with regular maintenance, security updates, performance optimizations, and feature enhancements.',
    items: [
      { name: 'Updates', icon: <BiRefresh /> },
      { name: 'Performance', icon: <BiRocket /> },
      { name: 'Security', icon: <BiShield /> },
      { name: 'Features', icon: <AiOutlineFileText /> },
    ],
  },
];

const processSteps = [
  {
    id: 'discovery',
    title: '1. Discovery',
    description: 'Understanding your business needs and project requirements',
    bullets: [
      'Initial consultation to understand your goals',
      'Analysis of current website (if applicable)',
      'Definition of project scope and deliverables',
    ],
  },
  {
    id: 'planning',
    title: '2. Planning & Design',
    description: "Creating a roadmap for your project's success",
    bullets: [
      'Technical architecture planning',
      'Content strategy development',
      'Wireframing and prototyping',
      'Timeline and milestone establishment',
    ],
  },
  {
    id: 'development',
    title: '3. Development',
    description: 'Building your solution with regular updates and feedback',
    bullets: [
      'Iterative development with regular check-ins',
      'Quality assurance and testing',
      'Performance optimization',
      'Responsive design implementation',
    ],
  },
  {
    id: 'launch',
    title: '4. Launch & Support',
    description: 'Successful deployment and ongoing assistance',
    bullets: [
      'Website deployment and testing',
      'SEO verification and optimization',
      'Analytics setup',
      'Handover and training',
      'Ongoing support options',
    ],
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-gradient-to-tr from-gray-50 via-gray-100/30 to-gray-100 dark:from-gray-900 dark:via-gray-900/30 dark:via-gray-900 dark:to-black py-16 lg:py-24"
    >
      <SectionHeading
        title="Services"
        subtitle="Specialized web development and AI integration solutions to transform your digital presence. Combining modern technologies with cutting-edge AI capabilities to create intelligent, responsive, and powerful digital experiences."
        alignment="left"
      />

      {/* Services section */}
      <div className="container max-w-6xl mx-auto px-4">
        <div className="space-y-8">
          <div className="space-y-16">
            {servicesData.map(service => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                items={service.items}
              />
            ))}
          </div>
        </div>

        {/* AI Capabilities section */}
        <div className="mt-32 space-y-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-50 mb-8 transition-colors duration-300">
            AI Capabilities
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-lg p-8 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
              <p className="text-lg text-slate-700 dark:text-slate-100 mb-6 transition-colors duration-300">
                My recent projects showcase expertise in developing advanced AI solutions:
              </p>
              <ul className="space-y-6 list-disc">
                <li className="text-lg text-slate-700 dark:text-slate-100 transition-colors duration-300">
                  <span className="font-semibold">
                    Retrieval-Augmented Generation (RAG) Systems
                  </span>{' '}
                  - Custom knowledge bases that use vector databases (Pinecone) to provide accurate,
                  contextual responses based on your organization's data
                </li>
                <li className="text-lg text-slate-700 dark:text-slate-100 transition-colors duration-300">
                  <span className="font-semibold">AI-Powered Chatbots & Assistants</span> -
                  Intelligent conversational interfaces that understand context and provide helpful
                  responses using OpenAI, Anthropic, and Perplexity APIs
                </li>
                <li className="text-lg text-slate-700 dark:text-slate-100 transition-colors duration-300">
                  <span className="font-semibold">Content Generation Tools</span> - Automated
                  systems for creating engaging content, including viral social media posts and
                  marketing materials
                </li>
                <li className="text-lg text-slate-700 dark:text-slate-100 transition-colors duration-300">
                  <span className="font-semibold">Full-Stack AI Integration</span> - Seamless
                  implementation with Next.js for both frontend and backend, REST API endpoints, and
                  PostgreSQL databases
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* My Process section */}
        <div className="mt-32 space-y-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-50 mb-8 transition-colors duration-300">
            My Process
          </h3>
          <p className="text-lg text-slate-700 dark:text-slate-100 max-w-6xl mx-auto mb-12 transition-colors duration-300">
            A structured approach ensures your project is delivered on time, within budget, and
            meets your expectations.
          </p>
          <div className="space-y-6">
            {processSteps.map(step => (
              <ServiceCard
                key={step.id}
                title={step.title}
                description={step.description}
                isProcess={true}
              >
                <ul className="list-disc ml-5 text-slate-700 dark:text-slate-100 transition-colors duration-300 mt-3">
                  {step.bullets.map((bullet, index) => (
                    <li key={index} className="text-base mb-2">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </ServiceCard>
            ))}
          </div>
        </div>

        {/* How to Hire Me section */}
        <div className="mt-32 space-y-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-50 mb-8 transition-colors duration-300">
            How to Hire Me
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-lg p-8 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
              <p className="text-lg text-slate-700 dark:text-slate-100 mb-6 transition-colors duration-300">
                Ready to start your project? Here's how we can begin working together:
              </p>
              <ol className="list-decimal list-inside space-y-6">
                <li className="text-lg text-slate-700 dark:text-slate-100 transition-colors duration-300">
                  <span className="font-semibold">Get in touch</span> - Reach out through the
                  contact form below with a brief description of your project
                </li>
                <li className="text-lg text-slate-700 dark:text-slate-100 transition-colors duration-300">
                  <span className="font-semibold">Free consultation</span> - We'll schedule a call
                  to discuss your needs in detail
                </li>
                <li className="text-lg text-slate-700 dark:text-slate-100 transition-colors duration-300">
                  <span className="font-semibold">Proposal</span> - I'll provide a detailed proposal
                  with timeline and pricing
                </li>
                <li className="text-lg text-slate-700 dark:text-slate-100 transition-colors duration-300">
                  <span className="font-semibold">Get started</span> - Once approved, we'll begin
                  the development process
                </li>
              </ol>
              <div className="mt-6">
                <a
                  href="/contact/"
                  className="inline-block px-8 py-3 bg-gradient-to-br from-emerald-800 to-emerald-700 text-emerald-50 hover:from-emerald-700 hover:to-emerald-600 dark:from-emerald-50 dark:to-emerald-100 dark:text-emerald-800 dark:hover:from-emerald-100 dark:hover:to-emerald-200 font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Let's Talk About Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
