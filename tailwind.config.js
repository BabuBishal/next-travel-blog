/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1098ad",
        secondary: "#252422",
        tertiary: "#858585",
        light: "#f4faf6",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        aladin: ["Aladin"]
      }
    },
  },
  plugins: [],
};
