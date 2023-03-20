/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nature-ui/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        purple: "#7641E4",
        dark: "#0D0027",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
