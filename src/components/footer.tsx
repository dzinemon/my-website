import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 bg-gradient-to-tl from-gray-300/90 via-gray-300 to-gray-100 dark:from-black dark:to-black/90 transition-colors duration-500">
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
