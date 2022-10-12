/** @type {import('tailwindcss').Config} */

// const plugin = require('tailwindcss/plugin')


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-bg': '#1f1f38',
        'color-bg-variant': '#2c2c6c',
        'color-primary': '#4db5ff',
        'color-primary-variant': 'rgba(77,181,255,0.4)',
        'color-white': '#f0f0f0',
        'color-light': 'rgba(255,255,255,0.6)',
      },
      width: {
      'container-width-lg':  '75%',
      'container-width-md':  '86%',
      'container-width-sm':  '90%',
      },
      borderColor: {
        'transparent': 'transparent',
      }
      // transitionDelay: 
    },
    screens: {
      'sm': {'max': '600px'},
      // => @media ' and max-width: 767px) { ... }

      'md': {'max': '1024px'},
      // => @media ' and max-width: 1023px) { ... }

      'lg': {'max': '1280px'},
      // => @media 'x and max-width: 1279px) { ... }

      'xl': {'max': '1536px'},
      // => @media 'x and max-width: 1535px) { ... }

      '2xl': {'min': '1537px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
