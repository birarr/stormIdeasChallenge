/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        content: '#565656',
        redColor: '#F02F23',
        textLight: '#7C7C7C',
        textTitle: '#2A2A2A',
      },
      minWidth: {
        '1/2': '50%',
      },
      maxWidth: {
        '1/2': '50%',
        '11/12': '80%',
      },
    },
    screens: {
      xxxs: '280px',
      xxs: '360px',
      xxls: '412px',
      xs: '480px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
