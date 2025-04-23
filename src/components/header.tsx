import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useTheme } from "../contexts/ThemeContext"
import ThemeToggle from "./ThemeToggle"

const Header = ({ siteTitle = `` }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = ["services", "other-services", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveLink(currentSection || "");
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Add a subtle body class to prevent scrolling when menu is open
    document.body.classList.toggle('overflow-hidden', !menuOpen);
  };

  const isLinkActive = (linkId: string) => activeLink === linkId;

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm shadow-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className={`font-heading font-bold text-xl tracking-tight ${
          isScrolled 
            ? 'text-primary-800 dark:text-primary-400' 
            : isDark ? 'text-white' : 'text-white'
        }`}>
          <Link 
            to="/" 
            className="transition-all duration-300 hover:text-primary-500 relative group"
          >
            {siteTitle}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
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
                ? 'text-neutral-800 dark:text-neutral-200' 
                : isDark ? 'text-white' : 'text-white'
            } relative z-20`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <span className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${menuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
              <span className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${menuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>
        
        {/* Desktop navigation with active indicators and hover effects */}
        <div className="hidden md:flex items-center justify-between">
          <nav className={`flex space-x-8 mr-8 ${
            isScrolled 
              ? 'text-neutral-800 dark:text-neutral-200' 
              : isDark ? 'text-white' : 'text-white'
          }`}>
            <Link 
              to="/" 
              className={`font-medium transition-all duration-300 hover:text-primary-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-500 after:transition-all after:duration-300 ${activeLink === "" ? 'after:w-full text-primary-500' : 'after:w-0 hover:after:w-full'}`}
            >
              Home
            </Link>
            <a 
              href="#services" 
              className={`font-medium transition-all duration-300 hover:text-primary-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-500 after:transition-all after:duration-300 ${isLinkActive("services") ? 'after:w-full text-primary-500' : 'after:w-0 hover:after:w-full'}`}
            >
              Services
            </a>
            <a 
              href="#other-services" 
              className={`font-medium transition-all duration-300 hover:text-primary-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-500 after:transition-all after:duration-300 ${isLinkActive("other-services") ? 'after:w-full text-primary-500' : 'after:w-0 hover:after:w-full'}`}
            >
              Solutions
            </a>
            <a 
              href="#contact" 
              className={`font-medium transition-all duration-300 hover:text-primary-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-500 after:transition-all after:duration-300 ${isLinkActive("contact") ? 'after:w-full text-primary-500' : 'after:w-0 hover:after:w-full'}`}
            >
              Contact
            </a>
          </nav>
          
          {/* Theme toggle button - Desktop version positioned on the far right */}
          <div className="hidden md:block">
            <ThemeToggle isScrolled={isScrolled} />
          </div>
        </div>
      </div>
      
      {/* Mobile navigation with improved animation and transitions */}
      <div 
        className={`md:hidden fixed inset-0 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm transition-all duration-300 ease-in-out transform ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
        style={{ height: '100vh' }}
      >
        <nav className="container max-w-6xl mx-auto px-4 py-20 flex flex-col items-center justify-center h-full">
          <Link 
            to="/" 
            className={`font-medium text-2xl text-neutral-800 dark:text-neutral-200 py-4 transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400 ${menuOpen ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <a 
            href="#services" 
            className={`font-medium text-2xl text-neutral-800 dark:text-neutral-200 py-4 transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400 ${menuOpen ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
            onClick={toggleMenu}
          >
            Services
          </a>
          <a 
            href="#other-services" 
            className={`font-medium text-2xl text-neutral-800 dark:text-neutral-200 py-4 transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400 ${menuOpen ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
            onClick={toggleMenu}
          >
            Solutions
          </a>
          <a 
            href="#contact" 
            className={`font-medium text-2xl text-neutral-800 dark:text-neutral-200 py-4 transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400 ${menuOpen ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
            onClick={toggleMenu}
          >
            Contact
          </a>
          
          {/* Theme toggle inside mobile menu */}
          <div className="mt-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <ThemeToggle isScrolled={true} />
          </div>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
