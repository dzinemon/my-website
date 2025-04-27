import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import AnimatedLogo from './AnimatedLogo';

// Define navigation items with updated paths to separate pages
const navItems = [
  { id: 'hero', label: 'Home', path: '/', isExternal: false },
  { id: 'services', label: 'Services', path: '/services', isExternal: false },
  { id: 'projects', label: 'Projects', path: '/projects', isExternal: false },
  { id: 'contact', label: 'Contact', path: '/contact', isExternal: false },
];

type HeaderProps = {
  siteTitle?: string;
  path?: string; // Add path prop to receive current path from page
};

const Header: React.FC<HeaderProps> = ({ siteTitle = '', path = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark } = useTheme();

  // Update scroll detection without active link logic
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Add a subtle body class to prevent scrolling when menu is open
    document.body.classList.toggle('overflow-hidden', !menuOpen);
  };

  // Check if the current path matches the nav item path
  const isLinkActive = (itemPath: string) => {
    // Handle home page special case
    if (itemPath === '/' && path === '/') {
      return true;
    }
    // For other pages, check if the current path starts with the nav item path
    // This handles both exact matches and potential trailing slashes
    return itemPath !== '/' && path.startsWith(itemPath);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1
          className={`font-heading font-bold text-xl tracking-tight ${
            isScrolled
              ? 'text-emerald-800 dark:text-emerald-200'
              : isDark
              ? 'text-slate-50'
              : 'text-slate-800'
          }`}
        >
          <Link
            to="/"
            className="transition-all group duration-300 hover:text-emerald-800 dark:hover:text-emerald-200 relative group flex items-center"
            aria-label={siteTitle}
          >
            <AnimatedLogo />
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-800 dark:bg-emerald-200 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </h1>

        <div className="flex items-center md:hidden space-x-4">
          {/* Theme toggle button - Only visible on mobile */}
          <ThemeToggle isScrolled={isScrolled} />

          {/* Mobile menu button with improved animation */}
          <button
            onClick={toggleMenu}
            className={`focus:outline-none transition-colors duration-300 ${
              isScrolled
                ? 'text-slate-800 dark:text-slate-50'
                : isDark
                ? 'text-slate-50'
                : 'text-slate-800'
            } relative z-20`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <span
                className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${
                  menuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${
                  menuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Desktop navigation with active indicators and hover effects */}
        <div className="hidden md:flex items-center justify-between">
          <nav
            className={`flex space-x-8 mr-8 ${
              isScrolled
                ? 'text-slate-800 dark:text-slate-50'
                : isDark
                ? 'text-slate-50'
                : 'text-slate-800'
            }`}
          >
            {navItems.map(item =>
              item.isExternal ? (
                <a
                  key={item.id}
                  href={item.path}
                  className={`font-medium transition-all duration-300 hover:text-emerald-800 dark:hover:text-emerald-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-emerald-800 dark:after:bg-emerald-200 after:transition-all after:duration-300 ${
                    isLinkActive(item.path)
                      ? 'after:w-full text-emerald-800 dark:text-emerald-200'
                      : 'after:w-0 hover:after:w-full'
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`font-medium transition-all duration-300 hover:text-emerald-800 dark:hover:text-emerald-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-emerald-800 dark:after:bg-emerald-200 after:transition-all after:duration-300 ${
                    isLinkActive(item.path)
                      ? 'after:w-full text-emerald-800 dark:text-emerald-200'
                      : 'after:w-0 hover:after:w-full'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Theme toggle button - Desktop version positioned on the far right */}
          <div className="hidden md:block">
            <ThemeToggle isScrolled={isScrolled} />
          </div>
        </div>
      </div>

      {/* Mobile navigation with improved animation and transitions */}
      <div
        className={`md:hidden fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm transition-all duration-300 ease-in-out transform ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{ height: '100vh' }}
      >
        <nav className="container max-w-6xl mx-auto px-4 py-20 flex flex-col items-center justify-center h-full">
          {navItems.map(item =>
            item.isExternal ? (
              <a
                key={item.id}
                href={item.path}
                className={`font-medium text-2xl text-slate-800 dark:text-slate-50 py-4 transition-all duration-300 hover:text-emerald-800 dark:hover:text-emerald-200 ${
                  menuOpen ? 'animate-slide-up opacity-100' : 'opacity-0'
                } ${isLinkActive(item.path) ? 'text-emerald-800 dark:text-emerald-200' : ''}`}
                style={{ animationDelay: `${0.1 + navItems.indexOf(item) * 0.05}s` }}
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.id}
                to={item.path}
                className={`font-medium text-2xl text-slate-800 dark:text-slate-50 py-4 transition-all duration-300 hover:text-emerald-800 dark:hover:text-emerald-200 ${
                  menuOpen ? 'animate-slide-up opacity-100' : 'opacity-0'
                } ${isLinkActive(item.path) ? 'text-emerald-800 dark:text-emerald-200' : ''}`}
                style={{ animationDelay: `${0.1 + navItems.indexOf(item) * 0.05}s` }}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            )
          )}

          {/* Theme toggle inside mobile menu */}
          <div className="mt-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <ThemeToggle isScrolled={true} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
