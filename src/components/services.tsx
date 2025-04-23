import React from "react";
import ServiceCard from "./ServiceCard";

// Service data for consistency and easier maintenance
const servicesData = [
  {
    id: "frameworks",
    title: "Migrate / Create / Update",
    description: "web apps using React Frameworks and popular static site generators.",
    items: ["Next.js", "Gatsby", "Jekyll", "Hugo"]
  },
  {
    id: "cms",
    title: "Popular Content Management Systems",
    description: "Create, update, and deliver content to your customers",
    subtext: "Can't find the one you need? I can easily dive into it.",
    items: ["Contentful", "CloudCannon", "GhostCMS"]
  },
  {
    id: "css",
    title: "Templating / Prototyping",
    description: "using modern CSS Frameworks",
    items: ["Tailwind", "Bootstrap", "Bulma"]
  },
  {
    id: "hosting",
    title: "Using code hosting platforms",
    description: "for version control and collaboration:",
    items: ["Bitbucket", "Github", "Gitlab"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-neutral-50 dark:bg-neutral-800 transition-colors duration-300">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 transition-colors duration-300">My Services</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto transition-colors duration-300">
            Specialized web development solutions to transform your digital presence
          </p>
        </div>
        
        <div className="space-y-16">
          {servicesData.map(service => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              items={service.items}
              subtext={service.subtext}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services