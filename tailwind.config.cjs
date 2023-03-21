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
        primary: "#FBF9FF",
        purple: "#7641E4",
        dark: "#0D0027",
        white: "#ffffff",
      },
      fontSize: {
        "3xl": "36px",
      },
      maxWidth: {
        "8xl": "1440px",
        lg: "451px",
        md: "412px",
        sm: "360px",
      },
      width: {
        "2xl": "390px",
      },
      height: {
        xl: "232px",
        "2xl": "442px",
      },
    },
  },
  plugins: [],
};
