import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-700 dark:via-gray-900 dark:to-black px-4 transition-colors duration-500">
      <div className="container text-center mx-auto text-slate-700 dark:text-slate-100">
        <p>
          {new Date().getFullYear()},{` `}
          This website is created using
          {` `}
          <a
            className="text-emerald-800 dark:text-emerald-200 hover:underline font-bold transition-colors duration-300"
            href="https://www.gatsbyjs.com/"
          >
            Gatsby
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
