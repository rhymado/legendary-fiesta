/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./deploy/index.html"], // file file apa saja yang menggunakan tailwind
  theme: {
    // custom style & value
    colors: {
      primary: "#1f274c",
      secondary: "#fc583b",
      accent: "#f3f5fc",
      black: "#000",
    },
    extend: {
      spacing: {
        "30": "7.5rem",
        "15": "3.75rem"
      },
    },
  },
  plugins: [],
};
