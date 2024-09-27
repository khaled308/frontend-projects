/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        desktop: "1440px",
        tablet: "768px",
        mobile: "375px",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
