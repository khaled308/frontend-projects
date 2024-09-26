/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./location.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        desktop: "1440px",
        tablet: "768px",
        mobile: "375px",
      },
      colors: {
        almostBlack: "#151515",
        gold: "#d5966c",
        darkGray: "#444444",
      },
      fontFamily: {
        sans: ['"Big Shoulders Display"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
