/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import React, { ReactNode, useEffect } from 'react';

import { ThemeProvider } from '../contexts/ThemeContext';
import Footer from './footer';
import Header from './header';

import './layout.css';

type LayoutProps = {
  children: ReactNode;
  location?: {
    pathname: string;
  };
};

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  // Add smooth scroll behavior for anchor links
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Account for fixed header
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  // Add intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const animateElements = document.querySelectorAll('.should-animate');
    animateElements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-dotted-dark dark:bg-dotted-light bg-dotted bg-dotted transition-colors duration-300 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200">
        <Header
          siteTitle={data.site.siteMetadata?.title || `Title`}
          path={location?.pathname || ''}
        />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export const Head: React.FC = () => (
  <>
    <meta charSet="utf-8" />
    <title>{'Title'}</title>
    <meta
      name="description"
      content="I am Andrii web developer from Ukraine, welcome to my website"
    />
    <link rel="canonical" href="https://andrii-on.netlify.app/" />

    {/* Modern Web Fonts */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />

    {/* Theme color meta tag with JS to prevent flash of wrong theme */}
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const savedTheme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              
              if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
                document.documentElement.classList.add('dark');
                document.querySelector('meta[name="theme-color"]').setAttribute('content', '#171717');
              } else {
                document.documentElement.classList.remove('dark');
                document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0ea5e9');
              }
            } catch (e) {
              console.error('Theme initialization error:', e);
            }
          })();
        `,
      }}
    />
    <meta name="theme-color" content="#0ea5e9" />

    {/* Ensure proper mobile viewport */}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </>
);

export default Layout;
