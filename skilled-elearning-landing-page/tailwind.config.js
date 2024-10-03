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
      colors: {
        purple: "#666CA3",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          mobile: "327px",
          tablet: "689px",
          desktop: "1110px",
        },

        fontFamily: {
          sans: ["Plus Jakarta Sans", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
