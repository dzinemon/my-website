module.exports = {
  content: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    container: {
      padding: '1rem',
      center: true,
    },
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        heading: [
          'Plus Jakarta Sans',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
        width: 'width',
        border: 'border-width, border-color',
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.08)',
        button: '0 2px 10px rgba(14, 165, 233, 0.3)',
        card: '0 10px 30px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      backgroundImage: theme => ({
        'dotted-light': `radial-gradient(${theme(
          'colors.gray.700'
        )} 0.5px, transparent 0), linear-gradient(${theme('colors.slate.900')}, ${theme(
          'colors.slate.900'
        )})`,
        'dotted-dark': `radial-gradient(${theme(
          'colors.neutral.200'
        )} 0.5px, transparent 0), linear-gradient(${theme('colors.white')}, ${theme(
          'colors.white'
        )})`,
        'cell-light': `linear-gradient(to right, ${theme(
          'colors.neutral.200'
        )} 1px, transparent 1px), linear-gradient(to bottom, ${theme(
          'colors.neutral.200'
        )} 1px, transparent 1px), linear-gradient(${theme('colors.white', '#fff')}, ${theme(
          'colors.white',
          '#fff'
        )})`,
        'cell-dark': `linear-gradient(to right, ${theme(
          'colors.neutral.700'
        )} 1px, transparent 1px), linear-gradient(to bottom, ${theme(
          'colors.neutral.700'
        )} 1px, transparent 1px), linear-gradient(${theme('colors.black', '#000')}, ${theme(
          'colors.black',
          '#000'
        )})`,
      }),
      backgroundSize: {
        dotted: '20px 20px',
        cell: '20px 20px',
      },
      backgroundPosition: {
        dotted: '4.5px 0px',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['hover', 'focus', 'group-hover'],
      scale: ['hover', 'focus', 'group-hover'],
      translate: ['hover', 'focus', 'group-hover'],
      borderWidth: ['hover', 'focus'],
      ringWidth: ['hover', 'active', 'focus'],
      ringColor: ['hover', 'active', 'focus'],
    },
  },
  plugins: [],
};
