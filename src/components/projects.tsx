import React, { useState, Fragment } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon, XMarkIcon } from '@heroicons/react/20/solid';
import SectionHeading from './SectionHeading';

// Define interface for Project type
interface Project {
  title: string;
  dateStarted: Date;
  dateEnded?: Date;
  links?: Array<{
    text: string;
    url: string;
  }>;
  description?: string;
  technologies?: string[];
  tools?: string[];
  association?: string;
}

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  // Helper function to extract technologies from description
  const extractTechnologies = (description?: string): string[] => {
    if (!description) return [];

    // Common technologies to look for
    const techKeywords = [
      'React',
      'Gatsby',
      'Next.js',
      'Next js',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'GraphQL',
      'Contentful CMS',
      'Ghost CMS',
      'CMS',
      'Bootstrap',
      'Tailwind',
      'Tailwind CSS',
      'CSS',
      'HTML',
      'Jekyll',
      'Hugo',
      'AJAX',
      'jQuery',
      'Netlify',
      'GitHub',
      'API',
      'Bulma',
      'Gulp',
      'Handlebars',
      'Handlebars.js',
      'Markdown',
      'Liquid',
      'YAML',
      'SEO',
      'Tag Manager',
      'JAMstack',
      'Python',
      'WordPress',
      'Wordpress',
      'Cloudcannon CMS',
      'Sanity CMS',
    ];

    // Find all technologies mentioned in the description
    const foundTech: string[] = [];

    techKeywords.forEach(tech => {
      // Case insensitive search but preserve original case for display
      if (description.toLowerCase().includes(tech.toLowerCase()) && !foundTech.includes(tech)) {
        foundTech.push(tech);
      }
    });

    // Replace all Bootstrap versions with just "Bootstrap"
    if (description.toLowerCase().includes('bootstrap')) {
      // Make sure we only have one Bootstrap entry
      const bootstrapIndex = foundTech.findIndex(tech => tech.toLowerCase().includes('bootstrap'));

      if (bootstrapIndex !== -1) {
        // Replace any Bootstrap version with just "Bootstrap"
        foundTech[bootstrapIndex] = 'Bootstrap';
      }
    }

    return foundTech;
  };

  // Helper function to identify marketing/analytics tools
  const isMarketingOrAnalyticsTool = (tech: string): boolean => {
    const marketingAndAnalyticsTools = [
      'Google Analytics',
      'Tag Manager',
      'Google Tag Manager',
      'Google Optimize',
      'Google Search Console',
      'Google Google Search Console',
      'SEO',
      'Deepcrawl',
      'Screaming Frog',
      'Google Webmaster Tools',
      'Google Charts',
      'Web Accessibility',
      'Formkeep',
    ];

    return marketingAndAnalyticsTools.some(tool => tech.toLowerCase().includes(tool.toLowerCase()));
  };

  // Array of all projects from LinkedIn with technologies extracted from descriptions
  const allProjects: Project[] = [
    {
      title: 'RAG for Answering Questions, Ai Tool, Chat bot / assistant',
      dateStarted: new Date('2024-06-01'),
      dateEnded: new Date('2024-09-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://kruze-ai-agent.vercel.app/',
        },
      ],
      description:
        'Implemented RAG for Answering Questions functionality based on client knowledge base, using Pincone Vector DB, OpenAi, Anthropic, Perplexity APIs for chat completions, and Next.js for the frontend and backend, REST API endpoints, Posgtgres for DB. Implemented content generation tool and viral post generator for social media. Chat functionality with RAG.',
      technologies: [
        'Pinecone',
        'OpenAi API',
        'Anthropic API',
        'Perplexity API',
        'Next.js',
        'React',
        'Tailwind CSS',
        'Postgres',
        'REST API',
      ],
      association: 'Freelance Web Development',
    },
    {
      title: 'AI Chat bot / assistant',
      dateStarted: new Date('2024-01-01'),
      dateEnded: new Date('2024-02-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://assist.xaqt.com/',
        },
      ],
      description:
        'Implemented AI Chat bot with login functionality, using Next.js, REST API, and Tailwind CSS.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'OpenAI API', 'WebSockets', 'REST API'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Velocity Virtual Agent',
      dateStarted: new Date('2024-02-01'),
      dateEnded: new Date('2024-05-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://velocity.xaqt.com/',
        },
      ],
      description: 'Implemented Figma design using Next.js, Tailwind CSS,REST API, and WebSockets.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'WebSockets', 'REST API'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Marketing website',
      dateStarted: new Date('2021-09-01'),
      dateEnded: new Date('2021-11-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://phylum.io/',
        },
      ],
      description:
        'Implemented design into code Phylum Marketing website, built using: · Static site generator built on top of Node.js using React and GraphQL - Gatsby. · Headless CMS - Contentful CMS · Open source CSS framework - Tailwind CSS',
      technologies: ['Gatsby', 'Ghost CMS', 'React', 'GraphQL'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Hub website for Meltano',
      dateStarted: new Date('2023-04-01'),
      dateEnded: new Date('2023-05-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://meltano-hub-staging.netlify.app/',
        },
      ],
      description:
        'Implemented Figma design into code for Meltano Hub website, built using: · Static site generator built on top of Node.js using React and GraphQL - Gatsby. · Headless CMS - Contentful CMS · Open source CSS framework - Tailwind CSS',
      technologies: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Marketing website',
      dateStarted: new Date('2021-06-01'),
      dateEnded: new Date('2021-09-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://rungalileo.io/',
        },
        {
          text: 'Staging URL',
          url: 'https://ubiquitous-eclair-a3c40b.netlify.app/',
        },
      ],
      technologies: ['Gatsby', 'Sanity CMS', 'React', 'GraphQL'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Marketing website',
      dateStarted: new Date('2021-06-01'),
      dateEnded: new Date('2021-09-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://predibase.com/',
        },
        {
          text: 'Staging URL',
          url: 'https://predibase-container.netlify.app/',
        },
      ],
      technologies: ['Gatsby', 'React', 'GraphQL', 'Tailwind CSS'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Migrating a website to Jekyll and Cloudcannon.',
      dateStarted: new Date('2018-05-01'),
      dateEnded: new Date(),
      links: [
        {
          text: 'View Project',
          url: 'https://kruzeconsulting.com/',
        },
      ],
      description:
        'Legacy website (Python) was migrated to static version and Bootstrap 4. Redesigned and coded website sections and pages.',
      technologies: [
        'Bootstrap',
        'Jekyll',
        'Cloudcannon CMS',
        'HTML',
        'CSS',
        'JavaScript',
        'YAML',
        'Markdown',
        'Lunr.js Search',
        'Web Accessibility',
      ],
      tools: [
        'Formkeep',
        'Google Analytics',
        'Google Tag Manager',
        'Google Optimize',
        'Google Search Console',
      ],
      association: 'Freelance Web Development',
    },
    {
      title: 'InflectionCX Marketing Website',
      dateStarted: new Date('2022-08-01'),
      dateEnded: new Date('2022-08-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://www.inflection.cx/',
        },
      ],
      description:
        'InflectionCX Marketing Website, built using: · Static site generator built on top of Node.js using React and GraphQL - Gatsby. · Headless CMS - Contentful CMS · Open source CSS framework - Tailwind CSS',
      technologies: ['Gatsby', 'React', 'GraphQL', 'Node.js', 'Contentful CMS', 'Tailwind CSS'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Website and CMS for podcasters',
      dateStarted: new Date('2021-08-01'),
      dateEnded: new Date('2022-05-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://empoweredus.org/',
        },
      ],
      technologies: ['Next.js', 'React', 'Rest API', 'Tailwind CSS'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Xaqt Marketing Website',
      dateStarted: new Date('2022-02-01'),
      dateEnded: new Date('2022-04-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://www.xaqt.com/',
        },
      ],
      description:
        'Xaqt Marketing Website, built using: · Static site generator built on top of Node.js using React and GraphQL - Gatsby. · Headless CMS - Contentful CMS · Open source CSS framework - Tailwind CSS',
      technologies: ['Gatsby', 'React', 'GraphQL', 'Node.js', 'Contentful CMS', 'Tailwind CSS'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Firehydrant Marketing Website',
      dateStarted: new Date('2021-11-01'),
      dateEnded: new Date('2022-02-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://firehydrant.com/',
        },
      ],
      description: 'Design into Code Implementation.',
      technologies: ['Gatsby', 'React', 'Contentful', 'Netlify'],
      association: 'Freelance Web Development',
    },
    {
      title: 'DataCebo website',
      dateStarted: new Date('2021-09-01'),
      dateEnded: new Date('2021-11-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://datacebo.github.io/',
        },
      ],
      description: 'Implemented Figma design into code for DataCebo website\nGatsby (React)',
      technologies: ['Gatsby', 'React', 'GitHub Pages', 'Contentful CMS'],
      association: 'Freelance Web Development',
    },
    {
      title: 'DataCebo blog',
      dateStarted: new Date('2022-09-01'),
      dateEnded: new Date('2022-11-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://datacebo.com/blog/',
        },
      ],
      description:
        'Implemented Figma design into code for DataCebo blog, using Gatsby and Ghost CMS',
      technologies: ['Gatsby', 'React', 'GitHub Pages', 'Ghost CMS'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Blink marketing website',
      dateStarted: new Date('2021-05-01'),
      dateEnded: new Date('2021-06-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://www.blinkops.com/',
        },
      ],
      description: 'implemented awesome design into code, using React, Gatsby, Netlify, GitHub',
      technologies: ['React', 'Gatsby', 'Netlify', 'GitHub'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Migrate pages to Contentful',
      dateStarted: new Date('2021-05-01'),
      dateEnded: new Date('2021-06-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://firehydrant.io/',
        },
      ],
      description: 'migrated content to Contentful CMS. implemented design features.',
      technologies: ['Contentful CMS', 'Design Implementation'],
      association: 'Freelance Web Development',
    },
    {
      title: 'SDV home page and blog',
      dateStarted: new Date('2021-04-01'),
      dateEnded: new Date('2021-06-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://sdv.dev/',
        },
      ],
      description: 'implemented design into code using Gatsby, GitHub API, Ghost CMS',
      technologies: ['Gatsby', 'GitHub API', 'Ghost CMS'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Multi language Responsive Website for Cyber Security company',
      dateStarted: new Date('2020-11-01'),
      dateEnded: new Date('2021-04-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://www.4rivers.de/',
        },
      ],
      description:
        'Multi language Responsive Website for Cyber Security company\nGatsby (React js)\nBootstrap\nContentful\nGraphQl\nMulti language',
      technologies: ['Gatsby', 'React', 'Bootstrap', 'Contentful', 'GraphQL', 'Multi-language'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Superdelux website',
      dateStarted: new Date('2021-03-01'),
      dateEnded: new Date('2021-04-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://www.superdelux.dev/',
        },
      ],
      description: 'JAMstack\nGatsby',
      technologies: ['JAMstack', 'Gatsby'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Avtovolodinnya',
      dateStarted: new Date('2020-08-01'),
      dateEnded: new Date('2021-03-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://avtovolodinnya.com/',
        },
      ],
      description: 'Next.js(React)\nTailwind CSS',
      technologies: ['Next.js', 'React', 'Tailwind CSS'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Responsive website for Ballet',
      dateStarted: new Date('2021-03-01'),
      dateEnded: new Date('2021-03-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://ballet.github.io/',
        },
      ],
      description: 'Jekyll\nBootstrap\nLiquid',
      technologies: ['Jekyll', 'Bootstrap', 'Liquid', 'GitHub Pages'],
      association: 'Freelance Web Development',
    },
    {
      title: 'DAI Lab Open Source Libraries',
      dateStarted: new Date('2020-12-01'),
      dateEnded: new Date('2021-01-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://dai-lab.github.io/opensource/',
        },
      ],
      description: 'DAI Lab Open Source Libraries\n\nJekyll\nBootstrap\nGithub pages',
      technologies: ['Jekyll', 'Bootstrap', 'GitHub Pages'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Data Tracer Website',
      dateStarted: new Date('2020-12-01'),
      dateEnded: new Date('2020-12-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://data-dev.github.io/',
        },
      ],
      description: 'Jekyll Website\nBootstrap CSS\nGithub pages',
      technologies: ['Jekyll', 'Bootstrap', 'GitHub Pages'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Stokes Construction website',
      dateStarted: new Date('2020-12-01'),
      dateEnded: new Date('2020-12-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://confident-roentgen-2dfc11.netlify.app/',
        },
      ],
      description:
        'Industrial Construction company website\n\nGatsby\nReact js\nGraphQl\nBootstrap\nContentful',
      technologies: ['Gatsby', 'React', 'GraphQL', 'Bootstrap', 'Contentful', 'Netlify'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Website for Construction Company',
      dateStarted: new Date('2020-11-01'),
      dateEnded: new Date('2020-11-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://confident-roentgen-2dfc11.netlify.app/',
        },
      ],
      description: 'Gatsby (React js)\nContentful CMS\nNetlify\nBootstrap CSS',
      technologies: ['Gatsby', 'React', 'Contentful CMS', 'Netlify', 'Bootstrap'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Onfido website Redevelopment and migrating to Jekyll',
      dateStarted: new Date('2017-11-01'),
      dateEnded: new Date('2020-06-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://onfido.com/',
        },
      ],
      description:
        "Migrated Onfido's website to Bulma CSS framework and Jekyll, coded newly designed pages.\n- Gulp\n- Jekyll\n- Bulma\n- GoogleSheets API\n- Javascript, jQuery\n- Handlebars.js\n\nhttps://onfido.com/",
      technologies: [
        'Jekyll',
        'Bulma',
        'Google Sheets API',
        'JavaScript',
        'jQuery',
        'Handlebars.js',
        'Gulp',
      ],
      association: 'Freelance Web Development',
    },
    {
      title: 'Website with data',
      dateStarted: new Date('2020-03-01'),
      dateEnded: new Date('2020-04-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://covid19-data.netlify.com/',
        },
      ],
      description:
        'With my passion to data, charts, tables and with assistance from my buddy Alexander Alehin(https://www.linkedin.com/in/alexander-alehin-36b1b224/) we build this simple website.\nAlex created a converter in python to parse/save data.\nI have build the frontend using jekyll, bulma and google charts.',
      technologies: ['Jekyll', 'Bulma', 'Google Charts', 'Python', 'Netlify'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Static Jekyll website for AlphaEdge',
      dateStarted: new Date('2017-12-01'),
      dateEnded: new Date('2018-01-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://www.alphaedge.io/',
        },
      ],
      description:
        'Converted Stack templates into static Jekyll website\nSEO with Jekyll SEO tag\nResponsive images with Jekyll picture tag\nadded features - MathJax support and Syntax highlighting\nGulp',
      technologies: [
        'Jekyll',
        'HTML',
        'CSS',
        'JavaScript',
        'Bootstrap',
        'MathJax',
        'Syntax Highlighting',
        'Gulp',
      ],
      association: 'Freelance Web Development',
    },
    {
      title: 'Convert design into website templates',
      dateStarted: new Date('2017-09-01'),
      dateEnded: new Date('2017-10-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://rmagazine.com',
        },
      ],
      description:
        'converted design into static HTML/CSS/JS templates using Bootstrap 3 and Jekyll features',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Jekyll'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Convert design to Jekyll',
      dateStarted: new Date('2017-09-01'),
      dateEnded: new Date('2017-10-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://rmagazine.com/',
        },
      ],
      description:
        'I have created a Jekyll project with HTML/CSS/JS files and demo content.\n\ndemo: https://dzinemon.github.io/rmagazine/',
      technologies: ['Jekyll', 'HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Converting website into Hugo project',
      dateStarted: new Date('2017-09-01'),
      dateEnded: new Date('2017-10-01'),
      links: [
        {
          text: 'View Project',
          url: 'http://vitessedata.com/',
        },
      ],
      description: 'Converted website to Hugo. Delivered static Hugo project.\nUsed Bootstrap.',
      technologies: ['Hugo', 'Bootstrap', 'Static Site Generator'],
      association: 'Freelance Web Development',
    },
    {
      title: "RewardExpert's Wordpress Blog SEO improvements",
      dateStarted: new Date('2017-05-01'),
      dateEnded: new Date('2017-08-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://www.rewardexpert.com/blog/',
        },
      ],
      description:
        "Push and pulled RewardExpert's blog posts, articles and case studies to comply all best SEO practices.\nAnalyzed data,\nUsed Google Webmaster Tools, Tag Manager, Analytics, Deepcrawl, Screaming Frog.",
      technologies: [
        'WordPress',
        'SEO',
        'Google Webmaster Tools',
        'Google Tag Manager',
        'Google Analytics',
        'Deepcrawl',
        'Screaming Frog',
      ],
      association: 'RewardExpert.com, Inc',
    },
    {
      title: 'Static website for  Hubworks business management apps',
      dateStarted: new Date('2017-05-01'),
      dateEnded: new Date('2017-08-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://hubworks.com/',
        },
      ],
      description:
        'Converted design into Jekyll project.\nDelivered templates for landing pages.\nUsed Bootstrap 3',
      technologies: ['Jekyll', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'],
      tools: ['GitHub Pages'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Static website for  Zip Schedules Software',
      dateStarted: new Date('2017-03-01'),
      dateEnded: new Date('2017-04-01'),
      links: [
        {
          text: 'View Project',
          url: 'https://zipschedules.com/',
        },
      ],
      description:
        'Delivered a Jekyll project for my client.\nUsed HTML/CSS/JS, Bootstrap 3, Jekyll (Yaml, Markdown, Liquid).',
      technologies: [
        'Jekyll',
        'HTML',
        'CSS',
        'JavaScript',
        'Bootstrap',
        'YAML',
        'Markdown',
        'Liquid',
      ],
      tools: ['GitHub Pages'],
      association: 'Freelance Web Development',
    },
    {
      title: 'Firehydrant website, blog',
      dateStarted: new Date(2021, 1, 1),
      dateEnded: new Date(2021, 2, 1),
      links: [
        {
          text: 'View Project',
          url: 'https://firehydrant.com/',
        },
      ],
      description: 'Gatsby\nImplement Contentful\nDesign into code implementation',
      technologies: ['Gatsby', 'Contentful', 'React', 'GraphQL'],
      tools: ['Netlify', 'GitHub'],
      association: 'Freelance Web Development',
    },
  ].map(project => {
    // For any project without technologies but with a description, extract technologies
    if (!project.technologies && project.description) {
      project.technologies = extractTechnologies(project.description);
    }

    // Separate marketing/analytics tools from development technologies
    if (project.technologies) {
      const techs: string[] = [];
      const tools: string[] = [];

      project.technologies.forEach(tech => {
        if (isMarketingOrAnalyticsTool(tech)) {
          tools.push(tech);
        } else {
          techs.push(tech);
        }
      });

      // Update the project with separated technologies and tools
      project.technologies = techs.length > 0 ? techs : undefined;
      project.tools = tools.length > 0 ? tools : undefined;
    }

    return project;
  });

  // Get all unique technologies and tools across projects
  const getAllTechnologies = () => {
    const techSet = new Set<string>();

    allProjects.forEach(project => {
      if (project.technologies) {
        project.technologies.forEach(tech => techSet.add(tech));
      }
    });

    return Array.from(techSet).sort();
  };

  const allTechnologies = getAllTechnologies();

  // Filter and sort projects
  const getFilteredAndSortedProjects = () => {
    let filtered = [...allProjects];

    // Apply technology filter if selected
    if (selectedTechnologies.length > 0) {
      filtered = filtered.filter(project =>
        selectedTechnologies.every(tech => project.technologies?.includes(tech))
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortOrder === 'newest') {
        return b.dateStarted.getTime() - a.dateStarted.getTime();
      } else {
        return a.dateStarted.getTime() - b.dateStarted.getTime();
      }
    });

    return filtered;
  };

  const filteredProjects = getFilteredAndSortedProjects();

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate a small delay for better animation effect
    setTimeout(() => {
      setVisibleProjects(prevCount => Math.min(prevCount + 6, allProjects.length));
      setIsLoading(false);
    }, 300);
  };

  // Item animation
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 12,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  // Button animation
  const buttonVariants = {
    initial: { scale: 1 },
    loading: {
      scale: 1.05,
      transition: {
        yoyo: Infinity,
        duration: 0.5,
      },
    },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="projects"
      className="bg-gradient-to-tr from-gray-50 via-gray-100/30 to-gray-100 dark:from-gray-900 dark:via-gray-900/30 dark:via-gray-900 dark:to-black py-16 lg:py-24"
    >
      <SectionHeading
        title="Projects"
        subtitle="A selection of my recent development work"
        alignment="left"
      />

      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-700">
            <h3 className="mb-4 text-xl font-semibold text-slate-800 dark:text-slate-50">
              Filter Projects
            </h3>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Technology Filter - Multiselect with Headless UI */}
              <div>
                <label
                  htmlFor="tech-filter"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Filter by Technology
                </label>
                <div className="relative">
                  <Listbox value={selectedTechnologies} onChange={setSelectedTechnologies} multiple>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-lg shadow-sm cursor-default focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 sm:text-sm">
                        <span className="block truncate">
                          {selectedTechnologies.length > 0
                            ? `${selectedTechnologies.length} selected`
                            : 'Select technologies'}
                        </span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700 dark:text-gray-300 sm:text-sm">
                          {allTechnologies.map((tech, techIdx) => (
                            <Listbox.Option
                              key={techIdx}
                              className={({ active }) =>
                                `${
                                  active
                                    ? 'text-emerald-50 bg-gradient-to-br from-emerald-800 to-emerald-700 dark:text-emerald-800 dark:from-emerald-50 dark:to-emerald-100'
                                    : 'text-gray-900 dark:text-gray-300'
                                } cursor-default select-none relative py-2 pl-10 pr-4`
                              }
                              value={tech}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={`${
                                      selected ? 'font-medium' : 'font-normal'
                                    } block truncate`}
                                  >
                                    {tech}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`${
                                        active
                                          ? 'text-white'
                                          : 'text-primary-600 dark:text-primary-400'
                                      }
                                        absolute inset-y-0 left-0 flex items-center pl-3`}
                                    >
                                      <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>

              {/* Sort Order - Styled to match */}
              <div>
                <label
                  htmlFor="sort-order"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Sort by Date
                </label>
                <Listbox value={sortOrder} onChange={setSortOrder}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-lg shadow-sm cursor-default focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 sm:text-sm">
                      <span className="block truncate">
                        {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
                      </span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700 dark:text-gray-300 sm:text-sm">
                        <Listbox.Option
                          className={({ active }) =>
                            `${
                              active
                                ? 'text-emerald-50 bg-gradient-to-br from-emerald-800 to-emerald-700 dark:text-emerald-800 dark:from-emerald-50 dark:to-emerald-100'
                                : 'text-gray-900 dark:text-gray-300'
                            } cursor-default select-none relative py-2 pl-10 pr-4`
                          }
                          value="newest"
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`${
                                  selected ? 'font-medium' : 'font-normal'
                                } block truncate`}
                              >
                                Newest First
                              </span>
                              {selected ? (
                                <span
                                  className={`${
                                    active ? 'text-white' : 'text-primary-600 dark:text-primary-400'
                                  }
                                    absolute inset-y-0 left-0 flex items-center pl-3`}
                                >
                                  <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                        <Listbox.Option
                          className={({ active }) =>
                            `${
                              active
                                ? 'text-emerald-50 bg-gradient-to-br from-emerald-800 to-emerald-700 dark:text-emerald-800 dark:from-emerald-50 dark:to-emerald-100'
                                : 'text-gray-900 dark:text-gray-300'
                            } cursor-default select-none relative py-2 pl-10 pr-4`
                          }
                          value="oldest"
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`${
                                  selected ? 'font-medium' : 'font-normal'
                                } block truncate`}
                              >
                                Oldest First
                              </span>
                              {selected ? (
                                <span
                                  className={`${
                                    active ? 'text-white' : 'text-primary-600 dark:text-primary-400'
                                  }
                                    absolute inset-y-0 left-0 flex items-center pl-3`}
                                >
                                  <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>

            {/* Selected technologies display - Show all selected technologies as badges */}
            {selectedTechnologies.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedTechnologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 text-sm text-emerald-50 bg-gradient-to-br from-emerald-800 to-emerald-700 rounded-full dark:from-emerald-50 dark:to-emerald-100 dark:text-emerald-800"
                  >
                    {tech}
                    <button
                      type="button"
                      onClick={() => {
                        const newSelectedTechnologies = [...selectedTechnologies];
                        newSelectedTechnologies.splice(index, 1);
                        setSelectedTechnologies(newSelectedTechnologies);
                      }}
                      className="flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center focus:outline-none"
                    >
                      <XMarkIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </span>
                ))}
                <button
                  onClick={() => setSelectedTechnologies([])}
                  className="inline-flex items-center px-4 py-1 text-sm font-medium rounded-lg bg-gradient-to-br from-red-500 to-red-600 text-emerald-50 hover:from-red-600 hover:to-red-700 dark:from-red-400 dark:to-red-500 dark:text-white"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>
        </motion.div>

        <LayoutGroup>
          {filteredProjects.length === 0 ? (
            <motion.div
              className="col-span-full py-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-gray-500 dark:text-gray-400">
                No projects match your current filter
              </p>
              <button
                onClick={() => setSelectedTechnologies([])}
                className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-br from-emerald-800 to-emerald-700 text-emerald-50 hover:from-emerald-700 hover:to-emerald-600 dark:from-emerald-50 dark:to-emerald-100 dark:text-emerald-800 dark:hover:from-emerald-100 dark:hover:to-emerald-200"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
              layout
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                <motion.div
                  key={`project-${index}`}
                  className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow dark:bg-gray-700 hover:shadow-lg"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  layoutId={`project-card-${index}`}
                >
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>

                    <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                      {project.dateStarted.toLocaleDateString()} -{' '}
                      {project.dateEnded?.toLocaleDateString()}
                    </p>

                    {project.association && (
                      <p className="mb-3 text-sm text-gray-700 dark:text-gray-200">
                        {project.association}
                      </p>
                    )}

                    {project.description && (
                      <p className="mb-3 text-gray-700 dark:text-gray-300">{project.description}</p>
                    )}

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="mb-4">
                        <h4 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-100"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.tools && project.tools.length > 0 && (
                      <div className="mb-4">
                        <h4 className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Tools:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, toolIndex) => (
                            <span
                              key={toolIndex}
                              className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded dark:bg-green-900 dark:text-green-200"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.links && project.links.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 bg-gradient-to-br from-emerald-800 to-emerald-700 text-emerald-50 hover:from-emerald-700 hover:to-emerald-600 dark:from-emerald-50 dark:to-emerald-100 dark:text-emerald-800 dark:hover:from-emerald-100 dark:hover:to-emerald-200 shadow-md hover:shadow-lg"
                          >
                            {link.text}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 ml-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {filteredProjects.length > 0 && visibleProjects < filteredProjects.length && (
            <motion.div
              className="mt-16 text-center"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.button
                onClick={handleLoadMore}
                className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg transition-all duration-300 bg-gradient-to-br from-emerald-800 to-emerald-700 text-emerald-50 hover:from-emerald-700 hover:to-emerald-600 dark:from-emerald-50 dark:to-emerald-100 dark:text-emerald-800 dark:hover:from-emerald-100 dark:hover:to-emerald-200 shadow-md hover:shadow-lg"
                variants={buttonVariants}
                initial="initial"
                animate={isLoading ? 'loading' : 'initial'}
                whileHover="hover"
                whileTap="tap"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="w-5 h-5 mr-3 -ml-1 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Loading...
                  </>
                ) : (
                  <>
                    Load More Projects
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </>
                )}
              </motion.button>
            </motion.div>
          )}
        </LayoutGroup>
      </div>
    </section>
  );
};

export default Projects;
