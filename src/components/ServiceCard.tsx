import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  items: string[];
  subtext?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, items, subtext }) => (
  <div className="container max-w-5xl mx-auto my-12 rounded bg-white dark:bg-neutral-700 shadow-sm dark:shadow-lg transition-colors duration-300">
    <div className="flex flex-wrap sm:flex-row sm:justify-around justify-center items-center -mx-5 p-6">
      <div className="w-full sm:w-8/12 my-4 px-5">
        <h2 
          className="leading-relaxed font-bold text-gray-900 dark:text-neutral-100 text-3xl sm:text-4xl sm:leading-7 mb-2 transition-colors duration-300"
        >
          {title}
        </h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-200 transition-colors duration-300">{description}</p>
        {subtext && <p className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">{subtext}</p>}
      </div>
      <div className="w-full sm:w-4/12 my-4 px-5">
        <ul className="list-disc list-inside ml-30 text-2xl md:text-3xl lg:text-4xl font-light text-neutral-700 dark:text-neutral-200 transition-colors duration-300">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default ServiceCard;