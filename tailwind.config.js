/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ssm: "540px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1700px",
    },
    colors: {
      colors,
      primary: "var(--color-primary)",
      white: "var(--color-white)",
    },
    letterSpacing: {
      custom: "1px",
    },
    extend: {
      boxShadow: {},
    },
  },
  plugins: [],
};
