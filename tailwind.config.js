/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      height: {
        '60rem': '60rem',
      },
      minHeight: {
        '35rem': '35rem',
      },
      margin: {
        22: '5.5rem',
      },
      colors: {
        green: {
          100: '#e5ffe5',
          200: '#b3ffb3',
          300: '#80ff80',
          400: '#4dff4d',
          500: '#1aff1a',
          600: '#00e600',
          700: '#00b300',
          800: '#008000',
          900: '#004d00',
        },
      },
      boxShadow: {
        ultra: '0 0px 20px -2px var(--tw-shadow-color)',
      },
      dropShadow: {
        ultra: '0px 7px 7px var(--tw-shadow-color)',
      },
      keyframes: {
        'fade-right-to-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-bottom-to-top': {
          '0%': {
            opacity: '0',
            transform: 'translatey(2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translatey(0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-right-to-left': 'fade-right-to-left 1.5s both',
        'fade-right-to-left-longer': 'fade-right-to-left 2s both',
        'fade-bottom-to-top': 'fade-bottom-to-top 1.5s both',
        'fade-in': 'fade-in 1.5s both',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')],
};
