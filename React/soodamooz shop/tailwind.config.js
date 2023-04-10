/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: "#082044",
        searchColor: "#0C2E5E",
        textColor: {
          1: "#B8ACAF",
          2: "#E7E7E7" 
        }
      }
    },
  },
  plugins: [],
}
