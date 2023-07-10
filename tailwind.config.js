/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        p50: "#e8f4ff",
        p100: "#d6eaff",
        p200: "#b5d8ff",
        p300: "#88bcff",
        p400: "#5a92ff",
        p500: "#3468ff",
        p600: "#1239ff",
        p700: "#082efa",
        p800: "#0b2eda",
        p900: "#132e9c",
        p950: "#0b185b",
      },
    },
  },
  plugins: [],
};
