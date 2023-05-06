/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        background1 : "#F2E0F2",
        background2 : "#D9DEEF"
      },
      fontFamily: {
        'poppins': ['poppins'],
        'adenium': ['Adenium'],
        'fredoka': ['fredoka']
      },
    },
  },
  plugins: [],
}