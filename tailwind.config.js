/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        greeen: "#316C57",
        darkgreen: "#1D4A3A",
      },
      fontFamily: {
        belleza: ["Belleza", " sans-serif"],
      },
    },
  },
  plugins: [],
};
