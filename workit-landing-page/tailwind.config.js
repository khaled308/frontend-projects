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
        "dark-purple": "#24053E",
        "light-green": "#44FFA1",
        grey: "#584D62",
      },
      fontFamily: {
        fraunces: ["fraunces", "sans-serif"],
        manrope: ["manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
