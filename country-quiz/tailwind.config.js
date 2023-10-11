/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "app-image": "url('/src/assets/background.png')",
      },
      colors: {
        "2F527B": "#2F527B",
        "6066D0B2": "#6066D0B2",
        F9A826: "#F9A826",
      },
    },
  },
  plugins: [],
};
