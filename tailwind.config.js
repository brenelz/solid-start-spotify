/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        context: "var(--context-color)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
