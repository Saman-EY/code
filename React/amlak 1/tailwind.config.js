/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#006AFF',
        Blackprimary: '#231F20',
        Gold: '#E7C700',
        Semiblack: '#282A3A',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        iranBold: ['iransansBold'],
        iranMed: ['iransansMed']
      },
      screens: {
        Break1: '605px',
        Break2: '560px',
        Break3: '480px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
};
