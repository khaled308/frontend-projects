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
      colors: {},
      container: {
        center: true,
        padding: "1rem",
        screens: {
          mobile: "327px",
          tablet: "689px",
          desktop: "1110px",
        },
      },
      backgroundImage: {
        desktop: "url('assets/bg-main-desktop.png')",
        tablet: "url('./assets/bg-main-tablet.png')",
        mobile: "url('assets/bg-main-mobile.png')",
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
