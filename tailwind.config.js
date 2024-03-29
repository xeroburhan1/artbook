/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
