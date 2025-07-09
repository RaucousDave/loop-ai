/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5603ad",
        secondary: "#8367c7",
        accent: {
          dark: "#b3e9c7",
          light: "#c2f8cb",
        },
        neutral: "#fofff1",
      },
    },
  },
  plugins: [],
};
