import React from 'react';

interface ServiceItem {
  name: string;
  icon: React.ReactNode;
}

interface ServiceCardProps {
  title: string;
  description: string;
  items?: ServiceItem[] | string[];
  subtext?: string;
  bulletStyle?: 'disc' | 'number' | 'none';
  children?: React.ReactNode;
  isProcess?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  items,
  subtext,
  bulletStyle = 'disc',
  children,
  isProcess = false,
}) => (
  <div
    className={`container max-w-6xl mx-auto my-12 rounded bg-white dark:bg-gray-800 shadow-sm dark:shadow-lg transition-colors duration-300 ${
      isProcess ? 'border-l-4 border-emerald-800 dark:border-emerald-200' : ''
    }`}
  >
    <div className="flex flex-wrap sm:flex-row sm:justify-around justify-center items-center -mx-4 p-6">
      <div className="w-full sm:w-8/12 px-4">
        <h3 className="leading-relaxed font-bold text-slate-800 dark:text-slate-50 text-2xl sm:text-3xl sm:leading-7 mb-2 transition-colors duration-300 mb-4 lg:mb-6">
          {title}
        </h3>
        <p className="text-lg text-slate-700 dark:text-slate-100 transition-colors duration-300">
          {description}
        </p>
        {subtext && (
          <p className="text-sm text-slate-700 dark:text-slate-200 mt-2 transition-colors duration-300">
            {subtext}
          </p>
        )}
        {children && <div className="mt-4">{children}</div>}
      </div>
      {items && items.length > 0 && (
        <div className="w-full sm:w-4/12 px-4 my-4">
          <ul
            className={`${
              bulletStyle === 'disc'
                ? 'list-disc'
                : bulletStyle === 'number'
                ? 'list-decimal'
                : 'list-none'
            } list-inside ml-30 text-slate-700 dark:text-slate-100 transition-colors duration-300 space-y-4`}
          >
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                {typeof item === 'string' ? (
                  item
                ) : (
                  <>
                    <span className="text-3xl mr-3">{item.icon}</span>
                    <span className="text-xl">{item.name}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

export default ServiceCard;
