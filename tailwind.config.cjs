/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        anton: "'Anton', serif",
        inter: "'Inter', serif",
      }
    },
  },
  plugins: [],
};
