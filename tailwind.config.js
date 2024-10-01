/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      castoro: ["Castoro-Regular","Courier", "sans-serif"],
      castoroItalic: ["Castoro-Italic","Courier", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
}