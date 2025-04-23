import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // State to track if dark mode is active
  const [isDark, setIsDark] = useState<boolean>(false);
  // State to track if the component has mounted (to prevent hydration issues)
  const [mounted, setMounted] = useState<boolean>(false);

  // Function to toggle between light/dark themes
  const toggleTheme = () => {
    setIsDark((prevIsDark) => {
      const newIsDark = !prevIsDark;
      
      // Update localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
      }
      
      // Update class on document element
      if (newIsDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      return newIsDark;
    });
  };

  // Effect to initialize theme from localStorage or system preference
  useEffect(() => {
    setMounted(true);
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialIsDark = 
      savedTheme === 'dark' || (savedTheme === null && prefersDark);
    
    setIsDark(initialIsDark);
    
    // Apply the theme class
    if (initialIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Listen for changes in system color scheme
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only apply system preference if user hasn't set a preference
      if (localStorage.getItem('theme') === null) {
        setIsDark(e.matches);
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Provide context values only after mounting to prevent hydration issues
  return (
    <ThemeContext.Provider 
      value={{ 
        isDark: mounted ? isDark : false, 
        toggleTheme 
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};